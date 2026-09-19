import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { footer, site } from "@/lib/siteContent";

export default function SiteFooter() {
  const columns = footer?.columns ?? [
    {
      title: "Programs",
      links: [
        {
          label: "AI-Augmented Full-Stack",
          href: "/#programs",
        },
        {
          label: "How It Works",
          href: "/#how-it-works",
        },
        {
          label: "Apply for Batch 1",
          href: "/apply",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          label: "Why Summate",
          href: "/#why-summate",
        },
        {
          label: "Who It's For",
          href: "/#who-it-is-for",
        },
        {
          label: "Our Story",
          href: "/#our-story",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "FAQs",
          href: "/#faqs",
        },
        {
          label: "Contact",
          href: "/#enquiry",
        },
        {
          label: "Book a Callback",
          href: "/#enquiry",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ],
    },
  ];

  const email = site?.email || "info@summatelearning.com";
  const phone = site?.phone || "+91 98765 43210";
  const location = site?.location || "Kochi, Kerala, India";

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#F8FAFF] text-slate-600">

      {/* Subtle top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E3ABA]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* -------------------------------------------------
            TOP BRAND ROW
        -------------------------------------------------- */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">

          {/* BRAND */}
          <div className="lg:col-span-5">

            <Link
              href="/"
              aria-label="Summate Learning home"
              className="inline-flex"
            >
              <Image
                src="/logo.png"
                alt="Summate Learning"
                width={210}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-500">
              Learning designed to take you beyond what you already know —
              into what you can build, apply and become capable of.
            </p>

            {/* Brand motif */}
            <div className="mt-7 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-slate-400">
              <span className="text-[#1E3ABA]">LEARN</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#7C3AED]">APPLY</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#FF8A00]">ACHIEVE</span>
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-3">

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-[#1E3ABA]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors group-hover:border-[#1E3ABA]/20 group-hover:text-[#1E3ABA]">
                  <Icon name="Mail" size={15} />
                </span>

                {email}
              </a>

              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-[#1E3ABA]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors group-hover:border-[#1E3ABA]/20 group-hover:text-[#1E3ABA]">
                  <Icon name="Phone" size={15} />
                </span>

                {phone}
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500">
                  <Icon name="MapPin" size={15} />
                </span>

                {location}
              </div>

            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-7">

            {columns.map((column) => (
              <div key={column.title}>

                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#0D1222]">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">

                  {column.links.map((link) => (
                    <li key={link.label}>

                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-[#1E3ABA]"
                      >
                        <span>{link.label}</span>

                        <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                          →
                        </span>
                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>
        </div>

        {/* -------------------------------------------------
            FINAL CTA
        -------------------------------------------------- */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] border border-[#1E3ABA]/10 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(13,18,34,0.05)] sm:px-10 sm:py-9">

          {/* Decorative numbers */}
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 select-none items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-slate-200 md:flex">
            <span>01</span>
            <span>→</span>
            <span>02</span>
            <span>→</span>
            <span>03</span>
          </div>

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1E3ABA]">
                Batch 01
              </p>

              <h2 className="mt-2 text-xl font-extrabold tracking-tight text-[#0D1222] sm:text-2xl">
                Your next chapter can start here.
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Turn what you have learned into something you can use,
                build and take forward.
              </p>
            </div>

            <Link
              href="/apply"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0D1222] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3ABA]"
            >
              Apply for Batch 1

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>

        {/* -------------------------------------------------
            BOTTOM BAR
        -------------------------------------------------- */}
        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-7 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-400">
              © 2026 Summate Learning. All rights reserved.
            </p>

            <p className="text-xs text-slate-400">
              Learn. Apply. Achieve.
            </p>
          </div>

          <div className="flex items-center gap-4">

            {/* Socials */}
            {site?.social?.length ? (
              <div className="flex items-center gap-2">
                {site.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E3ABA]/20 hover:text-[#1E3ABA]"
                  >
                    <Icon
                      name={social.label}
                      size={15}
                      strokeWidth={1.8}
                    />
                  </a>
                ))}
              </div>
            ) : null}

          </div>
        </div>

      </div>
    </footer>
  );
}