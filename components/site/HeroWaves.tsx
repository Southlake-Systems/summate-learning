"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Decorative LineWaves field for the careers hero.
 *
 * The shader is expensive to run (a full-screen fragment shader at device
 * pixel ratio), so it is:
 *  - code-split, so its ~12 kB never lands in the shared chunk;
 *  - mounted only after the page is idle, so it cannot compete with LCP;
 *  - skipped for reduced-motion, Save-Data and slow-network visitors, who get
 *    the static line pattern instead.
 */
const LineWaves = dynamic(() => import("@/components/LineWaves"), {
  ssr: false,
  loading: () => null,
});

type Connection = { saveData?: boolean; effectiveType?: string };

export default function HeroWaves() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const constrained = Boolean(
      connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")
    );
    if (reduced || constrained) return;

    const start = () => setActive(true);
    const idle = window.requestIdleCallback?.bind(window);
    if (idle) {
      const handle = idle(start, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(handle);
    }
    const timer = window.setTimeout(start, 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Static stand-in, shown until (and unless) the animated field loads. */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(28,94,110,0.12) 0 1px, transparent 1px 15px)",
          opacity: active ? 0 : 1,
        }}
      />

      {active && (
        <LineWaves
          color1="#9FDEAF"
          color2="#1C5E6E"
          color3="#1C5E6E"
          lightMode
          speed={0.22}
          colorCycleSpeed={0.6}
          lineCount={40}
          lineWidth={1.25}
          glow={0.55}
          brightness={1.15}
          highlight={0.55}
          highlightWidth={1.4}
          warpIntensity={0.85}
          warpScale={1.15}
          rotation={-22}
          edgeFade={0.5}
          opacity={0.9}
          mouseInfluence={1.6}
          maxDevicePixelRatio={1.25}
        />
      )}
    </div>
  );
}
