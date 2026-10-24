import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/site/Page";
import ContactForm from "@/components/site/ContactForm";
import { APPLY_URL, site } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Summate Learning about courses, the Summate Circle, teaching, careers or partnerships.",
};

export default function ContactPage({ searchParams }: { searchParams: { topic?: string } }) {
  const channels = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  ];

  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title="Talk to us."
        lede="Questions about a course, the Summate Circle, teaching with us or working here? Send us a message and we'll get back to you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Send us a message</h2>
            <ContactForm defaultTopic={searchParams.topic} />
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#1D5F6E]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4F5] text-[#1D5F6E]">
                      <c.icon size={19} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[13px] font-medium text-slate-500">{c.label}</span>
                      <span className="block text-[17px] font-semibold text-[#0F2A30] group-hover:text-[#1D5F6E]">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-slate-200 bg-[#F6FAFA] p-6">
              <div className="flex items-center gap-3">
                <MapPin size={19} aria-hidden="true" className="text-[#1D5F6E]" />
                <h2 className="font-display text-lg font-bold text-[#0F2A30]">Registered office</h2>
              </div>
              <address className="mt-4 text-[15px] not-italic leading-[1.7] text-slate-600">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.slice(1).join(" "))}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[14px] font-semibold"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="font-display text-lg font-bold text-[#0F2A30]">Looking for something specific?</h2>
              <ul className="mt-3 space-y-2 text-[15px]">
                <li>
                  <Link href={APPLY_URL} className="font-semibold">Apply for Batch 1</Link>
                </li>
                <li>
                  <Link href="/faq" className="font-semibold">Read the FAQ</Link>
                </li>
                <li>
                  <Link href="/careers" className="font-semibold">See careers at Summate</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </PageShell>
  );
}
