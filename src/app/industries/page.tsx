import type { Metadata } from "next";
import IndustriesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Industries | Vallorex. Deep Expertise Across High-Stakes Verticals",
  description:
    "Vallorex delivers AI and blockchain solutions for Fintech, DeFi, HealthTech, Enterprise Automation, and Logistics.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
