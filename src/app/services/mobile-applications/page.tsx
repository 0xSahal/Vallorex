import type { Metadata } from "next";
import {
  Smartphone,
  Layers,
  Apple,
  Rocket,
  Plug,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Mobile Applications | Vallorex",
  description:
    "Native performance and cross-platform efficiency — React Native, Flutter, iOS Swift, Android Kotlin, store submission, and backend integration.",
  openGraph: {
    title: "Mobile Applications | Vallorex",
    description:
      "Native performance and cross-platform efficiency — React Native, Flutter, iOS Swift, Android Kotlin, store submission, and backend integration.",
    url: "https://vallorex.com/services/mobile-applications",
    type: "website",
  },
};

function MobileHeroSvg() {
  return (
    <svg viewBox="0 0 520 360" className="w-full h-auto" fill="none" aria-hidden>
      <defs>
        <linearGradient id="mb1" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F97316" stopOpacity="0.95" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="518" height="358" rx="22" stroke="rgba(255,255,255,0.12)" />
      <g opacity="0.95">
        <rect x="205" y="70" width="160" height="240" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
        <rect x="235" y="105" width="100" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
        <rect x="235" y="135" width="125" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        <rect x="235" y="160" width="110" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        <rect x="235" y="190" width="125" height="60" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="285" cy="286" r="10" fill="url(#mb1)" />
        <path
          d="M100 280 C 165 250, 220 255, 290 230 C 350 206, 405 205, 460 190"
          stroke="rgba(249,115,22,0.55)"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function MobileApplicationsPage() {
  return (
    <ServicePageTemplate
      serviceName="Mobile Applications"
      tagline="Native performance. Cross-platform efficiency. App Store ready."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Mobile Applications", href: "/services/mobile-applications" },
      ]}
      heroVariant="card"
      heroIllustration={<MobileHeroSvg />}
      overviewParagraphs={[
        "We build iOS, Android, and cross-platform mobile applications using React Native and Flutter — from MVP to enterprise-grade apps with offline support, push notifications, and deep OS integrations.",
        "Our delivery emphasizes performance, stability, and store readiness: device testing, release discipline, analytics instrumentation, and a backend integration plan that scales.",
        "This service is ideal for teams launching consumer apps, modernizing legacy mobile products, or shipping mobile extensions for existing platforms.",
      ]}
      keyOutcomes={[
        "App Store / Play Store-ready builds with a repeatable release process",
        "Native-level performance where it matters (animations, lists, offline)",
        "Stable backend integration with clear API contracts",
        "Testing across real devices with predictable QA gates",
      ]}
      included={[
        {
          id: "react-native-development",
          Icon: Layers,
          title: "React Native Development",
          description: "Cross-platform delivery with high performance and maintainable architecture.",
        },
        {
          id: "flutter-development",
          Icon: Smartphone,
          title: "Flutter Development",
          description: "Fast iteration with consistent UI and excellent performance characteristics.",
        },
        {
          id: "ios-native-swift",
          Icon: Apple,
          title: "iOS Native (Swift)",
          description: "Deep iOS integrations, performance-critical screens, and platform-specific UX.",
        },
        {
          id: "android-native-kotlin",
          Icon: Smartphone,
          title: "Android Native (Kotlin)",
          description: "Android-specific performance, background tasks, and device compatibility.",
        },
        {
          id: "app-store-optimization",
          Icon: Rocket,
          title: "App Store Optimization & Submission",
          description: "Store assets, compliance, release workflows, and approval readiness.",
        },
        {
          id: "mobile-backend-integration",
          Icon: Plug,
          title: "Mobile Backend & API Integration",
          description: "Auth, offline sync, push, analytics, and resilient network patterns.",
        },
      ]}
      process={[
        { title: "UX Wireframing", description: "Define flows, navigation, and key screens for usability." },
        { title: "Development", description: "Implement with performance baselines and shared components." },
        { title: "Device Testing", description: "Validate across devices, OS versions, and edge cases." },
        { title: "Store Submission", description: "Release with store assets, compliance, and monitoring." },
      ]}
      whyStats={[
        { value: "60+",
          label: "Apps Published" },
        { value: "4.8★",
          label: "Average Store Rating" },
        { value: "50M+",
          label: "End Users Served" },
      ]}
      testimonial={{
        quote:
          "They shipped a mobile app that felt native from day one. The release process and device testing discipline made every update predictable.",
        attribution: "Head of Product, Consumer App",
      }}
      related={[
        {
          href: "/services/full-stack-development",
          Icon: ShieldCheck,
          title: "Full-Stack Development",
          description: "Web + backend delivery to power mobile experiences end-to-end.",
        },
        {
          href: "/services/api-integrations",
          Icon: CheckCircle2,
          title: "API & Integrations",
          description: "Headless APIs, webhooks, and integration patterns for mobile backends.",
        },
        {
          href: "/services/qa-testing",
          Icon: ShieldCheck,
          title: "QA & Testing",
          description: "Automation, device testing strategies, and CI quality gates.",
        },
      ]}
      ctaHeading="Ready to build with Mobile Applications?"
      ctaSubtext="Ship app-store-ready mobile products with strong performance, QA discipline, and scalable backend integration."
    />
  );
}

