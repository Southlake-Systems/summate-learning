"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Compass,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

export default function ApplyForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  /* -------------------------------------------------
     SUCCESS STATE
  ------------------------------------------------- */

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-7 py-14 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-12">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-100/60 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
            <CheckCircle2 size={38} strokeWidth={1.8} />
          </div>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">
            <Sparkles size={13} />
            Application Received
          </div>

          <h3 className="mx-auto mt-6 max-w-lg text-3xl font-extrabold tracking-[-0.035em] text-[#111B3A] sm:text-4xl">
            You&apos;re on the list for Batch 1.
          </h3>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600">
            Thanks for taking the step. We review applications on a rolling
            basis and will reach out via email within 48 hours with onboarding
            details.
          </p>

          <Link
            href="/"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-[#111B3A] shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
          >
            Return to Homepage
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------
     FORM
  ------------------------------------------------- */

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.07)]"
    >
      {/* Top accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#FF2D75]" />

      <div className="p-7 sm:p-10 lg:p-12">

        {/* Header */}
        <div className="border-b border-slate-100 pb-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1E3ABA]">
                Application
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-[#111B3A] sm:text-3xl">
                Tell us about yourself.
              </h2>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#1E3ABA] sm:flex">
              <Sparkles size={20} />
            </div>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            A few details about where you are today and what you want to
            build next.
          </p>
        </div>

        {/* Fields */}
        <div className="mt-8 space-y-7">

          {/* Name */}
          <Field
            label="Full Name"
            htmlFor="name"
            icon={<User size={17} />}
            required
          >
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              autoComplete="name"
              className={inputClass}
            />
          </Field>

          {/* Email */}
          <Field
            label="Email Address"
            htmlFor="email"
            icon={<Mail size={17} />}
            required
          >
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className={inputClass}
            />
          </Field>

          {/* Current position */}
          <Field
            label="Where are you right now?"
            htmlFor="status"
            icon={<Compass size={17} />}
            required
          >
            <div className="relative">
              <select
                id="status"
                name="status"
                required
                defaultValue=""
                className={`${inputClass} appearance-none pr-12`}
              >
                <option value="" disabled>
                  Select your current stage
                </option>

                <option value="starting-out">
                  Starting out — Recent graduate or early-career learner
                </option>

                <option value="moving-forward">
                  Moving forward — Working professional looking to level up
                </option>

                <option value="changing-course">
                  Changing course — Switching careers or returning from a break
                </option>
              </select>

              <ArrowRight
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
              />
            </div>
          </Field>

          {/* Background */}
          <Field
            label="Your Background & Goals"
            htmlFor="background"
            icon={<BriefcaseBusiness size={17} />}
          >
            <textarea
              id="background"
              name="background"
              rows={4}
              placeholder="Tell us about your degree, current role, experience, or what you'd like to build next."
              className={`${inputClass} min-h-[120px] resize-none py-3.5`}
            />
          </Field>
        </div>

        {/* Agreement */}
        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 bg-white transition checked:border-[#1E3ABA] checked:bg-[#1E3ABA]"
              />

              <Check
                size={13}
                strokeWidth={3}
                className="pointer-events-none absolute hidden text-white peer-checked:block"
              />
            </span>

            <span className="text-xs leading-5 text-slate-500">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-semibold text-slate-800 underline underline-offset-2 hover:text-[#1E3ABA]"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-semibold text-slate-800 underline underline-offset-2 hover:text-[#1E3ABA]"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="mt-7">
          <button
            type="submit"
            disabled={!agreed || loading}
            className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#111B3A] px-6 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E3ABA] hover:shadow-xl hover:shadow-[#1E3ABA]/20 disabled:cursor-not-allowed disabled:translate-y-0 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Submitting application...
              </>
            ) : (
              <>
                Submit Application
                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] font-medium text-slate-400">
            <ShieldCheck size={14} />
            Your information is private and secure.
          </div>
        </div>
      </div>
    </form>
  );
}

/* -------------------------------------------------
   FIELD COMPONENT
------------------------------------------------- */

function Field({
  label,
  htmlFor,
  icon,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-sm font-bold text-[#111B3A]"
      >
        <span className="text-slate-400">{icon}</span>
        {label}

        {required && (
          <span className="text-[#FF2D75]">*</span>
        )}
      </label>

      <div className="mt-2.5">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------
   SHARED INPUT STYLE
------------------------------------------------- */

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#1E3ABA] focus:bg-white focus:ring-4 focus:ring-[#1E3ABA]/10";