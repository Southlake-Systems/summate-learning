import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageShell, PageHero, Section, Split, H2, Prose, CtaBand, ButtonLink } from "@/components/site/Page";
import { careers } from "@/lib/pageContent";

export const metadata: Metadata = {
  description: careers.lede,
};

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
        title={careers.title}
        lede={careers.lede}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#openings">View open positions</ButtonLink>
          <ButtonLink href={careers.profile.cta.href} variant="secondary">
            {careers.profile.cta.label}
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <Split title="Build something from the ground up">
          <Prose className="text-[18px]">
            {careers.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Split>
      </Section>

      <Section tone="mist">
        <H2>Areas we hire for</H2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {careers.areas.map((a) => (
            <li key={a.title} className="bg-white p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.015em] text-[#0F2A30]">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-slate-600">{a.body}</p>
            </li>
          ))}
          {/* Completes the last grid row: 8 cells at 2 columns, 3 + 3 + (1 + 2) at 3. */}
          <li className="flex flex-col justify-between bg-[#0F2A30] p-7 text-white lg:col-span-2">
            <p className="font-display text-xl font-bold tracking-[-0.015em]">Something else in mind?</p>
            <a href={careers.profile.cta.href} className="mt-6 text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white">
              Tell us what you&apos;d like to do
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <Split title="What we look for" lede={careers.valuesNote}>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {careers.values.map((v) => (
              <li key={v} className="flex items-center gap-3 border-b border-slate-200 py-4 text-[17px] font-medium text-[#0F2A30]">
                <Check size={18} strokeWidth={2.4} aria-hidden="true" className="shrink-0 text-[#55C9B8]" />
                {v}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      <Section tone="mist" id="openings">
        <Split title="Open positions">
          {careers.openings.length ? (
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {careers.openings.map((o) => (
                <li key={o.title} className="flex flex-wrap items-baseline justify-between gap-3 py-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0F2A30]">{o.title}</h3>
                    <p className="mt-1 text-[15px] text-slate-500">{o.area}</p>
                  </div>
                  <p className="text-[15px] text-slate-600">
                    {o.type}, {o.location}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 sm:p-10">
              <p className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0F2A30]">No roles are listed right now.</p>
              <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.7] text-slate-600">
                We&apos;re still hiring as we grow. {careers.profile.body}
              </p>
              <ButtonLink href={careers.profile.cta.href} className="mt-7">
                {careers.profile.cta.label}
              </ButtonLink>
            </div>
          )}
        </Split>
      </Section>

      <CtaBand
        title={careers.profile.title}
        body={careers.profile.body}
        primary={careers.profile.cta}
        secondary={{ label: "Teach or mentor", href: "/faculty" }}
      />
    </PageShell>
  );
}
