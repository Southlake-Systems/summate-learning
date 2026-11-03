import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  Check,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  PageShell,
  PageHero,
  Section,
  H2,
  ButtonLink,
  CtaBand,
} from "@/components/site/Page";
import { HiringProcess, RoleLink } from "@/components/site/CareersHiring";
import { careers } from "@/lib/pageContent";
import { site } from "@/lib/siteContent";

type Params = { slug: string };

function findRole(slug: string) {
  return careers.openings.find((role) => role.slug === slug);
}

export function generateStaticParams() {
  return careers.openings.map((role) => ({ slug: role.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const role = findRole(params.slug);
  if (!role) return {};

  return {
    title: `${role.title} · Careers at Summate Learning`,
    description: `${role.title} — ${role.area}, ${role.location}. ${role.summary}`,
    alternates: { canonical: `/careers/${role.slug}` },
    openGraph: {
      title: `${role.title} · Summate Learning`,
      description: role.summary,
      type: "article",
    },
  };
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-[#0F2A30] sm:text-[24px]">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function RolePage({ params }: { params: Params }) {
  const role = findRole(params.slug);
  if (!role) notFound();

  const others = careers.openings.filter((r) => r.slug !== role.slug);
  const applyHref = careers.profile.cta.href;
  const mailHref = `mailto:${site.careersEmail}?subject=${encodeURIComponent(role.subject)}`;

  // JobPosting structured data — what lets Google Jobs list the role.
  const jobPosting = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: role.title,
    description: [
      role.summary,
      `What you'll do: ${role.responsibilities.join(" ")}`,
      `What we're looking for: ${role.lookingFor.join(" ")}`,
    ].join("\n\n"),
    datePosted: role.postedOn,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: "https://www.summatelearning.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    ...(role.remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "India" },
        }
      : {}),
    directApply: true,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />

      <PageHero
        crumbs={[
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: role.title },
        ]}
        title={role.title}
        lede={role.summary}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-slate-600">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} strokeWidth={1.9} aria-hidden="true" className="text-[#1D5F6E]" />
            {role.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Briefcase size={15} strokeWidth={1.9} aria-hidden="true" className="text-[#1D5F6E]" />
            {role.employment}
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarClock size={15} strokeWidth={1.9} aria-hidden="true" className="text-[#1D5F6E]" />
            Joining {role.joining.toLowerCase()}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#EAF4F5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1D5F6E]">
            {role.area}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink href={applyHref}>Apply for this role</ButtonLink>
          <a
            href={mailHref}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1D5F6E] underline decoration-[#1D5F6E]/25 underline-offset-[5px] transition-colors hover:decoration-[#1D5F6E]"
          >
            <Mail size={15} strokeWidth={1.9} aria-hidden="true" />
            Email your application
          </a>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="space-y-12">
              <Block title="What you'll do">
                <ul className="grid gap-3">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-slate-700">
                      <ArrowRight
                        size={16}
                        strokeWidth={2.2}
                        aria-hidden="true"
                        className="mt-[7px] shrink-0 text-[#2A7A88]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="What we're looking for">
                <ul className="grid gap-3">
                  {role.lookingFor.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-slate-700">
                      <Check
                        size={16}
                        strokeWidth={2.4}
                        aria-hidden="true"
                        className="mt-[7px] shrink-0 text-[#55C9B8]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              {role.niceToHave && role.niceToHave.length > 0 && (
                <Block title="Nice to have">
                  <ul className="grid gap-2">
                    {role.niceToHave.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-slate-600">
                        <Sparkles
                          size={15}
                          strokeWidth={1.9}
                          aria-hidden="true"
                          className="mt-[8px] shrink-0 text-[#EF6F51]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {role.competencies && role.competencies.length > 0 && (
                <Block title="Core technical competencies">
                  <ul className="flex flex-wrap gap-2">
                    {role.competencies.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate-200 bg-[#F6FAFA] px-3.5 py-1.5 text-[13px] font-medium text-[#0F2A30]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              <Block title="About Summate">
                <p className="max-w-[62ch] text-[16px] leading-[1.7] text-slate-600">{careers.body[1]}</p>
                <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.7] text-slate-600">
                  We are a small team building courses, tools and a community around practical
                  learning. {careers.valuesNote}
                </p>
              </Block>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl border border-slate-200 bg-[#F6FAFA] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1D5F6E]">
                  Apply
                </p>
                <p className="mt-3 font-display text-[19px] font-bold leading-snug tracking-[-0.01em] text-[#0F2A30]">
                  {role.title}
                </p>

                <div className="mt-5">
                  <ButtonLink href={applyHref} className="w-full justify-center">
                    Apply for this role
                  </ButtonLink>
                </div>

                <a
                  href={mailHref}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0F2A30] transition-colors hover:border-[#1D5F6E] hover:text-[#1D5F6E]"
                >
                  <Mail size={15} strokeWidth={1.9} aria-hidden="true" />
                  Email your application
                </a>

                <p className="mt-4 text-[13px] leading-[1.6] text-slate-500">
                  Subject line:{" "}
                  <span className="font-semibold text-[#0F2A30]">{role.subject}</span>
                </p>

                <dl className="mt-6 space-y-2.5 border-t border-slate-200 pt-5 text-[13px]">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                    <dt className="sr-only">Location</dt>
                    <dd className="text-slate-600">{role.location}</dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Briefcase size={15} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                    <dt className="sr-only">Employment</dt>
                    <dd className="text-slate-600">{role.employment}</dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CalendarClock size={15} strokeWidth={1.9} aria-hidden="true" className="mt-0.5 shrink-0 text-[#1D5F6E]" />
                    <dt className="sr-only">Joining</dt>
                    <dd className="text-slate-600">Joining {role.joining.toLowerCase()}</dd>
                  </div>
                </dl>

                <p className="mt-5 rounded-2xl bg-white px-4 py-3 text-[13px] leading-[1.6] text-slate-500">
                  We reply to every application within a week.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <HiringProcess />

      {others.length > 0 && (
        <Section>
          <H2>Other open roles</H2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <RoleLink
                key={other.slug}
                slug={other.slug}
                title={other.title}
                meta={`${other.area} · ${other.location}`}
              />
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title="Not quite the right fit?"
        body="Tell us what you would like to do at Summate and we will keep you in mind as the team grows."
        primary={{ label: "Send your profile", href: applyHref }}
        secondary={{ label: "Back to careers", href: "/careers" }}
      />
    </PageShell>
  );
}
