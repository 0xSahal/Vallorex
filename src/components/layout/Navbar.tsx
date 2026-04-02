"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Technologies", hasDropdown: true },
    { name: "Case Studies", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true }
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-midnight h-[64px] flex items-center shadow-none",
        isScrolled && "shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative flex items-center justify-center bg-brand-blue rounded-sm p-1">
            <Diamond className="h-5 w-5 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white mb-0.5">
            Vallorex
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? setActiveMenu(link.name.toLowerCase()) : null}
              onMouseLeave={() => link.hasDropdown ? setActiveMenu(null) : null}
            >
              <Link
                href={`/${link.name.toLowerCase().replace(" ", "-")}`}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors h-[64px]",
                  link.name === "Services" 
                    ? "text-white border-b-2 border-brand-blue" 
                    : "text-[#94A3B8] hover:text-white border-b-2 border-transparent"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4 ml-0.5" />}
              </Link>

              {/* Mega Menu Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeMenu === link.name.toLowerCase() && (
                    <motion.div 
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-[64px] left-1/2 -translate-x-1/2 w-[900px] bg-white border-t-2 border-t-brand-blue shadow-2xl p-8 rounded-b-xl grid grid-cols-4 gap-8 pointer-events-auto"
                    >
                      <div className="col-span-3 grid grid-cols-3 gap-8">
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Core Engineering</h4>
                          <div className="space-y-3">
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">Blockchain Dev</Link>
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">Smart Contract Audit</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Data & Infrastructure</h4>
                          <div className="space-y-3">
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">AI Analytics</Link>
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">Cloud Custody</Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Consulting</h4>
                          <div className="space-y-3">
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">Fractional CTO</Link>
                            <Link href="#" className="block text-sm font-medium text-midnight hover:text-brand-blue">Technical Due Diligence</Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Featured Case Study */}
                      <div className="col-span-1 bg-surface rounded-lg p-5">
                        <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Featured Study</h4>
                        <p className="text-sm text-midnight font-bold leading-relaxed mb-4">
                          $12M Secured for DeFi Protocol Launch
                        </p>
                        <Link href="#" className="text-sm font-semibold text-brand-blue hover:underline flex items-center">
                          Read Case Study <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button className="rounded-pill bg-brand-orange hover:bg-brand-orange-hover text-white px-6 h-10 text-sm font-semibold">
            Get a Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center z-50">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="lg:hidden fixed top-[104px] right-0 bottom-0 w-[80%] max-w-sm bg-midnight border-l border-border/10 shadow-2xl z-40 flex flex-col pt-4 overflow-y-auto"
          >
            <div className="px-6 flex flex-col gap-6 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${link.name.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-medium text-white flex justify-between items-center py-2"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-5 w-5 text-[#94A3B8]" />}
                </Link>
              ))}
              
              <div className="mt-4 pt-6 border-t border-border/20">
                <Button className="w-full rounded-pill bg-brand-orange hover:bg-brand-orange-hover text-white h-12 text-base font-semibold">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
