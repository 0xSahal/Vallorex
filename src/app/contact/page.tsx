import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageClient from "./_client";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact Us | Vallorex. Let's Build Something Extraordinary",
  description:
    "Get in touch with Vallorex. Book a free consultation, request a technical audit, or start a conversation about your next AI or blockchain project.",
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageClient />
    </Suspense>
  );
}
