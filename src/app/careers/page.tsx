import type { Metadata } from "next";
import CareersPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Careers | Vallorex - Join Our World-Class Engineering Team",
  description:
    "Explore open positions at Vallorex. Join 200+ engineers building production-grade AI and blockchain systems for the world's most ambitious ventures.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
