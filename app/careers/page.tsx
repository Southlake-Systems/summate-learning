import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarClock,
  Check,
  Clapperboard,
  Cpu,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
  Mail,
  MapPin,
  Settings2,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { PageShell, PageHero, Section, Split, H2, Prose, CtaBand, ButtonLink } from "@/components/site/Page";
import { HiringProcess } from "@/components/site/CareersHiring";
import SpotlightCard from "@/components/SpotlightCard";
import { ShineBorder } from "@/components/ShineBorder";
import { careers } from "@/lib/pageContent";
import { site } from "@/lib/siteContent";

export const metadata: Metadata = {
  description: careers.lede,
};

const areaIcons: Record<string, LucideIcon> = {
  "Faculty & Mentors": GraduationCap,
  "Student Counsellors": HeartHandshake,
  "Content & Media": Clapperboard,
  "Marketing & Growth": TrendingUp,
  "Technology & Product": Cpu,
  Operations: Settings2,
  "Campus Ambassadors": UsersRound,
};

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
        title={careers.title}
        lede={careers.lede}
        waves
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
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <H2>Areas we hire for</H2>
          <p className="max-w-[46ch] text-[15px] leading-[1.65] text-slate-500">
            Pick the area that fits you best — every one of them goes to the same inbox.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-step="80">
          {careers.areas.map((a, i) => {
            const Icon = areaIcons[a.title] ?? Sparkles;
            return (
              <li key={a.title} data-reveal="pop">
                <a
                  href={careers.profile.cta.href}
                  aria-label={`${a.title} — send us your profile`}
                  className="group block h-full rounded-3xl transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5F6E]"
                >
                  <SpotlightCard
                    theme="light"
                    spotlightColor="#2A7A88"
                    intensity={0.26}
                    spotlightSize={300}
                    softness={0.78}
                    borderGlow={0.55}
                    proximity={0}
                    className="flex h-full flex-col"
                  >
                    <ShineBorder
                      shineColor={["#55C9B8", "#2A7A88", "#EF6F51"]}
                      borderWidth={1.5}
                      duration={14}
                      style={{ animationDelay: `${(i % 3) * 1.6}s` }}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EAF4F5] text-[#1D5F6E] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                        <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E3EBEC] text-[#1D5F6E]/55 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#55C9B8] group-hover:bg-[#EAF4F5] group-hover:text-[#1D5F6E]"
                      >
                        <ArrowUpRight size={16} strokeWidth={2.2} />
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-[19px] font-bold tracking-[-0.01em] text-[#0F2A30]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-slate-600">{a.body}</p>
                  </SpotlightCard>
                </a>
              </li>
            );
          })}

          {/* Completes the last grid row: 7 areas + this wide tile fill 3 columns evenly. */}
          <li data-reveal="pop" className="lg:col-span-2">
            <SpotlightCard
              theme="dark"
              spotlightColor="#55C9B8"
              intensity={0.3}
              spotlightSize={420}
              borderGlow={0.5}
              proximity={0}
              style={
                {
                  "--spotlight-card-surface": "#0F2A30",
                  "--spotlight-card-border": "rgba(255,255,255,0.14)",
                  "--spotlight-card-shadow": "0 26px 50px -28px rgba(6,24,29,0.7)",
                } as CSSProperties
              }
              className="flex h-full flex-col justify-between gap-7"
            >
              <ShineBorder shineColor={["#EF6F51", "#55C9B8"]} borderWidth={1.5} duration={9} />

              {/* Soft brand glow, so the tile reads as a destination rather than a gap in the grid. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#55C9B8]/15 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 right-2 text-white/[0.06]"
              >
                <ArrowUpRight size={150} strokeWidth={1} />
              </span>

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8FDACD]">
                  Open application
                </p>
                <h3 className="mt-3 max-w-[22ch] font-display text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                  Something else in mind?
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.65] text-slate-300">
                  {careers.profile.body}
                </p>
              </div>

              <a
                href={careers.profile.cta.href}
                className="group/link relative inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0F2A30] transition-colors duration-200 hover:bg-[#55C9B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {careers.profile.cta.label}
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </SpotlightCard>
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
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
          <H2>Open positions</H2>
          <p className="text-[15px] text-slate-500">
            {careers.openings.length} {careers.openings.length === 1 ? "role is" : "roles are"} open right now.
          </p>
        </div>

        {careers.openings.length ? (
          <ul className="mt-12 grid gap-6" data-reveal-step="120">
            {careers.openings.map((role) => (
              <li key={role.slug} id={role.slug} data-reveal="rise" className="scroll-mt-28">
                <SpotlightCard
                  theme="light"
                  spotlightColor="#2A7A88"
                  intensity={0.2}
                  spotlightSize={420}
                  softness={0.8}
                  borderGlow={0.5}
                  proximity={0}
                  className="h-full"
                >
                  <ShineBorder
                    shineColor={["#55C9B8", "#2A7A88"]}
                    borderWidth={1.5}
                    duration={16}
                  />

                  <div className="relative grid gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
                    <div className="flex flex-col">
                      <span className="inline-flex w-fit items-center rounded-full bg-[#EAF4F5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1D5F6E]">
                        {role.area}
                      </span>
                      <h3 className="mt-4 font-display text-[26px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0F2A30] sm:text-[30px]">
                        <Link
                          href={`/careers/${role.slug}`}
                          className="transition-colors hover:text-[#1D5F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5F6E]"
                        >
                          {role.title}
                        </Link>
                      </h3>

                      <p className="mt-3 max-w-[54ch] text-[15px] leading-[1.65] text-slate-600">
                        {role.summary}
                      </p>

                      <dl className="mt-6 space-y-2.5 text-[14px]">
                        <div className="flex items-start gap-2.5">
                          <MapPin size={16} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                          <dt className="sr-only">Location</dt>
                          <dd className="text-slate-600">{role.location}</dd>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Briefcase size={16} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                          <dt className="sr-only">Employment</dt>
                          <dd className="text-slate-600">{role.employment}</dd>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CalendarClock size={16} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                          <dt className="sr-only">Joining</dt>
                          <dd className="text-slate-600">Joining {role.joining.toLowerCase()}</dd>
                        </div>
                      </dl>

                      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-auto lg:pt-8">
                        <ButtonLink href={`/careers/${role.slug}`}>View role and apply</ButtonLink>
                        <a
                          href={`mailto:${site.email}?subject=${encodeURIComponent(role.subject)}`}
                          className="group/mail inline-flex items-center gap-2 text-[14px] font-semibold text-[#1D5F6E] underline decoration-[#1D5F6E]/25 underline-offset-[5px] transition-colors hover:decoration-[#1D5F6E]"
                        >
                          <Mail size={15} strokeWidth={1.9} aria-hidden="true" />
                          Email your application
                        </a>
                      </div>
                      <p className="mt-3 text-[13px] leading-[1.6] text-slate-500">
                        Use the subject line{" "}
                        <span className="font-semibold text-[#0F2A30]">{role.subject}</span>.
                      </p>
                    </div>

                    <div className="lg:border-l lg:border-slate-200 lg:pl-14">
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        What we&apos;re looking for
                      </h4>
                      <ul className="mt-4 grid gap-2.5">
                        {role.lookingFor.slice(0, 5).map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-slate-700">
                            <Check
                              size={16}
                              strokeWidth={2.4}
                              aria-hidden="true"
                              className="mt-1 shrink-0 text-[#55C9B8]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {role.lookingFor.length > 5 && (
                        <Link
                          href={`/careers/${role.slug}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1D5F6E] underline decoration-[#1D5F6E]/25 underline-offset-[5px] hover:decoration-[#1D5F6E]"
                        >
                          See all {role.lookingFor.length} requirements
                          <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
                        </Link>
                      )}

                      {role.competencies && (
                        <div className="mt-7">
                          <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Core technical competencies
                          </h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {role.competencies.map((skill) => (
                              <li
                                key={skill}
                                className="rounded-full border border-slate-200 bg-[#F6FAFA] px-3 py-1.5 text-[13px] font-medium text-[#0F2A30]"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-8 sm:p-10">
            <p className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0F2A30]">No roles are listed right now.</p>
            <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.7] text-slate-600">
              We&apos;re still hiring as we grow. {careers.profile.body}
            </p>
            <ButtonLink href={careers.profile.cta.href} className="mt-7">
              {careers.profile.cta.label}
            </ButtonLink>
          </div>
        )}
      </Section>

      <HiringProcess tone="white" />

      <CtaBand
        title={careers.profile.title}
        body={careers.profile.body}
        primary={careers.profile.cta}
        secondary={{ label: "Teach or mentor", href: "/faculty" }}
      />
    </PageShell>
  );
}
