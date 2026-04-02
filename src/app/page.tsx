import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { DifferentiatorSection } from "@/components/sections/DifferentiatorSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <DifferentiatorSection />
      <ServicesGrid />
      <StatsRow />
      <ProcessTimeline />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
