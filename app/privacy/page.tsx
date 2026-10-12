import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/site/LegalPage";
import { site } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Summate Learning collects, uses and protects your personal data.",
};

// DRAFT — have this reviewed by a legal adviser before launch.
const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `${site.legalName} ("Summate", "we", "us") runs this website and the courses and community programs offered through it. Our registered office is at ${site.address.slice(1).join(" ")}.`,
      "This policy explains what personal data we collect, why we collect it, and the choices you have. It is written with India's Digital Personal Data Protection Act, 2023 in mind.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "We collect only what we need to respond to you and run our programs:",
      [
        "Details you give us when you apply, register or contact us, such as your name, email address, phone number, background and goals.",
        "Information you share as a learner or Summate Circle member, such as project work, profile details and messages within the community.",
        "Basic technical information when you visit the site, such as browser type, pages visited and approximate location, used to keep the site working and understand how it is used.",
      ],
    ],
  },
  {
    title: "How we use it",
    body: [
      [
        "To review applications and enquiries and get back to you.",
        "To deliver courses, mentoring, assessments, certificates and placement support.",
        "To run the Summate Circle, including helping members find each other.",
        "To send you information about programs you have asked about. You can opt out at any time.",
        "To meet legal, accounting and regulatory requirements.",
      ],
      "We do not sell your personal data.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "We share personal data only where needed: with service providers who help us run the website, email, payments and learning platforms; with hiring partners, only when you have agreed to it as part of placement support; and with authorities where the law requires it.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep personal data for as long as we need it for the purpose it was collected, or as required by law. Enquiries that do not lead to enrolment are deleted after a reasonable period.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us to access, correct, update or erase your personal data, withdraw consent you have given, or nominate someone to exercise these rights on your behalf. To do any of these, email us at the address below.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organisational measures to protect your data. No system is completely secure, so please contact us straight away if you think your information has been misused.",
    ],
  },
  {
    title: "Changes to this policy",
    body: ["We may update this policy from time to time. The date at the top of this page shows when it last changed."],
  },
  {
    title: "Contact and grievances",
    body: [
      `For privacy questions or complaints, email ${site.email} or write to us at our registered office. We will respond within a reasonable time.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="12 October 2026"
      intro="How Summate Learning collects, uses and protects your personal data."
      sections={sections}
    />
  );
}
