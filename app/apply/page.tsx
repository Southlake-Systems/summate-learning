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
      <main className="su-section">
        <div className="su-wrap su-wrap--narrow">
          <span className="eyebrow">Apply · Batch 1</span>
          <h1 className="su-text-display-sm" style={{ margin: "12px 0 12px" }}>
            Tell us about yourself.
          </h1>
          <p className="su-text-body-md lede" style={{ marginBottom: 32 }}>
            Tell us about yourself, your background, and apply. Batch 1 is fully live online and
            starts September 2026.
          </p>
          <ApplyForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
