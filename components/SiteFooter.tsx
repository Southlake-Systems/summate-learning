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
          href: "/#program",
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
      title: "Company",
      links: [
        {
          label: "Our Story",
          href: "/#our-story",
        },
        {
          label: "Why Summate",
          href: "/#why-summate",
        },
        {
          label: "Mentors",
          href: "/#mentors",
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

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-600">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#1E3AB6]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#7C3AED]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">

          {/* BRAND */}
          <div className="lg:col-span-4">

            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Summate Learning"
                width={210}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Future-ready learning for the next generation.
              Real skills. Real projects. Real impact.
            </p>

            {/* Founding Batch */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1E3AB6]/10 bg-[#1E3AB6]/5 px-4 py-2 text-xs font-medium text-[#1E3AB6]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF8A00]" />
              Founding Batch · September 2026
            </div>

            {/* Contact */}
            <div className="mt-7 space-y-3 text-sm">

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-[#1E3AB6]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E3AB6]/5 text-[#1E3AB6]">
                  <Icon name="Mail" size={15} />
                </span>

                {site.email}
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-[#1E3AB6]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF8A00]/10 text-[#FF8A00]">
                  <Icon name="Phone" size={15} />
                </span>

                {site.phone}
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/5 text-[#7C3AED]">
                  <Icon name="MapPin" size={15} />
                </span>

                <address className="not-italic leading-relaxed">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:col-span-8">

            {columns.map((column) => (
              <div key={column.title}>

                <h3 className="text-sm font-semibold text-[#0D1222]">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3.5">

                  {column.links.map((link) => (
                    <li key={link.label}>

                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-[#1E3AB6]"
                      >
                        {link.label}
                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>
        </div>

        {/* CTA STRIP */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-[#1E3AB6]/10 bg-gradient-to-r from-[#F4F7FF] via-white to-[#F8F4FF] px-6 py-8 sm:px-10">

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-lg font-semibold text-[#0D1222]">
                Ready to start your next chapter?
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Join the founding batch of Summate Learning.
              </p>
            </div>

            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3AB6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1E3AB6]/20 transition-all hover:-translate-y-0.5 hover:bg-[#172f99]"
            >
              Apply for Batch 1
              <span>→</span>
            </Link>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-slate-400">
            © 2026 Summate Learning. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <span className="text-xs text-slate-400">
              Kerala · Tamil Nadu · Karnataka · Telangana · Andhra Pradesh
            </span>

            {/* Socials */}
            <div className="flex items-center gap-2">

              {site?.social?.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#1E3AB6]/20 hover:bg-[#1E3AB6]/5 hover:text-[#1E3AB6]"
                >
                  <Icon
                    name={social.label}
                    size={15}
                    strokeWidth={1.8}
                  />
                </a>
              ))}

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}