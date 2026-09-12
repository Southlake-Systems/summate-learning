import Link from "next/link";
import Icon from "@/components/ui/Icon";

import Image from "next/image";
import {
  Badge,
  Card,
  IconPlate,
  Avatar,
  SectionHeader,
  PlaceholderChip,
  PlaceholderImage,
} from "@/components/ui/primitives";
import {
  StoryIllustration,
  CommunityIllustration,
} from "@/components/Illustrations";
import {
  hero,
  partners,
  personas,
  whyIntro,
  features,
  program,
  comparison,
  tools,
  steps,
  community,
  mentors,
  founders,
  insights,
  batchBenefits,
  finalCta,
  banners,
} from "@/lib/siteContent";

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left: Punchy Editorial Copy */}
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />
              Founding Batch · Live Online · September 2026
            </div>

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
                href="/#program"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Syllabus
              </Link>
            </div>

            {/* Spec Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-slate-500" strokeWidth={2} />
                <span>Live Online</span>
              </div>
              <div className="h-3 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} className="text-slate-500" strokeWidth={2} />
                <span>12 Weeks</span>
              </div>
              <div className="h-3 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Icon name="Laptop" size={16} className="text-slate-500" strokeWidth={2} />
                <span>Project Driven</span>
              </div>
              <div className="h-3 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-slate-500" strokeWidth={2} />
                <span>AI Assisted</span>
              </div>
            </div>
          </div>

          {/* Right: Student Image with Floating Glass Chips */}
          <div className="relative flex min-h-[460px] items-center justify-center lg:col-span-6 lg:min-h-[540px]">

            {/* Cutout Image */}
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

            {/* Floating Card 1 (Top Left) */}
            <div className="absolute left-0 top-[18%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="Code2" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Build</p>
                <p className="text-[11px] text-slate-500">Real Projects</p>
              </div>
            </div>

            {/* Floating Card 2 (Bottom Left) */}
            <div className="absolute left-2 bottom-[14%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="Brain" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Learn with</p>
                <p className="text-[11px] text-slate-500">Industry Experts</p>
              </div>
            </div>

            {/* Floating Card 3 (Top Right) */}
            <div className="absolute right-0 top-[26%] z-20 flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Icon name="TrendingUp" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">Career</p>
                <p className="text-[11px] text-slate-500">Opportunities</p>
              </div>
            </div>

            {/* Floating Card 4 (Bottom Right) */}
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

/* ---------------- LogoMarquee ---------------- */
export function LogoMarquee() {
  const row = [...(partners?.logos ?? []), ...(partners?.logos ?? [])];
  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-slate-400">
          {partners?.label}
        </p>
        <div className="relative mt-5 flex overflow-hidden">
          <div className="flex animate-marquee gap-10 whitespace-nowrap text-sm font-medium text-slate-500">
            {row.map((name, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <Icon name="Building2" size={15} className="text-slate-400" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PersonaCards ---------------- */
export function PersonaCards() {
  const cards = [
    {
      num: "01",
      tagline: "Big Beginnings",
      title: "Starting Out",
      desc: "You have the qualification. Now it's time to build what's next.",
      quote: "From learning to doing.",
      image: "/personalcard1.png", // Ensure this exists in public/
      btnStyle: "bg-[#1E3ABA] text-white hover:bg-[#152882]",
      features: [
        { label: "Recent graduates", icon: "Sparkles", color: "text-[#1E3ABA]", bg: "bg-blue-50/80" },
        { label: "Early career professionals", icon: "Sparkles", color: "text-[#1E3ABA]", bg: "bg-blue-50/80" },
        { label: "Build real-world skills", icon: "Sparkles", color: "text-[#1E3ABA]", bg: "bg-blue-50/80" },
      ],
    },
    {
      num: "02",
      tagline: "Keep Growing",
      title: "Moving Forward",
      desc: "You're working, but you want to grow, switch roles or stay ahead.",
      quote: "Better Skills. Bigger Opportunities.",
      image: "/personalcard2.png", // Ensure this exists in public/
      btnStyle: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      features: [
        { label: "Working professionals", icon: "Sparkles", color: "text-[#7C3AED]", bg: "bg-purple-50/80" },
        { label: "Upskilling & career growth", icon: "Sparkles", color: "text-[#7C3AED]", bg: "bg-purple-50/80" },
        { label: "Move into tech roles", icon: "Sparkles", color: "text-[#7C3AED]", bg: "bg-purple-50/80" },
      ],
    },
    {
      num: "03",
      tagline: "A Fresh Start",
      title: "Changing Course",
      desc: "A different direction is possible. It's never too late to start again.",
      quote: "New Skills. New Possibilities.",
      image: "/personalcard3.png", // Ensure this exists in public/
      btnStyle: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      features: [
        { label: "Career changers", icon: "Sparkles", color: "text-[#FF8A00]", bg: "bg-amber-50/80" },
        { label: "Returning after a break", icon: "Users", color: "text-[#FF8A00]", bg: "bg-amber-50/80" },
        { label: "Explore new opportunities", icon: "Sparkles", color: "text-[#FF8A00]", bg: "bg-amber-50/80" },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-20 lg:py-28" id="who-it-is-for">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
            There’s No Single <br />
            Starting Point for Learning.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Starting out, starting over, or ready for something more. Summate Learning is designed for different points in the journey.
          </p>
        </div>

        {/* 3 Large Persona Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Header inside Card: Number + Handwritten Tagline */}
              <div className="flex items-center justify-between px-7 pt-6">
                <span className="select-none font-sans text-5xl font-black text-slate-100">
                  {c.num}
                </span>
                <span className="font-serif italic text-xs text-slate-400">
                  {c.tagline}
                </span>
              </div>

              {/* Main Content Grid: Left Details, Right Large Portrait */}
              <div className="relative grid grid-cols-1 items-end gap-2 px-7 pb-7 pt-4 sm:grid-cols-[1.15fr_0.85fr]">
                
                {/* Left: Text, Chips, CTA */}
                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0F172A]">{c.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {c.desc}
                    </p>

                    {/* Feature Chips */}
                    <div className="mt-6 space-y-2.5">
                      {c.features.map((f) => (
                        <div
                          key={f.label}
                          className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-slate-50/80 px-3 py-2 shadow-2xs"
                        >
                          <span className={`${f.color} flex shrink-0`}>
                            <Icon name={f.icon} size={13} strokeWidth={2.2} />
                          </span>
                          <span className="text-[11px] font-semibold text-slate-700 truncate">
                            {f.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-8">
                    <Link
                      href="/apply"
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold shadow-sm transition-all active:scale-95 ${c.btnStyle}`}
                    >
                      <span>Explore</span>
                      <Icon name="ArrowRight" size={13} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Right: Full Height Visual Frame */}
                <div className="relative -mr-7 -mb-7 flex h-[340px] items-end justify-center">
                  
                  {/* Subtle curved background blob behind student */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 via-slate-50/50 to-transparent rounded-bl-[48px]" />

                  {/* High-res Cutout / Portrait */}
                  <div className="relative z-10 h-full w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      priority
                    />
                  </div>

                  {/* Floating Quote Badge */}
                  {c.quote && (
                    <div className="absolute bottom-4 left-2 right-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-3 py-2 text-center shadow-lg shadow-slate-900/5 backdrop-blur-md">
                      <p className="text-[10px] font-medium italic text-slate-700">
                        “{c.quote}”
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Philosophy Strip */}
        <div className="relative mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/90 bg-white px-8 py-5 shadow-sm sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3ABA]">
              <Icon name="Compass" size={20} strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">No matter where you are now,</p>
              <p className="text-xs text-slate-500">
                Summate is a place to learn with purpose, apply what you learn, and build a future that feels right for you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600 shrink-0">
            <div className="flex items-center gap-1.5">
              <Icon name="BookOpen" size={15} className="text-[#1E3ABA]" />
              <span>LEARN</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Icon name="Cog" size={15} className="text-[#FF2D75]" />
              <span>APPLY</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Icon name="BarChart2" size={15} className="text-[#FF8A00]" />
              <span>ACHIEVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


/* ---------------- ProgramSpotlight ---------------- */
export function ProgramSpotlight() {
  const cards = [
    {
      num: "01",
      numColor: "text-[#1E3ABA]/60",
      title: "Practical, Industry-Relevant Learning",
      desc: "Go beyond theory with hands-on projects, real-world case studies and skills that actually matter.",
      image: "/spotlight1.jpg", // Ensure you add this or use an image from public/
      alt: "Laptop displaying code - Build, Apply, Grow",
    },
    {
      num: "02",
      numColor: "text-[#7C3AED]/60",
      title: "Flexible for Every Journey",
      desc: "Learn at your own pace, from anywhere. Whether you're a student, working professional or changing careers — Summate fits into your life.",
      image: "/spotlight2.png", // Ensure you add this or use an image from public/
      alt: "Desk with books and coffee mug - Your Pace, Your Path",
    },
    {
      num: "03",
      numColor: "text-[#FF8A00]/60",
      title: "A Supportive Learning Community",
      desc: "You're never alone. Learn with peers, get guidance from mentors and be part of a community that cheers your progress.",
      image: "/spotlight3.png", // Ensure you add this or use an image from public/
      alt: "Wooden figurines - Learn Together, Grow Together",
    },
    {
      num: "04",
      numColor: "text-[#00D4C8]/80",
      title: "Pathways to Real Opportunities",
      desc: "Gain skills, build a standout portfolio and get access to opportunities that help you take the next step with confidence.",
      image: "/spotlight4.png", // Ensure you add this or use an image from public/
      alt: "Stack of books - Skills, Portfolio, Mentorship, Opportunities",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-20 lg:py-28" id="program">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Header Cluster */}
        <div className="relative mx-auto max-w-3xl text-center">
          
          {/* Top-Right Handwritten Callout */}
          <div className="pointer-events-none absolute -right-6 -top-8 hidden select-none md:block lg:-right-16">
            <span className="font-serif italic text-slate-400 text-sm tracking-wide block rotate-6">
              Learning<br />That Fits<br />Real Life
            </span>
            <svg className="mt-1 ml-4 h-6 w-10 text-slate-300 rotate-12" fill="none" viewBox="0 0 40 24" stroke="currentColor">
              <path d="M4 20c8-12 18-16 30-12m-5 8l5-8-8-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
            More Than Just Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A learning experience built for real growth, real people and real opportunities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.num}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              {/* Card Header & Text Body */}
              <div className="p-7">
                <span className={`select-none font-sans text-5xl font-black ${c.numColor}`}>
                  {c.num}
                </span>

                <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#0F172A]">
                  {c.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                  {c.desc}
                </p>
              </div>

              {/* Bottom Visual Frame */}
              <div className="relative mt-auto h-48 w-full overflow-hidden bg-slate-50 border-t border-slate-100">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Philosophy Ribbon */}
        <div className="relative mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/90 bg-white px-8 py-5 shadow-sm sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3ABA]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Different Journeys. A Brighter Tomorrow.</p>
              <p className="text-xs text-slate-500">
                At Summate, we bring learners, skills and opportunities together — to help you build a future that's truly yours.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[#1E3ABA]">📖</span>
              <span>LEARN</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF2D75]">⚙️</span>
              <span>APPLY</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#FF8A00]">📊</span>
              <span>ACHIEVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
/* ---------------- CurriculumSection ---------------- */
export function CurriculumSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-100 bg-white py-20 lg:py-28" id="curriculum">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Curriculum</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Twelve weeks. Four progressive phases.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Foundations first, followed by application architecture, engineering practice, and AI interview defensibility.
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ---------------- ComparisonTable ---------------- */
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
    <section className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32" id="methodology">
      {/* Ambient background illumination */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-b from-blue-100/50 via-indigo-50/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.14]">
            How Batch 1 differs <br className="hidden sm:inline" />
            <span className="text-slate-950">from tutorial courses.</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Same topics everywhere. A completely different standard of execution.
          </p>

          {/* Top-Right Hand-drawn Accent */}
          <div className="pointer-events-none absolute -right-6 -top-2 hidden select-none lg:block xl:-right-16">
            <span className="block rotate-6 font-serif text-xs font-medium tracking-wide text-slate-400 italic">
              Real Skills · Real Projects <br />
              Real Progress
            </span>
            <svg className="ml-auto mt-1 h-5 w-10 rotate-12 text-slate-300" fill="none" viewBox="0 0 40 24" stroke="currentColor">
              <path d="M4 20c8-12 18-16 30-12m-5 8l5-8-8-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* High-End Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-xl shadow-slate-900/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              
              {/* Header Columns */}
              <thead>
                <tr className="border-b border-slate-200/70 bg-slate-50/40">
                  <th className="w-[28%] px-8 py-6 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Focus Area
                  </th>

                  <th className="w-[36%] px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-2xs">
                        <Icon name="BookOpen" size={17} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Traditional Courses</p>
                        <p className="text-[11px] font-medium text-slate-400">Tutorial-style instruction</p>
                      </div>
                    </div>
                  </th>

                  {/* Highlighted Summate Column Header */}
                  <th className="w-[36%] border-l border-blue-100/80 bg-[#F5F8FF] px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1E3ABA] text-white shadow-sm shadow-blue-600/20">
                        <Icon name="Zap" size={17} strokeWidth={2.2} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1E3ABA]">Summate Approach</p>
                        <p className="text-[11px] font-semibold text-blue-600/70">Founding Batch 1</p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Body Rows */}
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((r) => (
                  <tr key={r.area} className="group transition-colors duration-150 hover:bg-slate-50/50">
                    
                    {/* Area Title & Icon */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/60 bg-slate-50 text-slate-600 transition-colors group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-900">
                          <Icon name={r.icon} size={15} strokeWidth={2} />
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {r.area}
                        </span>
                      </div>
                    </td>

                    {/* Traditional Description */}
                    <td className="px-8 py-5 text-sm leading-relaxed text-slate-500">
                      {r.traditional}
                    </td>

                    {/* Summate Highlighted Cell */}
                    <td className="border-l border-blue-100/80 bg-[#F5F8FF]/60 px-8 py-5 text-sm font-medium leading-relaxed text-slate-900 transition-colors group-hover:bg-[#F0F5FF]">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1E3ABA]">
                          <Icon name="Check" size={11} strokeWidth={3} />
                        </span>
                        <span>{r.summate}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Bottom Conversion Ribbon */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3ABA]">
              <Icon name="Sparkles" size={20} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">
                A learning experience that takes you further.
              </p>
              <p className="text-xs text-slate-500 sm:text-sm">
                Built for learners who want demonstrable capability, not just certificates.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3ABA] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#1E3ABA]/20 transition-all hover:bg-[#152882] hover:shadow-lg active:scale-95"
            >
              <span>Join Batch 1</span>
              <Icon name="ArrowRight" size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- ToolStrip ---------------- */
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
    <section className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32" id="tools">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.14]">
            Tools you’ll work with
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Modern, industry-relevant tools to help you build, ship and grow.
          </p>
        </div>

        {/* 10-column Icon Grid */}
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
          {toolList.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center text-center"
            >
              {/* Rounded App Icon Tile */}
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

              {/* Label */}
              <span className="mt-3 text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-950">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Tagline & Accent Rule */}
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

/* ---------------- StepPath ---------------- */
export function StepPath() {
  const steps = [
    {
      num: "01",
      title: "Enroll",
      body: "Choose your batch and complete the enrollment process in a few minutes.",
      icon: "FileText",
      numColor: "text-[#1E3ABA]",
      iconColor: "text-[#1E3ABA]",
      iconBg: "bg-blue-50/80",
    },
    {
      num: "02",
      title: "Get Started",
      body: "Access your learning portal, meet your cohort and join the first live session.",
      icon: "Users",
      numColor: "text-[#7C3AED]",
      iconColor: "text-[#7C3AED]",
      iconBg: "bg-purple-50/80",
    },
    {
      num: "03",
      title: "Learn & Build",
      body: "Attend live classes, work on real projects and get guidance from mentors.",
      icon: "BookOpen",
      numColor: "text-emerald-600",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50/80",
    },
    {
      num: "04",
      title: "Showcase",
      body: "Build a portfolio with real-world projects and receive feedback to stand out.",
      icon: "Laptop",
      numColor: "text-[#FF8A00]",
      iconColor: "text-[#FF8A00]",
      iconBg: "bg-amber-50/80",
    },
    {
      num: "05",
      title: "What's Next",
      body: "Graduate with confidence and take the next step towards your career goals.",
      icon: "Rocket",
      numColor: "text-[#00D4C8]",
      iconColor: "text-[#00D4C8]",
      iconBg: "bg-teal-50/80",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32" id="how-it-works">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[-100px] top-1/4 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
            From enrollment to the next step.
          </h2>
          <p className="mt-4 text-sm font-medium text-slate-500 sm:text-base">
            A simple process, a meaningful journey.
          </p>
        </div>

        {/* 5-Step Process Row */}
        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, idx) => (
            <div key={s.num} className="relative flex flex-col">
              
              {/* Card */}
              <div className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl">
                <div>
                  {/* Circular Icon Disc */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.iconBg} ${s.iconColor} shadow-2xs transition-transform duration-200 group-hover:scale-105`}>
                    <Icon name={s.icon} size={22} strokeWidth={2} />
                  </div>

                  {/* Step Number Tag */}
                  <span className={`mt-6 block font-mono text-xs font-bold tracking-wider ${s.numColor}`}>
                    {s.num}
                  </span>

                  {/* Title & Body */}
                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                    {s.body}
                  </p>
                </div>
              </div>

              {/* Connecting Step Pill Arrow (Between Cards on Desktop) */}
              {idx < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3.5 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-400 shadow-sm">
                    <Icon name="ArrowRight" size={12} strokeWidth={2.5} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Tagline & Accent Rule */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="h-0.5 w-8 rounded-full bg-slate-200" />
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Learn &nbsp;·&nbsp; Build &nbsp;·&nbsp; Grow
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- PromoBanner ---------------- */
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

/* ---------------- CommunityStrip ---------------- */
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

/* ---------------- MentorCards ---------------- */
export function MentorCards() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-20 lg:py-28" id="mentors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Instructors</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Mentors & Industry Guides
          </h2>
          <p className="mt-2 text-sm text-slate-600">{mentors.note}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.people.map((m, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Avatar initials={m.initials} />
              <p className="mt-4 text-base font-bold text-slate-900">{m.name}</p>
              <p className="text-xs text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PlacementBanner ---------------- */
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

/* ---------------- TestimonialsSection ---------------- */
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

/* ---------------- FoundersNote ---------------- */
export function FoundersNote() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-[#FAFBFF] py-20 lg:py-28" id="our-story">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-5">
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Why We Started <br />
              <span className="text-[#1E3ABA]">Summate.</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Learning shouldn&apos;t end at passive consumption. We founded Summate to bridge the space between syllabus completion and real engineering capability.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3ABA]">
                  <Icon name="Compass" size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Batch 01 Cohort</p>
                  <p className="text-[11px] text-slate-500">Building alongside our first learners</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#1E3ABA] active:scale-95"
              >
                <span>Join Batch 1</span>
                <Icon name="ArrowRight" size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm transition hover:shadow-md">
              
              {/* Decorative Watermark Quote */}
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[160px] font-black leading-none text-slate-100/80">
                “
              </span>

              <div className="relative z-10">
                {/* Note Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A00]" />
                  A note from the founders
                </div>

                {/* Main Quote */}
                <blockquote className="mt-6 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl sm:leading-relaxed">
                  “{founders?.quote || "A simple note from the founders to be added here."}”
                </blockquote>

                {/* Closing */}
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  {founders?.closing || "Batch 01 is where that journey begins and we're looking forward to building it with our first learners."}
                </p>

                {/* Signoff */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <p className="font-serif text-lg italic text-slate-900">
                      The Founders
                    </p>
                    <p className="text-xs font-semibold text-[#1E3ABA]">
                      {founders?.signoff || "The Founders, Summate Learning"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>FOUNDING COHORT · 2026</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
/* ---------------- BatchBenefits ---------------- */
export function BatchBenefits() {
  const benefits = [
    {
      title: "Live, Interactive Classes",
      desc: "Learn directly from industry practitioners in a focused, collaborative environment.",
      icon: "Laptop",
      color: "text-[#1E3ABA]",
      bg: "bg-blue-50/80",
      border: "border-blue-100",
    },
    {
      title: "Hands-on Projects",
      desc: "Build and ship real-world projects you can showcase.",
      icon: "FileCode2",
      color: "text-[#7C3AED]",
      bg: "bg-purple-50/80",
      border: "border-purple-100",
    },
    {
      title: "Mentorship & Guidance",
      desc: "Get personalised feedback and support throughout the journey.",
      icon: "UserCheck",
      color: "text-emerald-600",
      bg: "bg-emerald-50/80",
      border: "border-emerald-100",
    },
    {
      title: "Career Preparation",
      desc: "Resume reviews, portfolio support and interview preparation.",
      icon: "Briefcase",
      color: "text-[#FF8A00]",
      bg: "bg-amber-50/80",
      border: "border-amber-100",
    },
    {
      title: "A Focused Peer Community",
      desc: "Learn and grow with a motivated group of peers.",
      icon: "Users",
      color: "text-[#FF2D75]",
      bg: "bg-pink-50/80",
      border: "border-pink-100",
    },
    {
      title: "Lifetime Access to Resources",
      desc: "Revisit sessions, notes and resources even after the program.",
      icon: "BarChart3",
      color: "text-[#00D4C8]",
      bg: "bg-teal-50/80",
      border: "border-teal-100",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-24 lg:py-32" id="batch-benefits">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[-80px] top-1/3 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-60px] top-10 h-[500px] w-[500px] rounded-full bg-indigo-100/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="relative max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.14]">
            A learning experience <br />
            that actually moves you forward.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Practical skills, real projects and the right guidance — everything you need to build what's next.
          </p>

          {/* Top-Right Handwritten Callout */}
          <div className="pointer-events-none absolute -top-3 right-0 hidden select-none lg:block xl:-right-12">
            <span className="block rotate-6 font-serif text-base font-medium tracking-wide text-slate-400 italic">
              Learn <br />
              Build <br />
              Grow
            </span>
            <svg className="ml-auto mt-1 h-5 w-9 rotate-12 text-slate-300" fill="none" viewBox="0 0 36 20" stroke="currentColor">
              <path d="M4 18c6-10 14-14 26-10m-5 8l5-8-8-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Content Grid: 2-Column Benefits Cards on Left, Workspace Shot on Right */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: 6 Benefits Grid (lg:col-span-7) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                {/* Icon Box */}
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${b.border} ${b.bg} ${b.color} shadow-2xs`}>
                  <Icon name={b.icon} size={18} strokeWidth={2.2} />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Desk Setup Visual Stage (lg:col-span-5) */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm sm:h-[440px]">
              <Image
                src="/workspace-setup.png"
                alt="Workspace with laptop, notebook and book stack"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>

        {/* Bottom Navigation Ribbon */}
        <div className="relative mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/90 bg-white px-8 py-5 shadow-sm sm:flex-row">
          
          {/* 4 Feature Tags */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold tracking-wider text-slate-600">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={16} className="text-[#1E3ABA]" strokeWidth={2} />
              <span>LEARN</span>
            </div>
            <span className="text-slate-200 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <Icon name="Code2" size={16} className="text-[#1E3ABA]" strokeWidth={2} />
              <span>BUILD</span>
            </div>
            <span className="text-slate-200 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-[#1E3ABA]" strokeWidth={2} />
              <span>CONNECT</span>
            </div>
            <span className="text-slate-200 hidden sm:inline">|</span>

            <div className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} className="text-[#1E3ABA]" strokeWidth={2} />
              <span>GROW</span>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3ABA] px-6 py-2.5 text-xs font-bold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-[#152882] active:scale-95"
            >
              <span>Be Part of Batch 1</span>
              <Icon name="ArrowRight" size={13} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- InsightCards ---------------- */
export function InsightCards() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-20 lg:py-28" id="insights">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3ABA]">Field Notes</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">Articles & Perspectives</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {insights.items.map((a) => (
            <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6">
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

/* ---------------- MentorRecruitBanner ---------------- */
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

/* ---------------- EnquirySection ---------------- */
export function EnquirySection({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-20 lg:py-28" id="enquiry">
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

/* ---------------- FinalCta ---------------- */
export function FinalCta() {
  const trustTags = [
    "Limited seats",
    "Live & interactive",
    "Real projects",
    "Mentorship",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] pt-24 lg:pt-32" id="apply">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[480px] w-[480px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] top-20 h-[500px] w-[500px] rounded-full bg-indigo-100/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Header Cluster */}
        <div className="relative mx-auto max-w-3xl text-center">
          
          {/* Top-Left Handwritten Callout */}
          <div className="pointer-events-none absolute -left-6 -top-4 hidden select-none md:block lg:-left-16">
            <span className="block -rotate-6 font-serif text-sm tracking-wide text-slate-400 italic">
              Learn <br />
              Build <br />
              Grow
            </span>
            <svg className="ml-2 mt-1 h-5 w-9 -rotate-12 text-slate-300" fill="none" viewBox="0 0 36 20" stroke="currentColor">
              <path d="M4 4c6 10 14 14 26 10m-5-8l5 8-8 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Top-Right Handwritten Callout */}
          <div className="pointer-events-none absolute -right-6 -top-2 hidden select-none md:block lg:-right-16">
            <span className="block rotate-6 font-serif text-sm tracking-wide text-slate-400 italic">
              Same Curiosity <br />
              Bigger Possibilities
            </span>
            <svg className="ml-auto mt-1 h-5 w-9 rotate-12 text-slate-300" fill="none" viewBox="0 0 36 20" stroke="currentColor">
              <path d="M4 18c6-10 14-14 26-10m-5 8l5-8-8-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[56px] lg:leading-[1.12]">
            Ready to build <br />
            <span className="text-[#1E3ABA]">what’s next?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Join Summate Batch 1 and take the next step towards a brighter, more opportunities[cite: 1].
          </p>

          {/* Primary Action Button */}
          <div className="mt-8">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3ABA] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-[#152882] hover:shadow-xl active:scale-95"
            >
              <span>Apply for Batch 1</span>
              <Icon name="ArrowRight" size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Trust Check Tags */}
          <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustTags.map((tag) => (
              <div
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-2xs backdrop-blur-sm"
              >
                <Icon name="Check" size={13} className="text-[#1E3ABA]" strokeWidth={2.5} />
                <span>{tag}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export function WhySummate() {
  const gaps = [
    {
      num: "GAP 01",
      text: "A learner can finish a course without knowing how to solve a problem they haven't seen before.",
      icon: "FileText",
      color: "text-[#1E3ABA]",
      bg: "bg-blue-50/80",
      border: "border-blue-100",
    },
    {
      num: "GAP 02",
      text: "Collect certificates without knowing how to demonstrate the skill behind them.",
      icon: "Award",
      color: "text-[#FF2D75]",
      bg: "bg-pink-50/80",
      border: "border-pink-100",
    },
    {
      num: "GAP 03",
      text: "Learn ten tools without understanding which one to reach for.",
      icon: "Layers",
      color: "text-[#FF8A00]",
      bg: "bg-amber-50/80",
      border: "border-amber-100",
    },
    {
      num: "GAP 04",
      text: "Spend months preparing for a career without ever being asked to think like someone already in it.",
      icon: "UserCheck",
      color: "text-[#00D4C8]",
      bg: "bg-teal-50/80",
      border: "border-teal-100",
    },
  ];

  const pillars = [
    {
      num: "01",
      icon: "BookOpen",
      iconColor: "text-[#1E3ABA]",
      iconBg: "bg-blue-50",
      title: "Beyond the Syllabus",
      subtitle: "Learning is not a checklist of things you have completed.",
      body: "Summate Learning goes beyond “here's the concept, here's the assignment, next chapter.” We focus on understanding, applying, questioning, making mistakes and figuring things out because that's how knowledge becomes a skill.",
      accentLink: "text-[#1E3ABA]",
    },
    {
      num: "02",
      icon: "BarChart3",
      iconColor: "text-[#FF2D75]",
      iconBg: "bg-pink-50",
      title: "Skills Need Somewhere to Go",
      subtitle: "A skill becomes valuable when you can use it.",
      body: "What you learn should have somewhere to land; maybe a project, a problem, a conversation, an interview, a workplace or the next thing you are choosing to pursue. Summate connects learning with application and you're building something with it.",
      accentLink: "text-[#FF2D75]",
    },
    {
      num: "03",
      icon: "Zap",
      iconColor: "text-[#FF8A00]",
      iconBg: "bg-amber-50",
      title: "Work is Changing. Learning Must Too.",
      subtitle: "Curricula struggle to keep up with industry shifts.",
      body: "Technology, AI and workplaces are moving faster than traditional curricula can sometimes keep up. We want learners to understand the tool, but also make them efficiently think around it, work with it and adapt when the tool changes.",
      accentLink: "text-[#FF8A00]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFF] py-20 lg:py-28" id="why-summate">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
            Because learning shouldn’t stop <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF2D75] to-[#7C3AED] bg-clip-text text-transparent">
              where the syllabus ends.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            There are courses, certificates, tutorials, bootcamps, crash courses and promises of “job-ready” skills everywhere. But knowing something is not the same as knowing what to do with it. Summate is built around this gap.
          </p>
        </div>

        {/* 4 Gap Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gaps.map((g) => (
            <div
              key={g.num}
              className="flex h-full flex-col justify-start rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${g.bg} ${g.color} border ${g.border}`}>
                  <Icon name={g.icon} size={17} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold tracking-wider text-slate-500">
                  {g.num}
                </span>
              </div>
              <p className="mt-3.5 text-xs font-medium leading-relaxed text-slate-700 sm:text-[13px]">
                {g.text}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              <span className="pointer-events-none absolute right-4 top-2 select-none font-sans text-8xl font-black text-slate-100/75">
                {p.num}
              </span>

              <div className="relative z-10">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${p.iconBg} ${p.iconColor} shadow-sm`}>
                  <Icon name={p.icon} size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{p.title}</h3>
                <p className="mt-1.5 text-xs font-semibold text-slate-500">{p.subtitle}</p>
                <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {p.body}
                </p>
              </div>

              <div className="relative z-10 mt-8 border-t border-slate-100 pt-4">
                <Link
                  href="/#program"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${p.accentLink} transition-transform hover:translate-x-0.5`}
                >
                  <span>Learn more</span>
                  <Icon name="ArrowRight" size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ribbon */}
        <div className="relative mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/90 bg-white px-8 py-5 shadow-sm sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E3ABA]">
              <Icon name="GraduationCap" size={20} strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">At Summate, the goal isn’t simply to know more.</p>
              <p className="text-sm font-bold text-[#0F172A]">It’s to know what to do with what you know.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600">
            <div className="flex items-center gap-1.5">
              <Icon name="BookOpen" size={15} className="text-[#1E3ABA]" />
              <span>LEARN</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Icon name="Cog" size={15} className="text-[#FF2D75]" />
              <span>APPLY</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Icon name="BarChart2" size={15} className="text-[#FF8A00]" />
              <span>ACHIEVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}