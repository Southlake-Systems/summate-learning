import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Faq from "@/components/Faq";
import { SectionHeader } from "@/components/ui/primitives";
import {
  AnnounceBar,
  StatBar,
  Curriculum,
  Testimonials,
  EnquiryForm,
} from "@/components/marketing/client";
import {
  Hero,
  LogoMarquee,
  PersonaCards,
  FeatureGrid,
  ProgramSpotlight,
  CurriculumSection,
  ComparisonTable,
  ToolStrip,
  StepPath,
  PromoBanner,
  CommunityStrip,
  MentorCards,
  PlacementBanner,
  TestimonialsSection,
  FoundersNote,
  BatchBenefits,
  InsightCards,
  MentorRecruitBanner,
  EnquirySection,
  FinalCta,
} from "@/components/marketing/sections";

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <SiteNav />

      <main>
        <Hero />
        <LogoMarquee />

        <section className="su-section--tight">
          <StatBar />
        </section>

        <PersonaCards />
        <FeatureGrid />
        <ProgramSpotlight />

        <CurriculumSection>
          <Curriculum />
        </CurriculumSection>

        <ComparisonTable />
        <ToolStrip />
        <StepPath />

        <PromoBanner />

        <CommunityStrip />
        <MentorCards />
        <PlacementBanner />

        <TestimonialsSection>
          <Testimonials />
        </TestimonialsSection>

        <FoundersNote />
        <BatchBenefits />
        <InsightCards />
        <MentorRecruitBanner />

        <section className="su-section" id="faqs">
          <div className="su-wrap su-wrap--narrow">
            <SectionHeader eyebrow="FAQs" title="Frequently asked questions" />
            <div style={{ marginTop: 24 }}>
              <Faq />
            </div>
          </div>
        </section>

        <EnquirySection>
          <EnquiryForm />
        </EnquirySection>

        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
