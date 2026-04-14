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
