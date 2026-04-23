import type { Metadata } from "next";
import {
  Workflow,
  Database,
  ServerCog,
  Gauge,
  BarChart3,
  ShieldCheck,
  GitBranch,
  Layers,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "ML Data Pipelines | Vallorex",
  description:
    "End-to-end data orchestration and automated training loops for real-time inference — reliable pipelines, versioning, and monitoring.",
  openGraph: {
    title: "ML Data Pipelines | Vallorex",
    description:
      "End-to-end data orchestration and automated training loops for real-time inference — reliable pipelines, versioning, and monitoring.",
    url: "https://vallorex.com/services/ml-data-pipelines",
    type: "website",
  },
};

function PipelinesHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="m1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#22C55E" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [90, 180],
          [190, 110],
          [290, 180],
          [390, 110],
          [450, 220],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 28}
              y={y - 18}
              width="56"
              height="36"
              rx="12"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.14)"
            />
            <circle cx={x} cy={y} r="5.5" fill="url(#m1)" />
          </g>
        ))}
        {[
          [90, 180, 190, 110],
          [190, 110, 290, 180],
          [290, 180, 390, 110],
          [390, 110, 450, 220],
        ].map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.5"
            strokeDasharray="7 10"
          />
        ))}
        <path
          d="M120 265 C 190 235, 250 245, 320 220 C 370 202, 410 205, 450 190"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function MlDataPipelinesPage() {
  return (
    <ServicePageTemplate
      serviceName="ML Data Pipelines"
      tagline="End-to-end data orchestration and automated training loops for real-time inference"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "ML Data Pipelines", href: "/services/ml-data-pipelines" },
      ]}
      heroVariant="card"
      heroIllustration={<PipelinesHeroSvg />}
      overviewParagraphs={[
        "ML systems fail in production when data quality, versioning, and retraining are treated as afterthoughts. We build robust pipelines that keep models fresh and inference reliable as your data changes.",
        "From ingestion to feature engineering to automated training and deployment, we implement orchestration that is testable, observable, and safe to operate under real-world pressure.",
        "This service is ideal for teams shipping real-time inference, personalization, forecasting, fraud detection, and any model that must evolve with new data.",
      ]}
      keyOutcomes={[
        "Reliable data orchestration with tests, lineage, and ownership",
        "Automated retraining loops with safe rollouts and rollback plans",
        "Consistent features across training and inference environments",
        "Monitoring for drift, data quality, and model performance",
      ]}
      included={[
        {
          id: "orchestration-workflows",
          Icon: Workflow,
          title: "Orchestration Workflows",
          description: "Scheduled and event-driven pipelines with retries and clear SLAs.",
        },
        {
          id: "feature-data-modeling",
          Icon: Database,
          title: "Feature & Data Modeling",
          description: "Consistent transformations with reproducibility across environments.",
        },
        {
          id: "training-automation",
          Icon: GitBranch,
          title: "Training Automation",
          description: "Automated training runs, validation gates, and artifact tracking.",
        },
        {
          id: "real-time-inference",
          Icon: Gauge,
          title: "Real-time Inference Pipelines",
          description: "Low-latency serving paths with caching and cost controls.",
        },
        {
          id: "model-observability",
          Icon: BarChart3,
          title: "Model Observability",
          description: "Drift detection, performance monitoring, and alerting for incidents.",
        },
        {
          id: "security-compliance",
          Icon: ShieldCheck,
          title: "Security & Compliance",
          description: "PII handling, access controls, and auditability for sensitive data.",
        },
      ]}
      process={[
        { title: "Data Audit", description: "Map sources, quality gaps, and operational constraints." },
        { title: "Pipeline Design", description: "Define orchestration, testing, versioning, and ownership." },
        { title: "Build & Validate", description: "Implement pipelines with reliability and performance targets." },
        { title: "Operate & Improve", description: "Monitor drift, tune cost, and evolve workflows over time." },
      ]}
      whyStats={[
        { value: "99%",
          label: "Pipeline success targets supported via retries + alerting" },
        { value: "30–70%",
          label: "Typical reduction in manual ML ops effort after automation" },
        { value: "Hours → mins",
          label: "Time-to-detect drift with monitoring + thresholds" },
      ]}
      testimonial={{
        quote:
          "After Vallorex rebuilt our pipelines, retraining was routine — not a fire drill. Drift alerts were actionable and rollouts were safe.",
        attribution: "ML Lead, Fintech Risk Team",
      }}
      related={[
        {
          href: "/services/ai-engineering",
          Icon: Layers,
          title: "AI Engineering",
          description: "Production AI systems with evaluation, deployment, and monitoring.",
        },
        {
          href: "/services/data-analytics",
          Icon: Database,
          title: "Data & Analytics",
          description: "Modern data platforms and dashboards for confident decisions.",
        },
        {
          href: "/services/ai-development",
          Icon: ServerCog,
          title: "AI Development",
          description: "LLM, RAG, and agents built with measurable quality gates.",
        },
      ]}
      ctaHeading="Ready to build with ML Data Pipelines?"
      ctaSubtext="Orchestrate training and inference with reliable pipelines, monitoring, and automated retraining loops."
    />
  );
}

