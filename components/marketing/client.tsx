"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { PlaceholderChip } from "@/components/ui/primitives";
import {
  banners,
  stats,
  curriculum,
  testimonials,
} from "@/lib/siteContent";

/* ---------------- AnnounceBar ---------------- */
const DISMISS_KEY = "su-announce-dismissed-v1";

export function AnnounceBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!banners.announcement.enabled) return;
    try {
      setShow(localStorage.getItem(DISMISS_KEY) !== "1");
    } catch {
      setShow(true);
    }
  }, []);

  if (!banners.announcement.enabled || !show) return null;
  const { text, cta, href } = banners.announcement;

  return (
    <div className="announce">
      <div className="announce__inner">
        <span className="su-text-body-sm">
          {text}{" "}
          <Link href={href} className="announce__cta">
            {cta} <Icon name="ArrowRight" size={13} strokeWidth={2.25} />
          </Link>
        </span>
        <button
          className="announce__close"
          aria-label="Dismiss announcement"
          onClick={() => {
            setShow(false);
            try {
              localStorage.setItem(DISMISS_KEY, "1");
            } catch {
              /* ignore */
            }
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

/* ---------------- StatBar ---------------- */
function useCountUp(target: number, run: boolean, ms = 1100) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return n;
}

export function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="su-wrap">
      <div className="stat-bar" ref={ref}>
        {stats.items.map((s, i) => (
          <Stat key={i} value={s.value} suffix={s.suffix} label={s.label} run={seen} />
        ))}
      </div>
      {stats.placeholder && (
        <div style={{ marginTop: 16 }}>
          <PlaceholderChip>Indicative figures — confirmed before launch</PlaceholderChip>
        </div>
      )}
    </div>
  );
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="stat-bar__item">
      <div className="stat-bar__value">
        {n}
        {suffix}
      </div>
      <div className="stat-bar__label">{label}</div>
    </div>
  );
}

/* ---------------- Curriculum ---------------- */
export function Curriculum() {
  const [open, setOpen] = useState(0);
  return (
    <div className="curriculum">
      {curriculum.phases.map((p, i) => {
        const isOpen = open === i;
        return (
          <div className="curriculum__item" key={i} data-open={isOpen}>
            <button
              className="curriculum__head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="curriculum__meta su-text-number">{p.weeks}</span>
              <span className="su-text-title-md">{p.name}</span>
              <span className="curriculum__sign" aria-hidden="true">
                +
              </span>
            </button>
            {isOpen && (
              <div className="curriculum__panel">
                <p className="su-text-body-md lede">{p.summary}</p>
                <ul className="ticklist">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Icon name="Check" size={16} strokeWidth={2.5} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const items = testimonials.items;
  const [i, setI] = useState(0);
  const go = (d: number) => setI((prev) => (prev + d + items.length) % items.length);

  return (
    <div className="testi">
      <div className="testi__empty card">
        <Icon name="MessagesSquare" size={22} strokeWidth={1.75} />
        <div>
          <div className="su-text-title-md feature__title">{testimonials.emptyState.title}</div>
          <p className="feature__body su-text-body-sm">{testimonials.emptyState.body}</p>
        </div>
      </div>

      <div className="testi__carousel">
        <blockquote className="testi__quote card card--dark">
          <p className="su-text-title-sm" style={{ fontWeight: 400 }}>
            “{items[i].quote}”
          </p>
          <footer>
            <span className="su-text-body-strong">{items[i].name}</span>
            <span className="su-text-caption" style={{ color: "var(--su-on-dark-soft)" }}>
              {items[i].detail}
            </span>
          </footer>
        </blockquote>
        <div className="testi__controls">
          <button onClick={() => go(-1)} aria-label="Previous testimonial">
            <Icon name="ArrowRight" size={16} className="flip" />
          </button>
          <div className="testi__dots">
            {items.map((_, d) => (
              <button
                key={d}
                className={d === i ? "on" : ""}
                aria-label={`Go to testimonial ${d + 1}`}
                onClick={() => setI(d)}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next testimonial">
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <PlaceholderChip>Example cards — real learner stories appear after Batch 1</PlaceholderChip>
      </div>
    </div>
  );
}

/* ---------------- EnquiryForm ---------------- */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card" role="status">
        <div className="feature__icon">
          <Icon name="CheckCircle2" />
        </div>
        <div className="su-text-title-md feature__title">Thanks — we’ll be in touch.</div>
        <p className="feature__body su-text-body-md">
          We’ll reply by email, usually within a couple of working days. For anything urgent,
          use the phone number in the footer.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="e-name">Full name</label>
        <input id="e-name" name="name" required placeholder="Jane Doe" autoComplete="name" />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="e-email">Email</label>
          <input id="e-email" name="email" type="email" required placeholder="jane@example.com" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="e-phone">Phone</label>
          <input id="e-phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="e-status">What brings you here?</label>
        <select id="e-status" name="status" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>I want to apply for Batch 1</option>
          <option>I have a question about the program</option>
          <option>I&apos;d like a callback</option>
          <option>I&apos;m interested in hiring Batch 1 graduates</option>
          <option>I&apos;d like to mentor</option>
        </select>
      </div>
      <button type="submit" className="btn btn--primary btn--lg">
        Send enquiry <Icon name="ArrowRight" size={16} strokeWidth={2.25} />
      </button>
    </form>
  );
}
