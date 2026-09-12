"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ApplyForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card" role="status">
        <div className="feature__icon">
          <CheckCircle2 size={22} strokeWidth={1.75} />
        </div>
        <div className="su-text-title-md feature__title">Application received.</div>
        <p className="feature__body su-text-body-md">
          Thanks for applying to Batch 1. We&apos;ll be in touch by email with the next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" required placeholder="Jane Doe" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </div>
      <div className="field">
        <label htmlFor="status">Where you are right now</label>
        <select id="status" name="status" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Starting out — recent graduate or early-career</option>
          <option>Moving forward — working professional</option>
          <option>Changing course — new field or returning to learning</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="background">Your background</label>
        <input
          id="background"
          name="background"
          placeholder="Degree, current role, what you've built so far"
        />
      </div>
      <label className="check">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>I agree to the Terms of Service and Privacy Policy.</span>
      </label>
      <button type="submit" className="btn btn--primary btn--lg" disabled={!agreed}>
        Submit application <ArrowRight size={16} strokeWidth={2.25} />
      </button>
    </form>
  );
}
