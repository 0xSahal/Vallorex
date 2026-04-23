import type { Metadata } from "next";
import {
  LayoutDashboard,
  Target,
  Layers,
  Radio,
  Boxes,
  LineChart,
  Users,
  BarChart3,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Business Intelligence | Vallorex",
  description:
    "Dashboards your executives will actually use — KPI design, semantic layers, real-time reporting, embedded analytics, and executive reporting suites.",
  openGraph: {
    title: "Business Intelligence | Vallorex",
    description:
      "Dashboards your executives will actually use — KPI design, semantic layers, real-time reporting, embedded analytics, and executive reporting suites.",
    url: "https://vallorex.com/services/business-intelligence",
    type: "website",
  },
};

function DashboardHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="bi1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="105" y="90" width="310" height="190" rx="22" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="130" y="115" width="140" height="28" rx="14" fill="rgba(255,255,255,0.06)" />
        <rect x="280" y="115" width="110" height="28" rx="14" fill="rgba(255,255,255,0.06)" />
        {[
          [140, 255, 26],
          [176, 255, 52],
          [212, 255, 36],
          [248, 255, 70],
          [284, 255, 58],
          [320, 255, 86],
        ].map(([x, y, h], i) => (
          <rect
            key={i}
            x={x}
            y={y - h}
            width="24"
            height={h}
            rx="6"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.12)"
          />
        ))}
        <path d="M140 190 L200 170 L240 182 L300 150 L375 140" stroke="url(#bi1)" strokeWidth="3" fill="none" />
        {[
          [140, 190],
          [200, 170],
          [240, 182],
          [300, 150],
          [375, 140],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5" fill="url(#bi1)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function BusinessIntelligencePage() {
  return (
    <ServicePageTemplate
      serviceName="Business Intelligence"
      tagline="Dashboards your executives will actually use"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Business Intelligence", href: "/services/business-intelligence" },
      ]}
      heroVariant="card"
      heroIllustration={<DashboardHeroSvg />}
      overviewParagraphs={[
        "We build BI solutions that connect your data warehouse to intuitive dashboards — from real-time KPI tracking to self-serve analytics platforms.",
        "The difference is rigor: we define metrics, implement semantic layers, and make dashboards fast and trustworthy so they become daily tools for leadership.",
        "We work with Tableau, Power BI, Looker, and custom-built solutions — always aligned to adoption, clarity, and operational ownership.",
      ]}
      keyOutcomes={[
        "KPI definitions and semantic layers that eliminate metric disputes",
        "Dashboards that load fast and answer real operational questions",
        "Self-serve analytics built with governance and guardrails",
        "Executive reporting that leadership actually uses weekly",
      ]}
      included={[
        {
          id: "kpi-dashboard-design",
          Icon: LayoutDashboard,
          title: "KPI Dashboard Design",
          description: "High-signal dashboards tied to clear definitions and decision workflows.",
        },
        {
          id: "self-serve-analytics",
          Icon: Users,
          title: "Self-Serve Analytics Platform",
          description: "Governed exploration with role-based access and curated datasets.",
        },
        {
          id: "real-time-reporting",
          Icon: Radio,
          title: "Real-Time Reporting",
          description: "Near real-time pipelines and dashboards for operational visibility.",
        },
        {
          id: "semantic-layer",
          Icon: Layers,
          title: "Data Modeling & Semantic Layer",
          description: "Metric definitions, dimensional models, and data contracts for trust.",
        },
        {
          id: "embedded-analytics",
          Icon: Boxes,
          title: "Embedded Analytics",
          description: "Integrate dashboards into products with secure and scalable patterns.",
        },
        {
          id: "executive-reporting-suite",
          Icon: Target,
          title: "Executive Reporting Suite",
          description: "Board-ready reporting with narrative, trends, and operational clarity.",
        },
      ]}
      process={[
        { title: "Metric Definition", description: "Align stakeholders on KPIs, definitions, and ownership." },
        { title: "Data Modeling", description: "Build semantic layers and models that power consistent reporting." },
        { title: "Dashboard Build", description: "Design, implement, and optimize dashboards for usability and speed." },
        { title: "Training & Handoff", description: "Enable teams with documentation, training, and governance." },
      ]}
      whyStats={[
        { value: "100+",
          label: "Dashboards Built" },
        { value: "5 min",
          label: "Average Insight Time" },
        { value: "94%",
          label: "C‑Suite Adoption Rate" },
      ]}
      testimonial={{
        quote:
          "The dashboards became part of our weekly operating rhythm. Definitions were consistent, and we stopped arguing about numbers.",
        attribution: "COO, Growth-Stage Marketplace",
      }}
      related={[
        {
          href: "/services/data-platform-engineering",
          Icon: BarChart3,
          title: "Data Platform Engineering",
          description: "Build reliable pipelines and warehouses that power analytics at scale.",
        },
        {
          href: "/services/predictive-analytics",
          Icon: LineChart,
          title: "Predictive Analytics",
          description: "Forecasting and anomaly systems integrated into operational workflows.",
        },
        {
          href: "/services/cloud-data-migration",
          Icon: Radio,
          title: "Cloud Data Migration",
          description: "Move legacy systems to cloud warehouses with minimal disruption.",
        },
      ]}
      ctaHeading="Ready to build with Business Intelligence?"
      ctaSubtext="Ship dashboards and semantic layers that leadership trusts and teams use daily."
    />
  );
}

