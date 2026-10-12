import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";
import { PageShell, Breadcrumbs, Section, Split, H2, CtaBand, ButtonLink } from "@/components/site/Page";
import CircleOrbit from "@/components/site/CircleOrbit";
import { circle } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Summate Circle",
  description:
    "A community of students, graduates, mentors and professionals who learn, build and grow together, during and beyond a Summate course.",
};

const pathColors = ["#1E3ABA", "#4B33D1", "#7C3AED", "#BD34B1", "#FF2D75"];

export default function CirclePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0D1222] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 500px at 85% 40%, rgba(124,58,237,.35), transparent 65%), radial-gradient(600px 400px at 0% 100%, rgba(30,58,186,.35), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
          <Breadcrumbs crumbs={[{ label: "Summate Circle" }]} onDark />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="text-[15px] font-semibold text-[#A5B4FC]">{circle.kicker}</p>
              <h1 className="mt-4 font-display text-[52px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[72px] lg:text-[88px]">
                Summate Circle
              </h1>
              <p className="mt-5 font-display text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-slate-200 sm:text-[30px]">
                {circle.title}
              </p>
              <div className="mt-7 max-w-[56ch] space-y-4 text-[17px] leading-[1.7] text-slate-300">
                {circle.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={circle.join.cta.href} variant="light">
                  {circle.join.cta.label}
                </ButtonLink>
                <Link
                  href="#inside"
                  className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white hover:text-white"
                >
                  See what&apos;s inside
                </Link>
              </div>
            </div>
            <div className="mx-auto hidden w-full max-w-[560px] sm:block">
              <CircleOrbit labels={circle.pillars.map((p) => p.title)} />
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-b border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="max-w-[30ch] font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0D1222] sm:text-[44px] lg:text-[52px]">
            {circle.statement}
          </p>
        </div>
      </section>

      {/* What happens inside */}
      <Section id="inside">
        <H2>What happens inside the Circle?</H2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {circle.pillars.map((p) => (
            <article key={p.key} className="bg-white p-7">
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0D1222]">{p.title}</h3>
              <p className="mt-3 text-[15px] font-semibold leading-[1.5] text-[#1E3ABA]">{p.lead}</p>
              <p className="mt-2 text-[15px] leading-[1.65] text-slate-600">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Find your circle */}
      <Section tone="mist">
        <div className="max-w-3xl">
          <H2>Find your circle</H2>
          <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.7] text-slate-600">
            The Summate Circle brings together people with different interests. {circle.groupsNote}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {circle.groups.map((g) => (
            <li key={g.name}>
              <div
                className="relative mx-auto flex aspect-square w-full max-w-[300px] flex-col items-center justify-center rounded-full border-2 bg-white p-8 text-center"
                style={{ borderColor: g.color, boxShadow: `0 0 0 10px ${g.color}12, 0 0 0 22px ${g.color}0A` }}
              >
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]" style={{ color: g.color }}>
                  {g.name}
                </h3>
                <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {g.tags.map((t) => (
                    <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-[13px] font-medium text-slate-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Rhythm */}
      <Section>
        <Split title="Community, not just events" lede="The Circle is designed to stay active throughout the year.">
          <ol className="relative space-y-3">
            {circle.rhythm.map((r) => (
              <li
                key={r.title}
                className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-[150px_1fr] sm:gap-6"
              >
                <p className="text-[14px] font-semibold text-[#7C3AED]">{r.cadence}</p>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.015em] text-[#0D1222]">{r.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-slate-600">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Split>
      </Section>

      {/* Meet people, not profiles */}
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <H2>Meet people, not just profiles</H2>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.7] text-slate-600">
              We want the Circle to make it easier to find the right people, not simply collect contacts. Members can share four things about themselves.
            </p>
            <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.7] text-slate-600">{circle.profileNote}</p>
          </div>

          <figure className="relative">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_30px_80px_rgba(13,18,34,0.10)] sm:p-8">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF2D75] to-[#FF8A00] font-display text-lg font-bold text-white">
                  AK
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-[#0D1222]">A Circle member</p>
                  <p className="text-[14px] text-slate-500">Batch 1, Technology circle</p>
                </div>
              </div>
              <dl className="mt-6 space-y-3">
                {circle.profilePrompts.map((p) => (
                  <div key={p.label} className="rounded-2xl bg-[#F8FAFF] px-5 py-4">
                    <dt className="text-[13px] font-semibold text-[#1E3ABA]">{p.label}</dt>
                    <dd className="mt-0.5 text-[15px] font-medium text-[#0D1222]">{p.example}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figcaption className="mt-4 text-center text-[13px] text-slate-500">Example profile</figcaption>
          </figure>
        </div>
      </Section>

      {/* Challenges */}
      <Section>
        <Split title="Build something together" lede="The Circle hosts challenges that encourage members to take part rather than simply observe.">
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {circle.challenges.map((c) => (
              <li key={c.name} className="grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.015em] text-[#0D1222]">{c.name}</h3>
                  <p className="mt-1 text-[16px] text-slate-600">{c.body}</p>
                </div>
                <p className="text-[14px] font-semibold text-slate-500">{c.length}</p>
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* Mentorship */}
      <Section tone="ink">
        <H2 onDark>Mentorship that grows with you</H2>
        <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.7] text-slate-400">Mentorship within the Circle can happen at different levels.</p>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {circle.mentorship.map((m, i) => (
            <li key={m.name} className={`rounded-3xl border border-white/10 bg-white/[0.04] p-7 ${["", "md:mt-6", "md:mt-12"][i]}`}>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">{m.name}</h3>
              <p className="mt-4 flex flex-wrap items-center gap-2 text-[14px] font-semibold text-[#A5B4FC]">
                <span>{m.pair[0]}</span>
                <ArrowLeftRight size={15} aria-label="with" />
                <span>{m.pair[1]}</span>
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-slate-300">{m.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Your place */}
      <Section>
        <div className="max-w-3xl">
          <H2>Your place in the Circle</H2>
          <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.7] text-slate-600">{circle.pathBody}</p>
        </div>
        <ol className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-0">
          {circle.path.map((step, i) => (
            <li key={step} className="flex items-center gap-4 sm:flex-1 sm:flex-col sm:items-start sm:gap-5">
              <span
                aria-hidden="true"
                className="shrink-0 rounded-full"
                style={{ width: 28 + i * 18, height: 28 + i * 18, background: pathColors[i], opacity: 0.25 + i * 0.18 }}
              />
              <span>
                <span className="block text-[13px] font-semibold text-slate-400">Step {i + 1}</span>
                <span className="block font-display text-2xl font-bold tracking-[-0.02em] text-[#0D1222]">{step}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-[17px] font-medium text-[#0D1222]">{circle.pathClose}</p>
      </Section>

      <CtaBand
        title={circle.join.title}
        body={
          <>
            {circle.join.body}
            <span className="mt-4 block font-semibold text-white">{circle.join.signoff}</span>
          </>
        }
        primary={circle.join.cta}
        secondary={{ label: "Explore courses", href: "/courses" }}
      />
    </PageShell>
  );
}
