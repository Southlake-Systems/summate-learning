import type { Metadata } from "next";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/Page";
import FaqList from "@/components/site/FaqList";
import { faqGroups } from "@/lib/pageContent";
import { APPLY_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  description: "Answers to common questions about Summate Learning, our courses, the Summate Circle and working with us.",
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "FAQ" }]}
        title="Frequently asked questions"
        lede="Answers about Summate, our courses, the Summate Circle and working with us. If your question isn't here, get in touch."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ topics" className="lg:col-span-3">
            <ul className="flex flex-wrap gap-2 lg:sticky lg:top-28 lg:flex-col lg:gap-1">
              {faqGroups.map((g) => (
                <li key={g.title}>
                  <a
                    href={`#${slug(g.title)}`}
                    className="block rounded-full border border-slate-200 px-4 py-2 text-[14px] font-semibold text-slate-600 transition-colors hover:border-[#1D5F6E] hover:text-[#1D5F6E] lg:rounded-xl lg:border-0 lg:px-3"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 lg:col-span-9">
            {faqGroups.map((g) => (
              <section key={g.title} id={slug(g.title)} className="scroll-mt-28">
                <h2 className="mb-4 font-display text-[26px] font-bold tracking-[-0.02em] text-[#0F2A30]">{g.title}</h2>
                <FaqList items={g.items} />
              </section>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Still have a question?"
        body="Send us a message and we'll get back to you."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Apply for Batch 1", href: APPLY_URL }}
      />
    </PageShell>
  );
}
