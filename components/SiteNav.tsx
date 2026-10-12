"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { nav, type NavItem } from "@/lib/siteContent";

function isActive(pathname: string, item: NavItem) {
  if (item.children) return item.children.some((c) => pathname === c.href);
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function SiteNav() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(13,18,34,0.07)] backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-transparent" />

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Summate Learning home" className="group flex items-center">
          <Image
            src="/logo.png"
            alt="Summate Learning"
            width={200}
            height={52}
            priority
            className="h-[42px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.015]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.links.map((link) => {
            const active = isActive(pathname, link);
            const base = `relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors duration-200 ${
              active ? "text-[#1E3ABA]" : "text-[#334155] hover:text-[#0D1222]"
            }`;

            if (!link.children) {
              return (
                <Link key={link.label} href={link.href} className={base} aria-current={active ? "page" : undefined}>
                  {link.label}
                </Link>
              );
            }

            const open = openMenu === link.label;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={base}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(13,18,34,0.12)]">
                    {link.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`block rounded-xl px-4 py-3 transition-colors ${
                              childActive ? "bg-[#F2F4FF]" : "hover:bg-[#F8FAFF]"
                            }`}
                          >
                            <span className={`block text-[14px] font-semibold ${childActive ? "text-[#1E3ABA]" : "text-[#0D1222]"}`}>
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-[13px] text-slate-500">{child.description}</span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={nav.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-[#0D1222] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1E3ABA] hover:text-white"
          >
            {nav.primaryCta.label}
            <Icon
              name="ArrowUpRight"
              size={15}
              strokeWidth={2.3}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0D1222] transition-colors hover:bg-slate-50 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={19} strokeWidth={2} aria-hidden="true" /> : <Menu size={19} strokeWidth={2} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`overflow-y-auto border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-76px)] opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 pb-8 pt-3" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {nav.links.map((link) =>
              link.children ? (
                <li key={link.label} className="pb-2 pt-1">
                  <p className="px-4 pb-1 pt-2 text-[13px] font-medium text-slate-400">{link.label}</p>
                  <ul>
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={`block rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                            pathname === child.href ? "bg-[#F2F4FF] text-[#1E3ABA]" : "text-slate-700 hover:bg-[#F8FAFF]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link) ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                      isActive(pathname, link) ? "bg-[#F2F4FF] text-[#1E3ABA]" : "text-slate-700 hover:bg-[#F8FAFF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <Link
              href={nav.primaryCta.href}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0D1222] py-3.5 text-[15px] font-semibold text-white hover:bg-[#1E3ABA] hover:text-white"
            >
              {nav.primaryCta.label}
              <Icon name="ArrowUpRight" size={15} strokeWidth={2.3} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
