import type { Metadata } from "next";
import {
  BarChart3,
  Database,
  LineChart,
  Cloud,
  Search,
  Wrench,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Data Analytics Services | Vallorex",
  description:
    "Turn raw data into decisions that drive growth — data platforms, BI dashboards, predictive analytics, and cloud migration.",
  openGraph: {
    title: "Data Analytics Services | Vallorex",
    description:
      "Turn raw data into decisions that drive growth — data platforms, BI dashboards, predictive analytics, and cloud migration.",
    url: "https://vallorex.com/services/data-analytics",
    type: "website",
  },
};

function AnalyticsHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="d1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.9">
        <path d="M90 270 L160 210 L230 235 L305 160 L420 120" stroke="rgba(255,255,255,0.22)" strokeWidth="3" fill="none" />
        {[
          [90, 270],
          [160, 210],
          [230, 235],
          [305, 160],
          [420, 120],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5" fill="url(#d1)" />
          </g>
        ))}
        {[
          [120, 290, 22],
          [170, 290, 46],
          [220, 290, 34],
          [270, 290, 70],
          [320, 290, 58],
          [370, 290, 86],
        ].map(([x, y, h], i) => (
          <rect
            key={i}
            x={x}
            y={y - h}
            width="26"
            height={h}
            rx="6"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.12)"
          />
        ))}
      </g>
      <path
        d="M90 120 C 160 75, 235 80, 310 110 C 360 130, 410 135, 450 125"
        stroke="rgba(249,115,22,0.55)"
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="7 10"
      />
    </svg>
  );
}

export default function DataAnalyticsPage() {
  return (
    <ServicePageTemplate
      serviceName="Data & Analytics"
      tagline="Turn raw data into decisions that drive growth"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Data & Analytics", href: "/services/data-analytics" },
      ]}
      heroIllustration={<AnalyticsHeroSvg />}
      overviewParagraphs={[
        "Data analytics should be a competitive advantage — not a backlog of dashboards that nobody trusts. We modernize your data foundation so leaders can make decisions confidently and teams can move faster.",
        "We build durable pipelines, clean models, and high-signal dashboards that connect to business outcomes. Every metric is tied to definitions, lineage, and an operational plan for quality over time.",
        "This service is ideal for teams consolidating fragmented data sources, migrating to the cloud, or adding predictive signals to core planning and operations.",
      ]}
      keyOutcomes={[
        "A reliable data foundation with defined ownership and quality gates",
        "Faster reporting cycles with trustworthy KPI definitions",
        "Predictive models that support planning and operations",
        "Cloud-native architecture designed for cost and scale",
      ]}
      included={[
        {
          id: "data-platform-engineering",
          href: "/services/data-platform-engineering",
          Icon: Database,
          title: "Data Platform Engineering",
          description: "Warehousing, modeling, governance, and orchestration for real-world scale.",
        },
        {
          id: "business-intelligence",
          href: "/services/business-intelligence",
          Icon: LayoutDashboard,
          title: "Business Intelligence",
          description: "Executive dashboards, KPI layers, and metric definitions teams can trust.",
        },
        {
          id: "predictive-analytics",
          href: "/services/predictive-analytics",
          Icon: TrendingUp,
          title: "Predictive Analytics",
          description: "Forecasting, propensity, and anomaly models connected to workflows.",
        },
        {
          id: "cloud-data-migration",
          href: "/services/cloud-data-migration",
          Icon: Cloud,
          title: "Cloud Data Migration",
          description: "Migrate legacy warehouses and pipelines to AWS/GCP/Azure safely.",
        },
        {
          id: "data-audit",
          Icon: Search,
          title: "Data Audit & Readiness",
          description: "Source assessment, quality scoring, lineage mapping, and quick wins.",
        },
        {
          id: "ongoing-optimization",
          Icon: Wrench,
          title: "Ongoing Optimization",
          description: "Cost control, performance tuning, and continuous improvement cycles.",
        },
      ]}
      process={[
        { title: "Data Audit", description: "Map sources, definitions, and quality gaps that block decisions." },
        { title: "Pipeline Build", description: "Implement ingestion, modeling, and orchestration with tests." },
        { title: "Dashboard Setup", description: "Ship dashboards tied to KPI definitions and stakeholder workflows." },
        { title: "Ongoing Optimization", description: "Tune cost, performance, and reliability as usage scales." },
      ]}
      whyStats={[
        { value: "25+",
          label: "Data platforms modernized (BI, warehousing, streaming)" },
        { value: "30–50%",
          label: "Typical reduction in reporting latency after modernization" },
        { value: "99%",
          label: "Pipeline success targets supported via tests + alerting" },
      ]}
      testimonial={{
        quote:
          "For the first time, leadership had one set of numbers. The definitions were clear, the dashboards were fast, and the pipelines stopped breaking every week.",
        attribution: "VP Data, Growth-Stage Marketplace",
      }}
      related={[
        {
          href: "/services/ml-data-pipelines",
          Icon: LineChart,
          title: "ML Data Pipelines",
          description: "Training data orchestration and automated retraining loops.",
        },
        {
          href: "/services/ai-engineering",
          Icon: BarChart3,
          title: "AI Engineering",
          description: "Production AI systems with evaluation, deployment, and monitoring.",
        },
        {
          href: "/services/technology-consulting",
          Icon: Search,
          title: "Technology Consulting",
          description: "Executive guidance and technical due diligence for critical decisions.",
        },
      ]}
      ctaHeading="Ready to build with Data & Analytics?"
      ctaSubtext="Modernize your data foundation and ship dashboards and models that leaders can rely on."
    />
  );
}

