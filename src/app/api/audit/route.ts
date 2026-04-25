 import { NextResponse } from "next/server";
 import { sendEmail } from "@/lib/resend";
 import { rateLimit } from "@/lib/rate-limit";
 import { safeText } from "@/emails/_shared";
 
 type AuditPayload = {
   fullName?: unknown;
   workEmail?: unknown;
   companyName?: unknown;
   industry?: unknown;
   companySize?: unknown;
   challenge?: unknown;
 };
 
 function getClientIp(req: Request): string {
   const xff = req.headers.get("x-forwarded-for");
   if (xff) return xff.split(",")[0]?.trim() || "unknown";
   const xrip = req.headers.get("x-real-ip");
   if (xrip) return xrip.trim();
   return "unknown";
 }
 
 function isValidEmail(email: string): boolean {
   // Pragmatic validation; avoids rejecting legitimate emails with strict regex.
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }
 
 export async function POST(req: Request) {
   const ip = getClientIp(req);
   const rl = rateLimit({ key: `audit:${ip}`, limit: 5, windowMs: 60 * 60 * 1000 });
   if (!rl.ok) {
     return NextResponse.json(
       {
         ok: false,
         error: "rate_limited",
         message: "Too many submissions. Please try again later.",
         resetAtMs: rl.resetAtMs,
       },
       { status: 429 }
     );
   }
 
   let body: AuditPayload;
   try {
     body = (await req.json()) as AuditPayload;
   } catch {
     return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
   }
 
   const fullName = safeText(body.fullName, 200);
   const workEmail = safeText(body.workEmail, 254);
   const companyName = safeText(body.companyName, 200);
   const industry = safeText(body.industry, 120);
   const companySize = safeText(body.companySize, 40);
   const challenge = safeText(body.challenge, 8000);
 
   const errors: Record<string, string> = {};
   if (!fullName) errors.fullName = "Full Name is required.";
   if (!workEmail) errors.workEmail = "Work Email is required.";
   if (workEmail && !isValidEmail(workEmail)) errors.workEmail = "Please enter a valid email address.";
   if (!companyName) errors.companyName = "Company Name is required.";
   if (!industry) errors.industry = "Industry is required.";
   if (!companySize) errors.companySize = "Company Size is required.";
 
   if (Object.keys(errors).length > 0) {
     return NextResponse.json({ ok: false, errors, message: "Please check the highlighted fields." }, { status: 400 });
   }
 
   const fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@vallorex.com";
   const internalTo = "hello@vallorex.com";
 
   const submittedAtIst = new Intl.DateTimeFormat("en-IN", {
     timeZone: "Asia/Kolkata",
     year: "numeric",
     month: "short",
     day: "2-digit",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
     hour12: true,
     timeZoneName: "short",
   }).format(new Date());
 
   const subjectCompany = companyName || fullName;
 
   const html = `
     <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; line-height: 1.6;">
       <h2 style="margin:0 0 12px 0;">New AI Readiness Audit Request</h2>
       <p style="margin:0 0 16px 0; color:#334155;">
         Submitted at <strong>${submittedAtIst}</strong>
       </p>
       <table style="width:100%; border-collapse:collapse;">
         <tbody>
           <tr><td style="padding:8px 0; color:#64748B; width:160px;">Full Name</td><td style="padding:8px 0; color:#0F172A; font-weight:600;">${fullName}</td></tr>
           <tr><td style="padding:8px 0; color:#64748B;">Work Email</td><td style="padding:8px 0; color:#0F172A; font-weight:600;">${workEmail}</td></tr>
           <tr><td style="padding:8px 0; color:#64748B;">Company Name</td><td style="padding:8px 0; color:#0F172A; font-weight:600;">${companyName}</td></tr>
           <tr><td style="padding:8px 0; color:#64748B;">Industry</td><td style="padding:8px 0; color:#0F172A; font-weight:600;">${industry}</td></tr>
           <tr><td style="padding:8px 0; color:#64748B;">Company Size</td><td style="padding:8px 0; color:#0F172A; font-weight:600;">${companySize}</td></tr>
         </tbody>
       </table>
       ${challenge ? `<div style="margin-top:16px;"><p style="margin:0; color:#64748B; font-weight:700;">Biggest AI challenge</p><p style="margin:6px 0 0 0; color:#0F172A; white-space:pre-wrap;">${challenge}</p></div>` : ""}
     </div>
   `;
 
   try {
     await sendEmail({
       to: internalTo,
       from: fromEmail,
       replyTo: workEmail,
       subject: `New AI Readiness Audit Request – ${subjectCompany}`,
       html,
     });
   } catch (err) {
     console.error("Audit email send failed:", err);
     return NextResponse.json({ ok: false, message: "Failed to send email." }, { status: 500 });
   }
 
   return NextResponse.json({ ok: true }, { status: 200 });
 }
 
