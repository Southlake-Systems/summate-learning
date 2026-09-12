import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Hero,
  LogoMarquee,
  WhySummate,
  PersonaCards,
  ProgramSpotlight,
  CurriculumSection,
  ComparisonTable,
  ToolStrip,
  StepPath,
  PromoBanner,
  CommunityStrip,
  MentorCards,
  PlacementBanner,
  FoundersNote,
  BatchBenefits,
  InsightCards,
  MentorRecruitBanner,
  EnquirySection,
  FinalCta,
} from "@/components/marketing/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <main>
        <Hero />
        {/* <LogoMarquee /> */}
        <WhySummate />
        <PersonaCards />
        <FoundersNote />
        <ProgramSpotlight />
        <ComparisonTable />
        <ToolStrip />
        <StepPath />
        <BatchBenefits />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}