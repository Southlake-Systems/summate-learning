"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

type Pillar = {
  num: string;
  icon: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    icon: "BookOpen",
    image: "/philosophy1.jpg",
    imageAlt: "A stack of books beside a cup of pencils on a bright desk",
    imagePosition: "60% 70%",
    title: "Beyond the Syllabus",
    subtitle:
      "Learning is not a checklist of things you have completed.",
    body:
      "Summate goes beyond “here is the concept, here is the assignment, next chapter.” We focus on understanding, applying, questioning, making mistakes and figuring things out because that's how knowledge becomes a skill.",
  },
  {
    num: "02",
    icon: "ArrowUpRight",
    image: "/philosophy2.jpg",
    imageAlt: "A laptop on a desk showing the words Skills Create Opportunities",
    imagePosition: "55% 50%",
    title: "Skills Need Somewhere to Go",
    subtitle:
      "A skill becomes valuable when you can actually use it.",
    body:
      "What you learn should have somewhere to land — a project, a problem, a conversation, an interview, a workplace or the next opportunity you are choosing to pursue.",
  },
  {
    num: "03",
    icon: "Zap",
    image: "/philosophy3.jpg",
    imageAlt: "A glowing light bulb above a stack of books labelled Adapt, Learn, Grow",
    imagePosition: "50% 50%",
    title: "Work is Changing. Learning Must Too.",
    subtitle:
      "The way we work is changing. Learning has to change with it.",
    body:
      "Technology, AI and workplaces are moving faster than traditional curricula can sometimes keep up. We want learners to understand the tool, think around it, work with it and adapt when the tool changes.",
  },
];

export default function PhilosophyCards() {
  // null = nothing selected on first load
  const [active, setActive] = useState<number | null>(null);

  // null = no card is currently flipped
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    // Selecting a different card brings it to the center
    if (active !== index) {
      setActive(index);
      setFlipped(null);
      return;
    }

    // Clicking the centered card flips it
    setFlipped(flipped === index ? null : index);
  };

  return (
    <div className="mt-10">
      {/* =========================================================
          DESKTOP
      ========================================================= */}
      <div className="hidden h-[590px] items-center justify-center gap-5 lg:flex">
        {pillars.map((pillar, index) => {
          const isActive = active === index;
          const isFlipped = flipped === index;

          return (
            <button
              key={pillar.num}
              type="button"
              onClick={() => handleSelect(index)}
              aria-label={
                active === null
                  ? `Choose ${pillar.title}`
                  : isActive
                    ? `Flip ${pillar.title}`
                    : `Bring ${pillar.title} to center`
              }
              className={`
                group relative w-[31%]
                [perspective:1200px]
                transition-all duration-500 ease-out
                ${
                  active === null
                    ? index === 1
                      ? "z-10 h-[450px] -translate-y-5"
                      : "z-10 h-[420px] translate-y-5"
                    : isActive
                      ? "z-30 h-[480px] -translate-y-8"
                      : index < active
                        ? "z-10 h-[420px] -translate-x-2 translate-y-7"
                        : "z-10 h-[420px] translate-x-2 translate-y-7"
                }
              `}
            >
              {/* =====================================================
                  CARD INNER
              ===================================================== */}
              <div
                className={`
                  relative h-full w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                `}
              >
                {/* ===================================================
                    FRONT
                =================================================== */}
                <div
                  className={`
                    absolute inset-0 flex flex-col overflow-hidden
                    rounded-[30px] border bg-white p-8 text-left
                    [backface-visibility:hidden]
                    transition-all duration-500
                    ${
                      isActive
                        ? "border-[#1E3ABA]/30 shadow-[0_30px_80px_rgba(30,58,186,0.16)]"
                        : "border-slate-200 shadow-[0_16px_40px_rgba(13,18,34,0.06)] group-hover:-translate-y-2 group-hover:shadow-[0_24px_55px_rgba(13,18,34,0.10)]"
                    }
                  `}
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 55%, transparent)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 55%, transparent)",
                    }}
                  >
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 380px, 31vw"
                      className={`
                        object-cover transition-transform duration-700
                        ${isActive ? "scale-105" : "scale-100"}
                      `}
                      style={{ objectPosition: pillar.imagePosition }}
                    />
                  </div>

                  {/* =================================================
                      LARGE BACKGROUND NUMBER
                  ================================================= */}
                  <div
                    className={`
                      pointer-events-none absolute -right-3 -top-8 select-none
                      text-[150px] font-extrabold leading-none
                      tracking-[-0.08em]
                      transition-colors duration-500
                      ${
                        isActive
                          ? "text-[#EEF2FF]"
                          : "text-slate-100"
                      }
                    `}
                  >
                    {pillar.num}
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <div
                    className={`
                      relative flex h-12 w-12 items-center justify-center
                      rounded-2xl transition-all duration-500
                      ${
                        isActive
                          ? "bg-[#1E3ABA] text-white shadow-lg shadow-[#1E3ABA]/20"
                          : "bg-[#EEF2FF] text-[#1E3ABA]"
                      }
                    `}
                  >
                    <Icon
                      name={pillar.icon}
                      size={21}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="relative mt-auto">
                    {/* Active state indicator */}
                    {isActive && (
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
                          Explore this idea
                        </span>
                      </div>
                    )}

                    <p className="mb-3 font-mono text-[11px] font-semibold tracking-[0.15em] text-slate-400">
                      IDEA {pillar.num}
                    </p>

                    <h3
                      className={`
                        font-extrabold leading-[1.1] tracking-[-0.035em]
                        text-[#0D1222]
                        ${
                          isActive
                            ? "text-[28px]"
                            : "text-[25px]"
                        }
                      `}
                    >
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* =================================================
                      INTERACTION FOOTER
                  ================================================= */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      {active === null
                        ? "Choose an idea"
                        : isActive
                          ? "Click to explore"
                          : "Bring to center"}
                    </span>

                    <span
                      className={`
                        flex h-8 w-8 items-center justify-center
                        rounded-full border
                        transition-all duration-300
                        ${
                          isActive
                            ? "border-[#1E3ABA] bg-[#1E3ABA] text-white"
                            : "border-slate-200 text-slate-400 group-hover:border-[#1E3ABA]/30 group-hover:text-[#1E3ABA]"
                        }
                      `}
                    >
                      <Icon
                        name={
                          isActive
                            ? "ArrowUpRight"
                            : "ArrowRight"
                        }
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  {/* =================================================
                      ACTIVE BOTTOM LINE
                  ================================================= */}
                  <div
                    className={`
                      absolute bottom-0 left-0 h-1
                      bg-[#1E3ABA]
                      transition-all duration-500
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </div>

                {/* ===================================================
                    BACK
                =================================================== */}
                <div
                  className="
                    absolute inset-0 flex flex-col overflow-hidden
                    rounded-[30px] bg-[#0D1222] p-8 text-left text-white
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                  "
                >
                  {/* Decorative glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-24 -top-24 h-64 w-64
                      rounded-full bg-[#1E3ABA]
                      opacity-40 blur-3xl
                    "
                  />

                  {/* Top */}
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-blue-300">
                      IDEA {pillar.num}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Icon
                        name={pillar.icon}
                        size={19}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative mt-auto">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                      The idea behind it
                    </p>

                    <h3 className="max-w-[300px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.035em]">
                      {pillar.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Click to flip back
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white">
                      <Icon
                        name="RotateCcw"
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================
          MOBILE
      ========================================================= */}
      <div className="space-y-4 lg:hidden">
        {pillars.map((pillar, index) => {
          const isActive = active === index;
          const isFlipped = flipped === index;

          return (
            <button
              key={pillar.num}
              type="button"
              onClick={() => handleSelect(index)}
              aria-label={
                active === null
                  ? `Choose ${pillar.title}`
                  : isActive
                    ? `Flip ${pillar.title}`
                    : `Select ${pillar.title}`
              }
              className="relative block w-full text-left"
            >
              <div
                className={`
                  relative overflow-hidden rounded-[26px]
                  border p-6
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-[#1E3ABA]/30 bg-white shadow-xl shadow-[#1E3ABA]/10"
                      : "border-slate-200 bg-[#FAFBFF]"
                  }
                `}
              >
                {!isFlipped ? (
                  <>
                    {/* Image banner */}
                    <div
                      className="pointer-events-none relative -mx-6 -mt-6 mb-5 h-44"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, black 60%, transparent)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black 60%, transparent)",
                      }}
                    >
                      <Image
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 0px"
                        className="object-cover"
                        style={{ objectPosition: pillar.imagePosition }}
                      />
                    </div>

                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`
                          flex h-11 w-11 items-center justify-center
                          rounded-2xl
                          ${
                            isActive
                              ? "bg-[#1E3ABA] text-white"
                              : "bg-[#EEF2FF] text-[#1E3ABA]"
                          }
                        `}
                      >
                        <Icon
                          name={pillar.icon}
                          size={20}
                          strokeWidth={1.9}
                        />
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-400">
                        {pillar.num}
                      </span>
                    </div>

                    {/* Active label */}
                    {isActive && (
                      <div className="mt-6 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
                          Explore this idea
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.035em] text-[#0D1222]">
                      {pillar.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">
                      {pillar.subtitle}
                    </p>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        {active === null
                          ? "Choose an idea"
                          : isActive
                            ? "Tap to explore"
                            : "Bring to center"}
                      </span>

                      <span
                        className={`
                          flex h-8 w-8 items-center justify-center
                          rounded-full border
                          ${
                            isActive
                              ? "border-[#1E3ABA] bg-[#1E3ABA] text-white"
                              : "border-slate-200 text-[#1E3ABA]"
                          }
                        `}
                      >
                        <Icon
                          name={
                            isActive
                              ? "ArrowUpRight"
                              : "ArrowRight"
                          }
                          size={14}
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Back top */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-300">
                        IDEA {pillar.num}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                        <Icon
                          name="RotateCcw"
                          size={16}
                          className="text-slate-500"
                        />
                      </span>
                    </div>

                    {/* Back content */}
                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
                      The idea behind it
                    </p>

                    <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-[#0D1222]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {pillar.body}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Tap to flip back
                      </span>
                    </div>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}