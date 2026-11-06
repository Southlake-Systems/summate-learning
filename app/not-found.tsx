import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Section } from "@/components/site/Page";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { label: "The full-stack course", href: "/courses/ai-augmented-full-stack-developer" },
  { label: "All courses", href: "/courses" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <PageShell>
      <Section>
        <div className="mx-auto max-w-2xl py-10 text-center lg:py-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1C5E6E]">
            404
          </p>
          <h1 className="mt-4 font-display text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0F2A31] sm:text-[56px]">
            That page has moved on.
          </h1>
          <p className="mt-5 text-lg leading-[1.7] text-slate-600">
            The link may be old or mistyped. Here is where most people go next.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex h-11 items-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-[#0F2A31] transition-colors hover:border-[#1C5E6E]/30 hover:text-[#1C5E6E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageShell>
  );
}
