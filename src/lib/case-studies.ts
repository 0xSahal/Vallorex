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
  {
    slug: "careline-ai-healthcare-voice-assistant",
    title: "CareLine AI",
    shortTitle: "CareLine AI",
    category: "Healthcare",
    tags: [
      "Artificial Intelligence",
      "Voice AI",
      "LiveKit",
      "LangGraph",
      "FastAPI",
      "Multilingual",
      "Telephony",
      "+2 more",
    ],
    client: "CareLine AI",
    industry: "Healthcare / AI Voice Automation",
    year: 2026,
    timelineWeeks: "2-4 Weeks to Production",
    teamSize: 3,
    status: "MVP Complete",
    heroMetricLabel: "To Production",
    heroMetricValue: "2-4 weeks",
    shortDescription: "AI Voice Assistant for Healthcare Appointment Automation",
    summary:
      "CareLine AI is an AI voice and chat assistant that automates healthcare appointment workflows - booking, rescheduling, and cancellations - through natural conversations in English and Hindi, backed by real-time availability checks and a clinic monitoring dashboard.",
    challenge:
      "Healthcare organizations - hospitals, clinics, diagnostic centers, and telemedicine providers - spend significant time managing appointment calls through human operators. A busy clinic can receive hundreds of calls daily for booking, rescheduling, and cancellations, tying up staff who could be doing higher-value work. Long hold times frustrate patients, and missed calls lead directly to missed appointments and lost revenue.\n\nTraditional IVR systems do not solve this. They are rigid, menu-driven, and break down the moment a patient deviates from the expected flow. They cannot handle natural conversation, do not support Indian languages reliably, and cannot manage complex rescheduling logic where multiple calendar slots, doctor availability, and patient history all need to be considered in real time.\n\nThe goal was to build an AI voice assistant that could handle the full appointment workflow - booking, rescheduling, and cancellation - through natural conversations over phone calls and chat, in both English and Hindi, with a backend that verified availability, updated records, and gave clinic staff full visibility through a monitoring dashboard.",
    approach: [
      {
        title: "LiveKit-Based Voice Orchestration",
        description:
          "Built real-time voice interaction on LiveKit Agents, handling the full telephony session lifecycle including SIP integration and Twilio connectivity. The system manages concurrent patient calls without blocking, with WebSocket-based communication between voice, AI, and backend layers.",
        icon: "Phone",
      },
      {
        title: "LangGraph Conversational Flows",
        description:
          "Designed deterministic appointment workflows using LangGraph so the AI follows reliable, testable conversation paths for booking, rescheduling, and cancellation - rather than free-form generation that could hallucinate availability or confirmation details.",
        icon: "GitBranch",
      },
      {
        title: "Multilingual Speech with Sarvam AI",
        description:
          "Integrated Sarvam AI for speech-to-text and text-to-speech in Hindi and Indian English, covering the primary languages of the target patient base. The pipeline handles code-switching - patients who mix Hindi and English mid-conversation - without dropping context.",
        icon: "Mic",
      },
      {
        title: "Appointment Management Backend",
        description:
          "Built a FastAPI backend with SQLite storing patient records, appointment slots, doctor availability, and call logs. The AI verifies availability in real time during the conversation, confirms bookings, and writes back to the database before ending the call.",
        icon: "Database",
      },
      {
        title: "React Monitoring Dashboard",
        description:
          "Delivered a clinic-facing dashboard giving staff visibility into live and completed calls, appointment outcomes, call transcripts, and system status. Staff can review AI-handled conversations and catch edge cases without listening to recordings.",
        icon: "Monitor",
      },
      {
        title: "Dual-Channel Support",
        description:
          "The same appointment logic runs across both voice calls and chat interfaces. Patients who prefer text-based interaction reach the same backend flows and receive the same confirmation and rescheduling capability as phone callers.",
        icon: "MessageSquare",
      },
    ],
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "WebSocket",
      "SQLite",
      "LiveKit Agents",
      "LangGraph",
      "OpenAI / Groq",
      "Sarvam AI STT/TTS",
      "SIP Telephony",
      "Twilio",
    ],
    architectureDescription:
      "Voice + Chat Clients → LiveKit Agents + Telephony (SIP/Twilio) → LangGraph Flow Orchestrator → FastAPI APIs (availability + records) → SQLite (patients + slots + logs) → Clinic Monitoring Dashboard",
    kpis: [
      { value: "2", label: "Channels Supported (voice + chat)" },
      { value: "2+", label: "Languages (Hindi and English)" },
      { value: "3", label: "Appointment Flows (book, reschedule, cancel)" },
      { value: "2-4", label: "To Production (weeks)" },
    ],
    outcomes: [
      "Full appointment workflow automation covering booking, rescheduling, and cancellation through natural voice conversations and chat",
      "Multilingual support for Hindi and Indian English including mid-conversation code-switching, built on Sarvam AI speech processing",
      "SIP telephony and Twilio integration enabling the assistant to handle real inbound patient phone calls, not just web-based demos",
      "Deterministic LangGraph conversation flows prevent hallucinated availability or confirmation details during live patient interactions",
      "React monitoring dashboard gives clinic staff real-time visibility into call outcomes, transcripts, and appointment changes without manual call review",
      "MVP complete with 2 to 4 weeks estimated to full production deployment, telephony validation, and pilot launch",
    ],
    images: [],
    featured: false,
    gradientFrom: "#051a14",
    gradientTo: "#041210",
    useCases: [
      "Hospitals and Diagnostic Centers: High call-volume facilities where appointment desks handle hundreds of daily calls. The assistant reduces staff workload and eliminates hold times during peak hours.",
      "Clinics and Specialist Practices: Smaller practices without dedicated call center staff that need reliable appointment handling without hiring additional reception personnel.",
      "Telemedicine Providers: Platforms managing appointment scheduling across multiple doctors and time zones where consistent, automated patient communication is critical to conversion.",
      "Healthcare Chains: Multi-location operators who need a centralized appointment automation layer that works consistently across branches and supports regional language variations.",
    ],
    competitors: [],
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
    slug: "roadhow-uk-dashcam-visual-analytics",
    title: "Dashcam Visual Analytics & Driver Scoring Platform",
    shortTitle: "RoadHow UK",
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
    client: "RoadHow UK",
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
