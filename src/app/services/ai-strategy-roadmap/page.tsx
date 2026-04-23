import type { Metadata } from "next";
import {
  ClipboardList,
  Target,
  LineChart,
  ShieldCheck,
  Milestone,
  Wrench,
  Brain,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "AI Strategy & Roadmap | Vallorex",
  description:
    "Define your AI transformation with readiness assessment, high-ROI use cases, KPIs, and a phased roadmap with governance and compliance.",
  openGraph: {
    title: "AI Strategy & Roadmap | Vallorex",
    description:
      "Define your AI transformation with readiness assessment, high-ROI use cases, KPIs, and a phased roadmap with governance and compliance.",
    url: "https://vallorex.com/services/ai-strategy-roadmap",
    type: "website",
  },
};

function RoadmapHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="r1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <path
        d="M85 265 C 140 205, 195 215, 245 245 C 290 270, 340 270, 385 235 C 420 210, 448 200, 470 195"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="4"
        fill="none"
      />
      {[
        [115, 240],
        [220, 250],
        [320, 265],
        [400, 235],
        [465, 195],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill="rgba(255,255,255,0.06)" />
          <circle cx={x} cy={y} r="6" fill="url(#r1)" />
          <path d={`M${x} ${y - 26} L${x} ${y - 12}`} stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          <rect x={x - 20} y={y - 54} width="40" height="18" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        </g>
      ))}
      <path
        d="M110 120 C 175 80, 260 80, 325 120 C 380 155, 430 160, 470 145"
        stroke="rgba(249,115,22,0.55)"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="7 10"
      />
    </svg>
  );
}

function ReadinessCallout() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight/5 text-midnight">
          <Brain className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-midnight">AI Readiness Snapshot</p>
          <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
            Get a fast, senior-led assessment of data, systems, risk posture, and ROI opportunities — delivered as a
            board-ready plan.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-brand-orange hover:bg-[#E06612] text-white font-semibold h-11 px-6 rounded-full">
              <Link href="/contact?tab=booking">Book a strategy session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 px-6 rounded-full border-slate-200 bg-transparent text-midnight hover:bg-slate-50"
            >
              <Link href="/case-studies">
                See case studies <ArrowRight className="inline-block ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AiStrategyRoadmapPage() {
  return (
    <ServicePageTemplate
      serviceName="AI Strategy & Roadmap"
      tagline="Define your AI transformation before your competitors define it for you"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Strategy & Roadmap", href: "/services/ai-strategy-roadmap" },
      ]}
      heroVariant="card"
      heroIllustration={<RoadmapHeroSvg />}
      overviewParagraphs={[
        "AI Strategy & Roadmap helps enterprises assess AI readiness, identify high-ROI use cases, and build a phased implementation plan with clear KPIs and governance frameworks.",
        "We focus on outcomes: measurable business value, operational feasibility, and risk posture. That means aligning stakeholders, quantifying ROI, and translating ideas into executable milestones.",
        "This is the right starting point when you need clarity before investing in models, tooling, or vendors — and when leadership needs a defensible plan, not a collection of experiments.",
      ]}
      midCallout={<ReadinessCallout />}
      keyOutcomes={[
        "A phased AI roadmap with KPIs, owners, and timelines",
        "Prioritized use cases ranked by ROI and feasibility",
        "Governance and compliance guardrails for safe adoption",
        "A clear build-vs-buy plan for tools and vendors",
      ]}
      included={[
        {
          id: "ai-readiness-assessment",
          href: "/services/ai-strategy-roadmap#ai-readiness-assessment",
          Icon: ClipboardList,
          title: "AI Readiness Assessment",
          description: "Assess data, systems, skills, and risk posture across the org.",
        },
        {
          id: "use-case-prioritization",
          href: "/services/ai-strategy-roadmap#use-case-prioritization",
          Icon: Target,
          title: "Use Case Prioritization",
          description: "Rank opportunities by ROI, feasibility, and time-to-value.",
        },
        {
          id: "roi-modeling-business-case",
          href: "/services/ai-strategy-roadmap#roi-modeling-business-case",
          Icon: LineChart,
          title: "ROI Modeling & Business Case",
          description: "Quantify value, cost, risk, and adoption paths for exec buy-in.",
        },
        {
          id: "governance-compliance-framework",
          href: "/services/ai-strategy-roadmap#governance-compliance-framework",
          Icon: ShieldCheck,
          title: "Governance & Compliance Framework",
          description: "Policies for data, privacy, model use, and human oversight.",
        },
        {
          id: "phased-implementation-planning",
          href: "/services/ai-strategy-roadmap#phased-implementation-planning",
          Icon: Milestone,
          title: "Phased Implementation Planning",
          description: "Milestones, owners, timelines, and delivery sequencing.",
        },
        {
          id: "vendor-tool-selection",
          href: "/services/ai-strategy-roadmap#vendor-tool-selection",
          Icon: Wrench,
          title: "Vendor & Tool Selection",
          description: "Shortlist platforms and vendors with clear evaluation criteria.",
        },
      ]}
      process={[
        { title: "Stakeholder Interviews", description: "Align on outcomes, constraints, and decision timelines." },
        { title: "Current State Audit", description: "Assess data, systems, skills, and risk posture." },
        { title: "Opportunity Mapping", description: "Prioritize use cases by ROI, feasibility, and time-to-value." },
        { title: "Roadmap Delivery", description: "Deliver a phased plan with KPIs, governance, and owners." },
      ]}
      whyStats={[
        { value: "80+",
          label: "Roadmaps Delivered" },
        { value: "3x",
          label: "Faster AI Adoption" },
        { value: "Fortune 500",
          label: "Clients" },
      ]}
      testimonial={{
        quote:
          "Their roadmap made our AI investment defensible. We had priorities, KPIs, and governance — and we avoided expensive tooling mistakes.",
        attribution: "VP Technology, Fortune 500 Enterprise",
      }}
      related={[
        {
          href: "/services/custom-llm-development",
          Icon: Brain,
          title: "Custom LLM Development",
          description: "Fine-tuning, RAG, embeddings, and production inference APIs.",
        },
        {
          href: "/services/ml-ops-infrastructure",
          Icon: Wrench,
          title: "MLOps Infrastructure",
          description: "CI/CD for models, drift detection, and reliable serving.",
        },
        {
          href: "/services/technology-consulting",
          Icon: ShieldCheck,
          title: "Technology Consulting",
          description: "Executive-level guidance and technical due diligence.",
        },
      ]}
      ctaHeading="Ready to build with AI Strategy & Roadmap?"
      ctaSubtext="Get a phased plan with ROI, KPIs, and governance — designed for real adoption, not experiments."
    />
  );
}

