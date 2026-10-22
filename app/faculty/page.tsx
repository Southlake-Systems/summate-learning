import type { Metadata } from "next";
import { BookOpenCheck, Briefcase, MessageSquareText, Globe2 } from "lucide-react";
import { PageShell, PageHero, Section, H2, Prose, PersonCard, CtaBand } from "@/components/site/Page";
import { faculty } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Faculty & Mentors",
  description: faculty.lede,
};

const expectIcons = [BookOpenCheck, Briefcase, MessageSquareText, Globe2];

export default function FacultyPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Faculty & Mentors" }]}
        title={faculty.title}
        lede={faculty.lede}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Prose className="text-[18px] lg:col-span-6">
            {faculty.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <div className="lg:col-span-6">
            <h2 className="font-display text-xl font-bold tracking-[-0.01em] text-[#0F2A30]">What you can expect</h2>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {faculty.expect.map((e, i) => {
                const I = expectIcons[i];
                return (
                  <div key={e.title} className="bg-white p-6">
                    <I size={22} strokeWidth={1.8} aria-hidden="true" className="text-[#1D5F6E]" />
                    <dt className="mt-4 font-display text-[17px] font-bold text-[#0F2A30]">{e.title}</dt>
                    <dd className="mt-1.5 text-[15px] leading-[1.6] text-slate-600">{e.body}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <H2>Our faculty &amp; mentors</H2>
          <p className="text-[14px] text-slate-500">Profiles will be published as the team for Batch 1 is finalised.</p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {faculty.people.map((p, i) => (
            <li key={p.name ?? `tba-${i}`}>
              <PersonCard {...p} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={faculty.join.title}
        body={faculty.join.body}
        primary={faculty.join.cta}
        secondary={{ label: "Other roles at Summate", href: "/careers" }}
      />
    </PageShell>
  );
}
