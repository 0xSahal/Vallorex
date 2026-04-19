import type { Metadata } from "next";
import CaseStudiesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Case Studies | Vallorex - Production Systems That Ship",
  description:
    "Explore live and MVP production systems engineered by Vallorex - real architecture, measurable outcomes, and technical depth.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
