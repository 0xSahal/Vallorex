import type { Metadata } from "next";
import CompanyPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Company | Vallorex — About Us, Leadership & Careers",
  description:
    "Vallorex is a 200+ person engineering organization serving Fortune 500 enterprises and Web3 ventures across 30+ countries.",
};

export default function CompanyPage() {
  return <CompanyPageClient />;
}
