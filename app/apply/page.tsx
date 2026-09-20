import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply for Batch 1 — Summate Learning",
  description:
    "Apply to the founding batch of the AI-Augmented Full-Stack Developer Course. Live online, starting September 2026.",
};

export default function ApplyPage() {
  return (
    <>
      <SiteNav />

      <main className="relative isolate overflow-hidden bg-[#F8FAFF]">

        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div
          className="pointer-events-none absolute -left-48 top-24 h-[520px] w-[520px] rounded-full bg-[#1E3ABA]/[0.055] blur-[120px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-48 top-10 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#7C3AED]/[0.06] via-[#FF2D75]/[0.035] to-[#FF8A00]/[0.035] blur-[130px]"
          aria-hidden="true"
        />

        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[700px] opacity-[0.22]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,58,186,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,186,.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}

        <div className="relative mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">

          {/* =================================================
              TOP BRAND MOTIF
          ================================================== */}

          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-12 bg-[#1E3ABA]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3ABA]">
              Apply · Batch 01
            </span>

            <span className="text-slate-300">•</span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              LEARN → BUILD → GROW
            </span>
          </div>

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">

            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[#0D1222] sm:text-5xl lg:text-[64px]">
                Your next chapter
                <br />
                can start{" "}
                <span className="bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75] bg-clip-text text-transparent">
                  here.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Tell us about yourself, your background and where you want
                to go next. Apply for the founding batch of the
                AI-Augmented Full-Stack Developer Course.
              </p>
            </div>

            {/* Right side */}
            <div className="relative lg:pb-2">
              <div className="absolute -left-5 top-0 hidden h-16 w-px bg-gradient-to-b from-[#1E3ABA] to-transparent lg:block" />

              <p className="text-sm font-medium leading-6 text-slate-500">
                Batch 01 is where Summate Learning begins — with a small
                group of learners building, learning and growing together.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />
                <span className="h-px w-12 bg-slate-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
              </div>
            </div>
          </div>

          {/* =================================================
              APPLICATION AREA
          ================================================== */}

          <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">

            {/* -----------------------------------------------
                LEFT INFO PANEL
            ------------------------------------------------ */}

            <aside className="lg:sticky lg:top-28">

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(13,18,34,0.045)]">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Batch 01
                </p>

                <div className="mt-5 space-y-5">

                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#1E3ABA]">
                      <span className="text-xs font-bold">01</span>
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#0D1222]">
                        Live Online
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">
                        Learn from wherever you are.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F3EFFF] text-[#7C3AED]">
                      <span className="text-xs font-bold">02</span>
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#0D1222]">
                        12 Weeks
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">
                        A focused, immersive journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F5] text-[#FF2D75]">
                      <span className="text-xs font-bold">03</span>
                    </span>

                    <div>
                      <p className="text-xs font-bold text-[#0D1222]">
                        Project Driven
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">
                        Learn by building something real.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    The journey
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em]">
                    <span className="text-[#1E3ABA]">Learn</span>
                    <span className="text-slate-300">→</span>
                    <span className="text-[#7C3AED]">Build</span>
                    <span className="text-slate-300">→</span>
                    <span className="text-[#FF2D75]">Grow</span>
                  </div>
                </div>
              </div>

              {/* Small reassurance */}
              <div className="mt-4 px-2">
                <p className="text-[11px] leading-5 text-slate-400">
                  Take your time and answer honestly. Your application
                  helps us understand where you're starting from.
                </p>
              </div>
            </aside>

            {/* -----------------------------------------------
                FORM
            ------------------------------------------------ */}

            <div className="relative">

              {/* glow */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#1E3ABA]/[0.035] blur-2xl"
                aria-hidden="true"
              />

              <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_25px_80px_rgba(13,18,34,0.07)] sm:p-8 lg:p-10">

                <div className="mb-8 flex items-start justify-between gap-5 border-b border-slate-100 pb-7">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E3ABA]">
                      Application
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.035em] text-[#0D1222]">
                      Tell us about yourself.
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      A few details are all we need to get started.
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-[#1E3ABA]">
                    <span className="text-xs font-bold">01</span>
                  </div>
                </div>

                <ApplyForm />

              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM TRANSITION
          ================================================== */}

          <div className="relative mt-20 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="absolute flex items-center gap-2 bg-[#F8FAFF] px-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3ABA]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D75]" />
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  );
}