export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tags: string[];
  client: string;
  industry: string;
  year: number;
  timelineWeeks: string;
  teamSize: number;
  status: "Live" | "MVP" | "In Progress" | "Completed";
  heroMetricLabel: string;
  heroMetricValue: string;
  shortDescription: string;
  summary: string;
  challenge: string;
  approach: Array<{ icon: string; title: string; description: string }>;
  techStack: string[];
  architectureDescription: string;
  kpis: Array<{ value: string; label: string }>;
  outcomes: string[];
  images: string[];
  /** Optional hero walkthrough video (path under /public, e.g. /images/case-studies/foo.mp4) */
  heroVideo?: string;
  demoLink?: string;
  clientQuote?: { text: string; author: string; role: string; company: string };
  featured: boolean;
  gradientFrom: string;
  gradientTo: string;
  useCases: string[];
  competitors: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "adge-angle-ai-background-removal",
    title: "Enterprise AI Background Removal Platform",
    shortTitle: "Adge-Angle",
    category: "Artificial Intelligence",
    tags: [
      "Computer Vision",
      "AI/ML",
      "B2B SaaS",
      "Creative Tech",
      "MarTech",
    ],
    client: "Confidential",
    industry:
      "Artificial Intelligence / Computer Vision / Creative Technology",
    year: 2024,
    timelineWeeks: "8 Weeks to MVP",
    teamSize: 3,
    status: "MVP",
    heroMetricLabel: "Pixel-Perfect AI Extraction",
    heroMetricValue: "<50ms",
    shortDescription:
      "Enterprise-grade AI platform for high-volume image background removal with pixel-perfect accuracy at millisecond speeds.",
    summary:
      "Adge-Angle is an enterprise-grade AI platform that instantly removes image backgrounds at scale, designed for high-volume creative workflows. It merges a computationally heavy AI inference engine with a stunning glassmorphism frontend capable of handling notoriously difficult extractions — fine hair, sheer veils, transparent glass — in milliseconds.",
    challenge: `E-commerce operations teams, digital agencies, and automotive dealerships process hundreds to thousands of product images daily. The existing workflow was a bottleneck: manual photo clipping in Photoshop took 5–15 minutes per image, outsourcing to photo editing vendors cost $0.50–$2.00 per image with 24–48 hour turnaround, and existing consumer tools like remove.bg lacked batch processing, API access, and the accuracy needed for edge cases like bridal veils, fine hair, and transparent glass objects.

The client needed a solution that could be deployed in-house or via API — one that could handle 500+ images in a single session without degradation, integrate directly into their DAM pipeline, and deliver results indistinguishable from professional manual clipping. The technical bar was high: the model had to perform in real-time (sub-100ms per image), expose WebSocket-based progress tracking for batch jobs, and ship with a frontend that non-technical operators could use with zero training.`,
    approach: [
      {
        icon: "Brain",
        title: "AI Model Selection & Fine-Tuning",
        description:
          "Evaluated and benchmarked multiple segmentation architectures on a domain-specific dataset of eCommerce, automotive, and fashion images. Selected a PyTorch + HuggingFace base model and fine-tuned on edge cases — hair strands, transparent objects, complex fabric textures — to exceed competitor accuracy benchmarks.",
      },
      {
        icon: "Zap",
        title: "High-Throughput FastAPI Backend",
        description:
          "Built a Python/FastAPI inference server with asynchronous WebSocket support for real-time batch progress tracking. Implemented GPU-aware job queuing and a dedicated 'Studio Mode' endpoint with adjustable edge softness and confidence threshold parameters for precision work.",
      },
      {
        icon: "Layers",
        title: "Glassmorphism React Frontend",
        description:
          "Engineered a React + TypeScript + Vite frontend with a zero-training-required UX. Drag-and-drop ZIP folder uploads trigger batch mode; single-image uploads activate Studio Mode with live edge-softness sliders. Built with shadcn/ui and Tailwind CSS for a premium glassmorphism aesthetic.",
      },
      {
        icon: "Code2",
        title: "REST API for Developer Integration",
        description:
          "Exposed a clean, documented REST API allowing developers to integrate background removal directly into their CMS, DAM, or e-commerce platform. Pay-per-generation pricing model with API key authentication, rate limiting, and Webhook callbacks for async batch completion.",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Python",
      "FastAPI",
      "WebSockets",
      "PyTorch",
      "HuggingFace",
    ],
    architectureDescription:
      "Browser Client (React/Vite) → FastAPI REST + WebSocket Server → PyTorch Inference Engine (HuggingFace model) → Alpha Channel PNG/WEBP Output. Batch jobs processed via async job queue with WebSocket push for real-time progress. Studio Mode adds a synchronous precision endpoint with configurable edge parameters.",
    kpis: [
      { value: "<50ms", label: "Inference Per Image" },
      { value: "500+", label: "Images Per Batch Session" },
      { value: "99.2%", label: "Edge Accuracy Score" },
      { value: "0", label: "Training Required for End Users" },
    ],
    outcomes: [
      "Eliminated 5–15 minutes of manual Photoshop clipping per image, reducing creative operations cost by ~90%",
      "Batch mode processes entire product catalog folders (500+ images) with real-time WebSocket progress — no page refresh required",
      "Flawlessly handles notoriously difficult extractions: fine hair strands, sheer wedding veils, and transparent glass",
      "REST API enables direct integration into existing DAM, CMS, and e-commerce pipelines without UI dependency",
      "Studio Mode gives creative directors pixel-level control with adjustable edge softness and confidence thresholds",
    ],
    images: [
      "/images/case-studies/adge-angle-preview.png",
      "/images/case-studies/adge-angle-demo-2.png",
      "/images/case-studies/adge-angle-demo-3.png",
      "/images/case-studies/adge-demo.png",
    ],
    heroVideo: "/images/case-studies/adge-angle-demo-1.mp4",
    demoLink: "https://adge-angle.web.app/",
    featured: true,
    gradientFrom: "#1a0533",
    gradientTo: "#0d1a3a",
    useCases: [
      "E-commerce & Retail: Automating conversion of raw product photography into catalog-ready transparent PNGs",
      "Marketing & Advertising: Rapidly extracting fashion models for multi-channel digital ad variations",
      "Automotive Dealerships: Replacing cluttered parking lot backgrounds with branded virtual showrooms",
      "Real Estate: Sky replacements and clutter removal for high-end property listings",
    ],
    competitors: [
      "remove.bg",
      "Photoroom API",
      "Cloudinary",
      "Adobe Photoshop (Select Subject)",
      "Canva Pro Background Remover",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.featured);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  if (category === "All") return caseStudies;
  return caseStudies.filter(
    (cs) => cs.category === category || cs.tags.includes(category),
  );
}

export function caseStudyMatchesFilter(
  cs: CaseStudy,
  filterLabel: string,
): boolean {
  if (filterLabel === "All Projects") return true;
  if (cs.category === filterLabel) return true;
  return cs.tags.includes(filterLabel);
}
