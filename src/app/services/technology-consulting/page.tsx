import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ShieldCheck,
  Search,
  LineChart,
  Users,
  ArrowRight,
  Crown,
  BookOpenCheck,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Technology Consulting (Fractional CTO) | Vallorex",
  description:
    "Fractional CTO services and technical due diligence for VCs and enterprises — strategy, architecture, delivery oversight, and risk reduction.",
  openGraph: {
    title: "Technology Consulting (Fractional CTO) | Vallorex",
    description:
      "Fractional CTO services and technical due diligence for VCs and enterprises — strategy, architecture, delivery oversight, and risk reduction.",
    url: "https://vallorex.com/services/technology-consulting",
    type: "website",
  },
};

function ConsultingHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="t1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <path
          d="M110 240 C 170 170, 250 165, 320 210 C 370 240, 410 245, 450 230"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3"
          fill="none"
        />
        {[
          [140, 230],
          [205, 190],
          [270, 190],
          [335, 215],
          [405, 230],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5" fill="url(#t1)" />
          </g>
        ))}
        <rect x="130" y="85" width="260" height="80" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <rect x="155" y="110" width="160" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
        <rect x="155" y="132" width="210" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
      </g>
    </svg>
  );
}

function FractionalCtoCallout() {
  return (
    <div className="rounded-2xl bg-midnight text-white border border-white/10 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
          <Crown className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-orange">Fractional CTO</p>
          <p className="mt-2 text-xl font-extrabold tracking-tight">
            Executive-level technical leadership, without the full-time overhead.
          </p>
          <p className="mt-3 text-white/75 leading-relaxed">
            We step in to stabilize delivery, define architecture and hiring plans, and provide clear executive reporting.
            Ideal for growth-stage teams, post-fundraise scaling, or high-stakes platform rewrites.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-brand-orange hover:bg-[#E06612] text-white font-semibold h-11 px-6 rounded-full">
              <Link href="/contact?tab=booking">Book a CTO consult</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 px-6 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/case-studies">See outcomes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechnologyConsultingPage() {
  return (
    <ServicePageTemplate
      serviceName="Technology Consulting"
      tagline="Fractional CTO services and technical due diligence for VCs and enterprises"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Technology Consulting", href: "/services/technology-consulting" },
      ]}
      heroVariant="card"
      heroIllustration={<ConsultingHeroSvg />}
      overviewParagraphs={[
        "Technology decisions compound. The right architecture, hiring plan, and delivery rhythm can create durable advantage — while the wrong ones create years of drag.",
        "We provide senior, executive-facing guidance across architecture, delivery oversight, and technical due diligence. You get clear recommendations, defensible trade-offs, and a plan your team can execute.",
        "This service is designed for founders, executives, and investors who need high-signal answers quickly — without guesswork or vendor bias.",
        "Expect more whitespace, more clarity, and fewer buzzwords. We treat your roadmap like a balance sheet: quantify risk, reduce uncertainty, and execute.",
      ]}
      midCallout={<FractionalCtoCallout />}
      keyOutcomes={[
        "A crisp technical strategy aligned to business goals and constraints",
        "Risk-reduced delivery with realistic milestones and ownership models",
        "Due diligence findings that hold up to board scrutiny",
        "A hiring and platform roadmap built for scale, security, and cost control",
      ]}
      included={[
        {
          id: "fractional-cto",
          Icon: Briefcase,
          title: "Fractional CTO Leadership",
          description: "Delivery oversight, executive reporting, and architecture direction.",
        },
        {
          id: "technical-due-diligence",
          Icon: Search,
          title: "Technical Due Diligence",
          description: "Codebase review, team assessment, roadmap realism, and risk scoring.",
        },
        {
          id: "security-risk-review",
          Icon: ShieldCheck,
          title: "Security & Risk Review",
          description: "Threat modeling, compliance posture, and remediation prioritization.",
        },
        {
          id: "architecture-review",
          Icon: GitBranch,
          title: "Architecture & Scalability Review",
          description: "System design evaluation with clear upgrade path recommendations.",
        },
        {
          id: "delivery-operating-model",
          Icon: Users,
          title: "Delivery Operating Model",
          description: "Process, roles, and cadence that make execution predictable.",
        },
        {
          id: "metrics-kpis",
          Icon: LineChart,
          title: "Executive Metrics & KPIs",
          description: "Define measurable leading indicators for product and engineering health.",
        },
      ]}
      process={[
        { title: "Discovery", description: "Clarify objectives, constraints, and decision timelines." },
        { title: "Assessment", description: "Review architecture, team, roadmap, and risk profile." },
        { title: "Recommendations", description: "Deliver a clear plan with trade-offs and priorities." },
        { title: "Execution Support", description: "Optional ongoing support to implement and stabilize." },
      ]}
      whyStats={[
        { value: "10+",
          label: "Due diligence engagements supporting VCs + acquirers" },
        { value: "2–10 days",
          label: "Typical time to board-ready findings (scope dependent)" },
        { value: "Senior-led",
          label: "Direct work by senior engineers and architects" },
      ]}
      testimonial={{
        quote:
          "Their assessment was unusually crisp. We got a clear risk profile, a realistic delivery plan, and a hiring roadmap we could defend to the board.",
        attribution: "Partner, Venture Capital Firm",
      }}
      related={[
        {
          href: "/services/product-engineering",
          Icon: BookOpenCheck,
          title: "Product Engineering",
          description: "Senior-led delivery for web, mobile, and platform foundations.",
        },
        {
          href: "/services/ai-engineering",
          Icon: ArrowRight,
          title: "AI Engineering",
          description: "Production AI systems with measurable evaluation gates.",
        },
        {
          href: "/services/data-analytics",
          Icon: LineChart,
          title: "Data & Analytics",
          description: "Data platforms and dashboards that leadership can trust.",
        },
      ]}
      ctaHeading="Ready to build with Technology Consulting?"
      ctaSubtext="Get executive-level technical clarity and a plan your team can execute — fast."
    />
  );
}

