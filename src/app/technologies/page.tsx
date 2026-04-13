import type { Metadata } from "next";
import TechnologiesPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Technologies | Vallorex. Enterprise Engineering Framework",
  description:
    "Production-proven architecture across AI, Blockchain, Cloud, Data Engineering, and Frontend. Calibrated for enterprise stability and scale.",
};

export default function TechnologiesPage() {
  return <TechnologiesPageClient />;
}
