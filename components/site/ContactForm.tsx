"use client";

import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { contactTopics } from "@/lib/pageContent";
import { site } from "@/lib/siteContent";

/**
 * No backend yet: submitting opens the visitor's email app with the message
 * pre-filled and addressed to the Summate inbox.
 */
export default function ContactForm({ defaultTopic = "course" }: { defaultTopic?: string }) {
  const [opened, setOpened] = useState(false);
  const initialTopic = contactTopics.some((t) => t.value === defaultTopic) ? defaultTopic : "course";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const topic = contactTopics.find((t) => t.value === data.get("topic"))?.label ?? "Enquiry";
    const name = String(data.get("name") ?? "").trim();
    const subject = `${topic}: ${name}`;
    const body = [
      String(data.get("message") ?? "").trim(),
      "",
      "—",
      name,
      String(data.get("email") ?? "").trim(),
      String(data.get("phone") ?? "").trim(),
    ]
      .filter((line, i) => i < 3 || line)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field =
    "mt-2 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-[16px] text-[#0D1222] placeholder:text-slate-400 transition-colors focus:border-[#1E3ABA] focus:outline-none focus:ring-4 focus:ring-[#1E3ABA]/10";
  const label = "text-[14px] font-semibold text-[#0D1222]";

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(13,18,34,0.07)] sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={label}>
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className={label}>What&apos;s this about?</span>
          <span className="relative block">
            <select name="topic" defaultValue={initialTopic} className={`${field} appearance-none pr-11`}>
            {contactTopics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
            </select>
            <ChevronDown size={17} aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-slate-500" />
          </span>
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about yourself and how we can help."
            className={`${field} resize-y`}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-[14px] leading-[1.6] text-slate-500">
          This opens your email app with your message ready to send to {site.email}.
        </p>
        <button
          type="submit"
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0D1222] px-7 text-[15px] font-semibold text-white transition-colors hover:bg-[#1E3ABA]"
        >
          <Mail size={17} aria-hidden="true" />
          Write the email
        </button>
      </div>

      {opened && (
        <p role="status" className="mt-6 rounded-2xl bg-[#F2F4FF] px-5 py-4 text-[15px] leading-[1.6] text-[#0D1222]">
          Your email app should now be open with your message. Press send there to reach us. If nothing opened, email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold">
            {site.email}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
