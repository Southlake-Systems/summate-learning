import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  Clapperboard,
  Cloud,
  Container,
  Handshake,
  Linkedin,
  Rocket,
  Server,
  Target,
  Timer,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ClampText } from "@/components/site/ClampText";
import { PageShell, Breadcrumbs, Section, Split, Prose, CtaBand } from "@/components/site/Page";
import { leadership, type TeamMember } from "@/lib/pageContent";

// Directors with their own page; the Managing Director lives at /founder.
const directors = leadership.members.filter((m) => m.href === `/leadership/${m.slug}`);

const highlightIcons: Record<string, LucideIcon[]> = {
  "bibin-kuruvilla": [Server, Building2, Container, Cloud],
  "jyothis-joseph": [TrendingUp, Rocket, Handshake, Users],
  "shaun-xavier": [Workflow, TrendingUp, Target, Clapperboard],
};
const beyondIcons: Record<string, LucideIcon> = {
  "jyothis-joseph": Timer,
  "shaun-xavier": Clapperboard,
};

function findDirector(slug: string): TeamMember | undefined {
  return directors.find((m) => m.slug === slug);
}

export function generateStaticParams() {
  return directors.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = findDirector(params.slug);
  if (!member) return {};
  return {
    description: `${member.name}, ${member.role}, Summate Learning. ${member.summary}`,
  };
}

export default function DirectorPage({ params }: { params: { slug: string } }) {
  const member = findDirector(params.slug);
  if (!member) notFound();

  const firstName = member.name.split(" ")[0];
  // The "At Summate Learning" paragraph gets its own band; the rest is the profile.
  const found = member.bio.findIndex((p) => p.startsWith("At Summate"));
  const atSummateIndex = found === -1 ? member.bio.length - 1 : found;
  const profile = member.bio.filter((_, i) => i !== atSummateIndex);
  const [atSummateLead, ...atSummateRestParts] = member.bio[atSummateIndex].split(/(?<=\.) /);
  const atSummateRest = atSummateRestParts.join(" ");

  const icons = highlightIcons[member.slug] ?? [];
  const BeyondIcon = beyondIcons[member.slug] ?? Target;
  const next = directors[(directors.indexOf(member) + 1) % directors.length];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0C2A31] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(60% 70% at 78% 40%, rgba(29,95,110,.55), transparent 70%), radial-gradient(40% 50% at 0% 0%, rgba(85,201,184,.12), transparent 70%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:pt-14">
          <div className="pb-6 lg:pb-36 lg:pt-6">
            <Breadcrumbs
              crumbs={[
                { label: "About", href: "/about" },
                { label: "Leadership", href: "/leadership" },
                { label: member.name },
              ]}
              onDark
            />

            <p className="mt-10 text-[16px] font-medium text-[#8FDACD] lg:mt-14">
              {member.name}, {member.role}, Summate Learning
            </p>
            <h1 className="mt-4 max-w-[17ch] font-display text-[40px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[54px] lg:text-[62px]">
              {member.headline ?? member.name}
            </h1>
            <ClampText className="mt-7" onDark>
              <p className="max-w-[54ch] text-[17px] leading-[1.7] text-slate-300">{member.summary}</p>
            </ClampText>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="#profile"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#2A7A88] px-6 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(42,122,136,.35)] transition-colors duration-200 hover:bg-white hover:text-[#0C2A31] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Read his profile
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-white underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Linkedin size={16} strokeWidth={2} aria-hidden="true" />
                  LinkedIn
                  <span className="sr-only">profile of {member.name} (opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[300px] self-end sm:max-w-[380px] lg:mr-6 lg:max-w-[480px]">
            {/* Outline block, echoing the brand's stacked shapes */}
            <div
              aria-hidden="true"
              className="absolute -right-3 top-[4%] h-[38%] w-[46%] rounded-tr-[120px] border-r-[14px] border-t-[14px] border-[#8FDACD]/70"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[200px] bg-gradient-to-b from-[#2A7A88] to-[#1D5F6E] shadow-[0_20px_40px_rgba(6,24,29,.45)]">
              {member.image && (
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 380px, 300px"
                  className="object-cover object-top"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip, overlapping the hero */}
      {member.highlights && (
        <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:-mt-16 lg:px-8">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] bg-slate-200 min-[480px]:grid-cols-2 shadow-[0_24px_60px_-20px_rgba(12,42,49,.35)] lg:grid-cols-4">
            {member.highlights.map(({ title, body }, i) => {
              const Icon = icons[i] ?? Target;
              return (
                <li
                  key={title}
                  className="flex items-start gap-4 bg-white px-5 py-5 min-[480px]:flex-col min-[480px]:gap-3 min-[480px]:py-6 sm:flex-row sm:gap-4 sm:px-7 sm:py-7"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E6F2F3] text-[#1D5F6E]">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-bold leading-tight tracking-[-0.01em] text-[#0C2A31] sm:text-[19px]">
                      {title}
                    </span>
                    <span className="mt-1 block text-[14px] leading-snug text-slate-600">{body}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Profile */}
      <Section id="profile" className="scroll-mt-24">
        <Split title="Profile">
          <ClampText>
            <Prose className="text-[18px]">
              {profile.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </ClampText>
        </Split>
      </Section>

      {/* Beyond work */}
      {member.beyond && (
        <Section tone="mist">
          <Split title={member.beyond.title}>
            <div className="relative overflow-hidden rounded-3xl bg-[#0C2A31] p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2A7A88]/40 blur-[70px]"
              />
              <BeyondIcon size={30} strokeWidth={1.6} aria-hidden="true" className="relative text-[#8FDACD]" />
              <ClampText className="relative mt-5" onDark>
                <p className="max-w-[40ch] font-display text-[22px] font-semibold leading-[1.35] tracking-[-0.015em] sm:text-[28px]">
                  {member.beyond.body}
                </p>
              </ClampText>
            </div>
          </Split>
        </Section>
      )}

      {/* At Summate */}
      <section className="relative isolate overflow-hidden bg-[#E6F2F3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {member.image && (
              <Image
                src={member.image}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover object-top"
              />
            )}
            <h2 className="text-[16px] font-semibold text-[#1D5F6E]">{firstName} at Summate Learning</h2>
          </div>
          <p className="mt-8 max-w-[24ch] font-display text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0C2A31] sm:text-[44px] lg:text-[54px]">
            {atSummateLead}
          </p>
          {atSummateRest && (
            <ClampText className="mt-10">
              <p className="max-w-[62ch] text-[17px] leading-[1.75] text-slate-700">{atSummateRest}</p>
            </ClampText>
          )}
        </div>
      </section>

      {/* Areas */}
      <Section>
        <Split title={member.areas.title}>
          <ul className="flex flex-wrap gap-3">
            {member.areas.items.map((a) => (
              <li
                key={a}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-[15px] font-medium text-[#0C2A31]"
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
        secondary={next !== member ? { label: `Meet ${next.name}`, href: `/leadership/${next.slug}` } : undefined}
      />
    </PageShell>
  );
}
