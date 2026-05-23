"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuditModal } from "@/context/AuditModalContext";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
};

export function CaseStudyProductCta({ label }: Props) {
  const { openAuditModal } = useAuditModal();

  return (
    <div className="mt-10 flex justify-center">
      <Button
        type="button"
        onClick={openAuditModal}
        className={cn(
          "inline-flex h-12 items-center gap-2 rounded-full border-0 px-8 text-sm font-semibold",
          "bg-brand-orange text-white shadow-lg shadow-brand-orange/20",
          "transition-all duration-300 hover:bg-[#E06612] hover:shadow-brand-orange/30",
        )}
      >
        {label}
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      </Button>
    </div>
  );
}
