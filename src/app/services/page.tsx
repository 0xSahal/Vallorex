import type { Metadata } from "next";
import ServicesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Services | Vallorex. AI, Blockchain & Product Engineering",
  description:
    "Explore Vallorex's four specialized practices: AI Engineering, Blockchain, Data & Analytics, and Full-Stack Product Engineering.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
