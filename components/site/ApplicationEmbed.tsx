"use client";

import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

/**
 * The application form lives in Google Forms, which pulls in ~5 MB and 100+
 * requests of its own doc, JS and fonts. That is far too much to pay on page
 * load for every visitor who is only reading the page, so the iframe is
 * mounted on intent instead. The fallback link keeps the form reachable if the
 * embed is blocked.
 */
export default function ApplicationEmbed({
  embedUrl,
  fallbackUrl,
}: {
  embedUrl: string;
  fallbackUrl: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={embedUrl}
        title="Summate Learning Batch 1 application form"
        className="min-h-[1700px] w-full rounded-2xl border border-slate-200 bg-white"
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-[#F4FAF7] px-6 py-14 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1C5E6E] shadow-sm">
        <FileText size={22} strokeWidth={1.8} aria-hidden="true" />
      </span>

      <p className="mt-5 text-[16px] font-semibold text-[#0F2A31]">
        The application form loads here.
      </p>

      <p className="mt-2 max-w-sm text-[14px] leading-6 text-slate-600">
        It is hosted on Google Forms, so it is fetched only when you are ready
        to fill it in. It opens in place — no new tab needed.
      </p>

      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0F2A31] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#1C5E6E]"
      >
        Start my application
        <ArrowUpRight size={15} strokeWidth={2.3} aria-hidden="true" />
      </button>

      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex min-h-11 items-center text-[13px] font-semibold text-[#1C5E6E] underline decoration-[#9FDEAF] underline-offset-4"
      >
        Or open it in a new tab
      </a>
    </div>
  );
}
