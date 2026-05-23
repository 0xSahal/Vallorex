import type { Metadata } from "next";
import {
  Brain,
  Database,
  Network,
  Blocks,
  Code2,
  BarChart3,
  ShieldCheck,
  BookOpenCheck,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Custom LLM Development | Vallorex",
  description:
    "LLMs trained on your data, tuned for your domain — fine-tuning, RAG pipelines, embeddings, inference APIs, and evaluation.",
  openGraph: {
    title: "Custom LLM Development | Vallorex",
    description:
      "LLMs trained on your data, tuned for your domain — fine-tuning, RAG pipelines, embeddings, inference APIs, and evaluation.",
    url: "https://vallorex.com/services/custom-llm-development",
    type: "website",
  },
};

function TransformerHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="t1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        {[
          [120, 95],
          [210, 95],
          [300, 95],
          [390, 95],
          [120, 175],
          [210, 175],
          [300, 175],
          [390, 175],
          [165, 255],
          [260, 255],
          [355, 255],
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
            <circle cx={x} cy={y} r="5.5" fill="url(#t1)" />
          </g>
        ))}
        {[
          [120, 95, 210, 95],
          [210, 95, 300, 95],
          [300, 95, 390, 95],
          [120, 175, 210, 175],
          [210, 175, 300, 175],
          [300, 175, 390, 175],
          [210, 95, 210, 175],
          [300, 95, 300, 175],
          [165, 255, 260, 255],
          [260, 255, 355, 255],
        ].map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        ))}
        <path
          d="M120 300 C 200 270, 250 275, 330 245 C 380 226, 420 220, 460 210"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function CustomLlmDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Custom LLM Development"
      tagline="LLMs trained on your data, tuned for your domain, owned by your business"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Custom LLM Development", href: "/services/custom-llm-development" },
      ]}
      heroVariant="card"
      heroIllustration={<TransformerHeroSvg />}
      overviewParagraphs={[
        "Custom LLM Development turns foundation models into domain experts. We fine-tune open-source or proprietary models on your datasets and build the surrounding system: retrieval, embeddings, inference APIs, evaluation, and security controls.",
        "We focus on measurable improvements over generic models — accuracy on your domain tasks, safe behavior under adversarial prompts, predictable latency, and cost controls that scale with usage.",
        "This service is ideal for copilots, knowledge assistants, automated document workflows, and generative features where reliability and ownership matter.",
      ]}
      keyOutcomes={[
        "Higher task accuracy through domain fine-tuning and RAG grounding",
        "Production inference APIs with cost/latency controls",
        "Evaluation and red-teaming to prevent regressions and unsafe behavior",
        "A deployable system your business can own and operate",
      ]}
      included={[
        {
          id: "foundation-model-selection",
          Icon: Brain,
          title: "Foundation Model Selection",
          description: "Choose the best base model for your task, constraints, and ownership needs.",
        },
        {
          id: "domain-specific-fine-tuning",
          Icon: BookOpenCheck,
          title: "Domain-Specific Fine-Tuning",
          description: "Fine-tune with strong dataset governance and measurable evaluation gates.",
        },
        {
          id: "rag-pipeline-architecture",
          Icon: Network,
          title: "RAG Pipeline Architecture",
          description: "Chunking, retrieval, reranking, grounding, and citation-friendly responses.",
        },
        {
          id: "embedding-vector-db-setup",
          Icon: Database,
          title: "Embedding & Vector DB Setup",
          description: "Embeddings strategy, indexing, and query performance for real workloads.",
        },
        {
          id: "inference-api-development",
          Icon: Code2,
          title: "Inference API Development",
          description: "Secure APIs, streaming, caching, rate limits, and observability.",
        },
        {
          id: "evaluation-red-teaming",
          Icon: BarChart3,
          title: "Model Evaluation & Red-Teaming",
          description: "Regression suites, judge strategies, and adversarial testing.",
        },
      ]}
      process={[
        { title: "Dataset Curation", description: "Collect, clean, label, and define evaluation targets." },
        { title: "Fine-Tuning", description: "Train and iterate with controlled experiments and tracking." },
        { title: "Evaluation", description: "Score accuracy, safety, and robustness against regression suites." },
        { title: "Production Deployment", description: "Ship APIs with monitoring, cost controls, and rollbacks." },
      ]}
      whyStats={[
        { value: "30+",
          label: "LLMs Deployed" },
        { value: "10x",
          label: "Better Domain Accuracy" },
        { value: "GDPR-ready",
          label: "Pipelines & Controls" },
      ]}
      testimonial={{
        quote:
          "Their evaluation harness and red-teaming made the system shippable. We improved accuracy dramatically while keeping latency and costs predictable.",
        attribution: "Head of AI, Regulated Enterprise",
      }}
      related={[
        {
          href: "/services/ai-agents-automation",
          Icon: Blocks,
          title: "AI Agents & Automation",
          description: "Tool-using agents for multi-step workflows with guardrails.",
        },
        {
          href: "/services/ml-ops-infrastructure",
          Icon: ShieldCheck,
          title: "MLOps Infrastructure",
          description: "CI/CD for models, drift detection, and stable serving.",
        },
        {
          href: "/services/ai-strategy-roadmap",
          Icon: Brain,
          title: "AI Strategy & Roadmap",
          description: "Prioritize use cases, ROI, and governance before you build.",
        },
      ]}
      ctaHeading="Ready to build with Custom LLM Development?"
      ctaSubtext="Ship domain-tuned LLM systems with grounding, evaluation, and production-grade inference."
    />
  );
}

