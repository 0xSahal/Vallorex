import type { Metadata } from "next";
import {
  Code2,
  Smartphone,
  Plug,
  ShieldCheck,
  ClipboardList,
  PenTool,
  Rocket,
  Layout,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Product Engineering Services | Vallorex",
  description:
    "Ship products that users love and investors trust — full-stack delivery, mobile apps, integrations, and QA.",
  openGraph: {
    title: "Product Engineering Services | Vallorex",
    description:
      "Ship products that users love and investors trust — full-stack delivery, mobile apps, integrations, and QA.",
    url: "https://vallorex.com/services/product-engineering",
    type: "website",
  },
};

function ProductHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="p1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#93C5FD" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="105" y="86" width="210" height="150" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="132" y="112" width="156" height="20" rx="10" fill="rgba(255,255,255,0.06)" />
        <rect x="132" y="146" width="120" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        <rect x="132" y="172" width="170" height="14" rx="7" fill="rgba(255,255,255,0.06)" />

        <rect x="235" y="128" width="190" height="170" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <rect x="258" y="154" width="126" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
        <rect x="258" y="186" width="155" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        <rect x="258" y="212" width="112" height="14" rx="7" fill="rgba(255,255,255,0.06)" />

        <path d="M160 265 C 220 238, 280 244, 350 220" stroke="url(#p1)" strokeWidth="3" fill="none" />
        <circle cx="160" cy="265" r="6" fill="url(#p1)" />
        <circle cx="350" cy="220" r="6" fill="url(#p1)" />
      </g>
    </svg>
  );
}

export default function ProductEngineeringPage() {
  return (
    <ServicePageTemplate
      serviceName="Product Engineering"
      tagline="Ship products that users love and investors trust"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Product Engineering", href: "/services/product-engineering" },
      ]}
      heroIllustration={<ProductHeroSvg />}
      overviewParagraphs={[
        "Product Engineering is how you turn a roadmap into a reliable product without losing speed. We blend senior architecture, UX-aware implementation, and disciplined QA to ship features that stick.",
        "Our teams build across the full stack — modern web, mobile, APIs, integrations, and deployment pipelines — with a focus on performance, security, and maintainability.",
        "This service is for teams that need to ship a new product, modernize a legacy platform, or accelerate delivery while keeping quality high.",
      ]}
      keyOutcomes={[
        "Faster shipping with clean architecture and clear ownership",
        "Higher quality releases through automated and manual QA",
        "Integrations that are stable, observable, and upgrade-friendly",
        "A launch plan designed for scale and reliability",
      ]}
      included={[
        {
          id: "full-stack-development",
          href: "/services/full-stack-development",
          Icon: Code2,
          title: "Full-Stack Development",
          description: "Modern web apps with scalable APIs and production-ready foundations.",
        },
        {
          id: "mobile-applications",
          href: "/services/mobile-applications",
          Icon: Smartphone,
          title: "Mobile Applications",
          description: "iOS/Android delivery with performance, reliability, and release discipline.",
        },
        {
          id: "api-integrations",
          href: "/services/api-integrations",
          Icon: Plug,
          title: "API & Integrations",
          description: "Payments, auth, third-party services, and internal microservices.",
        },
        {
          id: "qa-testing",
          href: "/services/qa-testing",
          Icon: ShieldCheck,
          title: "QA & Testing",
          description: "E2E coverage, regression suites, and performance validation.",
        },
        {
          id: "scoping-planning",
          Icon: ClipboardList,
          title: "Scoping & Planning",
          description: "Milestones, technical scope, risks, and delivery sequencing.",
        },
        {
          id: "design-systems",
          Icon: PenTool,
          title: "Design Systems & UI",
          description: "Component libraries, accessibility, and consistent visual language.",
        },
      ]}
      process={[
        { title: "Scoping", description: "Define success metrics, architecture constraints, and scope." },
        { title: "Design", description: "UX flows, component systems, and API contracts." },
        { title: "Agile Build", description: "Sprint delivery with reviews, tests, and demos." },
        { title: "Launch & Scale", description: "Production rollout, monitoring, and iteration loops." },
      ]}
      whyStats={[
        { value: "50+",
          label: "Product releases shipped across web + mobile" },
        { value: "98%",
          label: "Client retention across multi-quarter engagements" },
        { value: "4.9★",
          label: "Average delivery rating from engineering stakeholders" },
      ]}
      testimonial={{
        quote:
          "They shipped like an internal team — clean PRs, proactive QA, and a launch plan that didn’t rely on heroics.",
        attribution: "Head of Engineering, Series A Fintech",
      }}
      related={[
        {
          href: "/services/ai-engineering",
          Icon: Layout,
          title: "AI Engineering",
          description: "Add production-grade intelligence to your product workflows.",
        },
        {
          href: "/services/web3-integration",
          Icon: Rocket,
          title: "Web3 Integration",
          description: "Wallets, chain events, and on-chain data integrated into apps.",
        },
        {
          href: "/services/technology-consulting",
          Icon: ClipboardList,
          title: "Technology Consulting",
          description: "Executive guidance for architecture and delivery decisions.",
        },
      ]}
      ctaHeading="Ready to build with Product Engineering?"
      ctaSubtext="Ship faster with senior-led delivery, strong QA, and scalable architecture from day one."
    />
  );
}

