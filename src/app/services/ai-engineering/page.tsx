import type { Metadata } from "next";
import {
  Brain,
  Route,
  Bot,
  ServerCog,
  BarChart3,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "AI Engineering Services | Vallorex",
  description:
    "Build intelligent systems that learn, adapt, and scale — from AI strategy to custom LLMs, agents, and MLOps infrastructure.",
  openGraph: {
    title: "AI Engineering Services | Vallorex",
    description:
      "Build intelligent systems that learn, adapt, and scale — from AI strategy to custom LLMs, agents, and MLOps infrastructure.",
    url: "https://vallorex.com/services/ai-engineering",
    type: "website",
  },
};

function NeuralHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="n1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.9" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="n2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 180) rotate(90) scale(170)">
          <stop stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <circle cx="260" cy="180" r="170" fill="url(#n2)" />
      {[
        [110, 80],
        [140, 185],
        [120, 285],
        [250, 120],
        [270, 240],
        [400, 90],
        [420, 190],
        [395, 285],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.08)" />
          <circle cx={x} cy={y} r="5" fill="url(#n1)" />
        </g>
      ))}
      {[
        [110, 80, 250, 120],
        [140, 185, 250, 120],
        [140, 185, 270, 240],
        [120, 285, 270, 240],
        [250, 120, 400, 90],
        [270, 240, 420, 190],
        [270, 240, 395, 285],
        [400, 90, 420, 190],
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M ${x1} ${y1} L ${x2} ${y2}`}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      ))}
      <path
        d="M70 310 C 150 240, 210 260, 290 200 C 360 150, 420 150, 450 120"
        stroke="rgba(249,115,22,0.6)"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );
}

export default function AiEngineeringPage() {
  return (
    <ServicePageTemplate
      serviceName="AI Engineering"
      tagline="Build intelligent systems that learn, adapt, and scale"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "AI Engineering", href: "/services/ai-engineering" },
      ]}
      heroIllustration={<NeuralHeroSvg />}
      overviewParagraphs={[
        "AI Engineering is the discipline of turning promising models into reliable products — systems that can learn from your domain data, handle real-world edge cases, and ship with clear performance targets.",
        "We help teams move beyond prototypes by designing data strategy, model architecture, evaluation, and deployment as one cohesive pipeline. The result is AI that is measurable, secure, and maintainable by your engineering team.",
        "This service is ideal for product teams adding intelligence to a core workflow, enterprises modernizing decision systems, and founders building AI-first products under tight timelines.",
      ]}
      keyOutcomes={[
        "Production-ready models with measurable quality gates",
        "Lower inference cost through optimization and caching",
        "Safer automation via guardrails, monitoring, and rollback",
        "A scalable MLOps foundation your team can own",
      ]}
      included={[
        {
          id: "ai-strategy-roadmap",
          href: "/services/ai-strategy-roadmap",
          Icon: Route,
          title: "AI Strategy & Roadmap",
          description: "Use-case prioritization, data readiness, success metrics, and delivery plan.",
        },
        {
          id: "custom-llm-development",
          href: "/services/custom-llm-development",
          Icon: Brain,
          title: "Custom LLM Development",
          description: "Fine-tuning, evaluation harnesses, prompt systems, and domain adaptation.",
        },
        {
          id: "ai-agents-automation",
          href: "/services/ai-agents-automation",
          Icon: Bot,
          title: "AI Agents & Automation",
          description: "Tool-using agents for workflows with guardrails, permissions, and audit logs.",
        },
        {
          id: "mlops-infrastructure",
          href: "/services/ml-ops-infrastructure",
          Icon: ServerCog,
          title: "ML Ops & Infrastructure",
          description: "CI for models, feature stores, observability, and resilient deployments.",
        },
        {
          id: "evaluation-benchmarking",
          Icon: BarChart3,
          title: "Evaluation & Benchmarking",
          description: "Golden datasets, regression tests, and release gates to prevent quality drift.",
        },
        {
          id: "security-privacy",
          Icon: ShieldCheck,
          title: "Security & Privacy Controls",
          description: "PII handling, access controls, and secure-by-default architectures.",
        },
      ]}
      process={[
        { title: "Discovery", description: "Align on outcomes, constraints, and current data reality." },
        { title: "Architecture Design", description: "Design the system end-to-end: data, models, runtime, and evaluation." },
        { title: "Model Development", description: "Build, iterate, and validate with measurable test suites." },
        { title: "Deployment & Monitoring", description: "Ship safely with observability, cost controls, and rollbacks." },
      ]}
      whyStats={[
        { value: "60+",
          label: "AI workflows shipped (RAG, agents, forecasting, copilots)" },
        { value: "2–6 wks", label: "Typical time to first production release" },
        { value: "<150ms", label: "Latency targets supported with caching + optimization" },
      ]}
      testimonial={{
        quote:
          "Vallorex didn’t just build a model — they built the full system. We shipped with evaluation gates, cost controls, and monitoring from day one.",
        attribution: "CTO, Series B SaaS",
      }}
      related={[
        {
          href: "/services/ml-data-pipelines",
          Icon: ServerCog,
          title: "ML Data Pipelines",
          description: "Orchestrated data + training loops for reliable real-time inference.",
        },
        {
          href: "/services/data-analytics",
          Icon: BarChart3,
          title: "Data Analytics",
          description: "Modern data platforms, BI, and predictive models that drive decisions.",
        },
        {
          href: "/services/product-engineering",
          Icon: Code2,
          title: "Product Engineering",
          description: "Full-stack delivery for AI-native products and customer-facing apps.",
        },
      ]}
      ctaHeading="Ready to build with AI Engineering?"
      ctaSubtext="Get senior-led AI delivery with clear milestones, measurable quality gates, and production-grade infrastructure."
    />
  );
}

