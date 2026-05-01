import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { DifferentiatorSection } from "@/components/sections/DifferentiatorSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <DifferentiatorSection />
      <TeamSection />
      <ServicesGrid />
      <StatsRow />
      <ProcessTimeline />
      <CaseStudies />
      <CtaBanner />
    </>
  );
}
