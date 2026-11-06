"use client";

import Choreography, { BackToTop, ScrollProgress } from "@/components/ui/Choreography";
import {
  Hero,
  // LogoMarquee,
  WhySummate,
  TrackCatalog,
  PersonaCards,
  ProgramSpotlight,
  BatchBenefits,
  ToolStrip,
  // StepPath,
  // FoundersNote,
  // MentorCards,
  FinalCta,
} from "@/components/marketing/sections";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/**
 * Client-side homepage shell. Metadata lives in `app/page.tsx`, which stays a
 * server component; keeping the interactive sections here is what makes that
 * possible without hiding the page behind a loading screen.
 */
export default function HomeView() {
  return (
    <main>
      <Choreography ready />
      <ScrollProgress />
      <SiteNav />
      <Hero />
      <WhySummate />
      <TrackCatalog />
      <PersonaCards />
      <ProgramSpotlight />
      <BatchBenefits />
      <ToolStrip />
      {/* <StepPath /> */}
      {/* <FoundersNote /> */}
      {/* <MentorCards /> */}
      <FinalCta />
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
