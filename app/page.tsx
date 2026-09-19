"use client";

import { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import {
  Hero,
 // LogoMarquee,
  WhySummate,
  TrackCatalog,
  PersonaCards,
  ProgramSpotlight,
  ComparisonTable,
  BatchBenefits,
  ToolStrip,
  StepPath,
  FoundersNote,
  MentorCards,
  FinalCta,
} from "@/components/marketing/sections";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Animated Screen with your Logo */}
      <LoadingScreen
        logoSrc="/logo.png"
        minDuration={800}
        onComplete={() => setIsLoaded(true)}
      />

      {/* Main Content: Fades in smoothly once loading completes */}
      <main
        className={`transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <SiteNav />
        <Hero />
        <WhySummate />
        <TrackCatalog />
        <PersonaCards />
        <ProgramSpotlight />
        <ComparisonTable />
        <BatchBenefits />
        <ToolStrip />
        <StepPath />
        <FoundersNote />
        <MentorCards />
        <FinalCta />
        <SiteFooter />
      </main>
    </>
  );
}