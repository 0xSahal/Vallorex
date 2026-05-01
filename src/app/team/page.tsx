import type { Metadata } from "next";
import TeamPageClient from "@/app/team/_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Team | Vallorex - Meet Our Engineers",
  description:
    "Meet the senior engineers and domain experts behind Vallorex. Every person on this page has shipped production systems. No juniors, no outsourcing.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
