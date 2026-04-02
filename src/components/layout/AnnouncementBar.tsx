"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcementDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-brand-blue text-white text-sm font-medium h-[40px] px-4 w-full flex items-center justify-center relative z-50">
      <div className="flex items-center gap-3">
        <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
          NEW
        </span>
        <span className="opacity-90">
          Vallorex now offers a complimentary AI Readiness Audit for enterprise teams.
        </span>
        <Link 
          href="/contact" 
          className="font-bold underline hover:opacity-80 transition flex items-center group ml-1"
        >
          Claim Your Free Audit
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      
      <button 
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition p-1"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
