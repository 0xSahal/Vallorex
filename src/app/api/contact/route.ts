import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import { buildContactConfirmationEmail } from "@/emails/contact-confirmation";
import { buildContactInternalEmail } from "@/emails/contact-internal";
import { safeText } from "@/emails/_shared";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
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
  const rl = rateLimit({ key: `contact:${ip}`, limit: 5, windowMs: 60 * 60 * 1000 });
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

  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const honeypot = safeText(body.website, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const fullName = safeText(body.name, 200);
  const workEmail = safeText(body.email, 254);
  const company = safeText(body.company, 200);
  const phone = safeText(body.phone, 100);
  const projectType = safeText(body.projectType, 50);
  const budgetRange = safeText(body.budget, 50);
  const projectDetails = safeText(body.message, 8000);

  const errors: Record<string, string> = {};
  if (!fullName) errors.name = "Full Name is required.";
  if (!workEmail) errors.email = "Work Email is required.";
  if (workEmail && !isValidEmail(workEmail)) errors.email = "Please enter a valid email address.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@vallorex.com";
  const internalTo = "hello@vallorex.com";

  const origin = req.headers.get("origin") || "";
  const servicesUrl = origin ? `${origin.replace(/\/$/, "")}/services` : "https://vallorex.com/services";

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

  try {
    await Promise.all([
      sendEmail({
        to: workEmail,
        from: fromEmail,
        subject: "We've received your message - Vallorex Technologies",
        html: buildContactConfirmationEmail({
          fullName,
          company,
          projectType,
          budgetRange,
          servicesUrl,
        }),
      }),
      sendEmail({
        to: internalTo,
        from: fromEmail,
        replyTo: workEmail,
        subject: `🚀 New Project Inquiry - ${projectType || "New inquiry"} from ${company || fullName}`,
        html: buildContactInternalEmail({
          fullName,
          workEmail,
          company,
          phone,
          projectType,
          budgetRange,
          projectDetails,
          submittedAtIst,
        }),
      }),
    ]);
  } catch (err) {
    console.error("Contact email send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

