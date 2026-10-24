import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
import { PageShell, PageHero, Section, Split, H2, CtaBand, ButtonLink } from "@/components/site/Page";
import { courses } from "@/lib/pageContent";
import { APPLY_URL, community } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Live online courses from Summate Learning, starting with the AI-Augmented Full-Stack Developer Course in January 2027.",
};

export default function CoursesPage() {
  const [featured, ...upcoming] = courses;

  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Courses" }]}
        title="Courses built around what you'll do next."
        lede="Every Summate course pairs live teaching with practice, projects and feedback, so what you learn turns into something you can use. We're starting with one program and adding more pathways as we grow."
      />

      {/* Featured course */}
      <Section>
        <article className="relative isolate overflow-hidden rounded-[32px] bg-[#0F2A30] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(800px 400px at 100% 0%, rgba(85,201,184,.45), transparent 60%), radial-gradient(600px 400px at 0% 100%, rgba(29,95,110,.55), transparent 60%)",
            }}
          />
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:p-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white ring-1 ring-inset ring-white/15">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#55C9B8]" />
                Now enrolling for Batch 1
              </p>
              <h2 className="mt-6 max-w-[16ch] font-display text-[36px] font-bold leading-[1.04] tracking-[-0.035em] sm:text-[52px]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.7] text-slate-300">{featured.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={`/courses/${featured.slug}`} variant="light">
                  View the course
                </ButtonLink>
                <Link
                  href={APPLY_URL}
                  className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white hover:text-white"
                >
                  Apply for Batch 1
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-8">
              <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10">
                {[
                  { k: "Duration", v: featured.duration },
                  { k: "Format", v: featured.format },
                  { k: "Starts", v: "Jan 2027" },
                ].map((m) => (
                  <div key={m.k} className="bg-[#0F2A30]/60 p-4 backdrop-blur">
                    <dt className="text-[12px] font-medium text-slate-400">{m.k}</dt>
                    <dd className="mt-1 text-[15px] font-semibold text-white">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <p className="text-[13px] font-medium text-slate-400">What you&apos;ll work with</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {featured.skills.map((s) => (
                    <li key={s} className="rounded-full border border-white/15 px-3 py-1.5 text-[13px] font-medium text-slate-200">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Section>

      {/* Upcoming */}
      <Section tone="mist">
        <Split
          title="Coming next"
          lede="These pathways are in development. Durations are indicative and will be confirmed before each launch."
        >
          <ul className="space-y-4">
            {upcoming.map((c) => (
              <li
                key={c.slug}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 pl-9 sm:p-8 sm:pl-10"
              >
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5" style={{ background: c.accent }} />
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="text-[13px] font-semibold" style={{ color: c.accent }}>
                    {c.category}
                  </p>
                  <p className="text-[13px] font-medium text-slate-500">
                    {c.duration}, {c.format.toLowerCase()}
                  </p>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[#0F2A30]">{c.title}</h3>
                <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.65] text-slate-600">{c.tagline}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <li key={s} className="rounded-full bg-slate-100 px-3 py-1 text-[13px] font-medium text-slate-600">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact?topic=course-updates"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D5F6E] hover:text-[#164B57]"
                  >
                    <Bell size={15} aria-hidden="true" />
                    Get notified
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* How every course works */}
      <Section>
        <H2 className="max-w-[20ch]">What every Summate course includes</H2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {community.items.map((item) => (
            <div key={item.title} className="border-t-2 border-[#0F2A30] pt-5">
              <dt className="font-display text-lg font-bold tracking-[-0.01em] text-[#0F2A30]">{item.title}</dt>
              <dd className="mt-2 text-[15px] leading-[1.65] text-slate-600">{item.body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-12 text-[15px] text-slate-600">
          After the course, learners join the{" "}
          <Link href="/circle" className="inline-flex items-center gap-1 font-semibold">
            Summate Circle
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          , our community of learners, graduates and mentors.
        </p>
      </Section>

      <CtaBand
        title="Not sure which course is right for you?"
        body="Tell us where you are and what you want to do next. We'll help you work out whether Summate is a good fit."
        primary={{ label: "Talk to us", href: "/contact?topic=course" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </PageShell>
  );
}
