import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Shell
 * ------------------------------------------------------------------ */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main id="main" className="bg-white">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Hero — left-aligned headline, lede beside it on wide screens.
 * ------------------------------------------------------------------ */
type Crumb = { label: string; href?: string };

export function PageHero({
  crumbs,
  title,
  lede,
  children,
  aside,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-[#F6FAFA]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,95,110,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,95,110,.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 20% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 20% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#55C9B8]/[0.10] via-[#EF6F51]/[0.05] to-transparent blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
        <Breadcrumbs crumbs={crumbs} />

        <div
          className={cn(
            "mt-8 grid gap-8 lg:mt-12 lg:gap-16",
            aside ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end" : ""
          )}
        >
          <div>
            <h1 className="max-w-[18ch] font-display text-[40px] font-bold leading-[1.02] tracking-[-0.035em] text-[#0F2A30] sm:text-[56px] lg:text-[68px]">
              {title}
            </h1>
            {lede && (
              <p className="mt-6 max-w-[58ch] text-lg leading-[1.65] text-slate-600">
                {lede}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside && <div className="lg:pb-2">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ crumbs, onDark }: { crumbs: Crumb[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-[13px] font-medium",
          onDark ? "text-slate-400" : "text-slate-500"
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              onDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-[#1D5F6E]"
            )}
          >
            Home
          </Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight size={13} aria-hidden="true" className="opacity-60" />
            {c.href ? (
              <Link
                href={c.href}
                className={cn(
                  "transition-colors",
                  onDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-[#1D5F6E]"
                )}
              >
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className={onDark ? "text-white" : "text-[#0F2A30]"}>
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ *
 * Section + headings
 * ------------------------------------------------------------------ */
const tones = {
  white: "bg-white",
  mist: "bg-[#F6FAFA]",
  ink: "bg-[#0F2A30] text-white",
} as const;

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-16 lg:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Two-column section: heading on the left, content on the right. */
export function Split({
  title,
  lede,
  children,
  onDark,
}: {
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <H2 onDark={onDark}>{title}</H2>
          {lede && (
            <p className={cn("mt-4 max-w-[42ch] text-base leading-[1.65]", onDark ? "text-slate-400" : "text-slate-600")}>
              {lede}
            </p>
          )}
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  );
}

export function H2({ children, onDark, className }: { children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-[30px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[38px]",
        onDark ? "text-white" : "text-[#0F2A30]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-[64ch] space-y-5 text-[17px] leading-[1.7] text-slate-600", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Buttons
 * ------------------------------------------------------------------ */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#EF6F51] text-white hover:bg-[#D9573A] hover:text-white shadow-[0_8px_24px_rgba(239,111,81,0.28)]",
    secondary:
      "border border-slate-300 bg-white text-[#0F2A30] hover:border-[#1D5F6E] hover:text-[#1D5F6E]",
    light: "bg-white text-[#0F2A30] hover:bg-[#EAF4F5] hover:text-[#1D5F6E]",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-200",
        styles,
        className
      )}
    >
      {children}
      {variant !== "secondary" && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Closing call-to-action band
 * ------------------------------------------------------------------ */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0F2A30] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#1D5F6E] via-[#55C9B8] to-[#9FDEAF] opacity-50 blur-[90px]"
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-[20ch] font-display text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[44px]">
                {title}
              </h2>
              {body && <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.65] text-slate-300">{body}</p>}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="light">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white hover:text-white"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * People
 * ------------------------------------------------------------------ */
export function PersonCard({
  name,
  role,
  org,
  bio,
  expertise,
  href,
  image,
  pendingNote = "Profile to be announced",
}: {
  name: string | null;
  role: string | null;
  org?: string | null;
  bio: string | null;
  expertise: string | null;
  href?: string;
  image?: string;
  pendingNote?: string;
}) {
  const pending = !name;
  const initials = name
    ? name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
    : "";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border p-7",
        pending ? "border-dashed border-slate-300 bg-[#F7FBFB]" : "border-slate-200 bg-white"
      )}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          width={64}
          height={64}
          className="h-16 w-16 rounded-2xl object-cover object-top"
        />
      ) : (
      <div
        aria-hidden="true"
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl font-bold",
          pending
            ? "border border-dashed border-slate-300 text-slate-300"
            : "bg-gradient-to-br from-[#1D5F6E] to-[#2A8C8C] text-white"
        )}
      >
        {pending ? "?" : initials}
      </div>
      )}

      <h3 className={cn("mt-6 font-display text-xl font-bold tracking-[-0.02em]", pending ? "text-slate-400" : "text-[#0F2A30]")}>
        {name ?? "To be announced"}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-500">
        {[role, org].filter(Boolean).join(", ") || "Role to be announced"}
      </p>

      <p className={cn("mt-4 flex-1 text-[15px] leading-[1.65]", pending ? "text-slate-400" : "text-slate-600")}>
        {bio ?? pendingNote}
      </p>

      {expertise && (
        <p className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span className="font-semibold text-[#0F2A30]">Expertise:</span> {expertise}
        </p>
      )}

      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D5F6E] hover:text-[#164B57]"
        >
          Read profile
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}
