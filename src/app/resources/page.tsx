import type { Metadata } from "next";
import ResourcesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Resources | Vallorex — Insights, Whitepapers & Webinars",
  description:
    "Technical deep-dives, strategic frameworks, and engineering playbooks from the team building the future of AI and blockchain.",
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
