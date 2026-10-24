import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Linkedin } from "lucide-react";
import { ClampText } from "@/components/site/ClampText";
import { PageShell, Breadcrumbs, Section, Split, Prose, CtaBand } from "@/components/site/Page";
import { leadership, type TeamMember } from "@/lib/pageContent";
import { APPLY_URL } from "@/lib/siteContent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  description: leadership.lede,
};

// One tone per member so the initials portraits read as a set, not copies.
const tones = [
  "from-[#2A7A88] via-[#1D5F6E] to-[#0C2A31]",
  "from-[#55C9B8] via-[#1D5F6E] to-[#0F2E36]",
  "from-[#2A7A88] via-[#164B57] to-[#0E3139]",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

/** Photo when one exists, otherwise a typographic portrait built from the initials. */
function Portrait({ member, tone, sizes }: { member: TeamMember; tone: string; sizes: string }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={`Portrait of ${member.name}`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    );
  }
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-b [container-type:inline-size]", tone)}>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />
      <span className="absolute -right-[0.06em] top-[0.02em] font-display text-[72cqw] font-extrabold leading-[0.8] tracking-[-0.07em] text-white/[0.16]">
        {initials(member.name)}
      </span>
    </div>
  );
}

/** One person: portrait beside everything about them, so nothing drifts apart. */
function PersonRow({ member, tone }: { member: TeamMember; tone: string }) {
  const href = member.href ?? `#${member.slug}`;
  return (
    <article
      id={member.slug}
      className="grid scroll-mt-24 gap-x-5 py-10 first:pt-0 last:pb-0 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-x-12 lg:py-12"
    >
      {/* Phones: small portrait beside the name. Larger screens: portrait column beside everything. */}
      <div className="flex items-center gap-5 sm:block">
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-2xl bg-[#0C2A31] sm:w-full sm:max-w-[240px] sm:rounded-[22px]"
        >
          <Portrait member={member} tone={tone} sizes="(min-width: 1024px) 240px, (min-width: 640px) 180px, 96px" />
        </Link>
        <div className="sm:hidden">
          <h3 className="font-display text-[26px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0F2A30]">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[15px] font-medium text-[#1D5F6E]">{member.role}</p>
        </div>
      </div>

      <div className="mt-5 flex min-w-0 flex-col sm:mt-0">
        <div className="hidden sm:block">
          <h3 className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0F2A30] lg:text-[34px]">
            {member.name}
          </h3>
          <p className="mt-2 text-[15px] font-medium text-[#1D5F6E]">{member.role}</p>
        </div>

        <ClampText className="sm:mt-5">
          <p className="max-w-[64ch] text-[16px] leading-[1.7] text-slate-700 sm:text-[17px]">{member.summary}</p>
        </ClampText>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={member.areas.title}>
          {member.award && (
            <li
              title={member.award.body}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0C2A31] px-3.5 py-1.5 text-[13px] font-semibold text-white"
            >
              <Award size={14} strokeWidth={2} aria-hidden="true" className="text-[#8FDACD]" />
              {member.award.title} {member.award.year}
              <span className="sr-only">. {member.award.body}</span>
            </li>
          )}
          {member.areas.items.map((a) => (
            <li
              key={a}
              className="rounded-full border border-slate-200 bg-[#F6FAFA] px-3.5 py-1.5 text-[13px] font-medium text-slate-700"
            >
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={href}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#0C2A31] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1D5F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5F6E]"
          >
            Full profile
            <span className="sr-only"> of {member.name}</span>
            <ArrowRight
              size={16}
              strokeWidth={2.4}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0C2A31] underline decoration-slate-300 underline-offset-[6px] transition-colors hover:text-[#1D5F6E] hover:decoration-[#1D5F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5F6E]"
            >
              <Linkedin size={16} strokeWidth={2} aria-hidden="true" />
              LinkedIn
              <span className="sr-only">profile of {member.name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <PageShell>
      {/* Hero: oversized title on deep navy, fading into a soft wash where the roster begins */}
      <section className="relative isolate overflow-hidden bg-[#0C2A31] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(55% 80% at 85% 10%, rgba(42,122,136,.45), transparent 70%), radial-gradient(40% 60% at 10% 100%, rgba(85,201,184,.30), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <Breadcrumbs crumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]} onDark />
          <div className="mt-14 grid gap-8 lg:mt-24">
            <h1 className="font-display text-[64px] font-bold leading-[0.88] tracking-[-0.055em] sm:text-[112px] lg:text-[132px] xl:text-[164px]">
              {leadership.title}
            </h1>
            <p className="max-w-[44ch] text-[17px] leading-[1.7] text-slate-300">{leadership.lede}</p>
          </div>
        </div>
      </section>

      {/* People: one row each, everything about a person kept together */}
      <section className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-b from-[#EAF4F4] via-[#F0FAF8] to-white"
        />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="max-w-[18ch] font-display text-[38px] font-bold leading-[1.02] tracking-[-0.04em] text-[#0F2A30] sm:text-[52px] lg:text-[60px]">
            {leadership.heading}
          </h2>

          <div className="mt-12 divide-y divide-slate-200 lg:mt-16">
            {leadership.members.map((m, i) => (
              <PersonRow key={m.slug} member={m} tone={tones[i % tones.length]} />
            ))}
          </div>
        </div>
      </section>

      <Section className="border-t border-slate-200/70">
        <Split title={leadership.advisory.title}>
          <ClampText>
            <Prose>
              {leadership.advisory.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </ClampText>
          <p className="mt-10 border-l-4 border-[#55C9B8] pl-6 font-display text-2xl font-semibold leading-[1.35] tracking-[-0.015em] text-[#0F2A30] sm:text-[28px]">
            {leadership.closing}
          </p>
        </Split>
      </Section>

      <CtaBand
        title="Learn from people who have built real things."
        body="Our first program, the AI-Augmented Full-Stack Developer course, starts online in January 2027."
        primary={{ label: "Apply for Batch 1", href: APPLY_URL }}
        secondary={{ label: "Careers at Summate", href: "/careers" }}
      />
    </PageShell>
  );
}
