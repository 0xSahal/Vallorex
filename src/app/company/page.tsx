import type { Metadata } from "next";
import CompanyPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Company | Vallorex. About Us & Careers",
  description:
    "Vallorex is an engineering partner for AI and Blockchain teams, serving startups and growth-stage companies across the US, Europe, and Asia.",
};

export default function CompanyPage() {
  return <CompanyPageClient />;
}
