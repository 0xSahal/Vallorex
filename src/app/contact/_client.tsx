"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import {
  ArrowRight,
  Mail,
  Clock,
  Send,
  Calendar,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

type ContactTab = "message" | "booking";

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<ContactTab>(
    searchParams.get("tab") === "booking" ? "booking" : "message"
  );

  // Message form state
  const [msgForm, setMsgForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAll = () => {
    setSubmitted(false);
    setMsgForm({ name: "", email: "", company: "", phone: "", projectType: "", budget: "", message: "" });
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[5%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] bg-brand-orange/6 blur-[120px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[700px] mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                Typically respond within 1 business day
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[36px] sm:text-[46px] md:text-[56px] lg:text-[66px] font-extrabold tracking-tight leading-[1.06] mb-6"
            >
              <span className="block text-white">Let&apos;s Build Something</span>
              <span className="block bg-gradient-to-r from-brand-blue via-blue-400 to-brand-orange bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[#94A3B8] max-w-[540px] mx-auto leading-relaxed"
            >
              Whether you have a project in mind or need expert advice,
              we&apos;re here. Send us a message or book a free consultation call.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ──────────────────────────────── */}
      <section className="relative z-10 -mt-10 md:-mt-12 mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: Mail, label: "Email Us", value: "hello@vallorex.com", href: "mailto:hello@vallorex.com", color: "#2563EB" },
              { icon: Clock, label: "Response Time", value: "Mon-Fri, 10AM-7PM IST", href: "#", color: "#10B981" },
            ].map((item) => (
              <motion.a
                key={item.label}
                variants={fadeUp}
                href={item.href}
                className="group bg-white rounded-2xl border border-slate-200/80 p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${item.color}10` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-muted uppercase">{item.label}</p>
                    <p className="text-sm font-semibold text-midnight truncate">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN FORM / CALENDAR SECTION ────────────────────── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: Tabs + Form/Calendar */}
            <div className="lg:col-span-7 xl:col-span-8">
              <AnimatePresence mode="wait">
                {submitted && activeTab === "message" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-12 md:p-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-midnight mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-base leading-relaxed mb-2 max-w-md mx-auto">
                      Thank you for reaching out. A senior engineer will review your message and get back to you within 4 hours.
                    </p>
                    <p className="text-sm text-muted mb-8">
                      Check your inbox for a confirmation email.
                    </p>
                    <Button
                      onClick={resetAll}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full px-8 h-12 text-sm font-bold"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Tab Switcher */}
                    <div className="flex items-center gap-2 mb-8 p-1 bg-slate-100 rounded-xl w-fit">
                      <button
                        onClick={() => setActiveTab("message")}
                        className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                          activeTab === "message"
                            ? "bg-white text-midnight shadow-sm"
                            : "text-muted hover:text-midnight"
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        Send a Message
                      </button>
                      <button
                        onClick={() => setActiveTab("booking")}
                        className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                          activeTab === "booking"
                            ? "bg-white text-midnight shadow-sm"
                            : "text-muted hover:text-midnight"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        Book a Call
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {activeTab === "message" ? (
                        <motion.form
                          key="msg-form"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          onSubmit={handleMessageSubmit}
                          className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-5"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={msgForm.name}
                                onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })}
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Work Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                required
                                value={msgForm.email}
                                onChange={(e) => setMsgForm({ ...msgForm, email: e.target.value })}
                                placeholder="john@company.com"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Company
                              </label>
                              <input
                                type="text"
                                value={msgForm.company}
                                onChange={(e) => setMsgForm({ ...msgForm, company: e.target.value })}
                                placeholder="Acme Inc."
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Phone
                              </label>
                              <input
                                type="tel"
                                value={msgForm.phone}
                                onChange={(e) => setMsgForm({ ...msgForm, phone: e.target.value })}
                                placeholder="+1 (555) 000-0000"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Project Type <span className="text-red-500">*</span>
                              </label>
                              <select
                                required
                                value={msgForm.projectType}
                                onChange={(e) => setMsgForm({ ...msgForm, projectType: e.target.value })}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                              >
                                <option value="">Select project type</option>
                                <option value="ai">AI / Machine Learning</option>
                                <option value="blockchain">Blockchain / Web3</option>
                                <option value="data">Data & Analytics</option>
                                <option value="product">Product Engineering</option>
                                <option value="audit">Technical Audit</option>
                                <option value="consulting">Consulting / Strategy</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-midnight mb-1.5">
                                Budget Range
                              </label>
                              <select
                                value={msgForm.budget}
                                onChange={(e) => setMsgForm({ ...msgForm, budget: e.target.value })}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                              >
                                <option value="">Select budget range</option>
                                <option value="under-25k">Under $25K</option>
                                <option value="25k-50k">$25K – $50K</option>
                                <option value="50k-100k">$50K – $100K</option>
                                <option value="100k-250k">$100K – $250K</option>
                                <option value="250k+">$250K+</option>
                                <option value="unsure">Not sure yet</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-midnight mb-1.5">
                              Project Details <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              rows={5}
                              required
                              value={msgForm.message}
                              onChange={(e) => setMsgForm({ ...msgForm, message: e.target.value })}
                              placeholder="Tell us about your project, challenges, and goals. The more detail, the better our initial assessment..."
                              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                            />
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-brand-orange hover:bg-[#E06612] text-white rounded-full h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.01] active:scale-95 group"
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="booking-calendly"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.25 }}
                          className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6"
                        >
                          <div className="bg-slate-50/80 rounded-xl border border-slate-100 p-3 sm:p-4">
                            <div
                              className="calendly-inline-widget"
                              data-url="https://calendly.com/sahal-vallorex/30min?primary_color=f97316"
                              style={{ minWidth: 320, height: 700 }}
                            />
                            <Script
                              src="https://assets.calendly.com/assets/external/widget.js"
                              strategy="lazyOnload"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Info Sidebar */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-[#0A1628] to-[#0d2145] rounded-2xl p-7 text-white relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-5">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      { step: "01", title: "We Review", desc: "A senior engineer reviews your inquiry within 4 hours.", color: "#2563EB" },
                      { step: "02", title: "We Respond", desc: "You'll get a personalized response, not a template.", color: "#F97316" },
                      { step: "03", title: "We Strategize", desc: "A free 30-min call to assess scope, timeline, and budget.", color: "#8B5CF6" },
                      { step: "04", title: "We Deliver", desc: "If it's a fit, we kick off with a detailed proposal in 48h.", color: "#10B981" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <span
                          className="text-lg font-extrabold leading-none mt-0.5 w-7 flex-shrink-0"
                          style={{ color: item.color }}
                        >
                          {item.step}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">{item.title}</p>
                          <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4">
                <h3 className="text-sm font-bold text-midnight uppercase tracking-wider">Why Teams Trust Vallorex</h3>
                {[
                  { icon: ShieldCheck, label: "Specialized in AI & Blockchain Engineering", color: "#2563EB" },
                  { icon: Zap, label: "20+ Projects Delivered Across 3 Countries", color: "#F97316" },
                  { icon: Users, label: "Senior Engineers Handle Every Project", color: "#8B5CF6" },
                  { icon: CheckCircle2, label: "98% On-Time Delivery Rate", color: "#10B981" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}10` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <p className="text-sm font-medium text-midnight">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6">
                <h3 className="text-sm font-bold text-midnight uppercase tracking-wider mb-4">Looking for Something Else?</h3>
                <div className="space-y-2.5">
                  {[
                    { label: "Explore Our Services", href: "/services" },
                    { label: "View Case Studies", href: "/case-studies" },
                    { label: "Join Our Team", href: "/careers" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between rounded-xl bg-white border border-slate-200/80 px-4 py-3 hover:border-brand-blue/30 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-semibold text-midnight group-hover:text-brand-blue transition-colors">{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
