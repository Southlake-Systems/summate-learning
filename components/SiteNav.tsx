"use client";

import { useState, useEffect } from "react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-md"
          : "border-b border-slate-100 bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="Summate Learning"
            width={180}
            height={46}
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-[#1E3ABA]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden items-center md:flex">
          <Link
            href={nav.primaryCta.href}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] bg-[length:200%_auto] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1E3ABA]/20 transition-all duration-300 hover:bg-right hover:shadow-lg hover:shadow-[#7C3AED]/25 active:scale-[0.98]"
          >
            <span>{nav.primaryCta.label}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              <Icon name="ArrowRight" size={14} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-700 transition hover:bg-slate-100 md:hidden active:scale-95"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200/80 bg-white/95 px-6 pt-3 pb-6 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-1">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1E3ABA]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-4">
              <Link
                href={nav.primaryCta.href}
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] py-3.5 text-center text-sm font-semibold text-white shadow-md shadow-[#1E3ABA]/25 active:scale-[0.98]"
              >
                <span>{nav.primaryCta.label}</span>
                <Icon name="ArrowRight" size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}