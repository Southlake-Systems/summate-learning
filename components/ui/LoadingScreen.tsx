"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
  logoSrc?: string;
}

export default function LoadingScreen({
  onComplete,
  minDuration = 800,
  logoSrc = "/logo.png",
}: LoadingScreenProps) {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setHidden(true);
        onComplete?.();
      }, 500);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  if (hidden) return null;

  return (
    <aside
      aria-label="Loading page"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-500 ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Centered Ambient Glow */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-tr from-blue-100/60 via-purple-100/40 to-transparent blur-3xl animate-pulse" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Subtle Breathing Scale */}
        <div className="relative flex items-center justify-center transition-transform duration-700 ease-out animate-pulse">
          <Image
            src={logoSrc}
            alt="Summate Learning"
            width={170}
            height={46}
            className="h-10 w-auto object-contain select-none"
            priority
          />
        </div>

        {/* Minimal Linear Indeterminate Accent Line */}
        <div className="mt-8 h-[2px] w-36 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] animate-[shimmer_1.2s_infinite_ease-in-out]" />
        </div>
      </div>
    </aside>
  );
}