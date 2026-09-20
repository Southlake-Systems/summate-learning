"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { nav } from "@/lib/siteContent";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(13,18,34,0.07)] backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      {/* Very subtle brand line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-transparent" />

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =================================================
            LOGO
        ================================================= */}
        <Link
          href="/"
          aria-label="Summate Learning home"
          className="group flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Summate Learning"
            width={200}
            height={52}
            priority
            className="h-[42px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.015]"
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Primary navigation"
        >
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative px-3.5 py-2 text-[13px] font-semibold text-[#334155] transition-colors duration-200 hover:text-[#0D1222]"
            >
              {link.label}

              {/* Brand-color hover line */}
              <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] transition-transform duration-250 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* =================================================
            DESKTOP CTA
        ================================================= */}
        <div className="hidden md:flex">
          <Link
            href={nav.primaryCta.href}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0D1222] px-5 py-2 text-[13px] font-bold text-white shadow-[0_5px_16px_rgba(13,18,34,0.12)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#1E3ABA] hover:text-white hover:shadow-[0_8px_22px_rgba(30,58,186,0.22)]"
          >
            {/* Small accent highlight */}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[400%]" />

            <span className="relative">
              {nav.primaryCta.label}
            </span>

            <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
              <Icon
                name="ArrowUpRight"
                size={14}
                strokeWidth={2.3}
              />
            </span>
          </Link>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0D1222] transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <Icon
            name={mobileOpen ? "X" : "Menu"}
            size={19}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* =================================================
          MOBILE MENU
      ================================================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-6 pb-6 pt-3"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {nav.links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-[#F4F6FF] hover:text-[#1E3ABA]"
              >
                <span>{link.label}</span>

                <span className="font-mono text-[10px] text-slate-300 transition-colors group-hover:text-[#1E3ABA]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4">
            <Link
              href={nav.primaryCta.href}
              onClick={() => setMobileOpen(false)}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0D1222] py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1E3ABA]"
            >
              <span>{nav.primaryCta.label}</span>

              <Icon
                name="ArrowUpRight"
                size={15}
                strokeWidth={2.3}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}