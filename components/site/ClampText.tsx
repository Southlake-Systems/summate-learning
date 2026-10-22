"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 639px)";

/**
 * On phones, cuts text down to a few lines and adds a "Read more" toggle when it runs longer.
 * Wider screens always show everything. Works on a single paragraph or a group of them.
 */
export function ClampText({
  children,
  className,
  lines = 4,
  onDark,
}: {
  children: ReactNode;
  className?: string;
  lines?: number;
  onDark?: boolean;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState(false);
  const [limit, setLimit] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(MOBILE_QUERY);

    const measure = () => {
      if (!mq.matches) {
        setLimit(null);
      } else {
        const lineEl = el.querySelector("p") ?? el;
        const lh = parseFloat(getComputedStyle(lineEl).lineHeight);
        const max = Math.round(lh * lines);
        // Only clamp when the text actually runs past the limit.
        setLimit(el.scrollHeight > max + 1 ? max : null);
      }
      setMeasured(true);
    };

    measure();
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [lines]);

  const clamped = limit !== null && !expanded;

  return (
    <div className={className}>
      <div
        id={id}
        ref={ref}
        // Before measuring, approximate four lines so phones don't flash the full text.
        className={cn(!measured && "max-sm:max-h-[6.8em] max-sm:overflow-hidden", clamped && "overflow-hidden")}
        style={clamped ? { maxHeight: limit } : undefined}
      >
        {children}
      </div>
      {limit !== null && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            "mt-2 text-[15px] font-semibold underline underline-offset-[5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            onDark
              ? "text-white decoration-white/40 focus-visible:outline-white"
              : "text-[#1D5F6E] decoration-[#1D5F6E]/30 focus-visible:outline-[#1D5F6E]"
          )}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
