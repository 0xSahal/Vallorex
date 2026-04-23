import type { Metadata } from "next";
import {
  ServerCog,
  Workflow,
  GitBranch,
  BarChart3,
  RefreshCw,
  Gauge,
  Cloud,
  PiggyBank,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "MLOps Infrastructure | Vallorex",
  description:
    "Production ML that doesn’t break at 3am — CI/CD for models, drift detection, automated retraining, scalable serving, and cloud cost controls.",
  openGraph: {
    title: "MLOps Infrastructure | Vallorex",
    description:
      "Production ML that doesn’t break at 3am — CI/CD for models, drift detection, automated retraining, scalable serving, and cloud cost controls.",
    url: "https://vallorex.com/services/ml-ops-infrastructure",
    type: "website",
  },
};

function InfraTopologyHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="m1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [110, 110, 140, 54],
          [285, 95, 150, 60],
          [400, 130, 150, 60],
          [160, 240, 170, 64],
          [320, 245, 170, 64],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="16"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.14)"
          />
        ))}
        {[
          [180, 137, 285, 125],
          [285, 125, 400, 162],
          [180, 137, 160, 272],
          [400, 162, 320, 277],
          [160, 272, 320, 277],
        ].map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        ))}
        {[
          [180, 137],
          [285, 125],
          [400, 162],
          [160, 272],
          [320, 277],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="11" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5.5" fill="url(#m1)" />
          </g>
        ))}
        <path
          d="M85 310 C 160 280, 215 290, 300 250 C 360 220, 410 215, 470 205"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function MlOpsInfrastructurePage() {
  return (
    <ServicePageTemplate
      serviceName="MLOps Infrastructure"
      tagline="Production ML that doesn't break at 3am"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "MLOps Infrastructure", href: "/services/ml-ops-infrastructure" },
      ]}
      heroVariant="card"
      heroIllustration={<InfraTopologyHeroSvg />}
      overviewParagraphs={[
        "MLOps Infrastructure makes ML reliable: CI/CD for models, automated retraining, drift detection, and scalable serving built for AWS, GCP, or Azure.",
        "We treat ML delivery like production software delivery — versioning, test gates, observability, and rollout strategies. The result is fewer incidents and faster iteration with confidence.",
        "This service is a fit when models are failing silently, retraining is manual, latency is unpredictable, or costs are rising faster than usage.",
      ]}
      keyOutcomes={[
        "Repeatable ML release process with versioning and rollbacks",
        "Drift detection with actionable alerts (not noise)",
        "Scalable serving with predictable latency and cost",
        "Automated retraining loops tied to quality gates",
      ]}
      included={[
        {
          id: "ml-pipeline-automation",
          Icon: Workflow,
          title: "ML Pipeline Automation",
          description: "Orchestrated training and inference pipelines with retries and tests.",
        },
        {
          id: "model-registry-versioning",
          Icon: GitBranch,
          title: "Model Registry & Versioning",
          description: "Artifact tracking, lineage, and controlled promotion across environments.",
        },
        {
          id: "drift-detection-monitoring",
          Icon: BarChart3,
          title: "Drift Detection & Monitoring",
          description: "Data and model drift metrics with thresholds and alerts.",
        },
        {
          id: "auto-retraining-loops",
          Icon: RefreshCw,
          title: "Auto-Retraining Loops",
          description: "Triggered retraining with evaluation gates and safe rollouts.",
        },
        {
          id: "scalable-model-serving",
          Icon: Gauge,
          title: "Scalable Model Serving",
          description: "Low-latency APIs with caching, batching, and load-aware scaling.",
        },
        {
          id: "cloud-cost-optimization",
          Icon: PiggyBank,
          title: "Cloud Cost Optimization",
          description: "Right-size infrastructure and reduce inference/training spend.",
        },
      ]}
      process={[
        { title: "Infrastructure Audit", description: "Assess current pipelines, bottlenecks, and incident patterns." },
        { title: "Pipeline Design", description: "Define release gates, observability, and serving architecture." },
        { title: "CI/CD Setup", description: "Automate training, testing, promotion, and deployment." },
        { title: "Live Monitoring", description: "Drift detection, alerts, and ongoing reliability tuning." },
      ]}
      whyStats={[
        { value: "99.9%",
          label: "Model Uptime Targets" },
        { value: "60%",
          label: "Infra Cost Reduction" },
        { value: "Multi-cloud",
          label: "AWS/GCP/Azure Expertise" },
      ]}
      testimonial={{
        quote:
          "Incidents dropped immediately. We went from manual retraining and unstable serving to a clean release process with drift alerts we could act on.",
        attribution: "ML Platform Lead, Enterprise",
      }}
      related={[
        {
          href: "/services/ml-data-pipelines",
          Icon: ServerCog,
          title: "ML Data Pipelines",
          description: "Data orchestration and automated training loops for real-time inference.",
        },
        {
          href: "/services/custom-llm-development",
          Icon: Cloud,
          title: "Custom LLM Development",
          description: "Fine-tuning, RAG, inference APIs, and evaluation systems.",
        },
        {
          href: "/services/ai-engineering",
          Icon: ServerCog,
          title: "AI Engineering",
          description: "End-to-end AI systems with evaluation, deployment, and monitoring.",
        },
      ]}
      ctaHeading="Ready to build with MLOps Infrastructure?"
      ctaSubtext="Stabilize production ML with CI/CD, drift detection, automated retraining, and scalable serving."
    />
  );
}

