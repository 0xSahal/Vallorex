import { Resend } from "resend";

let cached: Resend | null = null;

export function getResendClient(): Resend {
  if (cached) return cached;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  cached = new Resend(apiKey);
  return cached;
}

type ResendAttachment = {
  filename: string;
  content: string;
};

export async function sendEmail({
  to,
  from,
  subject,
  html,
  replyTo,
  attachments,
}: {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: ResendAttachment[];
}) {
  const resend = getResendClient();
  return await resend.emails.send({
    to,
    from,
    subject,
    html,
    replyTo,
    attachments,
  });
}

