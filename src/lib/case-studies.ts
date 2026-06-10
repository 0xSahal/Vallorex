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
  status: "Live" | "MVP" | "MVP Complete" | "In Progress" | "Completed";
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
  /** Hero video starts unmuted when true (default muted for autoplay elsewhere) */
  heroVideoMuted?: boolean;
  /** Show native play/volume controls on hero video */
  heroVideoControls?: boolean;
  /** Hero video fit mode (default cover) */
  heroVideoObjectFit?: "cover" | "contain";
  /** Optional hero still when no video (detail page right column; same path can appear in images[]) */
  heroImage?: string;
  /** Small label on case-study grid card over heroImage (e.g. product angle) */
  heroImageCaption?: string;
  demoLink?: string;
  clientQuote?: { text: string; author: string; role: string; company: string };
  featured: boolean;
  gradientFrom: string;
  gradientTo: string;
  useCases: string[];
  competitors: string[];
  /** Curated related case study slugs for the detail page */
  relatedSlugs?: string[];
  /** Sidebar team size label when not a numeric count */
  teamSizeLabel?: string;
  /** Product section CTA button label */
  productCtaLabel?: string;
  /** Product CTA opens audit inquiry modal instead of external demo link */
  productCtaAction?: "audit-modal" | "link";
  /** Internal or external href when productCtaAction is "link" */
  productCtaHref?: string;
  /** Product screenshot slider fit mode (default cover) */
  productScreenshotsObjectFit?: "cover" | "contain";
  /** When true, case study is hidden from UI listings and detail URLs redirect away */
  hidden?: boolean;
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
    relatedSlugs: [
      "vallorex-ai-voice-advisor",
      "vallorex-ai-lead-engine",
      "helix-whatsapp-conversational-ai",
    ],
  },
  // HIDDEN: Set hidden to false to re-enable this case study in the UI
  // Re-enabling will restore both the card on the listing page and the detail page URL
  {
    slug: "archvision-ai-floor-plan-to-3d",
    hidden: true,
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
  {
    slug: "dashcam-visual-analytics-driver-scoring",
    title: "Dashcam Visual Analytics & Driver Scoring Platform",
    shortTitle: "Dashcam Analytics",
    category: "Artificial Intelligence",
    tags: [
      "Computer Vision",
      "Fleet Safety",
      "Video Analytics",
      "PyTorch",
      "OpenCV",
      "Django",
      "UK",
    ],
    client: "Confidential",
    industry: "Computer Vision / Fleet Safety / Road Safety (UK)",
    year: 2025,
    timelineWeeks: "Multi-phase delivery",
    teamSize: 3,
    status: "Completed",
    heroMetricLabel: "Dashcam Footage Processed",
    heroMetricValue: "500+ hrs",
    shortDescription:
      "CV-powered driving event detection and driver scoring from vehicle dashcam footage for UK fleet training and compliance.",
    summary:
      "A custom computer vision platform for a UK road safety company that processes vehicle dashcam footage to detect driving events, assess driver behaviour, and generate safety analytics for fleet training programs.",
    challenge:
      "Manual review of dashcam footage was time-consuming and inconsistent. Fleet managers needed automated, objective driver scoring for training and compliance.\n\nReview teams could not scale with growing video volume, and subjective judgments made it difficult to compare drivers fairly or demonstrate due diligence to stakeholders.",
    approach: [
      {
        icon: "Layers",
        title: "Frame-by-frame video analysis pipeline",
        description:
          "Built an OpenCV-based ingestion and processing pipeline that walks vehicle dashcam footage frame-by-frame for stable, repeatable feature extraction before model inference.",
      },
      {
        icon: "Brain",
        title: "Scene change detection, tracking, and event extraction",
        description:
          "Combined scene change detection with object tracking to isolate meaningful segments and pull structured driving events from noisy real-world road footage.",
      },
      {
        icon: "Zap",
        title: "PyTorch model fine-tuning for critical events",
        description:
          "Fine-tuned PyTorch models for hard braking, lane departure, and tailgating detection, iterating on fleet-specific data to tighten precision and reduce false positives.",
      },
      {
        icon: "Code2",
        title: "Driver behaviour scoring and timeline reports",
        description:
          "Implemented behaviour scoring, per-trip timelines, and exportable reporting hooks via Django so trainers and compliance workflows could consume results without manual clip review.",
      },
    ],
    techStack: ["PyTorch", "OpenCV", "Django", "Python"],
    architectureDescription:
      "Dashcam ingest → OpenCV frame pipeline → Scene & tracking analytics → PyTorch event detection → Driver behaviour scoring → Django services → Fleet training & trend dashboards",
    kpis: [
      { value: "500+", label: "Hours of Footage Processed" },
      { value: "3", label: "Driving Event Types Detected" },
      { value: "Lower FP", label: "After Model Fine-Tuning" },
      { value: "UK", label: "Fleet Programs & Region" },
    ],
    outcomes: [
      "Processed more than 500 hours of dashcam footage through the automated pipeline",
      "Materially reduced false positive rates through iterative PyTorch fine-tuning on real fleet clips",
      "Replaced slow manual review with consistent, objective driver scoring suitable for training workflows",
      "Delivered trend dashboards that support fleet training programs and safety reporting",
    ],
    heroImage: "/images/case-studies/roadhow-dashcam-cv-overlay.png",
    heroImageCaption: "Dashcam CV & driver scoring",
    images: [
      "/images/case-studies/roadhow-dashcam-cv-overlay.png",
      "/images/case-studies/roadhow-fleet-analytics-dashboard.png",
      "/images/case-studies/roadhow-fleet-training-trends.png",
    ],
    featured: false,
    gradientFrom: "#0a1628",
    gradientTo: "#152a45",
    useCases: [
      "Commercial fleets: Objective scoring from dashcam evidence for coaching conversations without all-day manual review",
      "Road safety programs: Repeatable event detection for tailgating, hard braking, and lane departure across large video libraries",
      "Compliance and training leads: Audit-friendly timelines and aggregates that align teams on the same safety metrics",
      "UK operators: Region-specific deployment and analytics tuned to UK driving conditions and fleet policies",
    ],
    competitors: [
      "Lytx DriveCam",
      "Samsara AI Dash Cams",
      "Nexar Fleets",
      "Geotab Video",
      "SmartDrive (SmartDrive Systems)",
    ],
  },
  // HIDDEN: Set hidden to false to re-enable this case study in the UI
  // Re-enabling will restore both the card on the listing page and the detail page URL
  {
    slug: "vallorex-ai-voice-advisor",
    hidden: true,
    title: "Vallorex AI Voice Advisor",
    shortTitle: "Vallorex AI Voice Advisor",
    category: "Artificial Intelligence",
    tags: ["Artificial Intelligence", "Live Product", "Voice AI", "WebRTC"],
    client: "Vallorex (Internal Product)",
    industry: "AI / Voice Technology / Business Automation",
    year: 2025,
    timelineWeeks: "Internal Build, 2025",
    teamSize: 0,
    teamSizeLabel: "Vallorex Engineering Team",
    status: "Live",
    heroMetricLabel: "Ultra-Low Latency",
    heroMetricValue: "Real-Time",
    shortDescription:
      "Real-time AI voice agent for inbound and outbound business calls",
    summary:
      "We built our own real-time AI voice agent that handles inbound customer calls and outbound business calls, and deployed it live on our own website as a working demo.",
    challenge:
      "Businesses miss leads and frustrate customers every time a call goes unanswered or gets stuck in an outdated IVR menu. Hiring and training human call agents is expensive, inconsistent, and impossible to scale affordably. Most AI chatbots handle text but fail completely the moment a customer picks up the phone.\n\nVallorex identified a clear gap: businesses needed a voice-first AI layer that could hold real, natural phone conversations, answering complex questions, qualifying leads, booking demos, and representing a business professionally, all without a human agent on the line. We decided to build it ourselves first, deploying it live on our own homepage as a working proof-of-concept before offering it to clients.\n\nKey requirements:\n\n- Handle both inbound calls (customers calling the business) and outbound calls (AI calling customers on behalf of the business)\n- Ultra-low latency so the conversation feels natural, not robotic\n- Deep business context awareness so the agent must answer real questions accurately, not just route callers\n- Zero-training deployment for end businesses",
    approach: [
      {
        icon: "Mic",
        title: "Real-Time Voice Pipeline",
        description:
          "Built a real-time streaming audio pipeline using WebRTC and WebSocket-based transport. Speech-to-text processing runs with sub-second latency, feeding directly into the LLM engine so responses begin generating before the caller has finished speaking. Text-to-speech output is streamed back continuously, eliminating the pause-and-wait feel of older voice bots.",
      },
      {
        icon: "Brain",
        title: "LLM Conversation Engine",
        description:
          "Fine-tuned and prompted a large language model on Vallorex's full service catalogue, FAQs, pricing context, and business-specific knowledge. The agent can handle multi-turn conversations, remember context from earlier in the call, and answer nuanced questions about AI solutions, automation services, blockchain engineering, and how to book a demo.",
      },
      {
        icon: "Phone",
        title: "Inbound & Outbound Call Architecture",
        description:
          "Designed a dual-mode call architecture. In inbound mode, the agent greets callers, identifies their needs, answers questions, and routes or escalates when needed. In outbound mode, the agent initiates calls on behalf of a business, following a configurable script while adapting naturally to what the recipient says.",
      },
      {
        icon: "Monitor",
        title: "Live Website Demo Integration",
        description:
          'Rather than showing a pre-recorded demo, we deployed the voice agent directly on the Vallorex homepage as a live, interactive widget. Any visitor can click "Start Conversation" and speak with the AI in real time. The widget displays live status (Listening / Speaking), real-time conversation transcripts, latency stats, and call controls (Mute / End Call).',
      },
    ],
    techStack: [
      "LLM Fine-tuning",
      "Speech-to-Text (ASR)",
      "Text-to-Speech (TTS)",
      "WebRTC",
      "WebSockets",
      "React",
      "FastAPI",
      "Python",
      "Real-Time Streaming",
    ],
    architectureDescription:
      "Browser / Phone → WebRTC Audio Capture → ASR Engine (Speech-to-Text) → LLM Conversation Engine (Fine-tuned) → TTS Engine (Text-to-Speech) → Streamed Audio Output → WebSocket UI (status, transcript, latency)",
    kpis: [
      { value: "Ultra-Low", label: "Response Latency" },
      { value: "24/7", label: "Always Available" },
      { value: "Inbound + Outbound", label: "Call Handling" },
      { value: "0", label: "Human Agents Required" },
    ],
    outcomes: [
      "Live on the Vallorex homepage: any visitor can speak with the AI agent in real time, no login or setup required",
      "Handles complex multi-turn conversations: service questions, pricing, demo booking, and business fit assessment",
      "Ultra-low latency pipeline delivers natural conversation rhythm with no noticeable pause between speaking and response",
      "Dual inbound/outbound architecture means the same system can answer your business calls and proactively call your leads",
      "Zero human agents required per call; scales to unlimited concurrent calls without additional headcount",
      "Fully configurable for any business: custom knowledge base, brand voice, call scripts, and escalation logic",
    ],
    images: [
      "/images/case-studies/advisor-listening.png",
      "/images/case-studies/advisor-speaking.png",
      "/images/case-studies/advisor-conversation.png",
    ],
    heroVideo: "/videos/case-studies/vallorex-advisor-demo.mp4",
    heroVideoMuted: false,
    heroVideoControls: true,
    heroImage: "/images/case-studies/advisor-listening.png",
    heroImageCaption: "Live voice agent on homepage",
    demoLink: "https://www.vallorex.com",
    productCtaLabel: "Send Us an Inquiry for the Demo",
    productCtaAction: "audit-modal",
    featured: false,
    gradientFrom: "#1a0a33",
    gradientTo: "#0a1a3a",
    useCases: [
      "Sales & Lead Qualification: AI dials prospects from your CRM, qualifies them with natural conversation, and books demos directly into your calendar without an SDR.",
      "24/7 Customer Support: Handles inbound FAQs, service queries, and troubleshooting calls around the clock without a human on standby.",
      "Appointment & Demo Booking: Calls customers to confirm, reschedule, or follow up on bookings with a professional, natural-sounding voice.",
      "Business Inquiry Handling: Acts as the first point of contact for inbound business calls, answering questions about your services, pricing, and availability on your behalf.",
    ],
    competitors: [],
    relatedSlugs: [
      "vallorex-ai-lead-engine",
      "adge-angle-ai-background-removal",
      "helix-whatsapp-conversational-ai",
    ],
  },
  // HIDDEN: Set hidden to false to re-enable this case study in the UI
  // Re-enabling will restore both the card on the listing page and the detail page URL
  {
    slug: "vallorex-ai-lead-engine",
    hidden: true,
    title: "Vallorex AI Lead Engine",
    shortTitle: "Vallorex AI Lead Engine",
    category: "Artificial Intelligence",
    tags: ["Artificial Intelligence", "Agentic AI"],
    client: "Vallorex (Internal Product)",
    industry: "AI / Sales Automation / Agentic Systems",
    year: 2026,
    timelineWeeks: "Internal Build, 2026",
    teamSize: 0,
    teamSizeLabel: "Vallorex Engineering Team",
    status: "Live",
    heroMetricLabel: "Multi-Agent Orchestration",
    heroMetricValue: "Parallel",
    shortDescription:
      "Autonomous multi-agent system for B2B lead generation, qualification, and personalised outreach",
    summary:
      "A fully autonomous, multi-agent AI system that finds, qualifies, and reaches out to leads end to end without any human involvement.",
    challenge:
      "Outbound lead generation is one of the most time-consuming and expensive parts of any sales operation. A typical SDR spends hours every day manually searching for prospects, researching their business context, crafting personalised outreach messages, and tracking follow-ups, only to achieve low response rates and inconsistent results. At scale, this means large, costly sales teams with unpredictable output.\n\nVallorex set out to replace this entire workflow with a fully autonomous AI system. The goal: given a target URL or product, the system should independently identify ideal customer profiles, generate targeted search strategies, discover and qualify prospects, and send personalised outreach, all without a human touching a single step. The system needed to run multiple parallel outreach strategies simultaneously, track its own budget and cost-per-lead, and give operators full real-time visibility into what each agent was doing and why.\n\nKey requirements:\n- Multi-agent architecture with a supervisor orchestrating specialised sub-agents in parallel\n- Intelligent ICP and signal extraction directly from a target product URL\n- Personalised outreach at scale, not templated spam, but context-aware messages per prospect\n- Real-time activity logging and live session monitoring\n- Full budget controls with cost tracking per agent and per platform",
    approach: [
      {
        icon: "Brain",
        title: "Supervisor: Master Orchestrator",
        description:
          "The system starts with a Supervisor agent that opens the target product URL via Selenium, reads and extracts the ICP (Ideal Customer Profile), industries, pain points, and buying signals using Gemini. This intelligence is passed downstream to all other agents as the strategic foundation for the entire pipeline.",
      },
      {
        icon: "Layers",
        title: "Strategist: Intelligence Planner",
        description:
          "A dedicated Strategist agent takes the Supervisor's output and generates multiple parallel outreach strategies, each targeting a different prospect segment or angle. It builds DDG/Google search queries tailored to each strategy and identifies personalisation signals and outreach angles for each prospect type. Multiple strategies run concurrently across parallel Outreacher workers.",
      },
      {
        icon: "Zap",
        title: "Outreacher Agents: Parallel Execution",
        description:
          "Multiple Outreacher agents run simultaneously, each assigned a different strategy from the Strategist. They search for matching prospects, qualify them against the ICP, and compose personalised outreach messages tailored to that prospect's specific context and pain point. All activity is logged in real time to the Live Activity Log.",
      },
      {
        icon: "Monitor",
        title: "Full Observability & Budget Control",
        description:
          "The platform gives operators complete visibility: a real-time Agent Monitor showing each agent's live status, a Lead Pipeline view for tracking discovered and contacted prospects, an Activity Feed for event-level logs, and a Cost Center with budget caps, spend tracking per agent type, and cost-by-platform breakdowns to control per-lead economics.",
      },
    ],
    techStack: [
      "Agentic AI",
      "Multi-Agent Orchestration",
      "Gemini",
      "Selenium",
      "LLM Fine-tuning",
      "DDG / Google Search",
      "Python",
      "FastAPI",
      "React",
      "Real-Time Logging",
      "WebSockets",
    ],
    architectureDescription:
      "Target URL Input → Supervisor Agent (Selenium + Gemini: ICP & signal extraction) → Strategist Agent (search query generation & outreach angle planning) → Parallel Outreacher Agents (prospect discovery → qualification → personalised outreach)\n\nAll agent events stream to the Live Activity Log via WebSocket in real time. Budget consumption is tracked per agent and per platform in the Cost Center. Session state is persisted across pipeline runs with a unique session ID.",
    kpis: [
      { value: "Multi-Agent", label: "Parallel Orchestration" },
      { value: "50%", label: "Response Rate Achieved" },
      { value: "49+", label: "Leads Generated Per Run" },
      { value: "$0", label: "Human SDR Cost Per Lead" },
    ],
    outcomes: [
      "Fully autonomous pipeline from a target URL to personalised outreach with zero human steps in between",
      "50% response rate achieved in live sessions, outperforming typical cold outreach benchmarks by 3-5x",
      "49+ leads generated per run with 13-16 parallel agents active simultaneously",
      "Parallel agent execution means multiple prospect segments are targeted at the same time, not sequentially",
      "Real-time Live Activity Log gives operators full transparency into every agent decision and action",
      "Built-in Cost Center with budget caps prevents runaway spend; operators set a limit and the system self-governs",
      "Eliminates the need for a traditional SDR team for initial outbound prospecting and first-touch outreach",
    ],
    images: [
      "/images/case-studies/dashboard.png",
      "/images/case-studies/lead-gen.png",
      "/images/case-studies/start-work.png",
      "/images/case-studies/agent-monitor.png",
      "/images/case-studies/lead-pipeline.png",
      "/images/case-studies/cost-center.png",
    ],
    heroVideo: "/videos/case-studies/vallorex-lead-engine-demo.mp4",
    heroVideoObjectFit: "contain",
    heroImage: "/images/case-studies/dashboard.png",
    heroImageCaption: "Lead Engine dashboard",
    productCtaLabel: "Want This For Your Business",
    productCtaAction: "audit-modal",
    productScreenshotsObjectFit: "contain",
    featured: false,
    gradientFrom: "#0f1729",
    gradientTo: "#1a0a33",
    useCases: [
      "B2B SaaS Outbound: Give the system your SaaS product URL and it autonomously identifies target ICPs, finds matching companies, and sends personalised cold outreach at scale.",
      "Agency New Business Development: Agencies can run the Lead Engine against competitor clients or target verticals to fill their pipeline without hiring an outbound sales team.",
      "Startup Go-To-Market: Early-stage startups with no sales team can activate the Lead Engine to run their entire outbound motion from day one, with full cost visibility and budget control.",
      "Enterprise Market Expansion: Enterprises entering new markets or verticals can deploy parallel Outreacher agents targeting multiple segments simultaneously, dramatically compressing go-to-market timelines.",
    ],
    competitors: [],
    relatedSlugs: [
      "vallorex-ai-voice-advisor",
      "adge-angle-ai-background-removal",
      "helix-whatsapp-conversational-ai",
    ],
  },
  {
    slug: "latticepay-non-custodial-wallet",
    title: "LatticePay Wallet",
    shortTitle: "LatticePay Wallet",
    category: "Blockchain & Web3",
    tags: [
      "Fintech",
      "BSC",
      "Solidity",
      "Non-Custodial",
      ".NET",
      "Mobile",
      "Smart Contracts",
      "+3 more",
    ],
    client: "Confidential",
    industry: "Digital Payments / Consumer Web3",
    year: 2025,
    timelineWeeks: "~9 months (V1 shipped)",
    teamSize: 4,
    status: "Live",
    heroMetricLabel: "V1 Shipped",
    heroMetricValue: "120 days",
    shortDescription: "Non-Custodial Web3 Wallet Ecosystem on BSC",
    summary:
      "LatticePay is a production-grade non-custodial wallet ecosystem on BSC that combines secure asset management, utility payments, rewards mechanics, and in-app education. Private keys and seed phrases remain on-device, and the on-chain reward model enables 10,000-recipient batch distributions for roughly $150 per run.",
    challenge:
      "Fintech teams building consumer wallet products face a specific trap: most of the team understands payments but not blockchain. Internal Web3 execution maturity is low, wallet trust flows are poorly understood, and the projected operating cost of on-chain reward distribution is high enough to make the entire business model questionable before launch.\n\nThe client needed a production-grade non-custodial wallet that combined secure asset management, utility-payment experiences, rewards mechanics, and in-app education without inheriting custodial liability or derailing delivery speed. Private keys and seed phrases had to stay on the user's device. The architecture had to be modular enough for a Web2-native team to build on incrementally.\n\nOn the on-chain side, the challenge was batch reward distribution. Sending tokens to 10,000 recipients through standard per-transaction methods would cost $6,000 to $8,000 per distribution run on BSC. That cost structure made the rewards program commercially unviable. The system needed a smarter on-chain model to make it work.",
    approach: [
      {
        icon: "Shield",
        title: "Non-Custodial Wallet Architecture",
        description:
          "Designed the full wallet trust model with private keys and seed phrases retained on-device. Wallet creation, import, PIN and biometric security, and backup flows were built to production standard with no server-side key custody at any point.",
      },
      {
        icon: "Layers",
        title: "Modular Product Rollout",
        description:
          "Structured the product into four independent modules (wallet core, utility payments, rewards and gamification, and in-app learning) so the Web2-native team could ship and iterate each module without cross-module dependency risk.",
      },
      {
        icon: "Code2",
        title: "Six Core Smart Contracts",
        description:
          "Designed and audited six on-chain contracts covering token handling, transfer flows, reward distribution, and admin controls. Reentrancy protections, access controls, and partial execution guards were applied across all contracts.",
      },
      {
        icon: "Zap",
        title: "Batch Airdrop Engine",
        description:
          "Built a batch distribution contract that processes up to 10,000 recipients in a single on-chain transaction for roughly $150 on BSC. This replaced a per-transaction model that would have cost $6,000 to $8,000 per distribution run and made the rewards program commercially viable.",
      },
      {
        icon: "Code2",
        title: "Backend Orchestration Layer",
        description:
          "Delivered 40 to 50+ .NET backend APIs covering authentication, content delivery, rewards tracking, and analytics. The backend was designed to support the full module stack with staged rollout capability and weekly hotfix deployment.",
      },
      {
        icon: "Layers",
        title: "Web2-to-Web3 Team Enablement",
        description:
          "Acted as fractional blockchain architecture partner and delivery lead throughout. Reduced overall Web3 delivery cost by around 25% by transferring architecture knowledge, setting execution standards, and accelerating the team's on-chain decision-making speed.",
      },
    ],
    techStack: [
      "BSC",
      "Solidity",
      ".NET",
      "Mobile (Native)",
      "On-Device Signing",
      "PIN / Biometric Auth",
      "Batch Airdrop Engine",
      "Analytics",
    ],
    architectureDescription:
      "Mobile Wallet (On-Device Keys) → Auth & Content APIs (.NET) → Rewards Engine & Analytics → Smart Contracts (BSC) → Batch Distribution (10K recipients per run)",
    kpis: [
      { value: "120 days", label: "Beta Shipped" },
      { value: "6 core", label: "Smart Contracts" },
      { value: "50+", label: "Backend APIs" },
      { value: "10K / run", label: "Batch Recipients" },
    ],
    outcomes: [
      "Internal beta shipped in approximately 120 days; V1 delivered in around 9 months with monthly release cadence and weekly hotfix capability",
      "Batch airdrop engine cuts 10,000-recipient distribution cost to roughly $150 on BSC, down from a typical range of $6,000 to $8,000",
      "Six production smart contracts covering token transfers, reward distribution, and admin controls with reentrancy and access control protections",
      "40 to 50+ backend APIs and 70 to 80 mobile screens delivered across wallet core, utility, rewards, and learn modules",
      "Web2-native team shipped a non-custodial BSC wallet without rebuilding the engineering org, reducing total Web3 delivery cost by approximately 25%",
    ],
    images: [
      "/images/case-studies/LatticePay%20Wallet%20app%20welcome%20screen.png",
      "/images/case-studies/Wallet%20Pay.jpeg",
      "/images/case-studies/WhatsApp%20Image%202026-04-14%20at%2022.41.52.jpeg",
    ],
    featured: false,
    gradientFrom: "#0a1a2e",
    gradientTo: "#071428",
    useCases: [
      "Fintech Founders: Teams adding wallet, token, or payment utility to a consumer fintech product without rebuilding their entire engineering team around Web3.",
      "Token Ecosystems: Projects running rewards, airdrops, or loyalty programs on-chain that need commercial-grade distribution economics, not per-transaction cost structures.",
      "Web2 Companies Moving to Web3: Product teams with strong backend and mobile capability but limited blockchain execution maturity that need an architecture partner to ship, not just advise.",
      "Wallet Operators and Exchanges: Teams building or upgrading non-custodial wallet infrastructure where security posture, key handling, and trust UX are non-negotiable.",
    ],
    competitors: [],
  },
  {
    slug: "helix-whatsapp-conversational-ai",
    title: "Helix: Conversational AI Platform (WhatsApp + Web)",
    shortTitle: "Helix",
    category: "Artificial Intelligence",
    tags: [
      "Conversational AI",
      "LangGraph",
      "WhatsApp",
      "Multi-agent",
      "FastAPI",
      "React",
      "AWS",
    ],
    client: "Northline Labs",
    industry: "Conversational AI / Consumer Productivity / Messaging Platforms",
    year: 2026,
    timelineWeeks: "Production deployment",
    teamSize: 2,
    status: "Live",
    heroMetricLabel: "Connected integrations",
    heroMetricValue: "50+",
    shortDescription:
      "WhatsApp-native AI assistant with six specialist agents, 50+ OAuth integrations, and a React control room, with multi-agent LangGraph, sub-100ms memory, and multi-provider LLMs.",
    summary:
      "Helix is a production-grade conversational AI assistant delivered through WhatsApp, backed by a React web portal. It handles finance, travel, reminders, collaborative boards, and connected apps, powered by multi-agent LangGraph with three-layer persistent memory and more than fifty integrations.",
    challenge:
      "Users needed a personal AI assistant accessible through WhatsApp, one that could remember past conversations, manage expenses, set reminders, book travel, and connect to Google apps without learning any new interface.\n\nConsumer chat apps are fragmented: switching between banking apps, calendars, and travel sites breaks flow. A single conversational surface had to feel instant, trustworthy on memory, and extensible enough to grow new capabilities without rebuilding the core stack each time a new SaaS needed wiring in.",
    approach: [
      {
        icon: "Brain",
        title: "Six domain-specific LangGraph agent subgraphs",
        description:
          "Finance, travel, reminders, boards, connected apps, and general each run as dedicated subgraphs so routing stays predictable, prompts stay scoped, and failures do not cascade across unrelated domains.",
      },
      {
        icon: "Layers",
        title: "Pluggable OAuth connector abstraction (50+ integrations)",
        description:
          "Shipped a connector abstraction so new SaaS integrations register through adapters without touching orchestration code, enabling the 50+ integration catalog to grow while the LangGraph core stays stable.",
      },
      {
        icon: "Zap",
        title: "Three-layer cognitive memory under 100ms",
        description:
          "Combined Qdrant vector recall, PostgreSQL entity graphs, and a Redis snapshot cache so recent context, durable facts, and hot working sets each land on the right store, targeting sub-100ms retrieval on the critical path.",
      },
      {
        icon: "Code2",
        title: "Multi-provider LLM factory and Langfuse observability",
        description:
          "Built a hot-swappable factory across Gemini, Groq, Claude, and OpenRouter for A/B routing and failover, with end-to-end traces in Langfuse so regressions are caught before they hit WhatsApp users.",
      },
    ],
    techStack: [
      "LangGraph",
      "LangChain",
      "Gemini",
      "Groq",
      "Claude",
      "OpenRouter",
      "Qdrant",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "WhatsApp Cloud API",
      "Langfuse",
      "Docker",
      "AWS",
    ],
    architectureDescription:
      "WhatsApp Cloud API → FastAPI gateway → LangGraph multi-agent router → Domain subgraphs → LLM provider factory (Gemini / Groq / Claude / OpenRouter) → 3-layer memory (Qdrant + PostgreSQL + Redis) → React 19 portal → Langfuse + Prometheus/Grafana on AWS (Docker)",
    kpis: [
      { value: "6", label: "AI Agents (domain subgraphs)" },
      { value: "50+", label: "OAuth Integrations" },
      { value: "<100ms", label: "Memory retrieval (target path)" },
      { value: "4", label: "LLM Providers (hot-swappable)" },
    ],
    outcomes: [
      "Full AWS deployment with Prometheus and Grafana for service-level observability",
      "Sub-100ms memory retrieval across the three-layer cognitive architecture on tuned workloads",
      "Production A/B testing of LLM providers with configuration-only swaps, with no redeploy for routing experiments",
      "Flagship build demonstrating end-to-end conversational AI: WhatsApp channel, FastAPI services, LangGraph agents, durable memory, and a React analytics and boards portal",
      "Multi-language voice path: Sarvam AI TTS for Indian languages and Google Cloud TTS for international locales",
    ],
    heroImage: "/images/case-studies/helix-whatsapp-ai-assistant.png",
    heroImageCaption: "WhatsApp multi-agent assistant",
    images: [
      "/images/case-studies/helix-whatsapp-ai-assistant.png",
      "/images/case-studies/helix-web-control-portal.png",
      "/images/case-studies/helix-ai-platform-architecture.png",
    ],
    featured: false,
    gradientFrom: "#14082a",
    gradientTo: "#0a2344",
    useCases: [
      "Personal productivity: One WhatsApp thread for expenses, reminders, and travel instead of juggling five siloed apps",
      "Finance hygiene: Natural-language logging and categorisation with a React portal for analytics when spreadsheets are overkill",
      "Travel and calendar coordination: Agent subgraphs that reason over availability and confirmations with Google-connected context",
      "Small teams: Collaborative boards plus shared memory patterns for lightweight coordination without adopting a full enterprise suite",
    ],
    competitors: [
      "ChatGPT (mobile + voice)",
      "Google Gemini app",
      "Lindy.ai",
      "Zapier AI Actions",
      "Poe by Quora",
      "WhatsApp Business API chatbots (rules-based)",
    ],
  },
  {
    slug: "apex-pipeline-agentic-crm",
    title: "Apex Pipeline: AI-Powered CRM for Lead Generation & Outreach",
    shortTitle: "Apex Pipeline",
    category: "Enterprise",
    tags: [
      "Artificial Intelligence",
      "Agentic AI",
      "LangGraph",
      "CRM",
      "Sales",
      "FastAPI",
      "Lead generation",
    ],
    client: "Summit Forge Partners",
    industry: "Enterprise SaaS / Agentic AI / Revenue Operations",
    year: 2026,
    timelineWeeks: "Production rollout",
    teamSize: 5,
    status: "Live",
    heroMetricLabel: "Est. annual savings",
    heroMetricValue: "$75K",
    shortDescription:
      "Six-agent LangGraph system that automates job-board discovery, lead qualification, and AI-written outreach, with human-in-the-loop approval and team RBAC.",
    summary:
      "Apex Pipeline is an intelligent, fully automated CRM platform that replaces manual job board browsing and outreach. It scrapes job postings around the clock from LinkedIn, Wellfound, and Y Combinator, processes them through six specialized AI agents, and delivers qualified leads with AI-written cold email drafts for business development review.",
    challenge:
      "Business development executives were spending hours daily manually browsing job boards, copy-pasting leads, and writing individual cold emails. The process was slow, inconsistent, and impossible to scale.\n\nPipeline coverage was uneven across territories, and leadership could not rely on spreadsheets or ad hoc notes to prove which sources produced revenue-ready conversations.",
    approach: [
      {
        icon: "Layers",
        title: "Always-on discovery and resilient crawling",
        description:
          "Operates 24/7 web crawlers against LinkedIn, Wellfound, and Y Combinator listings using Playwright and Crawl4AI, routed through rotating residential and datacenter proxies via Decodo and Bright Data to keep ingestion stable under rate limits.",
      },
      {
        icon: "Brain",
        title: "Six-agent LangGraph qualification pipeline",
        description:
          "LangGraph orchestrates JD Analyzer, Fit Scorer, LinkedIn Intel, Connection Agent, Contact Finder, and Email Writer subgraphs so each lead graduates through structured reasoning instead of a single monolithic prompt.",
      },
      {
        icon: "Zap",
        title: "Human-in-the-loop approval and follow-up automation",
        description:
          "BDMs review and approve email sequences before anything sends, while Celery-backed schedules drive automated follow-ups that pause automatically when a prospect replies, protecting sender reputation and compliance.",
      },
      {
        icon: "Code2",
        title: "RBAC, assignment, and operations-grade backend",
        description:
          "Role-based access control lets admins assign leads to pods with full visibility boundaries, backed by FastAPI services, PostgreSQL as the system of record, and Redis for hot queues and coordination across workers.",
      },
    ],
    techStack: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Playwright",
      "Crawl4AI",
      "Bright Data",
      "Decodo",
    ],
    architectureDescription:
      "Playwright + Crawl4AI crawlers → Proxy mesh (Decodo + Bright Data) → FastAPI ingest APIs → LangGraph six-agent pipeline → PostgreSQL CRM records + Redis queues → Celery workers → BDM approval UI → Outbound email + follow-up scheduler",
    kpis: [
      { value: "6", label: "AI agents (LangGraph)" },
      { value: "$75K", label: "Annual savings (replaced roles est.)" },
      { value: "5-7", label: "Qualified leads / week" },
      { value: "4-5h", label: "Manual hours saved / day / BDE" },
    ],
    outcomes: [
      "Replaced roughly four to five hours of daily manual sourcing and drafting work per business development executive",
      "Delivers five to seven qualified leads per week automatically once crawlers and agents are tuned to Ideal Customer Profile rules",
      "Consolidated six BDE-equivalent workflows into the automated stack, with an estimated $75K annual run-rate savings on staffing mix",
      "Provides consistent 24/7 lead discovery with zero manual job-board browsing for core sources",
    ],
    heroImage: "/images/case-studies/apex-pipeline-crm-dashboard.png",
    heroImageCaption: "Agentic outbound CRM & leads",
    images: [
      "/images/case-studies/apex-pipeline-crm-dashboard.png",
      "/images/case-studies/apex-pipeline-six-agents-flow.png",
      "/images/case-studies/apex-pipeline-hitl-email-review.png",
    ],
    featured: false,
    gradientFrom: "#0c1624",
    gradientTo: "#1a2740",
    useCases: [
      "B2B outbound teams: Replace fragmented job-board tabs with one audited pipeline from scrape to approved send",
      "Agency new business pods: Standardize qualification rubrics and email voice while rotating accounts safely",
      "Startup GTM: Tap Wellfound and Y Combinator signals early without hiring a dedicated researcher for each list",
      "Enterprise RevOps: Pair RBAC and assignment with savings reporting so leadership trusts automation volume",
    ],
    competitors: [
      "Apollo.io",
      "Outreach",
      "Salesloft",
      "Lemlist",
      "ZoomInfo SalesOS",
      "LinkedIn Sales Navigator (manual)",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function isCaseStudyVisible(cs: CaseStudy): boolean {
  return !cs.hidden;
}

export function getRelatedCaseStudies(cs: CaseStudy): CaseStudy[] {
  if (cs.relatedSlugs?.length) {
    return cs.relatedSlugs
      .map((slug) => getCaseStudyBySlug(slug))
      .filter(
        (c): c is CaseStudy =>
          c !== undefined && c.slug !== cs.slug && isCaseStudyVisible(c),
      )
      .slice(0, 3);
  }
  return caseStudies
    .filter((c) => c.slug !== cs.slug && isCaseStudyVisible(c))
    .slice(0, 3);
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
