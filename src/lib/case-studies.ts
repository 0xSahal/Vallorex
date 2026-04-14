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
      "Adge-Angle is an enterprise-grade AI platform that removes image backgrounds at scale for high-volume creative workflows. It pairs a high-performance inference backend with a polished glassmorphism frontend built for tough extractions like fine hair, sheer veils, and transparent glass.",
    challenge:
      "E-commerce operations teams, digital agencies, and automotive dealerships process hundreds to thousands of product images daily. Manual photo clipping in Photoshop takes 5 to 15 minutes per image. Outsourcing to photo editing vendors costs $0.50 to $2.00 per image with 24 to 48 hour turnaround. Existing consumer tools like remove.bg lack batch processing, API access, and accuracy for edge cases like bridal veils, fine hair, and transparent glass.\n\nThe client needed a solution deployable in-house or via API, capable of handling 500+ images per session without quality loss, integrating into their DAM pipeline, and delivering results on par with professional manual clipping. Key requirements: sub-100ms inference per image, WebSocket progress tracking for batch jobs, and a frontend that non-technical operators could use without training.",
    approach: [
      {
        icon: "Brain",
        title: "AI Model Selection & Fine-Tuning",
        description:
          "Evaluated multiple segmentation architectures on a domain-specific dataset of eCommerce, automotive, and fashion images. Selected a PyTorch and HuggingFace base model, then fine-tuned it on edge cases like hair strands, transparent objects, and complex fabric textures to beat competitor accuracy benchmarks.",
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
          "Engineered a React, TypeScript, and Vite frontend with a zero-training UX. Drag-and-drop ZIP uploads trigger batch mode. Single-image uploads switch into Studio Mode with live edge-softness controls. Built with shadcn/ui and Tailwind CSS for a premium glassmorphism aesthetic.",
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
      "Cuts 5 to 15 minutes of manual Photoshop work per image, reducing creative operations cost by around 90%",
      "Batch mode processes full product catalog folders of 500+ images with real-time WebSocket progress updates, no page refresh needed",
      "Handles difficult extractions including fine hair strands, sheer wedding veils, and transparent glass objects",
      "REST API integrates directly into existing DAM, CMS, and e-commerce pipelines without requiring the UI",
      "Studio Mode gives creative directors control over edge softness and confidence thresholds for precision work",
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
  {
    slug: "archvision-ai-floor-plan-to-3d",
    title: "AI-Powered 2D Floor Plan to 3D Visualization Platform",
    shortTitle: "ArchVision AI",
    category: "Artificial Intelligence",
    tags: ["Computer Vision", "3D Rendering", "PropTech", "ArchTech", "AI/ML"],
    client: "Confidential",
    industry: "Architectural Visualization / PropTech / AI-Powered Design",
    year: 2025,
    timelineWeeks: "MVP In Active Development",
    teamSize: 4,
    status: "In Progress",
    heroMetricLabel: "2D Floor Plan → 3D Model",
    heroMetricValue: "Instant",
    shortDescription:
      "AI platform that converts any 2D floor plan into an interactive 3D model in seconds. Works with hand-drawn, scanned, and digital inputs. No CAD expertise required.",
    summary:
      "ArchVision AI converts uploaded 2D floor plan images into interactive 3D models with editable room layouts, materials, and exports. It is built for architects, interior designers, real estate developers, and construction teams that need fast visualization without specialist CAD skills.",
    challenge:
      "Architects, designers, and property developers spend significant time converting 2D floor plans into 3D models using tools like Revit or SketchUp. A single conversion takes a specialist 4 to 8 hours, creating bottlenecks before every client presentation and slowing project approvals. Small firms without dedicated BIM staff are hit the hardest.\n\nMost architects understand space, flow, and materials. They do not want to learn parametric modeling just to show a client what a room will look like. Existing tools require specialist knowledge, per-seat licensing in the thousands of dollars, and steep learning curves that are not practical for solo practitioners or small studios.\n\nThe goal was to build an AI that reads any 2D floor plan, including hand-drawn sketches, scanned blueprints, and digital CAD exports, and produces an interactive 3D model ready for client presentation. Zero CAD expertise required. Browser-based. Exportable in standard formats.",
    approach: [
      {
        icon: "ScanLine",
        title: "Intelligent 2D Plan Parser",
        description:
          "Built a computer vision pipeline that accepts JPG, PNG, and PDF uploads of floor plans across wildly varied styles, including hand-drawn sketches, scanned paper blueprints, and digital CAD exports. The parser handles noise, skew correction, and varying line weights to extract a clean semantic representation of the space.",
      },
      {
        icon: "Box",
        title: "AI-Driven Room & Wall Segmentation",
        description:
          "Deployed a CV segmentation model trained on architectural floor plan datasets to detect walls, rooms, doors, and windows with high precision. It also supports curved walls, open-plan spaces, and multi-storey layouts. Each detected element is classified and assigned geometry for 3D reconstruction.",
      },
      {
        icon: "Layers3",
        title: "Automated 3D Geometry Reconstruction",
        description:
          "From the segmented floor plan, the pipeline extrudes walls to standard ceiling heights, places door and window apertures, and generates room geometry. Users can adjust ceiling heights, apply material presets, and configure lighting in the browser.",
      },
      {
        icon: "Monitor",
        title: "Real-Time Browser-Based 3D Viewer & Export",
        description:
          "The output is rendered in a real-time Three.js and Babylon.js 3D viewer, with no plugin and no download. Users can orbit, zoom, and walk through the space. One-click export to PNG, GLB, and PDF supports listings and client presentation workflows.",
      },
    ],
    techStack: [
      "React",
      "Three.js",
      "Babylon.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "Computer Vision",
      "PyTorch",
    ],
    architectureDescription:
      "2D Plan Upload (Image/PDF/CAD) → CV Parser & Noise Correction → Wall & Room Segmentation Model → 3D Geometry Reconstruction Engine → Real-Time Browser Viewer (Three.js/Babylon.js) → Multi-Format Export (PNG / GLB / PDF)",
    kpis: [
      { value: "Instant", label: "2D → 3D Conversion" },
      { value: "3+", label: "File Formats Supported (JPG, PNG, PDF)" },
      { value: "3", label: "Export Formats (PNG, GLB, PDF)" },
      { value: "0", label: "CAD Expertise Required" },
    ],
    outcomes: [
      "Replaces 4 to 8 hours of specialist Revit or SketchUp modeling with a single browser upload",
      "Handles varied inputs including hand-drawn sketches, 30-year-old scanned blueprints, and digital CAD exports in the same pipeline",
      "Multi-room parsing with automatic door, window, and wall detection including curved walls and open-plan spaces",
      "Browser-based 3D viewer with orbit and walk-through controls, no plugin or software installation needed for clients",
      "GLB export works directly with Blender, Unity, and major property listing platforms",
    ],
    images: [
      "/images/case-studies/WhatsApp Image 2026-04-14 at 16.17.30.jpeg",
      "/images/case-studies/WhatsApp Image 2026-04-14 at 16.17.31 (1).jpeg",
      "/images/case-studies/WhatsApp Image 2026-04-14 at 16.17.31.jpeg",
      "/images/case-studies/WhatsApp Image 2026-04-14 at 16.17.32.jpeg",
    ],
    heroVideo: "/images/case-studies/demo_1%20-%20Trim%20(1)-enhanced.mp4",
    featured: false,
    gradientFrom: "#0a1628",
    gradientTo: "#0d2340",
    useCases: [
      "Architecture Firms: Instantly convert any client-submitted floor plan sketch into a walkable 3D model for design review meetings, no BIM specialist required",
      "Interior Design Studios: Visualize proposed room layouts, material choices, and furniture placement in 3D from a hand-drawn concept sketch in seconds",
      "Real Estate Developers: Generate interactive 3D walkthroughs of off-plan properties from architect-supplied 2D drawings for pre-sales listings and investor decks",
      "Construction Project Managers: Produce rapid 3D site visualizations from scanned legacy blueprints to communicate spatial changes to non-technical stakeholders",
    ],
    competitors: [
      "Autodesk Revit",
      "SketchUp",
      "AutoCAD",
      "RoomSketcher",
      "Planner 5D",
      "Foyr Neo",
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
