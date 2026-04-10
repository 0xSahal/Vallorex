import type { Metadata } from "next";
import CaseStudiesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Case Studies | Vallorex — 50+ Production-Grade Projects",
  description:
    "Explore how Vallorex engineers production AI and blockchain systems — from fraud detection to DeFi protocols — for high-stakes enterprises.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
