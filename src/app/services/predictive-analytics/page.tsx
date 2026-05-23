import type { Metadata } from "next";
import {
  TrendingUp,
  Users,
  Radar,
  Sparkles,
  LineChart,
  BarChart3,
  ShieldCheck,
  Brain,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Predictive Analytics | Vallorex",
  description:
    "Stop reacting to your data — forecasting, churn prediction, anomaly detection, recommendations, and explainability integrated into operations.",
  openGraph: {
    title: "Predictive Analytics | Vallorex",
    description:
      "Stop reacting to your data — forecasting, churn prediction, anomaly detection, recommendations, and explainability integrated into operations.",
    url: "https://vallorex.com/services/predictive-analytics",
    type: "website",
  },
};

function ForecastHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="pa1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <path d="M110 250 C 170 195, 220 210, 280 175 C 335 145, 390 145, 450 120" stroke="url(#pa1)" strokeWidth="4" fill="none" />
        <path d="M110 250 L110 270 L450 270" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        {[
          [110, 250],
          [170, 210],
          [220, 220],
          [280, 175],
          [335, 155],
          [390, 150],
          [450, 120],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="rgba(255,255,255,0.06)" />
            <circle cx={x} cy={y} r="5" fill="url(#pa1)" />
          </g>
        ))}
        <path
          d="M110 120 C 175 80, 260 80, 325 120 C 380 155, 430 160, 470 145"
          stroke="rgba(249,115,22,0.35)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="7 10"
        />
      </g>
    </svg>
  );
}

export default function PredictiveAnalyticsPage() {
  return (
    <ServicePageTemplate
      serviceName="Predictive Analytics"
      tagline="Stop reacting to your data. Start predicting with it."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Predictive Analytics", href: "/services/predictive-analytics" },
      ]}
      heroVariant="card"
      heroIllustration={<ForecastHeroSvg />}
      overviewParagraphs={[
        "We build forecasting models, churn predictors, demand planners, and anomaly detection systems that integrate directly into operational workflows — not just dashboards.",
        "Our approach prioritizes usefulness: clear success metrics, explainability where needed, and deployment patterns that make predictions available in the systems people use daily.",
        "This service is ideal for teams improving planning accuracy, reducing churn, detecting risk earlier, or turning data into proactive operations.",
      ]}
      keyOutcomes={[
        "Higher-quality forecasts and predictions tied to real decisions",
        "Production deployment with monitoring and drift detection",
        "Explainability and validation for stakeholder trust",
        "Real-time inference patterns where latency matters",
      ]}
      included={[
        {
          id: "demand-forecasting",
          Icon: TrendingUp,
          title: "Demand Forecasting",
          description: "Operational forecasts for planning, inventory, and staffing decisions.",
        },
        {
          id: "churn-prediction",
          Icon: Users,
          title: "Churn Prediction Models",
          description: "Retention models integrated into CRM and customer workflows.",
        },
        {
          id: "anomaly-detection",
          Icon: Radar,
          title: "Anomaly Detection",
          description: "Detect risk and outliers early with thresholding and alerting strategy.",
        },
        {
          id: "recommendation-engines",
          Icon: Sparkles,
          title: "Recommendation Engines",
          description: "Personalization systems that improve conversion and engagement.",
        },
        {
          id: "time-series-analysis",
          Icon: LineChart,
          title: "Time-Series Analysis",
          description: "Feature pipelines and modeling for complex temporal signals.",
        },
        {
          id: "model-explainability",
          Icon: BarChart3,
          title: "Model Explainability (XAI)",
          description: "Interpretability techniques and reporting for trust and compliance.",
        },
      ]}
      process={[
        { title: "Business Problem Scoping", description: "Define success metrics, constraints, and decision workflows." },
        { title: "Feature Engineering", description: "Build reliable features and validation checks." },
        { title: "Model Training", description: "Iterate with evaluation and explainability targets." },
        { title: "Production Integration", description: "Deploy with monitoring, drift detection, and retraining plan." },
      ]}
      whyStats={[
        { value: "40%",
          label: "Forecast Accuracy Improvement" },
        { value: "25+",
          label: "Predictive Models in Production" },
        { value: "Real-time",
          label: "Inference Delivery" },
      ]}
      testimonial={{
        quote:
          "We went from reactive reporting to proactive operations. The models were deployed into the workflow, and adoption was immediate.",
        attribution: "VP Operations, Logistics Platform",
      }}
      related={[
        {
          href: "/services/data-platform-engineering",
          Icon: ShieldCheck,
          title: "Data Platform Engineering",
          description: "Modern pipelines and warehouses that power reliable modeling.",
        },
        {
          href: "/services/ml-ops-infrastructure",
          Icon: BarChart3,
          title: "MLOps Infrastructure",
          description: "CI/CD, drift detection, and stable serving for production models.",
        },
        {
          href: "/services/ai-engineering",
          Icon: Brain,
          title: "AI Engineering",
          description: "End-to-end AI systems with evaluation and deployment discipline.",
        },
      ]}
      ctaHeading="Ready to build with Predictive Analytics?"
      ctaSubtext="Ship forecasting and anomaly systems that integrate into decisions — with production monitoring and reliability."
    />
  );
}

