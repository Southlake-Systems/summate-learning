import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageShell, PageHero, Section, Split, H2, CtaBand, ButtonLink } from "@/components/site/Page";
import FaqList from "@/components/site/FaqList";
import { courses, faqGroups } from "@/lib/pageContent";
import { APPLY_URL, program, hero, curriculum, comparison, tools, steps, batchBenefits } from "@/lib/siteContent";

// Only courses that are open for enrolment have a detail page.
const openCourses = courses.filter((c) => c.status === "open");

export function generateStaticParams() {
  return openCourses.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = openCourses.find((c) => c.slug === params.slug);
  if (!course) return {};
  return { title: course.title, description: program.subtitle };
}

const phaseColors = ["#1D5F6E", "#55C9B8", "#EF6F51", "#F4B942"];

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = openCourses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const courseFaqs = faqGroups.find((g) => g.title === "The course")?.items ?? [];

  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Courses", href: "/courses" }, { label: course.title }]}
        title={course.title}
        lede={program.subtitle}
        aside={
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,42,48,0.06)]">
            <dl className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-5">
              {program.meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-[12px] font-medium text-slate-500">{m.label}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-[#0F2A30]">{m.value}</dd>
                </div>
              ))}
            </dl>
            <p className="pt-5 text-[14px] leading-[1.6] text-slate-600">
              Founding batch. Seats are limited so every learner gets attention and feedback.
            </p>
            <ButtonLink href={APPLY_URL} className="mt-5 w-full justify-center">
              Apply for Batch 1
            </ButtonLink>
          </div>
        }
      />

      {/* Overview */}
      <Section>
        <Split title="The course at a glance">
          <p className="max-w-[62ch] text-[19px] leading-[1.65] text-[#0F2A30]">{program.description}</p>
          <h3 className="mt-12 font-display text-xl font-bold tracking-[-0.01em] text-[#0F2A30]">What you&apos;ll leave with</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {hero.capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-[16px] leading-[1.55] text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4F5] text-[#1D5F6E]">
                  <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* Curriculum */}
      <Section tone="mist" id="curriculum">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <H2>Twelve weeks, four phases</H2>
          {curriculum.placeholder && (
            <p className="text-[14px] text-slate-500">Indicative outline. The final curriculum is confirmed before the batch starts.</p>
          )}
        </div>
        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {curriculum.phases.map((phase, i) => {
            const [label, name] = phase.name.split(" · ");
            return (
              <li key={phase.name} className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-base font-bold text-white"
                    style={{ background: phaseColors[i] }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[13px] font-semibold text-slate-500">{phase.weeks}</span>
                </div>
                <p className="sr-only">{label}</p>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-[#0F2A30]">{name}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">{phase.summary}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {phase.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[14px] leading-[1.55] text-slate-700">
                      <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: phaseColors[i] }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Comparison */}
      <Section>
        <H2 className="max-w-[24ch]">How this course is different</H2>
        <p className="mt-4 max-w-[60ch] text-[17px] leading-[1.7] text-slate-600">
          What a typical course covers, what real work asks of you, and what Batch 1 does about it.
        </p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-[#F6FAFA]">
                <th scope="col" className="w-[16%] px-6 py-4 font-semibold text-slate-500">Area</th>
                <th scope="col" className="w-[26%] px-6 py-4 font-semibold text-slate-500">Typical course</th>
                <th scope="col" className="w-[29%] px-6 py-4 font-semibold text-slate-500">What real work needs</th>
                <th scope="col" className="w-[29%] bg-[#0F2A30] px-6 py-4 font-semibold text-white">At Summate</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.area} className="border-t border-slate-200 align-top">
                  <th scope="row" className="px-6 py-5 font-display font-bold text-[#0F2A30]">{row.area}</th>
                  <td className="px-6 py-5 text-slate-500">{row.traditional}</td>
                  <td className="px-6 py-5 text-slate-700">{row.real}</td>
                  <td className="bg-[#EAF4F5] px-6 py-5 font-medium text-[#0F2A30]">{row.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Tools */}
      <Section tone="mist">
        <Split title="Tools you'll use" lede={tools.note}>
          <ul className="flex flex-wrap gap-3">
            {tools.items.map((t) => (
              <li key={t.label} className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-[15px] font-semibold text-[#0F2A30]">
                {t.label}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* How it works */}
      <Section>
        <H2>How it works</H2>
        <ol className="mt-12 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#0F2A30] font-display text-sm font-bold text-[#0F2A30]">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 bg-slate-300 md:block" />}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.01em] text-[#0F2A30]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Batch 1 */}
      <Section tone="ink">
        <Split onDark title="Why join Batch 1" lede={batchBenefits.subtitle}>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {batchBenefits.items.map((b) => (
              <li key={b} className="flex gap-4 py-5 text-[17px] leading-[1.6] text-slate-200">
                <Check size={20} strokeWidth={2.4} aria-hidden="true" className="mt-0.5 shrink-0 text-[#55C9B8]" />
                {b}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* FAQ */}
      <Section>
        <Split title="Questions about the course" lede={
            <>
              More answers on the <Link href="/faq" className="font-semibold">FAQ page</Link>.
            </>
          }>
          <FaqList items={courseFaqs} />
        </Split>
      </Section>

      <CtaBand
        title="Your next chapter can start here."
        body="Apply for the founding batch. We review applications on a rolling basis and will get in touch with next steps."
        primary={{ label: "Apply for Batch 1", href: APPLY_URL }}
        secondary={{ label: "Ask a question", href: "/contact?topic=course" }}
      />
    </PageShell>
  );
}
