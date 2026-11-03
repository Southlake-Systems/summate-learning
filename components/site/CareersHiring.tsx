import Link from "next/link";
import { Check, Mail } from "lucide-react";
import { H2, Section } from "@/components/site/Page";
import { careers } from "@/lib/pageContent";
import { site } from "@/lib/siteContent";

/**
 * "How we hire" — the four steps every candidate goes through, plus what to
 * send with an application. Shared by the careers index and each role page.
 */
export function HiringProcess({ tone = "mist" }: { tone?: "mist" | "white" }) {
  const { hiring } = careers;

  return (
    <Section tone={tone} id="how-we-hire" className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
        <H2>{hiring.title}</H2>
        <p className="max-w-[44ch] text-[15px] leading-[1.65] text-slate-500">{hiring.lede}</p>
      </div>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-step="90">
        {hiring.steps.map((step, i) => (
          <li
            key={step.title}
            data-reveal="rise"
            className="relative rounded-3xl border border-slate-200 bg-white p-6 pt-8"
          >
            <span
              aria-hidden="true"
              className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-[#0F2A30] text-[13px] font-bold tabular-nums text-white shadow-[0_8px_20px_rgba(15,42,48,0.25)]"
            >
              0{i + 1}
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1D5F6E]">{step.time}</p>
            <h3 className="mt-2 font-display text-[18px] font-bold tracking-[-0.01em] text-[#0F2A30]">{step.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:flex lg:gap-14">
        <div className="lg:w-60 lg:shrink-0">
          <h3 className="font-display text-[19px] font-bold tracking-[-0.01em] text-[#0F2A30]">
            {hiring.application.title}
          </h3>
          <p className="mt-3 text-[13px] leading-[1.6] text-slate-500">{hiring.application.note}</p>
          <a
            href={`mailto:${site.careersEmail}`}
            className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1D5F6E] underline decoration-[#1D5F6E]/25 underline-offset-[5px] hover:decoration-[#1D5F6E]"
          >
            <Mail size={15} strokeWidth={1.9} aria-hidden="true" />
            {site.careersEmail}
          </a>
        </div>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:mt-0 lg:flex-1">
          {hiring.application.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-slate-700">
              <Check size={16} strokeWidth={2.4} aria-hidden="true" className="mt-1 shrink-0 text-[#55C9B8]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Link back to the full list from a role page, or to a sibling role. */
export function RoleLink({ slug, title, meta }: { slug: string; title: string; meta: string }) {
  return (
    <Link
      href={`/careers/${slug}`}
      className="group flex items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-[#55C9B8] hover:bg-[#F6FAFA]"
    >
      <span>
        <span className="block font-display text-[16px] font-bold text-[#0F2A30]">{title}</span>
        <span className="mt-0.5 block text-[13px] text-slate-500">{meta}</span>
      </span>
      <span
        aria-hidden="true"
        className="text-[13px] font-semibold text-[#1D5F6E] transition-transform group-hover:translate-x-0.5"
      >
        View role →
      </span>
    </Link>
  );
}
