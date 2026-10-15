import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero, Section, Split, H2, Prose, CtaBand, ButtonLink } from "@/components/site/Page";
import { whyIntro, features, whoIsFor, personas, ecosystemVision, program } from "@/lib/siteContent";
import { courses } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "About Summate",
  description:
    "Summate Learning is a new kind of learning institution that connects what you learn with what you can do with it.",
};

const explore = [
  { label: "Founder & CEO", body: "Why Rameshan started Summate.", href: "/founder" },
  { label: "Leadership", body: "The team setting the direction.", href: "/leadership" },
  { label: "Faculty & Mentors", body: "The people you'll learn from.", href: "/faculty" },
  { label: "Summate Circle", body: "The community after the course.", href: "/circle" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About Summate" }]}
        title="Learning that has somewhere to go."
        lede={whyIntro.lede}
        aside={
          <dl className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/80 px-6 backdrop-blur">
            <div className="py-5">
              <dt className="text-[13px] font-medium text-slate-500">Founding program</dt>
              <dd className="mt-1 font-display text-lg font-bold tracking-[-0.01em] text-[#0D1222]">{program.title}</dd>
            </div>
            {program.meta.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-[13px] font-medium text-slate-500">{m.label}</dt>
                <dd className="text-[15px] font-semibold text-[#0D1222]">{m.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* The gap */}
      <Section>
        <Split title={whyIntro.title} lede="Summate is built around one gap: knowing something is not the same as knowing what to do with it.">
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {whyIntro.gaps.map((gap) => (
              <li key={gap} className="py-7 font-display text-[22px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#0D1222] sm:text-[26px]">
                {gap}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* What we believe */}
      <Section tone="mist">
        <H2 className="max-w-[22ch]">What we believe about learning</H2>
        <div className="mt-12 space-y-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12"
            >
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-[#0D1222]">{f.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.6] text-[#1E3ABA]">{f.subtitle}</p>
              </div>
              <p className="text-[17px] leading-[1.7] text-slate-600">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Who it's for */}
      <Section>
        <div className="max-w-3xl">
          <H2>{whoIsFor.title}</H2>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-slate-600">{whoIsFor.subtext}</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {personas.map((p, i) => (
            <article key={p.title} className="flex flex-col bg-white p-8">
              <span
                aria-hidden="true"
                className="h-1.5 w-10 rounded-full"
                style={{ background: ["#1E3ABA", "#7C3AED", "#FF2D75"][i] }}
              />
              <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-[#0D1222]">{p.title}</h3>
              <p className="mt-2 text-[15px] font-medium text-[#0D1222]">{p.subtitle}</p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* And eventually, more */}
      <Section tone="mist">
        <Split title={ecosystemVision.title}>
          <Prose>
            <p>{ecosystemVision.body}</p>
          </Prose>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {courses.map((c) => (
              <li key={c.slug} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c.accent }} />
                  <span className="text-[15px] font-semibold text-[#0D1222]">{c.title}</span>
                </span>
                <span className={`shrink-0 text-[13px] font-medium ${c.status === "open" ? "text-[#1E3ABA]" : "text-slate-400"}`}>
                  {c.status === "open" ? "Enrolling" : "Coming soon"}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/courses" variant="secondary">
              See all courses
            </ButtonLink>
          </div>
        </Split>
      </Section>

      {/* Explore people & community */}
      <Section>
        <H2>The people behind Summate</H2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 transition-colors hover:border-[#1E3ABA]"
              >
                <span className="font-display text-xl font-bold tracking-[-0.02em] text-[#0D1222] group-hover:text-[#1E3ABA]">
                  {e.label}
                </span>
                <span className="mt-8 flex items-end justify-between gap-3 text-[15px] text-slate-500">
                  {e.body}
                  <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-slate-400 group-hover:text-[#1E3ABA]" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Batch 1 is where Summate begins."
        body="Live online from January 2027. Seats in the founding cohort are limited."
        primary={{ label: "Apply for Batch 1", href: "/apply" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}
