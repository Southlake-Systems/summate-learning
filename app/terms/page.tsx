import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/site/LegalPage";
import { site } from "@/lib/siteContent";

export const metadata: Metadata = {
  description: "The terms that apply when you use the Summate Learning website and enrol in our programs.",
};

// DRAFT — have this reviewed by a legal adviser before launch.
const sections: LegalSection[] = [
  {
    title: "About these terms",
    body: [
      `These terms apply when you use this website or enrol in a program run by ${site.legalName} ("Summate", "we", "us"). By using the site or enrolling, you agree to them.`,
    ],
  },
  {
    title: "Applications and enrolment",
    body: [
      "Submitting an application does not guarantee a place. We review applications and may ask for more information or an interview. A place is confirmed only when we tell you in writing and any required fee has been paid.",
    ],
  },
  {
    title: "Fees, payments and refunds",
    body: [
      "Fees, payment schedules and refund terms for each program are shared with you before you enrol and form part of these terms. If anything in that communication differs from this page, the program-specific terms apply.",
    ],
  },
  {
    title: "Program changes",
    body: [
      "We aim to deliver each program as described, but schedules, curriculum details, tools and faculty may change to keep the program current or for reasons outside our control. We will tell you about significant changes in advance.",
    ],
  },
  {
    title: "Your responsibilities",
    body: [
      [
        "Provide accurate information when you apply or enrol.",
        "Attend sessions and complete work honestly. Work you submit must be your own, and use of AI tools must follow the guidance given in your program.",
        "Treat other learners, mentors and staff with respect, in sessions and in the Summate Circle.",
        "Do not share course materials, recordings or login access with anyone outside your program.",
      ],
      "We may suspend or end access for serious or repeated breaches.",
    ],
  },
  {
    title: "Certificates and placement support",
    body: [
      "Certificates are issued to learners who successfully complete a program's requirements. Placement support helps you prepare for and find opportunities, but we cannot guarantee a job, interview or particular salary.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Course materials, content and branding on this site belong to Summate or its licensors and are for your personal learning use only. You keep ownership of the projects you build, and you allow us to showcase them with your permission.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "We provide the website and programs with reasonable care and skill. To the extent the law allows, we are not liable for indirect or consequential losses, and our total liability for any claim is limited to the fees you paid for the program concerned.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the courts at Ernakulam, Kerala.",
    ],
  },
  {
    title: "Contact",
    body: [`Questions about these terms? Email ${site.email} or call ${site.phone}.`],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="12 October 2026"
      intro="The terms that apply when you use this website and enrol in a Summate program."
      sections={sections}
    />
  );
}
