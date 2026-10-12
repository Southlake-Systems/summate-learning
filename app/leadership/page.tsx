import type { Metadata } from "next";
import { PageShell, PageHero, Section, Split, H2, Prose, PersonCard, CtaBand } from "@/components/site/Page";
import { leadership } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Leadership",
  description: leadership.lede,
};

export default function LeadershipPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
        title={leadership.title}
        lede={leadership.lede}
      />

      <Section>
        <div className="max-w-3xl">
          <H2>Our leadership</H2>
          <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.7] text-slate-600">{leadership.body}</p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {leadership.people.map((p, i) => (
            <li key={p.name ?? `tba-${i}`}>
              <PersonCard {...p} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <Split title={leadership.advisory.title}>
          <Prose>
            {leadership.advisory.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <p className="mt-10 border-l-4 border-[#7C3AED] pl-6 font-display text-2xl font-semibold leading-[1.35] tracking-[-0.015em] text-[#0D1222] sm:text-[28px]">
            {leadership.closing}
          </p>
        </Split>
      </Section>

      <CtaBand
        title="Want to help shape what Summate becomes?"
        body="We're building our advisory network of educators, researchers and industry professionals."
        primary={{ label: "Get in touch", href: "/contact?topic=partnership" }}
        secondary={{ label: "Careers at Summate", href: "/careers" }}
      />
    </PageShell>
  );
}
