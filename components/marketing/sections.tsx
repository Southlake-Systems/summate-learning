import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { courses } from "@/lib/pageContent";
import PhilosophyCards from "@/components/ui/philosophy-cards";
import GradientASCII from "@/components/GradientASCII";
import LogoLoop from "@/components/LogoLoop";
import SpotlightCard from "@/components/SpotlightCard";
import StarBorder from "@/components/StarBorder";
import { Avatar } from "@/components/ui/primitives";
import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

import {
  APPLY_URL,
  hero,
  partners,
  community,
  mentors,
  founders,
  insights,
  banners,
} from "@/lib/siteContent";

/* ---------------- 01. Hero ---------------- */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white" id="hero">

      {/* =====================================================
          ANIMATION + REDUCED MOTION
      ====================================================== */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes heroFloatReverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes heroGlow {
          0%, 100% {
            opacity: .55;
            transform: scale(1);
          }
          50% {
            opacity: .8;
            transform: scale(1.08);
          }
        }

        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-float-reverse {
          animation: heroFloatReverse 6s ease-in-out infinite;
        }

        .hero-glow {
          animation: heroGlow 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-float,
          .hero-float-reverse,
          .hero-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      {/* Blue glow */}
      <div
        className="hero-glow pointer-events-none absolute -left-48 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-[#1D5F6E]/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Purple / pink glow */}
      <div
        className="hero-glow pointer-events-none absolute right-[8%] top-[-120px] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#55C9B8]/10 via-[#EF6F51]/10 to-[#F4B942]/10 blur-[110px]"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.28]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,95,110,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(29,95,110,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-0">

        {/* =====================================================
            MAIN HERO
        ====================================================== */}

        <div className="grid min-h-[750px] grid-cols-1 items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-4 lg:py-20">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div className="relative z-20 lg:col-span-6">

            {/* Brand motif */}
            <div
              className="flex items-center gap-3 text-[13px] font-extrabold tracking-[0.2em]"
              data-reveal-step="90"
            >
              <span data-reveal="rise" className="text-[#1D5F6E]">LEARN</span>
              <span data-reveal="fade" className="text-slate-300">•</span>
              <span data-reveal="rise" className="text-[#23857A]">APPLY</span>
              <span data-reveal="fade" className="text-slate-300">•</span>
              <span data-reveal="rise" className="bg-gradient-to-br from-[#2A7A88] via-[#1D5F6E] to-[#12424D] bg-clip-text text-transparent">ACHIEVE</span>
            </div>

            {/* Heading */}
            <h1
              className="mt-6 max-w-[650px] text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0F2A30] sm:text-5xl lg:text-[60px] xl:text-[66px]"
              data-reveal-step="90"
            >
              <span data-reveal="line"><span>You are more than</span></span>
              <span data-reveal="line"><span>what you already</span></span>

              <span data-reveal="line" className="-mb-3 pb-3"><span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#1D5F6E] via-[#2A8C8C] to-[#55C9B8] bg-clip-text text-transparent">
                  know.
                </span>

                {/* Small accent underline, drawn once the word has landed */}
                <span
                  data-reveal="draw"
                  data-reveal-delay="650"
                  className="absolute -bottom-1 left-0 h-[4px] w-[90%] rounded-full bg-gradient-to-r from-[#1D5F6E] via-[#55C9B8] to-[#9FDEAF]"
                />
              </span></span>
            </h1>

            {/* Description */}
            <p
              data-reveal="rise"
              className="mt-7 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base lg:text-[17px]"
            >
              {hero.body[0]}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              <StarBorder
                as="a"
                data-reveal="rise"
                href={APPLY_URL}
                radius={999}
                thickness={1}
                duration={5}
                glow={0.3}
                color="#F4B942"
                trailColor="#55C9B8"
                borderColor="rgba(255,255,255,0.22)"
                backgroundColor="#EF6F51"
                textColor="#FFFFFF"
                className="group px-7 py-3.5 text-sm font-bold shadow-[0_10px_28px_rgba(239,111,81,0.28)] transition-transform duration-300 hover:-translate-y-1"
              >
                Apply for Batch 1

                <Icon
                  name="ArrowRight"
                  size={15}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </StarBorder>

              <Link
                data-reveal="rise"
                href="/#programs"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2A30] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1D5F6E]/20 hover:shadow-md"
              >
                Explore Programs

                <Icon
                  name="ArrowUpRight"
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>

            {/* =================================================
                FEATURE STRIP
            ================================================== */}
            <div
              data-reveal="draw"
              className="mt-10 border-t border-slate-200/80 pt-6"
            >
              {/* <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">

                {[
                  {
                    label: "Live Online",
                    icon: "Users",
                    color: "#1D5F6E",
                    bg: "#E6F2F3",
                  },
                  {
                    label: "12 Weeks",
                    icon: "Calendar",
                    color: "#55C9B8",
                    bg: "#E9F8F5",
                  },
                  {
                    label: "Project Driven",
                    icon: "Laptop",
                    color: "#F4B942",
                    bg: "#FEF6E3",
                  },
                  {
                    label: "AI Assisted",
                    icon: "Sparkles",
                    color: "#EF6F51",
                    bg: "#FDEEEA",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2 shadow-[0_4px_16px_rgba(15,42,48,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: item.bg,
                        color: item.color,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={13}
                        strokeWidth={2.2}
                      />
                    </span>

                    <span className="text-xs font-semibold text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}

              </div> */}
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}
          <div className="relative flex min-h-[470px] items-center justify-center lg:col-span-6 lg:min-h-[560px]">

            {/* Main glow behind visual */}
            <div
              className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#1D5F6E]/20 via-[#55C9B8]/20 to-[#EF6F51]/10 blur-[80px]"
              aria-hidden="true"
            />

            {/* Geometric depth shape */}
            <div
              className="hero-float pointer-events-none absolute right-[7%] top-[8%] h-[330px] w-[330px] rotate-[18deg] rounded-[72px] bg-gradient-to-br from-[#1D5F6E]/20 via-[#55C9B8]/20 to-[#EF6F51]/20 blur-[1px]"
              aria-hidden="true"
            />

            {/* Secondary geometric shape */}
            <div
              className="hero-float-reverse pointer-events-none absolute bottom-[8%] left-[5%] h-[170px] w-[170px] rounded-full bg-gradient-to-br from-[#55C9B8]/15 to-[#55C9B8]/10 blur-[2px]"
              aria-hidden="true"
            />

            {/* Decorative ring */}
            <div
              data-reveal="pop"
              data-reveal-delay="-700"
              className="pointer-events-none absolute right-[8%] top-[13%] h-[190px] w-[190px] rounded-full border border-[#55C9B8]/20"
              aria-hidden="true"
            />

            <div
              data-reveal="pop"
              data-reveal-delay="-700"
              className="pointer-events-none absolute right-[12%] top-[17%] h-[130px] w-[130px] rounded-full border border-[#EF6F51]/15"
              aria-hidden="true"
            />

            {/* Main image */}
            <div data-reveal="image" data-reveal-delay="-700" className="relative z-10 w-full max-w-[530px]">
              <Image
                src="/hero_right.png"
                alt="Summate Learning student building skills"
                width={600}
                height={650}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_45px_rgba(15,42,48,0.12)]"
              />
            </div>

            {/* =================================================
                FLOATING CARDS
            ================================================== */}

            {/* Build */}
            <div data-reveal="pop" className="absolute left-[-2%] top-[12%] z-20 hidden sm:block">
              <div className="hero-float flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(15,42,48,0.10)] backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E6F2F3] text-[#1D5F6E]">
                  <Icon name="Code2" size={17} strokeWidth={2} />
                </div>

                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0F2A30]">
                    Build
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Real Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Learn */}
            <div data-reveal="pop" className="absolute bottom-[13%] left-[0%] z-20 hidden sm:block">
              <div className="hero-float-reverse flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(15,42,48,0.10)] backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#23857A]">
                  <Icon name="Brain" size={17} strokeWidth={2} />
                </div>

                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0F2A30]">
                    Learn with
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Industry Experts
                  </p>
                </div>
              </div>
            </div>

            {/* Career */}
            <div data-reveal="pop" className="absolute right-[-1%] top-[22%] z-20 hidden sm:block">
              <div className="hero-float-reverse flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(15,42,48,0.10)] backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FDEEEA] text-[#EF6F51]">
                  <Icon name="TrendingUp" size={17} strokeWidth={2} />
                </div>

                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0F2A30]">
                    Career
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Future Ready */}
            <div data-reveal="pop" className="absolute bottom-[17%] right-[0%] z-20 hidden sm:block">
              <div className="hero-float flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(15,42,48,0.10)] backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF6E3] text-[#F4B942]">
                  <Icon name="Rocket" size={17} strokeWidth={2} />
                </div>

                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0F2A30]">
                    Future Ready
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Skills
                  </p>
                </div>
              </div>
            </div>

            {/* Tiny decorative dots */}
            <div data-reveal="fade" className="pointer-events-none absolute right-[2%] top-[5%] grid grid-cols-4 gap-2 opacity-40">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1 w-1 rounded-full bg-[#55C9B8]"
                />
              ))}
            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM TRANSITION
        ====================================================== */}

        <div className="relative h-20 lg:h-24">

          {/* Soft color horizon */}
          <div data-reveal="draw" className="absolute left-1/2 top-1/2 h-px w-[75%] origin-center -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D5F6E]/20 via-[#55C9B8]/30 to-transparent" />

          {/* Transition glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#1D5F6E]/5 via-[#55C9B8]/10 to-[#F4B942]/5 blur-2xl" />

        </div>

      </div>
    </section>
  );
}

/* ---------------- 02. Logo Marquee ---------------- */
// export function LogoMarquee() {
//   const row = [...(partners?.logos ?? []), ...(partners?.logos ?? [])];
//   return (
//     <section className="border-y border-slate-100 bg-[#F7FBFB] py-8">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <p className="text-center text-xs font-medium text-slate-400">
//           {partners?.label}
//         </p>
//         <div className="relative mt-5 flex overflow-hidden">
//           <div className="flex animate-marquee gap-10 whitespace-nowrap text-sm font-medium text-slate-500">
//             {row.map((name, i) => (
//               <span key={i} className="inline-flex items-center gap-2">
//                 <Icon name="Building2" size={15} className="text-slate-400" />
//                 {name}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export function WhySummate() {
  const gaps = [
    {
      num: "01",
      text: "A learner can finish a course without knowing how to solve a problem they haven't seen before.",
      icon: "FileText",
    },
    {
      num: "02",
      text: "Collect certificates without knowing how to demonstrate the skill behind them.",
      icon: "Award",
    },
    {
      num: "03",
      text: "Learn ten tools without understanding which one to reach for.",
      icon: "Layers",
    },
    {
      num: "04",
      text: "Spend months preparing for a career without ever being asked to think like someone already in it.",
      icon: "UserCheck",
    },
  ];

  const pillars = [
    {
      num: "01",
      icon: "BookOpen",
      title: "Beyond the Syllabus",
      subtitle:
        "Learning is not a checklist of things you have completed.",
      body:
        "Summate goes beyond “here is the concept, here is the assignment, next chapter.” We focus on understanding, applying, questioning, making mistakes and figuring things out because that's how knowledge becomes a skill.",
    },
    {
      num: "02",
      icon: "ArrowUpRight",
      title: "Skills Need Somewhere to Go",
      subtitle:
        "A skill becomes valuable when you can actually use it.",
      body:
        "What you learn should have somewhere to land — a project, a problem, a conversation, an interview, a workplace or the next opportunity you are choosing to pursue.",
    },
    {
      num: "03",
      icon: "Zap",
      title: "Work is Changing. Learning Must Too.",
      subtitle:
        "The way we work is changing. Learning has to change with it.",
      body:
        "Technology, AI and workplaces are moving faster than traditional curricula can sometimes keep up. We want learners to understand the tool, think around it, work with it and adapt when the tool changes.",
    },
  ];

  return (
    <section
  id="why-summate"
  className="relative isolate overflow-hidden border-t border-slate-100 bg-white"
>
  {/* =====================================================
      SECTION TRANSITION / AMBIENT DEPTH
  ====================================================== */}

  {/* Soft top transition */}
  <div
    className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F1F8F8] via-[#F7FBFB] to-transparent"
    aria-hidden="true"
  />

  {/* Left ambient glow */}
  <div
    className="pointer-events-none absolute -left-56 top-[28%] h-[520px] w-[520px] rounded-full bg-[#1D5F6E]/[0.045] blur-[120px]"
    aria-hidden="true"
  />

  {/* Right ambient glow */}
  <div
    className="pointer-events-none absolute -right-52 top-[10%] h-[620px] w-[620px] rounded-full bg-gradient-to-br from-[#55C9B8]/[0.05] via-[#EF6F51]/[0.035] to-[#F4B942]/[0.025] blur-[130px]"
    aria-hidden="true"
  />

  {/* Very subtle grid */}
  <div
    className="pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-[0.22]"
    aria-hidden="true"
    style={{
      backgroundImage:
        "linear-gradient(rgba(29,95,110,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(29,95,110,0.035) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      maskImage:
        "linear-gradient(to bottom, black 0%, rgba(0,0,0,.65) 45%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, black 0%, rgba(0,0,0,.65) 45%, transparent 100%)",
    }}
  />

  {/* =====================================================
      CONTENT
  ====================================================== */}

  <div className="relative mx-auto max-w-[1180px] px-6 py-14 sm:px-8 lg:px-0 lg:py-20">

    {/* ===================================================
        HEADER
    ==================================================== */}

    <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">

      <div>
        {/* Section marker */}
        <div className="mb-6 flex items-center gap-3">
          <span data-reveal="draw" className="relative h-px w-12 overflow-hidden bg-[#D3E6E8]">
            <span className="absolute inset-y-0 left-0 w-7 bg-[#1D5F6E]" />
          </span>

          <span data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#1D5F6E]">
            Why Summate
          </span>
        </div>

        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-[#0F2A30] sm:text-5xl lg:text-[56px]">
          <span data-reveal="line"><span>Because learning shouldn't stop</span></span>
          <span data-reveal="line"><span>where the syllabus ends.</span></span>
        </h2>
      </div>

      <div className="relative lg:pb-1">
        {/* Small vertical accent */}
        <div className="absolute -left-5 top-1 hidden h-12 w-px bg-gradient-to-b from-[#1D5F6E] to-transparent lg:block" />

        <p data-reveal="rise" className="max-w-lg text-[16px] font-medium leading-7 text-slate-500">
          There are courses, certificates, tutorials, bootcamps and
          promises of “job-ready” skills everywhere. But knowing something
          is not the same as knowing what to do with it.
        </p>
      </div>
    </div>

    {/* ===================================================
        THE GAP
    ==================================================== */}

    <div data-reveal="rise" className="relative mt-20">

      {/* Section label floating above border */}
      <div className="absolute -top-3 left-7 z-10 bg-white px-3">
        <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-600">
          The gap
        </span>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,42,48,0.045)]">

        <div className="grid lg:grid-cols-[230px_1fr]">

          {/* -----------------------------------------------
              LEFT LABEL
          ------------------------------------------------ */}

          <div className="relative border-b border-slate-200 bg-[#F7FBFB] px-7 py-8 lg:border-b-0 lg:border-r">
            {/* Vertical accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#1D5F6E] via-[#55C9B8] to-transparent" />

        
            <p className="mt-4 max-w-[180px] text-[15px] font-semibold leading-6 text-[#0F2A30]">
              Where knowing something isn't enough.
            </p>

          </div>

          {/* -----------------------------------------------
              GAP ITEMS
          ------------------------------------------------ */}

          <div className="grid sm:grid-cols-2" data-reveal-step="110">
            {gaps.map((gap, index) => (
              <div
                key={gap.num}
                data-reveal="rise"
                className={`
                  group relative flex min-h-[150px] gap-5 px-6 py-7
                  transition-all duration-300
                  hover:bg-[#F7FBFB]
                  sm:px-7 sm:py-8
                  ${index < 2 ? "border-b border-slate-200" : ""}
                  ${index % 2 === 0 ? "sm:border-r border-slate-200" : ""}
                `}
              >
                {/* Number */}
                <div className="relative shrink-0">
                  <span
                    className="
                      font-mono text-[11px] font-semibold tracking-wider
                      text-[#1D5F6E]
                      transition-all duration-300
                      group-hover:text-[#23857A]
                    "
                  >
                    {gap.num}
                  </span>

                  <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-slate-200 transition-all duration-300 group-hover:bg-[#1D5F6E]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="
                      max-w-md text-sm font-semibold leading-6 text-slate-700
                      transition-colors duration-300
                      group-hover:text-[#0F2A30]
                    "
                  >
                    {gap.text}
                  </p>

                  {/* Hover line */}
                  <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#1D5F6E] to-[#55C9B8] transition-all duration-500 group-hover:w-16" />
                </div>

                {/* Arrow */}
                <div
                  className="
                    flex h-8 w-8 shrink-0 items-center justify-center
                    rounded-full border border-slate-200
                    text-slate-300
                    transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:border-[#1D5F6E]/20
                    group-hover:bg-[#E8F4F4]
                    group-hover:text-[#1D5F6E]
                  "
                >
                  <Icon
                    name="ArrowUpRight"
                    size={13}
                    strokeWidth={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ===================================================
        CORE PILLARS
    ==================================================== */}

    <div className="relative mt-28">

      {/* Large background numbers */}
      <div
        className="pointer-events-none absolute -right-4 -top-20 hidden select-none lg:block"
        aria-hidden="true"
      >
        <span className="font-mono text-[180px] font-bold leading-none tracking-[-0.08em] text-slate-50">
          01
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-10 flex items-end justify-between gap-6">
        <div data-reveal="rise">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-600">
            What we believe
          </p>

          <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0F2A30] sm:text-3xl">
            Three ideas behind how we teach.
          </h3>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            01 — 03
          </span>

          <span data-reveal="draw" className="h-px w-24 bg-gradient-to-r from-slate-300 to-transparent" />
        </div>
      </div>

      {/* Cards */}
      <div data-reveal="rise" className="relative">
        <PhilosophyCards />

        {/* Decorative vertical line */}
        <div
          className="pointer-events-none absolute -right-6 top-10 hidden h-[80%] w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent xl:block"
          aria-hidden="true"
        />
      </div>
    </div>

    {/* ===================================================
        PHILOSOPHY / TRANSITION
    ==================================================== */}

    <div data-reveal="rise" className="relative mt-24">

      {/* Glow behind dark panel */}
      <div
        className="pointer-events-none absolute -inset-x-12 -bottom-12 h-40 rounded-full bg-[#1D5F6E]/10 blur-[70px]"
        aria-hidden="true"
      />

      <div
        className="
          group relative overflow-hidden rounded-[28px]
          bg-[#0F2A30]
          px-7 py-10
          shadow-[0_30px_80px_rgba(15,42,48,0.16)]
          sm:px-10 sm:py-11
        "
      >

        {/* Grid inside dark panel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to right, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to right, black, transparent 75%)",
          }}
        />

        {/* Blue glow */}
        <div
          className="
            pointer-events-none absolute
            -right-28 -top-32
            h-80 w-80
            rounded-full
            bg-[#1D5F6E]/30
            blur-[80px]
            transition-transform duration-1000
            group-hover:scale-110
          "
          aria-hidden="true"
        />

        {/* Purple glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-40 left-[38%]
            h-72 w-72
            rounded-full
            bg-[#55C9B8]/20
            blur-[80px]
          "
          aria-hidden="true"
        />

        {/* Decorative corner geometry */}
        <div
          className="pointer-events-none absolute right-8 top-8 h-16 w-16 rounded-full border border-white/[0.08]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-[57px] top-[57px] h-2 w-2 rounded-full bg-[#55C9B8]"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-9 md:flex-row md:items-center md:justify-between">

          <div className="max-w-2xl">

            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400">
              The Summate philosophy
            </p>

            <p className="mt-4 text-xl font-semibold leading-8 tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
              The goal isn't simply to know more.
              <span className="text-slate-500">
                {" "}
                It's to know what to do with what you know.
              </span>
            </p>

          </div>

          {/* Brand signature */}
          <div className="relative shrink-0">

            <div
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]"
              data-reveal-step="160"
            >

              <span data-reveal="rise" data-reveal-delay="300" className="text-white">
                LEARN
              </span>

              <span data-reveal="fade" data-reveal-delay="300" className="text-slate-600">
                →
              </span>

              <span data-reveal="rise" data-reveal-delay="300" className="text-slate-300">
                APPLY
              </span>

              <span data-reveal="fade" data-reveal-delay="300" className="text-slate-600">
                →
              </span>

              <span data-reveal="rise" data-reveal-delay="300" className="bg-gradient-to-br from-[#B9EDE4] via-[#45ACA8] to-[#1D5F6E] bg-clip-text text-transparent">
                ACHIEVE
              </span>

            </div>

            {/* Signature underline, drawn after the three words */}
            <div data-reveal="draw" data-reveal-delay="300" className="mt-3 h-px w-full bg-gradient-to-r from-[#1D5F6E] via-[#55C9B8] to-[#9FDEAF]" />

          </div>
        </div>
      </div>
    </div>

    {/* ===================================================
        BOTTOM TRANSITION
    ==================================================== */}

    <div className="relative mt-20 flex items-center justify-center" data-reveal-step="120">
      <div data-reveal="draw" className="h-px w-full origin-center bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="absolute flex items-center gap-2 bg-white px-5">
        <span data-reveal="pop" className="h-1.5 w-1.5 rounded-full bg-[#1D5F6E]" />
        <span data-reveal="pop" className="h-1.5 w-1.5 rounded-full bg-[#55C9B8]" />
        <span data-reveal="pop" className="h-1.5 w-1.5 rounded-full bg-[#EF6F51]" />
      </div>
    </div>

  </div>
</section>
  );
}
export function TrackCatalog() {
  const tracks = courses.map((course, index) => ({
    ...course,
    number: String(index + 1).padStart(2, "0"),
    featured: course.status === "open",
  }));
  const categories = courses
    .map((course) => course.category)
    .filter((category, index, all) => all.indexOf(category) === index);

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-white py-12 lg:py-20"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#1D5F6E]/[0.035] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#55C9B8]/[0.04] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-0">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span data-reveal="draw" className="h-px w-10 bg-[#1D5F6E]" />

            <span data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#1D5F6E]">
              Programs
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0F2A30] sm:text-5xl lg:text-[56px]">
            <span data-reveal="line">
              <span>
                Learning that leads
                <span className="text-slate-400"> somewhere.</span>
              </span>
            </span>
          </h2>

          <p data-reveal="rise" className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore learning paths designed around practical skills,
            real work and what comes next.
          </p>
        </div>

        {/* ===================================================
            PROGRAM SHELF
        ==================================================== */}

        <div
          data-reveal="image"
          className="
            relative overflow-hidden
            rounded-[32px]
            p-5
            sm:p-6
            lg:p-7
          "
          style={{
            background:
              "linear-gradient(120deg, #123F49 0%, #1D5F6E 30%, #3C8B90 60%, #7FD3C6 100%)",
          }}
        >

          {/* Inner glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/20 blur-[90px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-20 bottom-[-160px] h-96 w-96 rounded-full bg-[#55C9B8]/20 blur-[100px]"
            aria-hidden="true"
          />

          {/* =================================================
              FILTER / CATEGORY ROW
          ================================================== */}

          <div className="relative z-10 mb-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide" data-reveal-step="60">
            {["All Programs", ...categories].map((item, index) => (
              <button
                key={item}
                data-reveal="pop"
                className={`
                  shrink-0 rounded-full border px-4 py-2
                  text-[11px] font-semibold
                  transition-all duration-300
                  ${
                    index === 0
                      ? "border-[#0F2A30] bg-[#0F2A30] text-white shadow-sm"
                      : "border-white/60 bg-white/85 text-[#0F2A30] hover:bg-white"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* =================================================
              MAIN SHELF
          ================================================== */}

          <div className="relative z-10 grid gap-4 lg:grid-cols-[220px_1fr]">

            {/* LEFT INTRO */}
            <div data-reveal="rise" className="flex flex-col justify-center px-2 py-6 lg:px-3">

              <p className="text-[26px] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-3xl">
                Find the path
                <br />
                that moves
                <br />
                you forward.
              </p>

              <p className="mt-4 max-w-[190px] text-xs font-medium leading-5 text-white/75">
                Choose your direction. Learn the workflow, build the skill
                and take it somewhere useful.
              </p>

              <Link
                href={APPLY_URL}
                className="
                  mt-6 inline-flex w-fit items-center gap-2
                  rounded-xl bg-white px-4 py-2.5
                  text-xs font-bold text-[#1D5F6E]
                  shadow-[0_8px_25px_rgba(15,42,48,0.12)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-lg
                "
              >
                Explore programs

                <Icon
                  name="ArrowRight"
                  size={14}
                  strokeWidth={2}
                />
              </Link>
            </div>

            {/* PROGRAM CARDS */}
            <div
              className="
                grid gap-3
                sm:grid-cols-2
                xl:grid-cols-3
              "
              data-reveal-step="140"
            >
              {tracks.map((track) => (
                <SpotlightCard
                  key={track.slug}
                  theme="light"
                  spotlightColor="#55C9B8"
                  intensity={0.65}
                  spotlightSize={280}
                  softness={0.55}
                  proximity={120}
                  className="group p-0 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Link
                    data-reveal="rise"
                    href={track.featured ? `/courses/${track.slug}` : "/courses"}
                    className="block h-full overflow-hidden rounded-[inherit]"
                  >

                  {/* =========================================
                      VISUAL
                  ========================================== */}

                  <div
                    className="relative h-[145px] overflow-hidden"
                    style={{
                      background: track.gradient,
                    }}
                  >

                    {/* Abstract geometry */}
                    <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[18px] border-white/20 transition-transform duration-700 group-hover:scale-125" />

                    <div className="absolute -bottom-10 left-8 h-28 w-28 rotate-12 rounded-[28px] border border-white/25 bg-white/10 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" />

                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md">
                      <span className="font-mono text-[10px] font-bold">
                        {track.number}
                      </span>
                    </div>

                    {/* Decorative lines */}
                    <div className="absolute bottom-5 left-5 flex gap-1">
                      <span className="h-1 w-8 rounded-full bg-white/70" />
                      <span className="h-1 w-3 rounded-full bg-white/35" />
                    </div>

                    {/* Status */}
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#0F2A30]">
                      {track.featured ? "Featured" : "Coming Soon"}
                    </span>
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div className="p-5">

                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: track.accent }}
                    >
                      {track.category}
                    </p>

                    <h3 className="mt-2 min-h-[52px] text-[17px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0F2A30]">
                      {track.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-[11px] leading-5 text-slate-500">
                      {track.tagline}
                    </p>

                    {/* Metadata */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-1.5">
                        <Icon
                          name="Calendar"
                          size={12}
                          strokeWidth={1.8}
                          className="text-slate-400"
                        />

                        <span className="text-[10px] font-semibold text-slate-600">
                          {track.duration}
                        </span>
                      </div>

                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:translate-x-1"
                        style={{ backgroundColor: track.accent }}
                      >
                        <Icon
                          name="ArrowUpRight"
                          size={13}
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: track.accent }}
                  />
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div data-reveal="rise" className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Every program is designed to help you move from knowing
            something to being able to use it.
          </p>

          <Link
            href={APPLY_URL}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#0F2A30]"
          >
            Start with Batch 01

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D5F6E] text-white transition-transform duration-300 group-hover:translate-x-1">
              <Icon
                name="ArrowRight"
                size={14}
                strokeWidth={2}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
/* ---------------- 05. Persona Cards ---------------- */
export function PersonaCards() {
  const cards = [
    {
      num: "01",
      tagline: "Big Beginnings",
      title: "Starting Out",
      desc: "You have the qualification. Now it's time to build what's next.",
      quote: "From learning to doing.",
      image: "/personalcard1.png",
      accent: "#1D5F6E",
      soft: "#E6F2F3",
      features: [
        {
          label: "Recent graduates",
          icon: "Sparkles",
        },
        {
          label: "Early career professionals",
          icon: "Sparkles",
        },
        {
          label: "Build real-world skills",
          icon: "Sparkles",
        },
      ],
    },
    {
      num: "02",
      tagline: "Keep Growing",
      title: "Moving Forward",
      desc: "You're working, but you want to grow, switch roles or stay ahead.",
      quote: "Better skills. Bigger opportunities.",
      image: "/personalcard2.png",
      accent: "#55C9B8",
      soft: "#E9F8F5",
      features: [
        {
          label: "Working professionals",
          icon: "Sparkles",
        },
        {
          label: "Upskilling & career growth",
          icon: "Sparkles",
        },
        {
          label: "Move into tech roles",
          icon: "Sparkles",
        },
      ],
    },
    {
      num: "03",
      tagline: "A Fresh Start",
      title: "Changing Course",
      desc: "A different direction is possible. It's never too late to start again.",
      quote: "New skills. New possibilities.",
      image: "/personalcard3.png",
      accent: "#F4B942",
      soft: "#FEF6E3",
      features: [
        {
          label: "Career changers",
          icon: "Sparkles",
        },
        {
          label: "Returning after a break",
          icon: "Users",
        },
        {
          label: "Explore new opportunities",
          icon: "Sparkles",
        },
      ],
    },
  ];

  return (
    <section
      id="who-it-is-for"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-32 h-72 w-72 rounded-full bg-[#1D5F6E]/[0.025] blur-3xl" />

        <div className="absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-[#55C9B8]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span data-reveal="draw" className="h-px w-8 origin-right bg-slate-300" />

            <span data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Who It's For
            </span>

            <span data-reveal="draw" className="h-px w-8 bg-slate-300" />
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0F2A30] sm:text-[48px] lg:text-[56px]">
            <span data-reveal="line"><span>There’s No Single</span></span>
            <span data-reveal="line"><span>Starting Point for Learning.</span></span>
          </h2>

          <p data-reveal="rise" className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Starting out, starting over, or ready for something more.
            Summate Learning is designed for different points in the
            journey.
          </p>
        </div>

        {/* =========================================================
            JOURNEY INDICATOR
        ========================================================= */}

        <div className="mx-auto mt-12 hidden max-w-xl items-center justify-center md:flex">
          <div className="flex items-center" data-reveal-step="220">
            <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#1D5F6E]">
              STARTING OUT
            </span>

            <span data-reveal="draw" className="mx-4 h-px w-16 bg-slate-200" />

            <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400">
              MOVING FORWARD
            </span>

            <span data-reveal="draw" className="mx-4 h-px w-16 bg-slate-200" />

            <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400">
              CHANGING COURSE
            </span>
          </div>
        </div>

        {/* =========================================================
            CARDS
        ========================================================= */}

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start" data-reveal-step="180">
          {cards.map((card, index) => {
            const isMiddle = index === 1;

            return (
              <article
                key={card.title}
                data-reveal="rise"
                className={`
                  group relative overflow-hidden rounded-[30px]
                  border border-slate-200 bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-slate-300
                  hover:shadow-[0_30px_70px_rgba(15,42,48,0.10)]
                  ${
                    isMiddle
                      ? "lg:mt-[-20px]"
                      : "lg:mt-6"
                  }
                `}
              >
                {/* =================================================
                    TOP NUMBER / TAG
                ================================================= */}

                <div className="relative flex items-start justify-between px-7 pt-7 sm:px-8 sm:pt-8">
                  {/* Number */}
                  <span
                    className="
                      select-none font-mono text-[13px]
                      font-bold tracking-[0.15em]
                      text-slate-300 transition-colors duration-300
                      group-hover:text-slate-400
                    "
                  >
                    {card.num}
                  </span>

                  {/* Tagline */}
                  <span
                    className="
                      rounded-full border border-slate-100
                      bg-slate-50 px-3 py-1
                      font-serif text-[11px] italic
                      text-slate-500
                    "
                  >
                    {card.tagline}
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <div className="relative px-7 pt-7 sm:px-8">
                  <h3 className="text-[29px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0F2A30] transition-colors duration-300 group-hover:text-[#1D5F6E]">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                    {card.desc}
                  </p>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className={`
                    relative mt-7 overflow-hidden
                    ${
                      isMiddle
                        ? "h-[390px]"
                        : "h-[350px]"
                    }
                  `}
                  data-reveal-step="0"
                >
                  {/* Image background: rises first, then the figure steps onto it */}
                  <div
                    data-reveal="grow"
                    data-reveal-delay="100"
                    className="absolute inset-x-0 bottom-0 h-[85%] transition-all duration-500 group-hover:h-[92%]"
                    style={{
                      backgroundColor: card.soft,
                    }}
                  />

                  {/* Soft accent shape */}
                  <div
                    className="
                      absolute bottom-[-80px] left-1/2
                      h-64 w-64 -translate-x-1/2
                      rounded-full opacity-50 blur-3xl
                      transition-all duration-700
                      group-hover:scale-125
                    "
                    style={{
                      backgroundColor: card.accent,
                    }}
                  />

                  {/* Person / artwork */}
                  <div
                    data-reveal="rise"
                    data-reveal-delay="300"
                    className="absolute inset-x-0 bottom-0 top-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* Quote */}
                  <div
                    data-reveal="pop"
                    data-reveal-delay="650"
                    className="
                      absolute bottom-5 left-5 right-5
                      rounded-2xl border border-white/80
                      bg-white/90 px-4 py-3
                      shadow-[0_10px_30px_rgba(15,42,48,0.08)]
                      backdrop-blur-md
                      transition-all duration-500
                      group-hover:-translate-y-1
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold italic text-slate-700">
                        “{card.quote}”
                      </p>

                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                        style={{
                          backgroundColor: card.accent,
                        }}
                      >
                        <Icon
                          name="ArrowUpRight"
                          size={13}
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    FEATURES
                ================================================= */}

                <div className="px-7 pb-7 pt-6 sm:px-8 sm:pb-8">
                  <div className="space-y-2">
                    {card.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="
                          flex items-center gap-3
                          rounded-xl border border-slate-100
                          bg-slate-50/70 px-3.5 py-2.5
                          transition-all duration-300
                          group-hover:bg-white
                          group-hover:border-slate-200
                        "
                      >
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: card.soft,
                            color: card.accent,
                          }}
                        >
                          <Icon
                            name={feature.icon}
                            size={12}
                            strokeWidth={2.2}
                          />
                        </span>

                        <span className="text-[11px] font-semibold text-slate-600">
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <Link
                    href={APPLY_URL}
                    className="
                      mt-6 flex w-full items-center
                      justify-between rounded-xl
                      border border-slate-200
                      bg-white px-4 py-3
                      text-xs font-bold text-[#0F2A30]
                      transition-all duration-300
                      hover:border-slate-300
                      hover:bg-slate-50
                    "
                  >
                    <span>Explore this path</span>

                    <span
                      className="
                        flex h-7 w-7 items-center
                        justify-center rounded-full
                        text-white transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                      style={{
                        backgroundColor: card.accent,
                      }}
                    >
                      <Icon
                        name="ArrowRight"
                        size={13}
                        strokeWidth={2.3}
                      />
                    </span>
                  </Link>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    absolute bottom-0 left-0 h-1
                    w-0 transition-all duration-500
                    group-hover:w-full
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div data-reveal="rise" className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6F2F3] text-[#1D5F6E]">
              <Icon
                name="ArrowDownRight"
                size={14}
                strokeWidth={2}
              />
            </span>

            <p className="text-sm font-medium text-slate-500">
              Wherever you're starting, there's somewhere to go next.
            </p>
          </div>

          <Link
            href={APPLY_URL}
            className="
              group inline-flex items-center gap-2
              text-sm font-bold text-[#0F2A30]
            "
          >
            <span>Find your starting point</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 06. Program Spotlight ---------------- */

export function ProgramSpotlight() {
  // Each row is one shift in approach: what most courses do, and what Summate does instead.
  // Kept to one short line each so the whole comparison fits in a single screen.
  const shifts = [
    { from: "Watching lessons", to: "Using what you learn", body: "Practise every concept yourself before reaching for AI.", accent: "#1D5F6E" },
    { from: "Learning alone, on recordings", to: "Learning live, with your batch", body: "A small cohort, with questions and feedback in real time.", accent: "#55C9B8" },
    { from: "Forum replies, if you're lucky", to: "Mentors who review your work", body: "Working professionals review your project at regular checkpoints.", accent: "#2A7A88" },
    { from: "A certificate at the end", to: "Work you can show and explain", body: "One 12-week project with Git, tests and deployment, plus mock interviews.", accent: "#EF6F51" },
    { from: "Done when the course ends", to: "A network that keeps going", body: "Graduates join the Summate Circle of peers, mentors and professionals.", accent: "#23857A", href: "/circle" },
  ];

  const sum = [
    "Live sessions with your batch",
    "Practice after every concept",
    "One real project, start to finish",
    "Mentor reviews and feedback",
    "Mock interviews",
    "The Summate Circle",
  ];

  // Reveal the sum line by line, once, when it scrolls into view.
  const sumRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sumRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const reveal = `transition-all duration-500 ease-out ${revealed ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"}`;
  const delay = (i: number) => ({ transitionDelay: revealed ? `${i * 100}ms` : "0ms" });

  return (
    <section
      id="program"
      className="relative isolate flex scroll-mt-[76px] items-center overflow-hidden bg-[#F6FAFA] py-12 lg:min-h-[calc(100svh-76px)] lg:py-6 [@media(min-width:1024px)_and_(max-height:760px)]:py-3"
    >
      <div className="relative mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span data-reveal="draw" className="relative h-px w-12 overflow-hidden bg-slate-200">
                <span className="absolute inset-y-0 left-0 w-8 bg-[#1D5F6E]" />
              </span>
              <span data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#1D5F6E]">
                The Summate Difference
              </span>
            </div>
            <h2 className="font-display text-[34px] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0F2A30] lg:text-[42px]">
              <span data-reveal="line"><span>More than just courses.</span></span>
            </h2>
          </div>
          <p data-reveal="rise" className="max-w-[48ch] text-[15px] leading-[1.6] text-slate-600 lg:pb-1">
            Most courses stop once they&apos;ve taught you something. Summate is built around what comes next:
            using it, proving it, and growing with people who&apos;ve done it before.
          </p>
        </div>

        <div className="mt-5 [@media(min-width:1024px)_and_(max-height:760px)]:mt-3 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          {/* The five shifts */}
          <div data-reveal="rise" className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,42,48,0.06)]">
            <div className="hidden grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-6 border-b border-slate-200 bg-[#F9FCFC] px-6 py-3 [@media(min-width:1024px)_and_(max-height:760px)]:py-2 text-[13px] font-semibold sm:grid">
              <span className="text-slate-500">Most courses give you</span>
              <span className="text-[#1D5F6E]">Summate gives you</span>
            </div>
            <ul className="divide-y divide-slate-100" data-reveal-step="130">
              {shifts.map((s) => (
                <li
                  key={s.to}
                  data-reveal="rise"
                  data-reveal-step="0"
                  className="relative grid gap-1.5 px-6 py-3.5 [@media(min-width:1024px)_and_(max-height:760px)]:py-2.5 sm:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] sm:items-center sm:gap-6"
                >
                  <span data-reveal="grow" aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ background: s.accent }} />
                  <p className="flex items-center gap-2 text-[14px] font-medium leading-snug text-slate-400">
                    <X size={13} strokeWidth={2.6} aria-hidden="true" className="shrink-0 text-slate-300" />
                    {/* Struck through once the row lands: the old way, crossed out */}
                    <span data-reveal="strike" data-reveal-delay="450" className="rv-strike">
                      <span className="sr-only">Most courses: </span>
                      {s.from}
                    </span>
                  </p>
                  <div className="flex items-start gap-2.5">
                    <span
                      data-reveal="pop"
                      data-reveal-delay="700"
                      aria-hidden="true"
                      className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: s.accent }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[18px] font-bold leading-tight tracking-[-0.02em] text-[#0F2A30]">
                        <span className="sr-only">At Summate: </span>
                        {s.href ? (
                          <Link href={s.href} className="text-[#0F2A30] hover:text-[#1D5F6E]">
                            {s.to}
                          </Link>
                        ) : (
                          s.to
                        )}
                      </h3>
                      <p className="mt-0.5 text-[14px] leading-[1.5] text-slate-500">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* The sum */}
          <div data-reveal="rise" className="relative isolate flex flex-col overflow-hidden rounded-[24px] bg-[#0F2A30] p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 -z-10 h-[340px] w-[340px] rounded-full bg-[#1D5F6E]/55 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-10 -z-10 h-[280px] w-[280px] rounded-full bg-[#55C9B8]/25 blur-[100px]"
            />

            <h3 className="font-display text-[26px] font-bold leading-tight tracking-[-0.03em] text-white">It all adds up.</h3>
            <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-400">
              That&apos;s where the name comes from. Every Summate course brings these together.
            </p>

            <div ref={sumRef} aria-label="What a Summate course adds up to" className="mt-4">
              <ul>
                {sum.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-baseline gap-3 py-[3px] font-display text-[16px] font-semibold tracking-[-0.01em] text-slate-200 ${reveal}`}
                    style={delay(i)}
                  >
                    <span aria-hidden="true" className="w-3 shrink-0 text-right text-[#6CCFC0]">
                      {i === 0 ? "" : "+"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                aria-hidden="true"
                className={`my-3 ml-6 h-[2px] origin-left bg-white/70 transition-transform duration-700 ease-out ${
                  revealed ? "scale-x-100" : "scale-x-0"
                }`}
                style={delay(sum.length)}
              />
              <p
                className={`flex items-baseline gap-3 font-display text-[21px] font-bold leading-[1.2] tracking-[-0.025em] text-white ${reveal}`}
                style={delay(sum.length + 2)}
              >
                <span aria-hidden="true" className="w-3 shrink-0 text-right text-[#6CCFC0]">
                  =
                </span>
                <span>Skills you can use, show and build on.</span>
              </p>
            </div>

            <Link
              href="/courses/ai-augmented-full-stack-developer"
              className="mt-auto inline-flex h-11 w-fit items-center gap-2 self-start rounded-full bg-white px-5 text-[14px] font-semibold text-[#0F2A30] transition-colors hover:bg-[#EAF4F5] hover:text-[#1D5F6E] lg:mt-5"
            >
              See how the course works
              <Icon name="ArrowUpRight" size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- 07. Comparison Table (Responsive Board with Amber & Blue) ---------------- */
export function ComparisonTable() {
  const comparisonRows = [
    {
      icon: "BookOpen",
      area: "Learning Approach",
      traditional: "Watch videos, follow along, minimal hands-on practice.",
      summate: "Live, structured learning with hands-on projects and mentorship.",
    },
    {
      icon: "Target",
      area: "Focus",
      traditional: "Theory-heavy, often disconnected from production code.",
      summate: "Practical, real-world, and outcome-driven.",
    },
    {
      icon: "Code2",
      area: "Projects",
      traditional: "Small, guided tutorials with pre-written boilerplate.",
      summate: "Build defensible, end-to-end projects you can explain and showcase.",
    },
    {
      icon: "UserCheck",
      area: "Mentorship",
      traditional: "Little to no personal guidance or async forum replies.",
      summate: "Direct access to active engineering mentors and live reviews.",
    },
    {
      icon: "Briefcase",
      area: "Career Support",
      traditional: "Generic resume templates without portfolio defense prep.",
      summate: "Resume building, mock interviews, and strategic placement guidance.",
    },
    {
      icon: "Users",
      area: "Community",
      traditional: "Learn alone in isolation with high dropout rates.",
      summate: "Be part of a motivated, close-knit founding peer cohort.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-12 lg:py-20" id="comparison">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] sm:h-[420px] sm:w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] rounded-full bg-teal-100/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1D5F6E]" />
            A Clearer Difference
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F2A30] sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
            More than just <span className="text-[#1D5F6E]">courses.</span>
          </h2>

          <p className="mt-3 text-sm font-medium text-slate-500 sm:text-base">
            Same goal. A very different journey.
          </p>
        </div>

        {/* Mobile & Tablet (< lg) */}
        <div className="mt-10 space-y-4 lg:hidden">
          {comparisonRows.map((r) => (
            <div
              key={r.area}
              className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Icon name={r.icon} size={16} strokeWidth={2} />
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {r.area}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-amber-200/70 bg-[#FFFDF5] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">
                      Traditional Courses
                    </span>
                    <span className="text-[10px] font-bold uppercase rounded bg-amber-100/80 px-1.5 py-0.5 text-amber-800">
                      Typical
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <p className="text-xs font-medium leading-relaxed text-slate-600">
                      {r.traditional}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-200/90 bg-[#F3F9F9] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-extrabold text-[#1D5F6E] uppercase tracking-wide">
                      Summate Approach
                    </span>
                    <span className="text-[10px] font-bold uppercase rounded bg-cyan-100 px-1.5 py-0.5 text-[#1D5F6E]">
                      Our Way
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#1D5F6E] mt-0.5">
                      <Icon name="Check" size={11} strokeWidth={3} />
                    </span>
                    <p className="text-xs font-bold leading-relaxed text-[#0F2A30]">
                      {r.summate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 3-Column Floating Board (≥ lg) */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:items-start lg:gap-6">
          
          <div className="flex flex-col lg:col-span-3">
            <div className="h-[64px] flex items-center px-4 border-b border-transparent">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Focus Area
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {comparisonRows.map((r) => (
                <div
                  key={r.area}
                  className="flex h-[88px] items-center gap-3 px-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon name={r.icon} size={17} strokeWidth={2} />
                  </span>
                  <span className="text-[13px] font-bold text-slate-900">
                    {r.area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-amber-200/80 bg-[#FFFDF5] p-6 shadow-sm lg:col-span-4">
            <div className="flex h-[64px] items-center justify-between border-b border-amber-100/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100/90 text-amber-700">
                  <Icon name="GraduationCap" size={19} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2A30]">Traditional Courses</h3>
                  <p className="text-[11px] font-medium text-slate-500">Tutorial-style instruction</p>
                </div>
              </div>

              <span className="rounded-md border border-amber-200/80 bg-amber-100/60 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                Typical
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {comparisonRows.map((r) => (
                <div
                  key={r.area}
                  className="flex h-[88px] items-center gap-3 rounded-2xl border border-amber-100/60 bg-white/70 px-4 py-3 shadow-2xs"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 font-bold text-xs">
                    ✕
                  </span>
                  <p className="text-xs font-medium leading-snug text-slate-600 xl:text-[13px]">
                    {r.traditional}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] border border-cyan-200/90 bg-[#F3F9F9] p-6 shadow-md shadow-[#0F2A30]/[0.04] lg:col-span-5">
            <div className="flex h-[64px] items-center justify-between border-b border-cyan-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-[#1D5F6E] shadow-2xs">
                  <Icon name="Zap" size={19} strokeWidth={2.3} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#1D5F6E]">Summate Approach</h3>
                  <p className="text-[11px] font-medium text-[#1D5F6E]/70">Founding Batch 1</p>
                </div>
              </div>

              <span className="rounded-md border border-cyan-200 bg-cyan-100/70 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#1D5F6E] uppercase">
                Our Way
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {comparisonRows.map((r) => (
                <div
                  key={r.area}
                  className="flex h-[88px] items-center gap-3 rounded-2xl border border-cyan-100/90 bg-white px-4 py-3 shadow-2xs"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[#1D5F6E]">
                    <Icon name="Check" size={12} strokeWidth={3} />
                  </span>
                  <p className="text-xs font-bold leading-snug text-[#0F2A30] xl:text-[13px]">
                    {r.summate}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ---------------- 08. Batch Benefits ---------------- */
const BENEFIT_INTERVAL_MS = 4500;

// A slow camera move per benefit, so the photo shifts with each step.
const BENEFIT_FRAMES = [
  "scale(1.04) translate(0%, 0%)",
  "scale(1.1) translate(-2%, 1%)",
  "scale(1.08) translate(2%, -1%)",
  "scale(1.12) translate(-1%, -2%)",
  "scale(1.06) translate(1.5%, 1.5%)",
  "scale(1.1) translate(0%, -1.5%)",
];

export function BatchBenefits() {
  const benefits = [
    {
      num: "01",
      phase: "LEARN",
      title: "Live, Interactive Classes",
      desc: "Learn directly from practitioners in a focused, collaborative environment.",
      icon: "Laptop",
      accent: "#1D5F6E",
      soft: "#E6F2F3",
    },
    {
      num: "02",
      phase: "BUILD",
      title: "Hands-on Projects",
      desc: "Build and ship real-world projects you can actually showcase.",
      icon: "FileCode2",
      accent: "#55C9B8",
      soft: "#E9F8F5",
    },
    {
      num: "03",
      phase: "GROW",
      title: "Mentorship & Guidance",
      desc: "Get personalised feedback and support throughout the journey.",
      icon: "UserCheck",
      accent: "#059669",
      soft: "#ECFDF5",
    },
    {
      num: "04",
      phase: "PREPARE",
      title: "Career Preparation",
      desc: "Resume reviews, portfolio support and interview preparation.",
      icon: "Briefcase",
      accent: "#F4B942",
      soft: "#FEF6E3",
    },
    {
      num: "05",
      phase: "CONNECT",
      title: "A Focused Peer Community",
      desc: "Learn and grow with a motivated group of peers.",
      icon: "Users",
      accent: "#EF6F51",
      soft: "#FDEEEA",
    },
    {
      num: "06",
      phase: "CONTINUE",
      title: "Access to Resources",
      desc: "Revisit sessions, notes and resources beyond the program.",
      icon: "BookOpen",
      accent: "#23857A",
      soft: "#E8F8F5",
    },
  ];

  const [active, setActive] = useState(0);
  const current = benefits[active];

  // Step through the benefits on a timer while the section is on screen, so
  // touch visitors (who can't hover) still see all six. Hover or focus pauses
  // it; choosing one directly hands control to the visitor for good.
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [userChose, setUserChose] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const autoPlaying = inView && !paused && !userChose && !reducedMotion;

  useEffect(() => {
    if (!autoPlaying) return;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % benefits.length),
      BENEFIT_INTERVAL_MS
    );
    return () => clearTimeout(timer);
  }, [autoPlaying, active, benefits.length]);

  return (
    <section
      ref={sectionRef}
      id="batch-benefits"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#1D5F6E]/[0.025] blur-3xl" />

        <div className="absolute right-[-140px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#55C9B8]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span data-reveal="draw" className="h-px w-10 bg-[#1D5F6E]" />

              <span data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#1D5F6E]">
                The Batch 01 Experience
              </span>
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0F2A30] sm:text-[48px] lg:text-[58px]">
              <span data-reveal="line"><span>A learning experience</span></span>
              <span data-reveal="line">
                <span className="text-slate-400">
                  that moves you forward.
                </span>
              </span>
            </h2>

            <p data-reveal="rise" className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Practical skills, real projects and the right guidance —
              everything designed to help you build what's next.
            </p>
          </div>

          {/* Journey */}
          <div className="shrink-0 lg:pb-1">
            <div className="flex items-center gap-3" data-reveal-step="160">
              <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#1D5F6E]">
                LEARN
              </span>

              <span data-reveal="fade" className="text-slate-300">→</span>

              <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#23857A]">
                BUILD
              </span>

              <span data-reveal="fade" className="text-slate-300">→</span>

              <span data-reveal="rise" className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald-600">
                GROW
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            MAIN EXPERIENCE
        ========================================================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          {/* =======================================================
              BENEFIT LIST
          ======================================================= */}

          <div
            data-reveal="rise"
            data-reveal-step="80"
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#F7FBFB]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
            }}
          >
            {benefits.map((benefit, index) => {
              const isActive = active === index;

              return (
                <button
                  key={benefit.num}
                  data-reveal="rise"
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => {
                    setActive(index);
                    setUserChose(true);
                  }}
                  className={`
                    group relative flex w-full
                    items-center gap-4 border-b
                    border-slate-200/80
                    px-5 py-5 text-left
                    transition-all duration-300
                    last:border-b-0
                    sm:px-6 sm:py-6
                    ${
                      isActive
                        ? "bg-white"
                        : "hover:bg-white/70"
                    }
                  `}
                >
                  {/* Active indicator */}
                  <div
                    className={`
                      absolute bottom-0 left-0 top-0
                      w-1 transition-all duration-300
                    `}
                    style={{
                      backgroundColor: isActive
                        ? benefit.accent
                        : "transparent",
                    }}
                  />

                  {/* Number */}
                  <span
                    className={`
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-xl font-mono text-[10px]
                      font-bold transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "bg-slate-100 text-slate-400"
                      }
                    `}
                    style={{
                      backgroundColor: isActive
                        ? benefit.accent
                        : undefined,
                    }}
                  >
                    {benefit.num}
                  </span>

                  {/* Icon */}
                  <span
                    className={`
                      hidden h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-xl sm:flex
                      transition-all duration-300
                    `}
                    style={{
                      backgroundColor: isActive
                        ? benefit.soft
                        : "#F8FAFC",
                      color: benefit.accent,
                    }}
                  >
                    <Icon
                      name={benefit.icon}
                      size={16}
                      strokeWidth={2}
                    />
                  </span>

                  {/* Content */}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span
                        className={`
                          text-[10px] font-bold
                          uppercase tracking-[0.15em]
                          transition-colors duration-300
                        `}
                        style={{
                          color: isActive
                            ? benefit.accent
                            : "#94A3B8",
                        }}
                      >
                        {benefit.phase}
                      </span>
                    </span>

                    <span
                      className={`
                        mt-1 block text-sm font-extrabold
                        tracking-[-0.015em]
                        transition-colors duration-300
                        sm:text-[15px]
                        ${
                          isActive
                            ? "text-[#0F2A30]"
                            : "text-slate-600"
                        }
                      `}
                    >
                      {benefit.title}
                    </span>

                    {/* Description only expands on active */}
                    <span
                      className={`
                        block overflow-hidden
                        text-xs leading-5 text-slate-500
                        transition-all duration-300
                        ${
                          isActive
                            ? "mt-1 max-h-12 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      {benefit.desc}
                    </span>
                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full border
                      transition-all duration-300
                      ${
                        isActive
                          ? "border-transparent text-white"
                          : "border-slate-200 text-slate-400"
                      }
                    `}
                    style={{
                      backgroundColor: isActive
                        ? benefit.accent
                        : "transparent",
                    }}
                  >
                    <Icon
                      name={
                        isActive
                          ? "ArrowUpRight"
                          : "ArrowRight"
                      }
                      size={13}
                      strokeWidth={2}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* =======================================================
              VISUAL PANEL
          ======================================================= */}

          <div
            data-reveal="image"
            data-reveal-delay="150"
            className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-slate-200 bg-[#F5FAFA]"
          >
            {/* Accent glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl transition-colors duration-700"
              style={{
                backgroundColor: current.accent,
              }}
            />

            {/* Background number */}
            <div
              className="pointer-events-none absolute -right-3 -top-16 select-none text-[220px] font-extrabold leading-none tracking-[-0.1em] opacity-60 transition-colors duration-500"
              style={{
                color: current.soft,
              }}
            >
              {current.num}
            </div>

            {/* Image */}
            <div className="absolute inset-5 overflow-hidden rounded-[23px]">
              <div
                className="absolute inset-0 transition-transform duration-[1800ms] ease-out motion-reduce:transition-none"
                style={{ transform: reducedMotion ? undefined : BENEFIT_FRAMES[active % BENEFIT_FRAMES.length] }}
              >
                <Image
                  src="/workspace-setup.png"
                  alt="Workspace with laptop, notebook and books"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A30]/75 via-transparent to-transparent" />
            </div>

            {/* Floating label */}
            <div
              className="
                absolute left-9 top-9 z-20
                flex items-center gap-2
                rounded-full border border-white/80
                bg-white/90 px-3 py-2
                shadow-lg backdrop-blur-md
              "
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: current.accent,
                }}
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                Batch 01
              </span>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-9 left-9 right-9 z-20 text-white" aria-live="polite">
              <div key={active} className="rv-swap">
              <p
                className="text-[13px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: "#C6E8E6",
                }}
              >
                {current.phase}
              </p>

              <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-[1.08] tracking-[-0.035em]">
                {current.title}
              </h3>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/70">
                {current.desc}
              </p>
              </div>

              {/* Progress: the active pill fills over the auto-advance interval */}
              <div className="mt-6 flex items-center gap-2">
                {benefits.map((item, index) => (
                  <span
                    key={item.num}
                    className="relative h-1 overflow-hidden rounded-full bg-white/35 transition-all duration-500"
                    style={{ width: index === active ? "32px" : "10px" }}
                  >
                    {index === active && (
                      <span
                        key={`${active}-${autoPlaying}`}
                        className={`absolute inset-0 rounded-full ${autoPlaying ? "rv-progress" : ""}`}
                        style={{
                          backgroundColor: current.accent,
                          animationDuration: `${BENEFIT_INTERVAL_MS}ms`,
                        }}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div className="mt-12 grid gap-5 border-t border-slate-200 pt-7 sm:grid-cols-3" data-reveal-step="140">
          <div data-reveal="rise">
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#1D5F6E]">
              01 / LEARN
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0F2A30]">
              Understand the fundamentals.
            </p>
          </div>

          <div data-reveal="rise">
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#23857A]">
              02 / BUILD
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0F2A30]">
              Turn knowledge into something real.
            </p>
          </div>

          <div data-reveal="rise">
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-emerald-600">
              03 / GROW
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0F2A30]">
              Take it into your next opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 09. Tool Strip ---------------- */
export function ToolStrip() {
  const devicon = (slug: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

  // Django, AWS and OpenAI have no "-original" file on devicon, so they point
  // at a working asset instead of rendering as a broken image.
  const toolLogos = [
    { title: "VS Code", src: devicon("vscode") },
    { title: "Next.js", src: devicon("nextjs") },
    { title: "React", src: devicon("react") },
    { title: "Tailwind CSS", src: devicon("tailwindcss") },
    { title: "Node.js", src: devicon("nodejs") },
    { title: "Python", src: devicon("python") },
    {
      title: "Django",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    { title: "PostgreSQL", src: devicon("postgresql") },
    { title: "MongoDB", src: devicon("mongodb") },
    { title: "Git", src: devicon("git") },
    { title: "GitHub", src: devicon("github") },
    {
      title: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    { title: "Docker", src: devicon("docker") },
    { title: "Figma", src: devicon("figma") },
    { title: "Postman", src: devicon("postman") },
    { title: "Linux", src: devicon("linux") },
    { title: "Vercel", src: devicon("vercel") },
    { title: "Firebase", src: devicon("firebase") },
    {
      title: "OpenAI",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/openai.svg",
    },
    {
      title: "And more",
      node: (
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-black tracking-widest text-slate-400">
          •••
        </span>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20" id="tools">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.14]">
            <span data-reveal="line"><span>Tools you’ll work with</span></span>
          </h2>
          <p data-reveal="rise" className="mt-4 text-base text-slate-600 sm:text-lg">
            Modern, industry-relevant tools to help you build, ship and grow.
          </p>
        </div>

        <div className="mt-12" data-reveal="rise">
          <LogoLoop
            logos={toolLogos}
            logoHeight={36}
            gap={40}
            speed={55}
            pauseOnHover
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#ffffff"
            scaleOnHover
            labels="below"
            ariaLabel="Tools covered in the programme"
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-center">
          <div data-reveal="draw" className="h-0.5 w-8 origin-center rounded-full bg-slate-200" />
          <p data-reveal="rise" className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Learn &nbsp;·&nbsp; Build &nbsp;·&nbsp; Ship &nbsp;·&nbsp; Grow
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- 10. Step Path ---------------- */
export function StepPath() {
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      phase: "START",
      body: "Tell us where you are, what you want to learn and where you want to go next.",
      icon: "FileText",
      accent: "#1D5F6E",
      soft: "#E6F2F3",
    },
    {
      num: "02",
      title: "Learn Where You Are",
      phase: "LEARN",
      body: "Join live sessions, meet your cohort and build a strong foundation together.",
      icon: "Users",
      accent: "#55C9B8",
      soft: "#E9F8F5",
    },
    {
      num: "03",
      title: "Learn & Apply",
      phase: "BUILD",
      body: "Put concepts into practice through projects, challenges and guided feedback.",
      icon: "BookOpen",
      accent: "#059669",
      soft: "#ECFDF5",
    },
    {
      num: "04",
      title: "Build Your Capability",
      phase: "BUILD",
      body: "Turn your learning into work you understand, can explain and can showcase.",
      icon: "Laptop",
      accent: "#F4B942",
      soft: "#FEF6E3",
    },
    {
      num: "05",
      title: "Take the Next Step",
      phase: "GROW",
      body: "Leave with greater confidence, practical experience and a clearer direction.",
      icon: "ArrowUpRight",
      accent: "#23857A",
      soft: "#E8F8F5",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1D5F6E]">
              How It Works
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0F2A30] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              From where you are
              <br />
              <span className="text-slate-400">to what comes next.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              A simple process designed to move you from learning something
              new to actually being able to use it.
            </p>
          </div>
        </div>

        {/* DESKTOP JOURNEY */}
        <div className="relative mt-10 hidden lg:block">

          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[68px] h-px bg-slate-200" />

          <div className="grid grid-cols-5 gap-5">

            {steps.map((step, index) => (
              <div
                key={step.num}
                className="group relative"
              >

                {/* NUMBER NODE */}
                <div className="relative z-10 flex items-center">
                  <div
                    className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white shadow-[0_4px_20px_rgba(15,42,48,0.08)] transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: step.soft,
                      color: step.accent,
                    }}
                  >
                    <span className="font-mono text-sm font-bold">
                      {step.num}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-[68px] right-[-20px] top-1/2 h-px bg-slate-200">
                      <div
                        className="h-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ backgroundColor: step.accent }}
                      />
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="mt-8 pr-4">

                  <p
                    className="text-[10px] font-bold tracking-[0.18em]"
                    style={{ color: step.accent }}
                  >
                    {step.phase}
                  </p>

                  <h3 className="mt-2 text-lg font-bold tracking-tight text-[#0F2A30]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.body}
                  </p>

                  <div
                    className="mt-6 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      backgroundColor: step.soft,
                      color: step.accent,
                    }}
                  >
                    <Icon
                      name={step.icon}
                      size={17}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-10 space-y-4 lg:hidden">

          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >

              <div className="flex gap-5">

                {/* NUMBER */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: step.soft,
                    color: step.accent,
                  }}
                >
                  <span className="font-mono text-xs font-bold">
                    {step.num}
                  </span>
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p
                        className="text-[10px] font-bold tracking-[0.16em]"
                        style={{ color: step.accent }}
                      >
                        {step.phase}
                      </p>

                      <h3 className="mt-1 text-base font-bold text-[#0F2A30]">
                        {step.title}
                      </h3>
                    </div>

                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: step.soft,
                        color: step.accent,
                      }}
                    >
                      <Icon
                        name={step.icon}
                        size={15}
                        strokeWidth={1.8}
                      />
                    </div>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.body}
                  </p>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

/* ---------------- 11. Founders Note ---------------- */
export function FoundersNote() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#F6FAFA] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1D5F6E]">
              06 · Our Story
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0F2A30] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Why we started
              <br />
              <span className="text-slate-400">Summate.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              We believe learning becomes meaningful when it moves beyond
              knowing something and becomes something you can actually use.
            </p>
          </div>
        </div>

        {/* STORY */}
        <div className="relative mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT — STORY MARKER */}
          <div className="lg:col-span-4">

            <div className="sticky top-28">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1D5F6E] shadow-sm ring-1 ring-slate-200">
                  <Icon
                    name="Compass"
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F2A30]">
                    The beginning
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Batch 01
                  </p>
                </div>

              </div>

              <div className="mt-8 hidden border-l border-slate-200 pl-6 lg:block">
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-slate-600">
                  LEARN
                </p>

                <div className="my-4 h-12 w-px bg-gradient-to-b from-[#1D5F6E] to-transparent" />

                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-slate-600">
                  APPLY
                </p>

                <div className="my-4 h-12 w-px bg-gradient-to-b from-[#55C9B8] to-transparent" />

                <p className="bg-gradient-to-br from-[#2A7A88] via-[#1D5F6E] to-[#12424D] bg-clip-text text-[13px] font-bold uppercase tracking-[0.16em] text-transparent">
                  ACHIEVE
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — FOUNDER NOTE */}
          <div className="lg:col-span-8">

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-7 py-9 shadow-[0_12px_40px_rgba(15,42,48,0.04)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

              {/* Decorative quote */}
              <div className="pointer-events-none absolute -right-3 -top-10 select-none font-serif text-[180px] font-black leading-none text-slate-100">
                “
              </div>

              <div className="relative">

                {/* Label */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4B942]" />

                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    A note from the founders
                  </span>
                </div>

                {/* Main note */}
                <div className="mt-8 max-w-2xl">

                  <p className="text-xl font-medium leading-[1.65] tracking-[-0.01em] text-[#0F2A30] sm:text-2xl sm:leading-[1.6]">
                    {founders?.quote ||
                      "A simple note from the founders to be added here."}
                  </p>

                  <p className="mt-8 text-sm leading-7 text-slate-500">
                    {founders?.closing ||
                      "Batch 01 is where that journey begins and we're looking forward to building it with our first learners."}
                  </p>

                </div>

                {/* SIGNOFF */}
                <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-end sm:justify-between">

                  <div>
                    <p className="font-serif text-lg italic text-[#0F2A30]">
                      The Founders
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#1D5F6E]">
                      {founders?.signoff || "The Founders, Summate Learning"}
                    </p>
                  </div>

                  <Link
                    href={APPLY_URL}
                    className="group inline-flex items-center gap-2 self-start rounded-full bg-[#EF6F51] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D9573A]"
                  >
                    Join Batch 1

                    <Icon
                      name="ArrowUpRight"
                      size={14}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                </div>

              </div>
            </div>

            {/* Closing line */}
            <div className="mt-7 flex items-center justify-between px-1">

              <p className="text-xs text-slate-400">
                Building the first cohort, together.
              </p>

              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-slate-300">
                <span>01</span>
                <span>→</span>
                <span>02</span>
                <span>→</span>
                <span>03</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- 12. Mentors ---------------- */
export function MentorCards() {
  return (
    <section
      id="mentors"
      className="relative overflow-hidden bg-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1D5F6E]">
              The People Behind It
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0F2A30] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Learn with people
              <br />
              <span className="text-slate-400">
                who have done the work.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              {mentors.note}
            </p>
          </div>

        </div>

        {/* SMALL JOURNEY MARKER */}
        <div className="mt-12 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-slate-400">
          <span className="text-[#1D5F6E]">KNOW</span>
          <span>→</span>
          <span className="text-[#23857A]">APPLY</span>
          <span>→</span>
          <span className="text-[#23857A]">GROW</span>
        </div>

        {/* MENTORS */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {mentors.people.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#F6FAFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,42,48,0.07)]"
            >

              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-[#1D5F6E]/20 group-hover:text-[#1D5F6E]">
                  <Icon
                    name="ArrowUpRight"
                    size={13}
                    strokeWidth={2}
                  />
                </div>

              </div>

              {/* Avatar */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative">

                  {/* Accent ring */}
                  <div className="absolute -inset-2 rounded-full border border-slate-200 transition-all duration-500 group-hover:scale-105 group-hover:border-[#1D5F6E]/20" />

                  <Avatar initials={m.initials} />

                </div>
              </div>

              {/* Info */}
              <div className="mt-8 text-center">

                <p className="text-base font-bold tracking-tight text-[#0F2A30]">
                  {m.name}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {m.role}
                </p>

              </div>

              {/* Bottom accent */}
              <div className="mt-7 flex justify-center">
                <div className="h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#1D5F6E]" />
              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Learning becomes more useful when you can ask questions,
            receive feedback and understand how ideas work in practice.
          </p>

          <div className="flex shrink-0 items-center gap-2 text-xs font-bold text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#F4B942]" />
            Mentorship & guidance
          </div>

        </div>

      </div>
    </section>
  );
}

/* ---------------- 13. Final CTA (Item #9: Learn Build Grow Push) ---------------- */
export function FinalCta() {
  const journey = [
    {
      num: "01",
      title: "LEARN",
      body: "Understand the fundamentals.",
      accent: "#1D5F6E",
      soft: "#E6F2F3",
    },
    {
      num: "02",
      title: "BUILD",
      body: "Turn knowledge into something real.",
      accent: "#55C9B8",
      soft: "#E9F8F5",
    },
    {
      num: "03",
      title: "GROW",
      body: "Take it into your next opportunity.",
      accent: "#23857A",
      soft: "#E8F8F5",
    },
  ];

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[#0F2A30] py-14 sm:py-16 lg:py-20"
    >
      {/* Animated ASCII horizon behind the closing copy */}
      <div className="pointer-events-none absolute inset-0 motion-reduce:hidden" aria-hidden="true">
        <GradientASCII
          colors={["#0F2A30", "#1D5F6E", "#55C9B8", "#F4B942", "#EF6F51"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={20}
          density={0.65}
          glyphOpacity={0.72}
          gradientOpacity={0.9}
          scale={1.2}
          softness={0.6}
          className="h-full w-full"
        />

        {/* Scrim: darkest behind the copy, so the field still shows at the edges */}
        <div className="absolute inset-0 bg-[#0F2A30]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,rgba(15,42,48,0.5)_0%,rgba(15,42,48,0.34)_50%,rgba(15,42,48,0.10)_78%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0F2A30] via-[#0F2A30]/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* TOP LABEL */}
        <div data-reveal="rise" className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
          <span>Summate Learning</span>
          <span className="text-slate-700">·</span>
          <span>Batch 01</span>
        </div>

        {/* MAIN COPY */}
        <div className="mx-auto mt-8 max-w-4xl text-center">

          <p data-reveal="rise" className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#6CCFC0]">
            Your next chapter
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]" data-reveal-step="180">
            <span data-reveal="line"><span>Learn something.</span></span>
            <span data-reveal="line">
              <span className="text-slate-300">
                Build something.
              </span>
            </span>
            <span data-reveal="line"><span>Take it forward.</span></span>
          </h2>

          <p data-reveal="rise" className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            If you’re ready to turn what you’ve learned into something you
            can use, build and take forward, Batch 1 is where Summate Learning
            begins.
          </p>

          {/* CTA */}
          <div data-reveal="pop" className="mt-9">
            <StarBorder
              as="a"
              href={APPLY_URL}
              radius={999}
              thickness={1}
              duration={5}
              glow={0.3}
              color="#F4B942"
              trailColor="#55C9B8"
              borderColor="rgba(255,255,255,0.22)"
              backgroundColor="#EF6F51"
              textColor="#FFFFFF"
              className="group gap-3 px-7 py-3.5 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5"
            >
              Apply for Batch 1

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-200 group-hover:translate-x-0.5">
                <Icon
                  name="ArrowUpRight"
                  size={13}
                  strokeWidth={2.5}
                />
              </span>
            </StarBorder>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mx-auto mt-20 max-w-5xl">

          <div className="relative">

            {/* Connecting line: drawn left to right, each step lands as the line reaches it */}
            <div data-reveal="draw" className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-slate-800 sm:block" />

            <div className="grid gap-4 sm:grid-cols-3" data-reveal-step="500">

              {journey.map((item) => (
                <div
                  key={item.num}
                  data-reveal="rise"
                  data-reveal-step="0"
                  className="group relative"
                >

                  {/* Node */}
                  <div data-reveal="pop" className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#0F2A30] bg-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: item.accent }}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 text-center">

                    <p
                      className="text-xs font-extrabold tracking-[0.2em]"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </p>

                    <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-400">
                      {item.body}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div data-reveal="rise" className="mx-auto mt-20 flex max-w-5xl flex-col gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-slate-400">
            LEARN · BUILD · GROW
          </p>

          <p className="text-xs text-slate-400">
            The journey starts with the next step.
          </p>

        </div>

      </div>
    </section>
  );
}

/* ---------------- 14. Banners & Auxiliaries ---------------- */
export function PromoBanner() {
  if (!banners.promo.enabled) return null;
  const b = banners.promo;
  return (
    <section className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-950 p-8 sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{b.kicker}</span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{b.title}</h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{b.body}</p>
          </div>
          <Link
            href={b.href}
            className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 shrink-0"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CommunityStrip() {
  return (
    <section className="border-t border-slate-100 bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">{community.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {community.title}
            </h2>
            <div className="mt-8 space-y-4">
              {community.items.map((c) => (
                <div key={c.title} className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                  <p className="mt-1 text-xs text-slate-600">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-80 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            Interactive cohort session workspace
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlacementBanner() {
  if (!banners.placement.enabled) return null;
  const b = banners.placement;
  return (
    <section className="border-t border-slate-100 bg-white py-20" id="placements">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">{b.kicker}</span>
        <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">{b.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 leading-relaxed">{b.body}</p>
        <div className="mt-8">
          <Link
            href={b.href}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-100 bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">Learner Stories</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          The first stories begin with Batch 1.
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function InsightCards() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-12 lg:py-20" id="insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">Field Notes</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Articles & Perspectives</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {insights.items.map((a) => (
            <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold text-slate-400">{a.tag}</span>
              <h3 className="mt-3 text-base font-bold text-slate-900">{a.title}</h3>
              <p className="mt-4 text-xs font-medium text-slate-400">{a.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MentorRecruitBanner() {
  if (!banners.mentorRecruit.enabled) return null;
  const b = banners.mentorRecruit;
  return (
    <section className="border-t border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{b.kicker}</span>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{b.title}</h3>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">{b.body}</p>
          </div>
          <Link
            href={b.href}
            className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D5F6E] shrink-0"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EnquirySection({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-100 bg-[#F7FBFB] py-12 lg:py-20" id="enquiry">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1D5F6E]">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Have questions about Batch 1?
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Submit your inquiry or request a callback to talk through the program format, tools, or schedule.
            </p>

            <div className="mt-8 space-y-3 text-xs font-medium text-slate-600">
              <p>• Live online across Kerala, Tamil Nadu, Karnataka, Telangana & AP</p>
              <p>• Designed for early-career developers & career-switchers</p>
              <p>• Cohort 1 commences January 2027</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}