import type { Metadata } from "next";
import {
  CheckCircle2,
  ShieldCheck,
  Gauge,
  Bug,
  Smartphone,
  Network,
  GitBranch,
  BarChart3,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "QA & Testing | Vallorex",
  description:
    "Ship with confidence — automated regression, performance testing, security scanning, manual QA, and CI/CD test pipeline integration.",
  openGraph: {
    title: "QA & Testing | Vallorex",
    description:
      "Ship with confidence — automated regression, performance testing, security scanning, manual QA, and CI/CD test pipeline integration.",
    url: "https://vallorex.com/services/qa-testing",
    type: "website",
  },
};

function QaHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="qa1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#22C55E" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="140" y="95" width="240" height="170" rx="22" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <path d="M190 180 L235 225 L330 135" stroke="url(#qa1)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        {[
          [170, 120],
          [350, 120],
          [170, 245],
          [350, 245],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5" fill="url(#qa1)" />
          </g>
        ))}
        <path
          d="M95 310 C 170 280, 235 290, 315 250 C 365 222, 415 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </g>
    </svg>
  );
}

export default function QaTestingPage() {
  return (
    <ServicePageTemplate
      serviceName="QA & Testing"
      tagline="Ship with confidence. Every release, every time."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "QA & Testing", href: "/services/qa-testing" },
      ]}
      heroVariant="card"
      heroIllustration={<QaHeroSvg />}
      overviewParagraphs={[
        "We provide end-to-end QA services including automated regression testing, performance testing, security scanning, and manual exploratory testing — integrated directly into your CI/CD pipeline.",
        "The goal is simple: detect issues before production, ship faster, and make quality measurable. We align test suites to business-critical flows and build confidence with reliable gates.",
        "This service is ideal for teams increasing release velocity, stabilizing a product, or building quality foundations for scale.",
      ]}
      keyOutcomes={[
        "Higher release confidence with measurable quality gates",
        "Fewer production incidents through regression and contract testing",
        "Performance and load testing aligned to real usage patterns",
        "A CI-integrated pipeline that keeps quality continuous",
      ]}
      included={[
        {
          id: "automated-regression-testing",
          Icon: CheckCircle2,
          title: "Automated Regression Testing",
          description: "E2E and integration suites that protect core flows release-to-release.",
        },
        {
          id: "performance-load-testing",
          Icon: Gauge,
          title: "Performance & Load Testing",
          description: "Load profiles, bottleneck detection, and performance baselines.",
        },
        {
          id: "security-penetration-testing",
          Icon: ShieldCheck,
          title: "Security & Penetration Testing",
          description: "Security scanning and targeted tests aligned to OWASP guidance.",
        },
        {
          id: "mobile-app-testing",
          Icon: Smartphone,
          title: "Mobile App Testing",
          description: "Device testing, OS coverage, and release-readiness checks.",
        },
        {
          id: "api-contract-testing",
          Icon: Network,
          title: "API Contract Testing",
          description: "Contract suites that prevent breaking changes across services.",
        },
        {
          id: "cicd-test-pipelines",
          Icon: GitBranch,
          title: "CI/CD Test Pipeline Integration",
          description: "Fast, reliable gates with reporting and flaky test management.",
        },
      ]}
      process={[
        { title: "Test Plan Definition", description: "Align on critical flows, risk, and success criteria." },
        { title: "Automation Build", description: "Implement regression suites and performance baselines." },
        { title: "CI Integration", description: "Add gates, reporting, and reliable execution patterns." },
        { title: "Continuous Monitoring", description: "Track quality metrics and reduce flakiness over time." },
      ]}
      whyStats={[
        { value: "95%",
          label: "Bug Detection Before Production" },
        { value: "10x",
          label: "Faster Release Cycles" },
        { value: "OWASP",
          label: "Compliant Testing" },
      ]}
      testimonial={{
        quote:
          "We doubled release cadence without increasing incidents. The CI gates and contract tests caught breaking changes before they hit customers.",
        attribution: "Head of Engineering, B2B Platform",
      }}
      related={[
        {
          href: "/services/full-stack-development",
          Icon: BarChart3,
          title: "Full-Stack Development",
          description: "Build features fast with quality and performance baked in.",
        },
        {
          href: "/services/api-integrations",
          Icon: Bug,
          title: "API & Integrations",
          description: "Stable APIs with contract testing and operational reliability.",
        },
        {
          href: "/services/mobile-applications",
          Icon: ShieldCheck,
          title: "Mobile Applications",
          description: "Ship app-store-ready mobile products with release discipline.",
        },
      ]}
      ctaHeading="Ready to build with QA & Testing?"
      ctaSubtext="Ship faster with continuous QA: automation, performance testing, security checks, and CI-integrated gates."
    />
  );
}

