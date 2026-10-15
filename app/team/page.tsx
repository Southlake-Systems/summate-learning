import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { PageShell, Breadcrumbs, Section, Prose, CtaBand } from "@/components/site/Page";
import { team, type TeamMember } from "@/lib/pageContent";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team",
  description: team.lede,
};

// One tone per member so the initials portraits read as a set, not copies.
const tones = [
  "from-[#2F5BFF] via-[#1E3ABA] to-[#0A1640]",
  "from-[#8B5CF6] via-[#5B21B6] to-[#1E0B4A]",
  "from-[#3B82F6] via-[#1E40AF] to-[#0B1B4D]",
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

/** Portrait on the front; hovering or focusing flips it to the profile summary on the back. */
function MemberCard({ member, tone }: { member: TeamMember; tone: string }) {
  return (
    <article className="[perspective:1400px]">
      <Link
        href={member.href ?? `#${member.slug}`}
        aria-label={`${member.name}, ${member.role}. ${member.summary} Read the full profile.`}
        className="group block rounded-[22px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3ABA]"
      >
        <div className="relative aspect-[4/5] transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] motion-reduce:duration-0">
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-[22px] bg-[#0A1640] [backface-visibility:hidden]">
            <Portrait member={member} tone={tone} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050A1F]/85 via-[#050A1F]/35 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <h3 className="font-display text-[24px] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-[26px]">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[14px] font-medium text-white/75">{member.role}</p>
              </div>
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0A1640]"
              >
                <Plus size={18} strokeWidth={2.4} />
              </span>
            </div>
          </div>

          {/* Back */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col overflow-hidden rounded-[22px] bg-[#0A1640] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(70% 55% at 100% 0%, rgba(47,91,255,.45), transparent 70%), radial-gradient(60% 50% at 0% 100%, rgba(124,58,237,.32), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="font-display text-[22px] font-bold leading-[1.05] tracking-[-0.025em]">{member.name}</p>
              <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.08em] text-[#9DB4FF]">{member.role}</p>
            </div>
            <p className="relative mt-5 flex-1 overflow-hidden text-[14px] leading-[1.6] text-slate-200 lg:text-[13px] xl:text-[14px]">
              {member.summary}
            </p>
            <span className="relative mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-white">
              Read full profile
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#2F5BFF]">
                <ArrowRight size={16} strokeWidth={2.4} />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function Profile({ member, tone, index }: { member: TeamMember; tone: string; index: number }) {
  const [lead, ...rest] = member.bio;
  return (
    <Section id={member.slug} tone={index % 2 === 0 ? "white" : "mist"} className="scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-5 lg:block">
              <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-2xl sm:w-28 lg:w-full lg:max-w-[300px] lg:rounded-[22px]">
                <Portrait member={member} tone={tone} sizes="(min-width: 1024px) 300px, 112px" />
              </div>
              <div className="lg:mt-7">
                <h2 className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0D1222] sm:text-[38px]">
                  {member.name}
                </h2>
                <p className="mt-2 text-[15px] font-medium text-[#1E3ABA]">{member.role}</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 lg:pt-1">
          <p className="max-w-[52ch] font-display text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-[#0D1222] sm:text-[22px]">
            {lead}
          </p>
          <Prose className="mt-8">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>

          {member.beyond && (
            <div className="mt-10 max-w-[64ch] rounded-[22px] bg-[#EEF2FF] p-7 sm:p-8">
              <h3 className="font-display text-[19px] font-bold text-[#0A1640]">{member.beyond.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.7] text-slate-700">{member.beyond.body}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-14 border-t border-slate-200 pt-8 lg:mt-16">
        <h3 className="font-display text-[17px] font-bold text-[#0D1222]">{member.areas.title}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {member.areas.items.map((a) => (
            <li
              key={a}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[15px] font-medium leading-snug text-slate-700"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default function TeamPage() {
  return (
    <PageShell>
      {/* Hero: oversized title on deep navy, fading into a soft wash where the roster begins */}
      <section className="relative isolate overflow-hidden bg-[#0A1640] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(55% 80% at 85% 10%, rgba(47,91,255,.45), transparent 70%), radial-gradient(40% 60% at 10% 100%, rgba(124,58,237,.30), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <Breadcrumbs crumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]} onDark />
          <div className="mt-14 grid gap-8 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-16">
            <h1 className="font-display text-[72px] font-bold leading-[0.88] tracking-[-0.055em] sm:text-[112px] lg:text-[164px]">
              {team.title}
            </h1>
            <p className="max-w-[44ch] text-[17px] leading-[1.7] text-slate-300 lg:pb-4">{team.lede}</p>
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="relative isolate overflow-hidden bg-white pb-16 pt-16 lg:pb-24 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-[#EEF0FF] via-[#F7F2FF] to-white"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <h2 className="max-w-[16ch] font-display text-[38px] font-bold leading-[1.02] tracking-[-0.04em] text-[#0D1222] sm:text-[52px] lg:col-span-8 lg:col-start-5 lg:text-[64px]">
              {team.heading}
            </h2>
          </div>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            {team.members.map((m, i) => (
              <li key={m.slug}>
                <MemberCard member={m} tone={tones[i % tones.length]} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Full profiles */}
      <div className="border-t border-slate-200/70">
        {team.members.map((m, i) =>
          m.href ? null : <Profile key={m.slug} member={m} tone={tones[i % tones.length]} index={i} />
        )}
      </div>

      <CtaBand
        title="Learn from people who have built real things."
        body="Our first program, the AI-Augmented Full-Stack Developer course, starts online in January 2027."
        primary={{ label: "Apply for Batch 1", href: "/apply" }}
        secondary={{ label: "Leadership", href: "/leadership" }}
      />
    </PageShell>
  );
}
