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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0F2A31] text-[#A9BDB8]">

      {/* Subtle top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9FDEAF]/40 to-transparent" />

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
                src="/logo-light.png"
                alt="Summate Learning"
                width={210}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#A9BDB8]">
              Learning designed to take you beyond what you already know —
              into what you can build, apply and become capable of.
            </p>

            <div className="mt-4 flex items-start gap-2.5 text-[13px] leading-6 text-[#A9BDB8]">
              <Icon
                name="MapPin"
                size={15}
                className="mt-1 shrink-0 text-[#9FDEAF]"
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
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F4FAF7]">
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
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#9FDEAF] transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#9FDEAF] hover:text-[#0F2A31]"
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

                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4FAF7]">
                  {column.title}
                </h3>

                <ul className="mt-2 space-y-0">

                  {column.links.map((link) => (
                    <li key={link.label}>

                      <Link
                        href={link.href}
                        className="group flex min-h-11 items-center gap-1 text-sm text-[#A9BDB8] transition-colors hover:text-[#F4FAF7]"
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
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9FDEAF]">
                  Batch 01
                </p>

                <p className="mt-1 text-[15px] font-extrabold tracking-tight text-[#F4FAF7]">
                  Your next chapter can start here.
                </p>

                <p className="mt-0.5 text-xs leading-5 text-[#A9BDB8]">
                  Turn what you have learned into something you can use, build and take forward.
                </p>
              </div>

              <Link
                href={APPLY_URL}
                className="group inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full bg-[#F2A93B] px-5 text-sm font-bold text-[#0F2A31] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D98A1F] sm:self-auto"
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
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[#A9BDB8] sm:flex-row sm:items-center sm:justify-between">

          <p>© 2026 Summate Learning. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

            <a
              href={`mailto:${email}`}
              className="inline-flex min-h-11 items-center text-[#A9BDB8] transition-colors hover:text-[#F4FAF7]"
            >
              {email}
            </a>

            <span aria-hidden="true" className="text-white/25">·</span>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center text-[#A9BDB8] transition-colors hover:text-[#F4FAF7]"
            >
              {phone}
            </a>

            <span aria-hidden="true" className="hidden text-white/25 sm:inline">·</span>

            <p className="font-medium tracking-[0.08em]">Learn. Apply. Achieve.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
