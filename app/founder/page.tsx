import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Mic,
  NotebookPen,
  Users,
} from "lucide-react";
import { PageShell, Breadcrumbs, Section, Split, Prose, H2, CtaBand } from "@/components/site/Page";
import { founder } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Managing Director",
  description: `${founder.name}, ${founder.role}. ${founder.summary}`,
};

const highlightIcons = [GraduationCap, Award, ClipboardCheck, BookOpen];
const contributionIcons = [NotebookPen, ClipboardCheck, Users, Mic];

export default function FounderPage() {
  const { awards, education, contributions } = founder;
  // First sentence of the leadership section is set large; the rest reads as body text.
  const [firstPara, ...otherParas] = founder.leadership;
  const [leadershipLead, ...leadRest] = firstPara.split(/(?<=\.) /);
  const leadershipRest = [leadRest.join(" "), ...otherParas];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0A1640] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(60% 70% at 78% 40%, rgba(30,58,186,.55), transparent 70%), radial-gradient(40% 50% at 0% 0%, rgba(0,180,255,.12), transparent 70%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:pt-14">
          <div className="pb-6 lg:pb-36 lg:pt-6">
            <Breadcrumbs crumbs={[{ label: "About", href: "/about" }, { label: "Managing Director" }]} onDark />

            <p className="mt-10 text-[16px] font-medium text-[#8FB4FF] lg:mt-14">
              {founder.name}, {founder.role}
            </p>
            <h1 className="mt-4 max-w-[17ch] font-display text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[54px] lg:text-[62px]">
              {founder.headline}
            </h1>
            <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.7] text-slate-300">{founder.summary}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="#profile"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#2F5BFF] px-6 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(47,91,255,.35)] transition-colors duration-200 hover:bg-white hover:text-[#0A1640] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Read his profile
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="text-[15px] font-semibold text-white underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact Summate
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[460px] self-end lg:mr-0 lg:max-w-[600px]">
            {/* Backdrop blocks, echoing the brand's stacked shapes */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[14%] right-0 top-[22%] rounded-t-[200px] bg-gradient-to-b from-[#2F5BFF] to-[#1E3ABA]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 top-[12%] h-[38%] w-[46%] rounded-tr-[120px] border-r-[14px] border-t-[14px] border-[#8FB4FF]/70"
            />
            <Image
              src={founder.cutout}
              alt={`Portrait of ${founder.name}`}
              width={900}
              height={922}
              priority
              sizes="(min-width: 1024px) 600px, 90vw"
              className="relative w-full drop-shadow-[0_20px_40px_rgba(5,10,35,.45)]"
            />
          </div>
        </div>
      </section>

      {/* Highlights strip, overlapping the hero */}
      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:-mt-16 lg:px-8">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_24px_60px_-20px_rgba(10,22,64,.35)] lg:grid-cols-4">
          {founder.highlights.map(({ title, body }, i) => {
            const Icon = highlightIcons[i];
            return (
              <li
                key={title}
                className="flex flex-col items-start gap-3 bg-white px-5 py-6 sm:flex-row sm:gap-4 sm:px-7 sm:py-7"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#EEF2FF] text-[#1E3ABA]">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-[17px] font-bold leading-tight tracking-[-0.01em] text-[#0A1640] sm:text-[19px]">
                    {title}
                  </span>
                  <span className="mt-1 block text-[14px] leading-snug text-slate-600">{body}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Profile */}
      <Section id="profile" className="scroll-mt-24">
        <Split title="Profile">
          <Prose className="text-[18px]">
            {founder.profile.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Split>
      </Section>

      {/* Experience timeline */}
      <Section tone="mist">
        <Split
          title="Professional experience"
          lede="From degree and postgraduate classes in Attingal in 1988 to academic consultancy today."
        >
          <ol>
            {founder.experience.map((job, i) => {
              const current = i === 0;
              const last = i === founder.experience.length - 1;
              return (
                <li
                  key={job.title}
                  className="relative grid gap-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-0 sm:pl-0"
                >
                  {/* Rail */}
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-[5px] top-3 w-px bg-[#1E3ABA]/20 sm:left-[149px]"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={
                      "absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 sm:left-[144px] " +
                      (current
                        ? "border-[#2F5BFF] bg-[#2F5BFF] ring-4 ring-[#2F5BFF]/20"
                        : "border-[#1E3ABA] bg-[#F8FAFF]")
                    }
                  />
                  <p className="font-display text-[16px] font-bold tabular-nums text-[#1E3ABA] sm:text-right">
                    {job.period}
                  </p>
                  <div className="sm:pl-12">
                    <h3 className="font-display text-[21px] font-bold leading-snug tracking-[-0.015em] text-[#0A1640]">
                      {job.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.7] text-slate-600">{job.body}</p>
                    {job.points && (
                      <ul className="mt-4 grid gap-2">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-[15px] leading-[1.6] text-slate-700">
                            <span
                              aria-hidden="true"
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5BFF]"
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Split>
      </Section>

      {/* Academic leadership */}
      <Section>
        <Split title="Academic leadership and contributions" lede={contributions.intro}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {contributions.groups.map((g, i) => {
              const Icon = contributionIcons[i];
              return (
                <div key={g.title} className="bg-white p-7">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" className="text-[#1E3ABA]" />
                  <h3 className="mt-4 font-display text-[19px] font-bold leading-snug text-[#0A1640]">{g.title}</h3>
                  <ul className="mt-3 grid gap-2">
                    {g.points.map((pt) => (
                      <li key={pt} className="text-[15px] leading-[1.6] text-slate-600">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.7] text-slate-600">{contributions.outro}</p>
        </Split>
      </Section>

      {/* Education & awards */}
      <Section tone="mist">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <H2>Education and qualifications</H2>
            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {education.items.map((q) => (
                <li key={q} className="flex items-center gap-4 py-5">
                  <GraduationCap size={20} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-[#1E3ABA]" />
                  <span className="font-display text-[19px] font-semibold text-[#0A1640]">{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-slate-600">{education.note}</p>
          </div>

          <div className="lg:col-span-7">
            <H2>Awards and achievements</H2>
            <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#0A1640] p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F5BFF]/40 blur-[70px]"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Award size={30} strokeWidth={1.6} aria-hidden="true" className="text-[#8FB4FF]" />
                  <h3 className="mt-5 font-display text-[30px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px]">
                    {awards.main.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-[16px] leading-[1.65] text-slate-300">{awards.main.body}</p>
                </div>
                <span className="font-display text-[64px] font-bold leading-none tracking-[-0.04em] text-[#8FB4FF]/80 sm:text-[80px]">
                  {awards.main.year}
                </span>
              </div>
            </div>
            <ul className="mt-6 grid gap-3">
              {awards.others.map((a) => (
                <li key={a} className="flex gap-3 text-[16px] leading-[1.6] text-slate-700">
                  <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F5BFF]" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.7] text-slate-600">{awards.note}</p>
          </div>
        </div>
      </Section>

      {/* Leadership at Summate */}
      <section className="relative isolate overflow-hidden bg-[#EEF2FF] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src={founder.image}
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover object-top"
            />
            <h2 className="text-[16px] font-semibold text-[#1E3ABA]">Leadership at Summate Learning</h2>
          </div>
          <p className="mt-8 max-w-[24ch] font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0A1640] sm:text-[44px] lg:text-[54px]">
            {leadershipLead}
          </p>
          <div className="mt-12 grid gap-6 text-[16px] leading-[1.75] text-slate-700 lg:grid-cols-3 lg:gap-10">
            {leadershipRest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of experience */}
      <Section>
        <Split title="Areas of experience">
          <ul className="flex flex-wrap gap-3">
            {founder.areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[15px] font-medium text-[#0A1640]"
              >
                {a}
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      <CtaBand
        title="Meet the rest of the team."
        primary={{ label: "Our leadership", href: "/leadership" }}
        secondary={{ label: "Faculty & mentors", href: "/faculty" }}
      />
    </PageShell>
  );
}
