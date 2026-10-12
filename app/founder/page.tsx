import type { Metadata } from "next";
import { PageShell, PageHero, Section, Split, Prose, CtaBand } from "@/components/site/Page";
import { founder } from "@/lib/pageContent";

export const metadata: Metadata = {
  title: "Founder & CEO",
  description: `${founder.name}, ${founder.role}. ${founder.tagline}`,
};

const mottoColors = ["#1E3ABA", "#7C3AED", "#FF2D75", "#FF8A00"];

export default function FounderPage() {
  const background = founder.background.filter((b) => b.value);

  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }, { label: "Founder & CEO" }]}
        title={founder.name}
        lede={founder.tagline}
        aside={
          // Replace with a portrait (next/image) when one is available.
          <figure className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] lg:ml-auto lg:mr-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-display text-[160px] font-bold leading-none text-white/90">
              R
            </span>
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-5 py-4 backdrop-blur">
              <span className="block font-display text-lg font-bold text-[#0D1222]">{founder.name}</span>
              <span className="block text-[14px] text-slate-600">{founder.role}</span>
            </figcaption>
          </figure>
        }
      >
        <p className="text-[15px] font-semibold text-[#1E3ABA]">{founder.role}</p>
      </PageHero>

      <Section>
        <Split title="About Rameshan">
          <Prose className="text-[18px]">
            {founder.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Split>
      </Section>

      <Section tone="mist">
        <Split title="Professional background">
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {background.map((b) => (
              <div key={b.label} className="grid gap-1 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <dt className="text-[15px] font-medium text-slate-500">{b.label}</dt>
                <dd className="font-display text-xl font-semibold tracking-[-0.01em] text-[#0D1222]">{b.value}</dd>
              </div>
            ))}
          </dl>
        </Split>
      </Section>

      {/* Vision */}
      <section className="relative isolate overflow-hidden bg-[#0D1222] py-20 text-white lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 -z-10 h-[460px] w-[460px] rounded-full bg-[#1E3ABA]/40 blur-[120px]"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <figure className="max-w-5xl">
            <p className="text-[15px] font-semibold text-slate-400">His vision</p>
            <blockquote className="mt-6 font-display text-[34px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[48px] lg:text-[60px]">
              &ldquo;{founder.vision}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-[16px] text-slate-400">{founder.name}, {founder.role}</figcaption>
          </figure>
        </div>
      </section>

      <Section>
        <Split title="Building Summate" lede={founder.building.intro}>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {founder.building.points.map((p) => (
              <li key={p} className="bg-white px-6 py-5 text-[16px] font-medium leading-[1.5] text-[#0D1222]">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-12 flex flex-wrap gap-x-5 gap-y-1 font-display text-[40px] font-bold leading-none tracking-[-0.04em] sm:text-[56px]">
            {founder.building.motto.map((w, i) => (
              <span key={w} style={{ color: mottoColors[i] }}>
                {w}
              </span>
            ))}
          </p>
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
