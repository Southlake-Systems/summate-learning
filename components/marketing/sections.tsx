import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PhilosophyCards from "@/components/ui/philosophy-cards";
import { Avatar } from "@/components/ui/primitives";
import { useState } from "react";

import {
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
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-6">
      
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              You are more than <br />
              <span className="text-slate-950">what you already know.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.body[0]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/apply"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#1E3ABA]/20 transition-all duration-300 hover:bg-right hover:shadow-lg hover:shadow-[#7C3AED]/25 active:scale-[0.98]"
              >
                <span>Apply for Batch 1</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <Icon name="ArrowRight" size={15} strokeWidth={2.2} />
                </span>
              </Link>

              <Link
                href="/#tracks"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Tracks
              </Link>
            </div>

            {/* Spec Bar */}
           <div className="mt-12 border-t border-slate-100 pt-7">
  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
    {/* Live Online */}
    <div className="group flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 px-3.5 py-2 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xs">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-summate-cobalt transition-colors group-hover:bg-summate-cobalt group-hover:text-white">
        <Icon name="Users" size={13} strokeWidth={2.2} />
      </span>
      <span className="text-xs font-semibold text-slate-800">Live Online</span>
    </div>

    {/* 12 Weeks */}
    <div className="group flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 px-3.5 py-2 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xs">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-50 text-summate-purple transition-colors group-hover:bg-summate-purple group-hover:text-white">
        <Icon name="Calendar" size={13} strokeWidth={2.2} />
      </span>
      <span className="text-xs font-semibold text-slate-800">12 Weeks</span>
    </div>

    {/* Project Driven */}
    <div className="group flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 px-3.5 py-2 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xs">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-summate-orange transition-colors group-hover:bg-summate-orange group-hover:text-white">
        <Icon name="Laptop" size={13} strokeWidth={2.2} />
      </span>
      <span className="text-xs font-semibold text-slate-800">Project Driven</span>
    </div>

    {/* AI Assisted */}
    <div className="group flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/80 px-3.5 py-2 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xs">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-pink-50 text-summate-magenta transition-colors group-hover:bg-summate-magenta group-hover:text-white">
        <Icon name="Sparkles" size={13} strokeWidth={2.2} />
      </span>
      <span className="text-xs font-semibold text-slate-800">AI Assisted</span>
    </div>
  </div>
</div>
          </div>

          {/* Right Column: Hero Visual with Glass Badges */}
          <div className="relative flex min-h-[460px] items-center justify-center lg:col-span-6 lg:min-h-[540px]">
            <div className="relative z-10 w-full max-w-[420px]">
              <Image
                src="/hero_right.png"
                alt="Summate Learning Student"
                width={500}
                height={550}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="absolute left-0 top-[18%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="Code2" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Build</p>
                <p className="text-[11px] text-slate-500">Real Projects</p>
              </div>
            </div>

            <div className="absolute left-2 bottom-[14%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="Brain" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Learn with</p>
                <p className="text-[11px] text-slate-500">Industry Experts</p>
              </div>
            </div>

            <div className="absolute right-0 top-[26%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="TrendingUp" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Career</p>
                <p className="text-[11px] text-slate-500">Opportunities</p>
              </div>
            </div>

            <div className="absolute right-2 bottom-[20%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="Rocket" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Future Ready</p>
                <p className="text-[11px] text-slate-500">Skills</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- 02. Logo Marquee ---------------- */
// export function LogoMarquee() {
//   const row = [...(partners?.logos ?? []), ...(partners?.logos ?? [])];
//   return (
//     <section className="border-y border-slate-100 bg-[#FAFBFF] py-8">
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
      className="relative overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* Very subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-[#EEF3FF] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1E3ABA]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
                Why Summate
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-[#0D1222] sm:text-5xl lg:text-[56px]">
              Because learning shouldn't stop
              <br className="hidden sm:block" />
              where the syllabus ends.
            </h2>
          </div>

          <p className="max-w-lg text-[16px] font-medium leading-7 text-slate-500 lg:pb-1">
            There are courses, certificates, tutorials, bootcamps and
            promises of “job-ready” skills everywhere. But knowing something
            is not the same as knowing what to do with it.
          </p>
        </div>

        {/* =====================================================
            THE GAP
        ===================================================== */}
        <div className="mt-20 border-y border-slate-200">
          <div className="grid lg:grid-cols-[240px_1fr]">

            {/* Label */}
            <div className="border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:pr-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                The gap
              </p>

              <p className="mt-3 max-w-[180px] text-sm font-semibold leading-6 text-[#0D1222]">
                Where knowing something isn't enough.
              </p>
            </div>

            {/* Gap items */}
            <div className="grid sm:grid-cols-2">
              {gaps.map((gap, index) => (
                <div
                  key={gap.num}
                  className={`group relative flex gap-5 px-1 py-7 sm:px-7 ${
                    index < 2 ? "sm:border-b border-slate-200" : ""
                  } ${
                    index % 2 === 0
                      ? "sm:border-r border-slate-200"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#1E3ABA]">
                      {gap.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="max-w-md text-sm font-semibold leading-6 text-slate-700 transition-colors duration-200 group-hover:text-[#0D1222]">
                      {gap.text}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition-all duration-200 group-hover:border-[#1E3ABA]/30 group-hover:bg-[#EEF3FF] group-hover:text-[#1E3ABA]">
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

        {/* =====================================================
            CORE PILLARS
        ===================================================== */}
        <div className="mt-24">

          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                What we believe
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0D1222] sm:text-3xl">
                Three ideas behind how we teach.
              </h3>
            </div>

            <div className="hidden h-px max-w-[260px] flex-1 bg-slate-200 sm:block" />
          </div>

          <PhilosophyCards />
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <div className="relative mt-20 overflow-hidden rounded-[28px] bg-[#0D1222] px-7 py-9 sm:px-10 sm:py-10">
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                The Summate philosophy
              </p>

              <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.02em] text-white sm:text-2xl">
                The goal isn't simply to know more.
                <span className="text-slate-400">
                  {" "}
                  It's to know what to do with what you know.
                </span>
              </p>
            </div>

            {/* Brand signature — NOT a tab/pill */}
            <div className="flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
              <span className="text-white">LEARN</span>

              <span className="text-slate-600">→</span>

              <span className="text-white">APPLY</span>

              <span className="text-slate-600">→</span>

              <span className="text-white">ACHIEVE</span>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#1E3ABA] opacity-30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
export function TrackCatalog() {
  const tracks = [
    {
      id: "full-stack",
      number: "01",
      badge: "Flagship Program",
      title: "AI-Augmented Full-Stack Developer",
      tagline:
        "Build production-ready applications while learning how to work effectively with modern AI tools.",
      duration: "12 Weeks",
      format: "Live Online",
      accent: "#1E3ABA",
      soft: "#EEF2FF",
      skills: [
        "Next.js",
        "TypeScript",
        "Python",
        "APIs",
        "AI Workflows",
      ],
      seats: "Founding Cohort",
      featured: true,
    },
    {
      id: "data-eng",
      number: "02",
      badge: "Coming Soon",
      title: "Modern Data Engineering",
      tagline:
        "Build practical data systems and develop the engineering habits needed for production environments.",
      duration: "12 Weeks",
      format: "Live Online",
      accent: "#7C3AED",
      soft: "#F3EFFF",
      skills: [
        "Python",
        "Data Pipelines",
        "SQL",
        "Cloud",
        "Analytics",
      ],
      seats: "Coming Soon",
      featured: false,
    },
    {
      id: "growth-marketing",
      number: "03",
      badge: "Coming Soon",
      title: "Performance & Digital Marketing",
      tagline:
        "Learn how modern marketing teams use experimentation, analytics and technology to drive growth.",
      duration: "10 Weeks",
      format: "Live Online",
      accent: "#FF2D75",
      soft: "#FFF0F5",
      skills: [
        "Analytics",
        "CRO",
        "Campaigns",
        "Attribution",
        "Growth",
      ],
      seats: "Coming Soon",
      featured: false,
    },
    {
      id: "ai-mech",
      number: "04",
      badge: "Interdisciplinary",
      title: "AI & Embedded Systems",
      tagline:
        "Explore the intersection of intelligent software, hardware and real-world systems.",
      duration: "12 Weeks",
      format: "Live Online",
      accent: "#FF8A00",
      soft: "#FFF6E9",
      skills: [
        "Computer Vision",
        "Edge AI",
        "Embedded",
        "Sensors",
        "Python",
      ],
      seats: "Coming Soon",
      featured: false,
    },
  ];

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#1E3ABA]/[0.035] blur-3xl" />
        <div className="absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-[#7C3AED]/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#CBD5E1 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1E3ABA]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3ABA]">
                Programs
              </span>
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0D1222] sm:text-[48px] lg:text-[58px]">
              Learning that leads
              <br />
              <span className="text-slate-400">
                somewhere.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              Programs designed around practical learning, real work
              and the skills you need for what comes next.
            </p>
          </div>

          {/* Small count */}
          <div className="hidden shrink-0 lg:block">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-extrabold tracking-[-0.06em] text-[#0D1222]">
                04
              </span>

              <span className="mb-1 max-w-[100px] text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-slate-400">
                Learning paths
                <br />
                and programs
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            FEATURED PROGRAM
        ========================================================= */}

        <div className="mt-16">
          {tracks
            .filter((track) => track.featured)
            .map((track) => (
              <Link
                key={track.id}
                href="/apply"
                className="group relative block overflow-hidden rounded-[32px] border border-[#1E3ABA]/15 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#1E3ABA]/30 hover:shadow-[0_30px_80px_rgba(30,58,186,0.12)]"
              >
                {/* Accent edge */}
                <div
                  className="absolute bottom-0 left-0 top-0 w-1.5"
                  style={{ backgroundColor: track.accent }}
                />

                {/* Decorative number */}
                <div
                  className="pointer-events-none absolute -right-5 -top-16 select-none text-[240px] font-extrabold leading-none tracking-[-0.1em]"
                  style={{ color: track.soft }}
                >
                  {track.number}
                </div>

                {/* Hover orb */}
                <div
                  className="pointer-events-none absolute -right-24 bottom-[-100px] h-64 w-64 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-60"
                  style={{ backgroundColor: track.accent }}
                />

                <div className="relative grid lg:grid-cols-[1fr_320px]">
                  {/* Main */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                        style={{
                          backgroundColor: track.soft,
                          color: track.accent,
                        }}
                      >
                        {track.badge}
                      </span>

                      <span className="text-[11px] font-semibold text-slate-400">
                        {track.number} / 04
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0D1222] transition-colors duration-300 group-hover:text-[#1E3ABA] sm:text-4xl lg:text-[46px]">
                      {track.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      {track.tagline}
                    </p>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors duration-300 group-hover:border-slate-300 group-hover:bg-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Side panel */}
                  <div className="flex flex-col justify-between border-t border-slate-100 bg-[#FAFBFF] p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Program format
                      </p>

                      <div className="mt-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: track.soft,
                              color: track.accent,
                            }}
                          >
                            <Icon
                              name="Calendar"
                              size={16}
                              strokeWidth={1.8}
                            />
                          </span>

                          <div>
                            <p className="text-xs font-bold text-[#0D1222]">
                              {track.duration}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              Structured program
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: track.soft,
                              color: track.accent,
                            }}
                          >
                            <Icon
                              name="Monitor"
                              size={16}
                              strokeWidth={1.8}
                            />
                          </span>

                          <div>
                            <p className="text-xs font-bold text-[#0D1222]">
                              {track.format}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              Learn from anywhere
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Availability
                        </p>

                        <p className="mt-1 text-xs font-bold text-emerald-600">
                          ● {track.seats}
                        </p>
                      </div>

                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105"
                        style={{ backgroundColor: track.accent }}
                      >
                        <Icon
                          name="ArrowUpRight"
                          size={18}
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* =========================================================
            OTHER PROGRAMS
        ========================================================= */}

        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                More programs
              </p>
            </div>

            <div className="hidden h-px flex-1 bg-slate-200/80 sm:ml-6 sm:block" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {tracks
              .filter((track) => !track.featured)
              .map((track) => (
                <Link
                  key={track.id}
                  href="/apply"
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_50px_rgba(13,18,34,0.08)]"
                >
                  {/* Number */}
                  <div
                    className="absolute -right-2 -top-8 select-none text-[110px] font-extrabold leading-none tracking-[-0.08em] opacity-70 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1"
                    style={{ color: track.soft }}
                  >
                    {track.number}
                  </div>

                  {/* Top */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: track.soft,
                        color: track.accent,
                      }}
                    >
                      {track.badge}
                    </span>

                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-slate-300 group-hover:text-[#0D1222]"
                    >
                      <Icon
                        name="ArrowUpRight"
                        size={14}
                        strokeWidth={2}
                      />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400">
                      PROGRAM {track.number}
                    </p>

                    <h3 className="text-xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0D1222] transition-colors duration-300 group-hover:text-[#1E3ABA]">
                      {track.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {track.tagline}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {track.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Format
                      </p>

                      <p className="mt-1 text-[11px] font-semibold text-slate-600">
                        {track.duration} · {track.format}
                      </p>
                    </div>

                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
                      style={{ color: track.accent }}
                    >
                      Explore
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: track.accent }}
                  />
                </Link>
              ))}
          </div>
        </div>

        {/* =========================================================
            CLOSING LINE
        ========================================================= */}

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Every program is designed to help you move from knowing
            something to being able to use it.
          </p>

          <Link
            href="/apply"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#0D1222]"
          >
            <span>Start with Batch 01</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3ABA] text-white transition-transform duration-300 group-hover:translate-x-1">
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
      accent: "#1E3ABA",
      soft: "#EEF2FF",
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
      accent: "#7C3AED",
      soft: "#F3EFFF",
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
      accent: "#FF8A00",
      soft: "#FFF5E8",
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
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-32 h-72 w-72 rounded-full bg-[#1E3ABA]/[0.025] blur-3xl" />

        <div className="absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-[#7C3AED]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-300" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Who It's For
            </span>

            <span className="h-px w-8 bg-slate-300" />
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#0D1222] sm:text-[48px] lg:text-[56px]">
            There’s No Single
            <br />
            Starting Point for Learning.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Starting out, starting over, or ready for something more.
            Summate Learning is designed for different points in the
            journey.
          </p>
        </div>

        {/* =========================================================
            JOURNEY INDICATOR
        ========================================================= */}

        <div className="mx-auto mt-12 hidden max-w-xl items-center justify-center md:flex">
          <div className="flex items-center">
            <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#1E3ABA]">
              STARTING OUT
            </span>

            <span className="mx-4 h-px w-16 bg-slate-200" />

            <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400">
              MOVING FORWARD
            </span>

            <span className="mx-4 h-px w-16 bg-slate-200" />

            <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400">
              CHANGING COURSE
            </span>
          </div>
        </div>

        {/* =========================================================
            CARDS
        ========================================================= */}

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {cards.map((card, index) => {
            const isMiddle = index === 1;

            return (
              <article
                key={card.title}
                className={`
                  group relative overflow-hidden rounded-[30px]
                  border border-slate-200 bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-slate-300
                  hover:shadow-[0_30px_70px_rgba(13,18,34,0.10)]
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
                  <h3 className="text-[29px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0D1222] transition-colors duration-300 group-hover:text-[#1E3ABA]">
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
                >
                  {/* Image background */}
                  <div
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
                  <div className="absolute inset-x-0 bottom-0 top-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
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
                    className="
                      absolute bottom-5 left-5 right-5
                      rounded-2xl border border-white/80
                      bg-white/90 px-4 py-3
                      shadow-[0_10px_30px_rgba(13,18,34,0.08)]
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
                    href="/apply"
                    className="
                      mt-6 flex w-full items-center
                      justify-between rounded-xl
                      border border-slate-200
                      bg-white px-4 py-3
                      text-xs font-bold text-[#0D1222]
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

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#1E3ABA]">
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
            href="/apply"
            className="
              group inline-flex items-center gap-2
              text-sm font-bold text-[#0D1222]
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
  const cards = [
    {
      num: "01",
      label: "LEARN",
      title: "Practical, Industry-Relevant Learning",
      desc: "Go beyond theory with hands-on projects, real-world case studies and skills that actually matter.",
      image: "/spotlight1.jpg",
      alt: "Laptop displaying code - Build, Apply, Grow",
      accent: "#1E3ABA",
      soft: "#EEF2FF",
    },
    {
      num: "02",
      label: "ADAPT",
      title: "Flexible for Every Journey",
      desc: "Learn from wherever you are. Whether you're a student, working professional or changing careers — Summate fits into your life.",
      image: "/spotlight2.png",
      alt: "Desk with books and coffee mug - Your Pace, Your Path",
      accent: "#7C3AED",
      soft: "#F3EFFF",
    },
    {
      num: "03",
      label: "BELONG",
      title: "A Supportive Learning Community",
      desc: "You're never alone. Learn with peers, get guidance from mentors and be part of a community that cheers your progress.",
      image: "/spotlight3.png",
      alt: "Wooden figurines - Learn Together, Grow Together",
      accent: "#FF8A00",
      soft: "#FFF5E8",
    },
    {
      num: "04",
      label: "MOVE FORWARD",
      title: "Pathways to Real Opportunities",
      desc: "Gain skills, build a standout portfolio and get access to opportunities that help you take the next step with confidence.",
      image: "/spotlight4.png",
      alt: "Stack of books - Skills, Portfolio, Mentorship, Opportunities",
      accent: "#00A99D",
      soft: "#EAFBF9",
    },
  ];

  return (
    <section
      id="program"
      className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#1E3ABA]/[0.025] blur-3xl" />

        <div className="absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-[#7C3AED]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1E3ABA]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3ABA]">
                The Summate Difference
              </span>
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0D1222] sm:text-[48px] lg:text-[58px]">
              More Than
              <br />
              <span className="text-slate-400">
                Just Courses.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A learning experience built for real growth, real people
              and real opportunities.
            </p>
          </div>

          {/* Side statement */}
          <div className="max-w-[260px] lg:pb-1">
            <p className="text-right font-serif text-sm italic leading-6 text-slate-400">
              Learning becomes meaningful when you have somewhere
              to take it.
            </p>
          </div>
        </div>

        {/* =========================================================
            JOURNEY LINE
        ========================================================= */}

        <div className="mt-14 hidden items-center gap-4 md:flex">
          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#1E3ABA]">
            LEARN
          </span>

          <div className="h-px flex-1 bg-slate-200" />

          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-400">
            ADAPT
          </span>

          <div className="h-px flex-1 bg-slate-200" />

          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-400">
            BELONG
          </span>

          <div className="h-px flex-1 bg-slate-200" />

          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-slate-400">
            MOVE FORWARD
          </span>
        </div>

        {/* =========================================================
            DESKTOP JOURNEY
        ========================================================= */}

        <div className="mt-8 hidden gap-4 lg:flex">
          {cards.map((card, index) => {
            const featured = index === 0;

            return (
              <article
                key={card.num}
                className={`
                  group relative flex flex-col overflow-hidden
                  rounded-[28px] border border-slate-200
                  bg-white
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-slate-300
                  hover:shadow-[0_30px_70px_rgba(13,18,34,0.10)]
                  ${
                    featured
                      ? "w-[32%]"
                      : "w-[22.67%]"
                  }
                `}
              >
                {/* =================================================
                    TOP
                ================================================= */}

                <div className="relative p-6 xl:p-7">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[11px] font-bold tracking-[0.15em]"
                      style={{ color: card.accent }}
                    >
                      {card.num}
                    </span>

                    <span
                      className="rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.12em]"
                      style={{
                        backgroundColor: card.soft,
                        color: card.accent,
                      }}
                    >
                      {card.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      mt-7 font-extrabold leading-[1.12]
                      tracking-[-0.035em] text-[#0D1222]
                      transition-colors duration-300
                      group-hover:text-[#1E3ABA]
                      ${
                        featured
                          ? "text-[25px]"
                          : "text-[21px]"
                      }
                    `}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`
                      mt-3 text-slate-500
                      ${
                        featured
                          ? "text-sm leading-6"
                          : "text-xs leading-6"
                      }
                    `}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className={`
                    relative mt-auto overflow-hidden
                    ${
                      featured
                        ? "h-[250px]"
                        : "h-[205px]"
                    }
                  `}
                >
                  {/* Image background */}
                  <div
                    className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                    style={{
                      backgroundColor: card.soft,
                    }}
                  />

                  {/* Decorative circle */}
                  <div
                    className="
                      absolute -bottom-20 -left-12
                      h-52 w-52 rounded-full
                      opacity-30 blur-2xl
                      transition-all duration-700
                      group-hover:scale-125
                    "
                    style={{
                      backgroundColor: card.accent,
                    }}
                  />

                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="
                      relative z-10 object-cover object-center
                      transition-transform duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    sizes="(max-width: 1280px) 25vw, 300px"
                  />

                  {/* Floating number */}
                  <div
                    className="
                      absolute bottom-4 left-4 z-20
                      flex h-9 w-9 items-center
                      justify-center rounded-full
                      border border-white/80
                      bg-white/90
                      text-[10px] font-bold
                      shadow-sm backdrop-blur
                    "
                    style={{
                      color: card.accent,
                    }}
                  >
                    {card.num}
                  </div>
                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">
                    {index === 0
                      ? "Start here"
                      : "Part of the journey"}
                  </span>

                  <span
                    className="
                      flex h-7 w-7 items-center
                      justify-center rounded-full
                      text-white
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
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

                {/* Accent line */}
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
            TABLET / MOBILE
        ========================================================= */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:hidden">
          {cards.map((card, index) => (
            <article
              key={card.num}
              className="
                group relative overflow-hidden
                rounded-[26px] border border-slate-200
                bg-white
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_55px_rgba(13,18,34,0.08)]
              "
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.15em]"
                    style={{
                      color: card.accent,
                    }}
                  >
                    {card.num}
                  </span>

                  <span
                    className="rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[0.12em]"
                    style={{
                      backgroundColor: card.soft,
                      color: card.accent,
                    }}
                  >
                    {card.label}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold leading-[1.12] tracking-[-0.035em] text-[#0D1222]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {card.desc}
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: card.soft,
                  }}
                />

                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">
                  {index === 0
                    ? "Start here"
                    : "Keep going"}
                </span>

                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <Icon
                    name="ArrowUpRight"
                    size={14}
                    strokeWidth={2}
                  />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            BOTTOM MESSAGE
        ========================================================= */}

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#1E3ABA]" />

            <p className="text-sm font-medium text-slate-500">
              Learn something. Apply it. See where it takes you.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-[#0D1222]">
            <span>Learn</span>
            <span className="text-slate-300">→</span>
            <span>Apply</span>
            <span className="text-slate-300">→</span>
            <span>Grow</span>
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28" id="comparison">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] sm:h-[420px] sm:w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] rounded-full bg-indigo-100/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />
            A Clearer Difference
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
            More than just <span className="text-[#1E3ABA]">courses.</span>
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

                <div className="rounded-2xl border border-blue-200/90 bg-[#F5F8FF] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-extrabold text-[#1E3ABA] uppercase tracking-wide">
                      Summate Approach
                    </span>
                    <span className="text-[10px] font-bold uppercase rounded bg-blue-100 px-1.5 py-0.5 text-[#1E3ABA]">
                      Our Way
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1E3ABA] mt-0.5">
                      <Icon name="Check" size={11} strokeWidth={3} />
                    </span>
                    <p className="text-xs font-bold leading-relaxed text-[#0F172A]">
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
                  <h3 className="text-sm font-bold text-[#0F172A]">Traditional Courses</h3>
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

          <div className="relative rounded-[32px] border border-blue-200/90 bg-[#F5F8FF] p-6 shadow-md shadow-blue-900/[0.04] lg:col-span-5">
            <div className="flex h-[64px] items-center justify-between border-b border-blue-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-[#1E3ABA] shadow-2xs">
                  <Icon name="Zap" size={19} strokeWidth={2.3} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#1E3ABA]">Summate Approach</h3>
                  <p className="text-[11px] font-medium text-blue-600/70">Founding Batch 1</p>
                </div>
              </div>

              <span className="rounded-md border border-blue-200 bg-blue-100/70 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#1E3ABA] uppercase">
                Our Way
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {comparisonRows.map((r) => (
                <div
                  key={r.area}
                  className="flex h-[88px] items-center gap-3 rounded-2xl border border-blue-100/90 bg-white px-4 py-3 shadow-2xs"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1E3ABA]">
                    <Icon name="Check" size={12} strokeWidth={3} />
                  </span>
                  <p className="text-xs font-bold leading-snug text-[#0F172A] xl:text-[13px]">
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
export function BatchBenefits() {
  const benefits = [
    {
      num: "01",
      phase: "LEARN",
      title: "Live, Interactive Classes",
      desc: "Learn directly from practitioners in a focused, collaborative environment.",
      icon: "Laptop",
      accent: "#1E3ABA",
      soft: "#EEF2FF",
    },
    {
      num: "02",
      phase: "BUILD",
      title: "Hands-on Projects",
      desc: "Build and ship real-world projects you can actually showcase.",
      icon: "FileCode2",
      accent: "#7C3AED",
      soft: "#F3EFFF",
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
      accent: "#FF8A00",
      soft: "#FFF5E8",
    },
    {
      num: "05",
      phase: "CONNECT",
      title: "A Focused Peer Community",
      desc: "Learn and grow with a motivated group of peers.",
      icon: "Users",
      accent: "#FF2D75",
      soft: "#FFF0F5",
    },
    {
      num: "06",
      phase: "CONTINUE",
      title: "Access to Resources",
      desc: "Revisit sessions, notes and resources beyond the program.",
      icon: "BookOpen",
      accent: "#00A99D",
      soft: "#EAFBF9",
    },
  ];

  const [active, setActive] = useState(1);

  const current = benefits[active];

  return (
    <section
      id="batch-benefits"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#1E3ABA]/[0.025] blur-3xl" />

        <div className="absolute right-[-140px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1E3ABA]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3ABA]">
                The Batch 01 Experience
              </span>
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0D1222] sm:text-[48px] lg:text-[58px]">
              A learning experience
              <br />
              <span className="text-slate-400">
                that moves you forward.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Practical skills, real projects and the right guidance —
              everything designed to help you build what's next.
            </p>
          </div>

          {/* Journey */}
          <div className="shrink-0 lg:pb-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#1E3ABA]">
                LEARN
              </span>

              <span className="text-slate-300">→</span>

              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#7C3AED]">
                BUILD
              </span>

              <span className="text-slate-300">→</span>

              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald-600">
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

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#FAFBFF]">
            {benefits.map((benefit, index) => {
              const isActive = active === index;

              return (
                <button
                  key={benefit.num}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
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
                            ? "text-[#0D1222]"
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

          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-slate-200 bg-[#F7F9FF]">
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
              <Image
                src="/workspace-setup.png"
                alt="Workspace with laptop, notebook and books"
                fill
                priority
                className="object-cover object-center transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1222]/75 via-transparent to-transparent" />
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
            <div className="absolute bottom-9 left-9 right-9 z-20 text-white">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: "#CBD5FF",
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

              {/* Progress */}
              <div className="mt-6 flex items-center gap-2">
                {benefits.map((item, index) => (
                  <span
                    key={item.num}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      width: index === active ? "32px" : "10px",
                      backgroundColor:
                        index === active
                          ? current.accent
                          : "rgba(255,255,255,0.35)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div className="mt-12 grid gap-5 border-t border-slate-200 pt-7 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#1E3ABA]">
              01 / LEARN
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0D1222]">
              Understand the fundamentals.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#7C3AED]">
              02 / BUILD
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0D1222]">
              Turn knowledge into something real.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-emerald-600">
              03 / GROW
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0D1222]">
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
  const toolList = [
    { name: "VS Code", slug: "vscode" },
    { name: "Next.js", slug: "nextjs" },
    { name: "React", slug: "react" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Node.js", slug: "nodejs" },
    { name: "Python", slug: "python" },
    { name: "Django", slug: "django" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "AWS", slug: "amazonwebservices" },
    { name: "Docker", slug: "docker" },
    { name: "Figma", slug: "figma" },
    { name: "Postman", slug: "postman" },
    { name: "Linux", slug: "linux" },
    { name: "Vercel", slug: "vercel" },
    { name: "Firebase", slug: "firebase" },
    { name: "OpenAI", slug: "openai" },
    { name: "And more", isMore: true },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32" id="tools">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.14]">
            Tools you’ll work with
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Modern, industry-relevant tools to help you build, ship and grow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
          {toolList.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.04] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-md sm:h-[72px] sm:w-[72px]">
                {tool.isMore ? (
                  <span className="flex items-center gap-1 text-slate-400 tracking-widest text-lg font-black">
                    •••
                  </span>
                ) : (
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.slug}/${tool.slug}-original.svg`}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110"
                    unoptimized
                  />
                )}
              </div>
              <span className="mt-3 text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-950">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="h-0.5 w-8 rounded-full bg-slate-200" />
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
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
      accent: "#1E3ABA",
      soft: "#EEF2FF",
    },
    {
      num: "02",
      title: "Learn Where You Are",
      phase: "LEARN",
      body: "Join live sessions, meet your cohort and build a strong foundation together.",
      icon: "Users",
      accent: "#7C3AED",
      soft: "#F3EFFF",
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
      accent: "#FF8A00",
      soft: "#FFF5E8",
    },
    {
      num: "05",
      title: "Take the Next Step",
      phase: "GROW",
      body: "Leave with greater confidence, practical experience and a clearer direction.",
      icon: "ArrowUpRight",
      accent: "#00A99D",
      soft: "#EAFBF9",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
              How It Works
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0D1222] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
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
                    className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[6px] border-white shadow-[0_4px_20px_rgba(13,18,34,0.08)] transition-all duration-300 group-hover:scale-110"
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

                  <h3 className="mt-2 text-lg font-bold tracking-tight text-[#0D1222]">
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

                      <h3 className="mt-1 text-base font-bold text-[#0D1222]">
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
      className="relative overflow-hidden bg-[#F8FAFF] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
              06 · Our Story
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0D1222] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
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

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1E3ABA] shadow-sm ring-1 ring-slate-200">
                  <Icon
                    name="Compass"
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0D1222]">
                    The beginning
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Batch 01
                  </p>
                </div>

              </div>

              <div className="mt-8 hidden border-l border-slate-200 pl-6 lg:block">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  LEARN
                </p>

                <div className="my-4 h-12 w-px bg-gradient-to-b from-[#1E3ABA] to-transparent" />

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  APPLY
                </p>

                <div className="my-4 h-12 w-px bg-gradient-to-b from-[#7C3AED] to-transparent" />

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  ACHIEVE
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — FOUNDER NOTE */}
          <div className="lg:col-span-8">

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-7 py-9 shadow-[0_12px_40px_rgba(13,18,34,0.04)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

              {/* Decorative quote */}
              <div className="pointer-events-none absolute -right-3 -top-10 select-none font-serif text-[180px] font-black leading-none text-slate-100">
                “
              </div>

              <div className="relative">

                {/* Label */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A00]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    A note from the founders
                  </span>
                </div>

                {/* Main note */}
                <div className="mt-8 max-w-2xl">

                  <p className="text-xl font-medium leading-[1.65] tracking-[-0.01em] text-[#0D1222] sm:text-2xl sm:leading-[1.6]">
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
                    <p className="font-serif text-lg italic text-[#0D1222]">
                      The Founders
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#1E3ABA]">
                      {founders?.signoff || "The Founders, Summate Learning"}
                    </p>
                  </div>

                  <Link
                    href="/apply"
                    className="group inline-flex items-center gap-2 self-start rounded-full bg-[#0D1222] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3ABA]"
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
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
              The People Behind It
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] text-[#0D1222] sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
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
          <span className="text-[#1E3ABA]">KNOW</span>
          <span>→</span>
          <span className="text-[#7C3AED]">APPLY</span>
          <span>→</span>
          <span className="text-[#00A99D]">GROW</span>
        </div>

        {/* MENTORS */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {mentors.people.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#F8FAFF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(13,18,34,0.07)]"
            >

              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-[#1E3ABA]/20 group-hover:text-[#1E3ABA]">
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
                  <div className="absolute -inset-2 rounded-full border border-slate-200 transition-all duration-500 group-hover:scale-105 group-hover:border-[#1E3ABA]/20" />

                  <Avatar initials={m.initials} />

                </div>
              </div>

              {/* Info */}
              <div className="mt-8 text-center">

                <p className="text-base font-bold tracking-tight text-[#0D1222]">
                  {m.name}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {m.role}
                </p>

              </div>

              {/* Bottom accent */}
              <div className="mt-7 flex justify-center">
                <div className="h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#1E3ABA]" />
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
            <span className="h-2 w-2 rounded-full bg-[#FF8A00]" />
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
      accent: "#1E3ABA",
      soft: "#EEF2FF",
    },
    {
      num: "02",
      title: "BUILD",
      body: "Turn knowledge into something real.",
      accent: "#7C3AED",
      soft: "#F3EFFF",
    },
    {
      num: "03",
      title: "GROW",
      body: "Take it into your next opportunity.",
      accent: "#00A99D",
      soft: "#EAFBF9",
    },
  ];

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[#0D1222] py-24 sm:py-28 lg:py-32"
    >
      {/* Subtle background details */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#1E3ABA]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* TOP LABEL */}
        <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
          <span>Summate Learning</span>
          <span className="text-slate-700">·</span>
          <span>Batch 01</span>
        </div>

        {/* MAIN COPY */}
        <div className="mx-auto mt-8 max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6E8AFF]">
            Your next chapter
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Learn something.
            <br />
            <span className="text-slate-500">
              Build something.
            </span>
            <br />
            Take it forward.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            If you’re ready to turn what you’ve learned into something you
            can use, build and take forward, Batch 1 is where Summate Learning
            begins.
          </p>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0D1222] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EEF2FF]"
            >
              Apply for Batch 1

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3ABA] text-white transition-transform duration-200 group-hover:translate-x-0.5">
                <Icon
                  name="ArrowUpRight"
                  size={13}
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mx-auto mt-20 max-w-5xl">

          <div className="relative">

            {/* Connecting line */}
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-slate-800 sm:block" />

            <div className="grid gap-4 sm:grid-cols-3">

              {journey.map((item, index) => (
                <div
                  key={item.num}
                  className="group relative"
                >

                  {/* Node */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#0D1222] bg-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110">
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

                    <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
                      {item.body}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-4 border-t border-slate-800 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-slate-500">
            LEARN · BUILD · GROW
          </p>

          <p className="text-xs text-slate-600">
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
    <section className="border-t border-slate-100 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">{community.eyebrow}</p>
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
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">{b.kicker}</span>
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
    <section className="border-t border-slate-100 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Learner Stories</p>
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
    <section className="border-t border-slate-100 bg-slate-50/50 py-20 lg:py-28" id="insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Field Notes</p>
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
            className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3ABA] shrink-0"
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
    <section className="border-t border-slate-100 bg-[#FAFBFF] py-20 lg:py-28" id="enquiry">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Have questions about Batch 1?
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Submit your inquiry or request a callback to talk through the program format, tools, or schedule.
            </p>

            <div className="mt-8 space-y-3 text-xs font-medium text-slate-600">
              <p>• Live online across Kerala, Tamil Nadu, Karnataka, Telangana & AP</p>
              <p>• Designed for early-career developers & career-switchers</p>
              <p>• Cohort 1 commences September 2026</p>
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