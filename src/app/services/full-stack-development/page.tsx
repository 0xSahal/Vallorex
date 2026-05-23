import type { Metadata } from "next";
import {
  Layers,
  Code2,
  Server,
  Database,
  Network,
  GitBranch,
  Gauge,
  Search,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Full-Stack Development | Vallorex",
  description:
    "End-to-end product development from database schema to UI — React/Next.js, backends, databases, APIs, CI/CD, performance, and SEO.",
  openGraph: {
    title: "Full-Stack Development | Vallorex",
    description:
      "End-to-end product development from database schema to UI — React/Next.js, backends, databases, APIs, CI/CD, performance, and SEO.",
    url: "https://vallorex.com/services/full-stack-development",
    type: "website",
  },
};

function StackHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="fs1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [140, 105, 240, 60, "Frontend"],
          [160, 175, 240, 60, "Backend"],
          [180, 245, 240, 60, "Database"],
        ].map(([x, y, w, h], i) => (
          <g key={i}>
            <rect x={x as number} y={y as number} width={w as number} height={h as number} rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
            <circle cx={(x as number) + 24} cy={(y as number) + 30} r="6" fill="url(#fs1)" />
            <rect x={(x as number) + 46} y={(y as number) + 22} width="150" height="16" rx="8" fill="rgba(255,255,255,0.06)" />
          </g>
        ))}
        <path d="M380 135 L410 135" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <path d="M380 205 L410 205" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        <path d="M380 275 L410 275" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 10" />
        {[
          [380, 135],
          [410, 135],
          [380, 205],
          [410, 205],
          [380, 275],
          [410, 275],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="7" fill="url(#fs1)" />
          </g>
        ))}
        <path
          d="M95 320 C 170 285, 240 295, 315 255 C 380 220, 420 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function FullStackDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Full-Stack Development"
      tagline="End-to-end product development from database schema to pixel-perfect UI"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Full-Stack Development", href: "/services/full-stack-development" },
      ]}
      heroVariant="card"
      heroIllustration={<StackHeroSvg />}
      overviewParagraphs={[
        "We build full-stack web applications using React, Next.js, Node.js, and cloud-native backends. From wireframe to production, we deliver with clean architecture, CI/CD pipelines, and scalable infrastructure.",
        "Our focus is reliability and speed: strong API contracts, tested systems, and performance practices that keep UX fast and operations predictable.",
        "This service is ideal for new product builds, platform modernization, and teams that need senior engineering depth across the entire stack.",
      ]}
      keyOutcomes={[
        "A scalable full-stack architecture with clear ownership boundaries",
        "Fast, accessible UI with modern frontend patterns",
        "Reliable APIs with observability, documentation, and test coverage",
        "Production deployment with CI/CD, monitoring, and performance tuning",
      ]}
      included={[
        {
          id: "react-next-frontend",
          Icon: Code2,
          title: "React / Next.js Frontend",
          description: "Component systems, accessibility, performance, and responsive UX.",
        },
        {
          id: "backend-development",
          Icon: Server,
          title: "Node.js / Python Backend",
          description: "Scalable services with clear contracts, logging, and runtime safety.",
        },
        {
          id: "database-design-optimization",
          Icon: Database,
          title: "Database Design & Optimization",
          description: "Schemas, migrations, indexing, and performance tuning for scale.",
        },
        {
          id: "rest-graphql-apis",
          Icon: Network,
          title: "REST & GraphQL APIs",
          description: "Clean API design, auth, rate limits, and documentation.",
        },
        {
          id: "devops-cicd-setup",
          Icon: GitBranch,
          title: "DevOps & CI/CD Setup",
          description: "Build pipelines, previews, releases, and deployment automation.",
        },
        {
          id: "performance-seo",
          Icon: Gauge,
          title: "Performance & SEO Optimization",
          description: "Core Web Vitals, caching, and technical SEO foundations.",
        },
      ]}
      process={[
        { title: "Architecture Design", description: "Define system boundaries, data models, and release plan." },
        { title: "Frontend + Backend Build", description: "Implement in parallel with reviews and tests." },
        { title: "Integration Testing", description: "E2E validation for core flows and performance checks." },
        { title: "Deployment", description: "Ship with monitoring, runbooks, and iteration loops." },
      ]}
      whyStats={[
        { value: "100+",
          label: "Products Shipped" },
        { value: "<200ms",
          label: "API Response Targets" },
        { value: "99.95%",
          label: "Uptime SLA Targets" },
      ]}
      testimonial={{
        quote:
          "They delivered across the stack with senior-level rigor. The architecture was clean, the UI was fast, and the deployment process was rock solid.",
        attribution: "CTO, Series A SaaS",
      }}
      related={[
        {
          href: "/services/api-integrations",
          Icon: Search,
          title: "API & Integrations",
          description: "Third-party integrations, webhooks, and composable platform APIs.",
        },
        {
          href: "/services/qa-testing",
          Icon: Gauge,
          title: "QA & Testing",
          description: "Automated regression, performance testing, and CI quality gates.",
        },
        {
          href: "/services/mobile-applications",
          Icon: Layers,
          title: "Mobile Applications",
          description: "iOS/Android and cross-platform apps with backend integration.",
        },
      ]}
      ctaHeading="Ready to build with Full-Stack Development?"
      ctaSubtext="Ship end-to-end product experiences with clean architecture, strong QA, and production-grade deployment."
    />
  );
}

