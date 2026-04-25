 "use client";
 
 import React, { useEffect, useMemo, useRef, useState } from "react";
 import { AnimatePresence, motion, type Variants } from "framer-motion";
 import { X, Loader2, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { useAuditModal } from "@/context/AuditModalContext";
 
 type AuditFormState = {
   fullName: string;
   workEmail: string;
   companyName: string;
   industry: string;
   companySize: string;
   challenge: string;
 };
 
 const INDUSTRY_OPTIONS = [
   "Banking & Finance",
   "FinTech & Crypto",
   "eCommerce & Retail",
   "HealthTech",
   "Energy & Sustainability",
   "Enterprise & SaaS",
   "Other",
 ] as const;
 
 const COMPANY_SIZE_OPTIONS = ["1–10", "11–50", "51–200", "201–1000", "1000+"] as const;
 
 const backdropVariants: Variants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { duration: 0.18 } },
   exit: { opacity: 0, transition: { duration: 0.16 } },
 };
 
 const modalVariants: Variants = {
   hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.98, y: 6, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } },
 };
 
 export default function AuditModal() {
   const { isOpen, closeAuditModal } = useAuditModal();
 
   const initialForm = useMemo<AuditFormState>(
     () => ({
       fullName: "",
       workEmail: "",
       companyName: "",
       industry: "",
       companySize: "",
       challenge: "",
     }),
     []
   );
 
   const [form, setForm] = useState<AuditFormState>(initialForm);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState<string | null>(null);
 
   const dialogRef = useRef<HTMLDivElement>(null);
 
   useEffect(() => {
     if (!isOpen) return;
 
     const prevOverflow = document.body.style.overflow;
     document.body.style.overflow = "hidden";
 
     const onKeyDown = (e: KeyboardEvent) => {
       if (e.key === "Escape") closeAuditModal();
     };
     window.addEventListener("keydown", onKeyDown);
 
     requestAnimationFrame(() => {
       const first = dialogRef.current?.querySelector<HTMLElement>(
         "button[data-autofocus], input, select, textarea, button"
       );
       first?.focus?.();
     });
 
     return () => {
       document.body.style.overflow = prevOverflow;
       window.removeEventListener("keydown", onKeyDown);
     };
   }, [isOpen, closeAuditModal]);
 
   useEffect(() => {
     if (!isOpen) return;
     setSubmitted(false);
     setIsSubmitting(false);
     setError(null);
     setForm(initialForm);
   }, [isOpen, initialForm]);
 
   const onClose = () => closeAuditModal();
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (isSubmitting) return;
     setError(null);
     setIsSubmitting(true);
 
     try {
       const res = await fetch("/api/audit", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(form),
       });
 
       if (res.ok) {
         setSubmitted(true);
         return;
       }
 
       const data = (await res.json().catch(() => null)) as null | { message?: string };
       setError(data?.message || "Something went wrong. Please try again.");
     } catch (err) {
       console.error(err);
       setError("Something went wrong. Please try again.");
     } finally {
       setIsSubmitting(false);
     }
   };
 
   return (
     <AnimatePresence>
       {isOpen ? (
         <motion.div
           className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center px-3 py-3 sm:px-6 sm:py-6"
           variants={backdropVariants}
           initial="hidden"
           animate="visible"
           exit="exit"
           aria-hidden={false}
         >
           {/* Backdrop */}
           <button
             type="button"
             aria-label="Close audit modal"
             className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
             onClick={onClose}
           />
 
           {/* Dialog */}
           <motion.div
             ref={dialogRef}
             role="dialog"
             aria-modal="true"
             aria-label="AI Readiness Audit"
             className="relative w-full max-w-[720px] max-h-[calc(100dvh-24px)] sm:max-h-[calc(100dvh-48px)] rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col"
             variants={modalVariants}
             initial="hidden"
             animate="visible"
             exit="exit"
           >
             <div className="relative px-5 py-4 sm:px-8 sm:py-6 border-b border-slate-200/70">
               <div className="flex items-start justify-between gap-4">
                 <div>
                   <p className="text-[10px] font-bold tracking-[0.25em] text-brand-blue uppercase">
                     AI Readiness Audit
                   </p>
                   <h2 className="mt-2 text-lg sm:text-2xl font-extrabold text-midnight tracking-tight">
                     Request your free audit
                   </h2>
                   <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed max-w-[56ch]">
                     Share a few details. A senior Vallorex engineer will review your profile and reply within 1 business day.
                   </p>
                 </div>
 
                 <button
                   type="button"
                   onClick={onClose}
                   className="shrink-0 p-2 rounded-lg text-slate-500 hover:text-midnight hover:bg-slate-100 transition"
                   aria-label="Close"
                   data-autofocus
                 >
                   <X className="h-5 w-5" />
                 </button>
               </div>
             </div>
 
             <div className="px-5 py-5 sm:px-8 sm:py-7 overflow-y-auto">
               {submitted ? (
                 <div className="rounded-2xl border border-slate-200/80 bg-slate-50 px-5 py-5 sm:px-6 sm:py-6">
                   <p className="text-sm font-semibold text-midnight">
                     We&apos;ll review your profile and be in touch within 1 business day.
                   </p>
                   <div className="mt-5">
                     <Button
                       type="button"
                       onClick={onClose}
                       className="bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full px-7 h-11 text-sm font-bold"
                     >
                       Close
                       <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                   </div>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-4">
                   {error ? (
                     <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                       {error}
                     </div>
                   ) : null}
 
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-semibold text-midnight mb-1.5">
                         Full Name <span className="text-red-500">*</span>
                       </label>
                       <input
                         type="text"
                         required
                         value={form.fullName}
                         onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
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
                         value={form.workEmail}
                         onChange={(e) => setForm((p) => ({ ...p, workEmail: e.target.value }))}
                         placeholder="john@company.com"
                         className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                       />
                     </div>
                   </div>
 
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-semibold text-midnight mb-1.5">
                         Company Name <span className="text-red-500">*</span>
                       </label>
                       <input
                         type="text"
                         required
                         value={form.companyName}
                         onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
                         placeholder="Acme Inc."
                         className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-semibold text-midnight mb-1.5">
                         Industry <span className="text-red-500">*</span>
                       </label>
                       <select
                         required
                         value={form.industry}
                         onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
                         className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                       >
                         <option value="">Select industry</option>
                         {INDUSTRY_OPTIONS.map((opt) => (
                           <option key={opt} value={opt}>
                             {opt}
                           </option>
                         ))}
                       </select>
                     </div>
                   </div>
 
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-semibold text-midnight mb-1.5">
                         Company Size <span className="text-red-500">*</span>
                       </label>
                       <select
                         required
                         value={form.companySize}
                         onChange={(e) => setForm((p) => ({ ...p, companySize: e.target.value }))}
                         className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOTRBM0I4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                       >
                         <option value="">Select company size</option>
                         {COMPANY_SIZE_OPTIONS.map((opt) => (
                           <option key={opt} value={opt}>
                             {opt}
                           </option>
                         ))}
                       </select>
                     </div>
                   </div>
 
                   <div>
                     <label className="block text-sm font-semibold text-midnight mb-1.5">
                       What is your biggest AI challenge right now?
                     </label>
                     <textarea
                       rows={4}
                       value={form.challenge}
                       onChange={(e) => setForm((p) => ({ ...p, challenge: e.target.value }))}
                       placeholder="Briefly describe your biggest blocker, constraints, or goal..."
                       className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-midnight placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                     />
                   </div>
 
                   <Button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-brand-orange hover:bg-[#E06612] text-white rounded-full h-12 text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all hover:scale-[1.01] active:scale-95 group"
                   >
                     {isSubmitting ? (
                       <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         Submitting...
                       </>
                     ) : (
                       "Request My Free Audit"
                     )}
                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </form>
               )}
             </div>
           </motion.div>
         </motion.div>
       ) : null}
     </AnimatePresence>
   );
 }
