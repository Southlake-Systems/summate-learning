"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Longest wait before an element starts, however many arrive together.
const MAX_STAGGER = 1400;
// Gap between consecutive elements unless a [data-reveal-step] ancestor overrides it.
const DEFAULT_STEP = 70;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Plays every [data-reveal] element on the page in reading order.
 *
 * Elements that enter the viewport together are staggered in DOM order, so the
 * page assembles itself top to bottom, left to right. Nothing starts until
 * `ready` (the loading screen has cleared), and reduced-motion users get the
 * page fully visible with no reveals.
 */
export default function Choreography({ ready }: { ready: boolean }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = document.documentElement;
    root.classList.add("rv-on");
    return () => root.classList.remove("rv-on");
  }, []);

  useEffect(() => {
    if (!ready || prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
          );

        let offset = 0;
        for (const el of entering) {
          const extra = Number(el.dataset.revealDelay ?? 0);
          // A negative data-reveal-delay pulls an element earlier in its batch (never before 0).
          const delay = Math.max(0, Math.min(offset, MAX_STAGGER) + extra);
          el.style.setProperty("--rv-d", `${delay}ms`);
          // An attribute, not a class: React rewrites className on re-render.
          el.setAttribute("data-in", "");
          io.unobserve(el);

          // data-reveal-step sets the gap between an element's descendants, not the element itself.
          const host = el.parentElement?.closest<HTMLElement>("[data-reveal-step]");
          offset += Number(host?.dataset.revealStep ?? DEFAULT_STEP);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll("[data-reveal]:not([data-in])")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ready]);

  return null;
}

/** Thin brand-coloured bar showing how far down the page the reader is. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="h-full origin-left bg-gradient-to-r from-[#1D5F6E] via-[#55C9B8] to-[#9FDEAF]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

/** Appears once the hero is out of view and returns the reader to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })
      }
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-[#0F2A30] shadow-[0_10px_30px_rgba(15,42,48,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1D5F6E] sm:bottom-7 sm:right-7 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={17} strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}
