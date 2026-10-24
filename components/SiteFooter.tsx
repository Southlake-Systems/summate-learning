import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { APPLY_URL, footer, site } from "@/lib/siteContent";

export default function SiteFooter() {
  const columns = footer?.columns ?? [
    {
      title: "Programs",
      links: [
        {
          label: "AI-Augmented Full-Stack",
          href: "/#programs",
        },
        // {
        //   label: "How It Works",
        //   href: "/#how-it-works",
        // },
        {
          label: "Apply for Batch 1",
          href: APPLY_URL,
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
        // {
        //   label: "Our Story",
        //   href: "/#our-story",
        // },
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

  const { email, phone, address } = site;

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#F6FAFA] text-slate-600">

      {/* Subtle top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1D5F6E]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-14">

        {/* -------------------------------------------------
            MAIN ROW — brand on the left, link columns filling
            the rest of the width so there is no dead space.
        -------------------------------------------------- */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">

          {/* BRAND */}
          <div className="lg:col-span-4">

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

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Learning designed to take you beyond what you already know —
              into what you can build, apply and become capable of.
            </p>

            <div className="mt-4 flex items-start gap-2.5 text-[13px] leading-6 text-slate-500">
              <Icon
                name="MapPin"
                size={15}
                className="mt-1 shrink-0 text-[#1D5F6E]"
              />

              <address className="not-italic">
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            {/* Socials — one compact row so they stay findable without
                adding height to the footer. */}
            {site?.social?.length ? (
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F2A30]">
                  Follow us
                </h3>

                <ul className="flex flex-wrap items-center gap-2">
                  {site.social.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        title={social.label}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1D5F6E] shadow-[0_1px_2px_rgba(15,42,48,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1D5F6E] hover:text-white hover:shadow-[0_10px_22px_rgba(29,95,110,0.25)]"
                      >
                        <Icon
                          name={social.label}
                          size={18}
                          strokeWidth={1.7}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* LINK COLUMNS + CTA — share the right-hand side so the
              strip sits in the space the columns leave empty. */}
          <div className="flex flex-col gap-7 lg:col-span-8">

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:gap-x-6">

            {columns.map((column) => (
              <div key={column.title}>

                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#0F2A30]">
                  {column.title}
                </h3>

                <ul className="mt-3 space-y-2">

                  {column.links.map((link) => (
                    <li key={link.label}>

                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-[#1D5F6E]"
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

            {/* FINAL CTA — a slim strip rather than a second hero block. */}
            <div className="flex flex-col gap-4 rounded-2xl border border-[#1D5F6E]/10 bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,42,48,0.04)] sm:flex-row sm:items-center sm:justify-between sm:px-6">

              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1D5F6E]">
                  Batch 01
                </p>

                <p className="mt-1 text-[15px] font-extrabold tracking-tight text-[#0F2A30]">
                  Your next chapter can start here.
                </p>

                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                  Turn what you have learned into something you can use, build and take forward.
                </p>
              </div>

              <Link
                href={APPLY_URL}
                className="group inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-full bg-[#EF6F51] px-5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D9573A] sm:self-auto"
              >
                Apply for Batch 1

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* -------------------------------------------------
            BOTTOM BAR — copyright, contact and sign-off share
            one line.
        -------------------------------------------------- */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>© 2026 Summate Learning. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

            <a
              href={`mailto:${email}`}
              className="transition-colors hover:text-[#1D5F6E]"
            >
              {email}
            </a>

            <span aria-hidden="true" className="text-slate-300">·</span>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-[#1D5F6E]"
            >
              {phone}
            </a>

            <span aria-hidden="true" className="hidden text-slate-300 sm:inline">·</span>

            <p className="font-medium tracking-[0.08em]">Learn. Apply. Achieve.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
