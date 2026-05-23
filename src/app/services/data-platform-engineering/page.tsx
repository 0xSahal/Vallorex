import type { Metadata } from "next";
import {
  Database,
  Layers,
  Workflow,
  Radio,
  BarChart3,
  ShieldCheck,
  BookOpenCheck,
  Wrench,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Data Platform Engineering | Vallorex",
  description:
    "Data infrastructure that scales without a rewrite — lakehouse architecture, ETL/ELT pipelines, streaming, warehouses, and observability.",
  openGraph: {
    title: "Data Platform Engineering | Vallorex",
    description:
      "Data infrastructure that scales without a rewrite — lakehouse architecture, ETL/ELT pipelines, streaming, warehouses, and observability.",
    url: "https://vallorex.com/services/data-platform-engineering",
    type: "website",
  },
};

function DataTopologyHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="dp1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="95" y="95" width="140" height="70" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="95" y="210" width="140" height="70" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="285" y="130" width="160" height="120" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <path d="M235 130 L285 160" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeDasharray="7 10" />
        <path d="M235 245 L285 220" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeDasharray="7 10" />
        {[
          [235, 130],
          [235, 245],
          [285, 160],
          [285, 220],
          [410, 190],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5.5" fill="url(#dp1)" />
          </g>
        ))}
        <path
          d="M95 310 C 170 280, 235 290, 315 250 C 365 222, 415 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function DataPlatformEngineeringPage() {
  return (
    <ServicePageTemplate
      serviceName="Data Platform Engineering"
      tagline="Data infrastructure that scales from startup to enterprise without a rewrite"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Data Platform Engineering", href: "/services/data-platform-engineering" },
      ]}
      heroVariant="card"
      heroIllustration={<DataTopologyHeroSvg />}
      overviewParagraphs={[
        "We design and build modern data platforms with cloud-native architecture — lakehouse patterns, real-time streaming, and warehouse solutions that cut query times and operational overhead.",
        "The focus is durability: tested pipelines, clear ownership, and observability so data stays reliable as sources and teams evolve.",
        "This service is ideal when your data is fragmented across tools, pipelines are brittle, or analytics and ML efforts are blocked by missing foundations.",
      ]}
      keyOutcomes={[
        "A scalable data foundation with clear governance and ownership",
        "Faster queries and better cost control through modern architecture",
        "Reliable pipelines with observability and data quality gates",
        "A platform that supports BI and ML use cases without rewrites",
      ]}
      included={[
        {
          id: "data-lakehouse-architecture",
          Icon: Layers,
          title: "Data Lakehouse Architecture",
          description: "Design lakehouse patterns with cost and performance trade-offs.",
        },
        {
          id: "etl-elt-pipelines",
          Icon: Workflow,
          title: "ETL / ELT Pipeline Development",
          description: "Durable ingestion and modeling pipelines with testing and retries.",
        },
        {
          id: "real-time-streaming",
          Icon: Radio,
          title: "Real-Time Streaming (Kafka/Flink)",
          description: "Streaming ingestion and processing for near real-time decisions.",
        },
        {
          id: "data-warehouse-setup",
          Icon: Database,
          title: "Data Warehouse Setup (Snowflake/BigQuery)",
          description: "Warehouse architecture, modeling, and performance tuning.",
        },
        {
          id: "data-quality-observability",
          Icon: BarChart3,
          title: "Data Quality & Observability",
          description: "Freshness, completeness, lineage, and alerting for reliability.",
        },
        {
          id: "metadata-data-cataloging",
          Icon: BookOpenCheck,
          title: "Metadata & Data Cataloging",
          description: "Semantic layers, catalogs, and governance-friendly documentation.",
        },
      ]}
      process={[
        { title: "Data Audit", description: "Assess sources, quality gaps, and operational constraints." },
        { title: "Architecture Design", description: "Choose patterns and define modeling and governance standards." },
        { title: "Pipeline Build", description: "Implement ingestion, transformations, and reliability mechanisms." },
        { title: "Observability Setup", description: "Alerts, dashboards, and data quality checks for ongoing health." },
      ]}
      whyStats={[
        { value: "10TB+",
          label: "Data Processed Daily" },
        { value: "70%",
          label: "Query Time Reduction" },
        { value: "AWS/GCP/Azure",
          label: "Certified Teams" },
      ]}
      testimonial={{
        quote:
          "They modernized our platform without breaking production reporting. The observability alone saved us countless hours every month.",
        attribution: "Director of Data, Enterprise SaaS",
      }}
      related={[
        {
          href: "/services/business-intelligence",
          Icon: BarChart3,
          title: "Business Intelligence",
          description: "Executive dashboards and self-serve analytics that teams actually use.",
        },
        {
          href: "/services/cloud-data-migration",
          Icon: Wrench,
          title: "Cloud Data Migration",
          description: "Zero-downtime migrations from legacy warehouses to the cloud.",
        },
        {
          href: "/services/predictive-analytics",
          Icon: ShieldCheck,
          title: "Predictive Analytics",
          description: "Forecasting and anomaly systems integrated into operations.",
        },
      ]}
      ctaHeading="Ready to build with Data Platform Engineering?"
      ctaSubtext="Ship a modern data platform with reliable pipelines, observability, and architecture built to scale."
    />
  );
}

