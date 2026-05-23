/**
 * Required env vars:
 * - CAREERS_EMAIL_TO=hello@vallorex.com
 */

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import { safeText } from "@/emails/_shared";
import { buildApplyConfirmationEmail } from "@/emails/apply-confirmation";
import { buildApplyInternalEmail } from "@/emails/apply-internal";

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

function extFromFilename(name: string): string {
  const idx = name.lastIndexOf(".");
  if (idx === -1) return "";
  return name.slice(idx + 1).toLowerCase();
}

function isAllowedResume(filename: string, mimeType: string): boolean {
  const ext = extFromFilename(filename);
  const okExt = ext === "pdf" || ext === "doc" || ext === "docx";
  if (!okExt) return false;

  const mt = (mimeType || "").toLowerCase();
  const okMime =
    mt === "application/pdf" ||
    mt === "application/msword" ||
    mt === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    mt === "application/octet-stream" ||
    mt === "";

  return okMime;
}

function getStringField(fd: FormData, ...keys: string[]): string {
  for (const k of keys) {
    const v = fd.get(k);
    if (typeof v === "string") return v;
  }
  return "";
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rl = rateLimit({ key: `apply:${ip}`, limit: 5, windowMs: 60 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many submissions. Please try again later.",
        resetAtMs: rl.resetAtMs,
      },
      { status: 429 }
    );
  }

  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Frontend sends multipart/form-data; accept both legacy and current key variants without requiring UI changes.
  const fullName = safeText(getStringField(fd, "fullName", "name"), 200);
  const email = safeText(getStringField(fd, "email"), 254);
  const phone = safeText(getStringField(fd, "phone"), 100);
  const jobTitle = safeText(getStringField(fd, "jobTitle", "role", "position"), 200);

  const linkedIn = safeText(getStringField(fd, "linkedIn", "linkedin"), 500);
  const portfolio = safeText(getStringField(fd, "portfolio"), 500);
  const coverLetter = safeText(getStringField(fd, "coverLetter"), 8000);
  const source = safeText(getStringField(fd, "source", "howHeard"), 200);

  const resumeValue = fd.get("resume");
  const errors: Record<string, string> = {};

  if (!fullName) errors.fullName = "Full name is required.";
  if (!email) errors.email = "Email is required.";
  if (email && !isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (!phone) errors.phone = "Phone number is required.";
  if (!jobTitle) errors.jobTitle = "Job title is required.";

  if (!(resumeValue instanceof File)) {
    errors.resume = "Resume is required.";
  } else {
    const maxBytes = 10 * 1024 * 1024;
    if (!resumeValue.name) errors.resume = "Resume filename is missing.";
    if (resumeValue.size > maxBytes) errors.resume = "Resume must be under 10MB.";
    if (resumeValue.name && !isAllowedResume(resumeValue.name, resumeValue.type)) {
      errors.resume = "Resume must be a PDF, DOC, or DOCX file.";
    }
  }

  if (Object.keys(errors).length > 0) {
    const first = Object.values(errors)[0] || "Invalid submission.";
    return NextResponse.json({ success: false, error: first }, { status: 400 });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@vallorex.com";
  const careersTo = process.env.CAREERS_EMAIL_TO || "hello@vallorex.com";

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
    const resumeFile = resumeValue as File;
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());

    await Promise.all([
      sendEmail({
        to: email,
        from: fromEmail,
        subject: `We've received your application – ${jobTitle} | Vallorex`,
        html: buildApplyConfirmationEmail({ fullName, jobTitle }),
      }),
      sendEmail({
        to: careersTo,
        from: fromEmail,
        replyTo: email,
        subject: `New Application: ${jobTitle} – ${fullName}`,
        html: buildApplyInternalEmail({
          fullName,
          email,
          phone,
          jobTitle,
          linkedIn: linkedIn || undefined,
          portfolio: portfolio || undefined,
          source: source || undefined,
          coverLetter: coverLetter || undefined,
          submittedAtIst,
        }),
        attachments: [
          {
            filename: resumeFile.name || "resume",
            content: resumeBuffer.toString("base64"),
          },
        ],
      }),
    ]);
  } catch (err) {
    console.error("Apply email send failed:", err);
    return NextResponse.json({ success: false, error: "Server error, please try again" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

