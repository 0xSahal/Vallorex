import { escapeHtml, nl2br, safeText } from "./_shared";

export function buildApplyInternalEmail(input: {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  linkedIn?: string;
  portfolio?: string;
  source?: string;
  coverLetter?: string;
  submittedAtIst: string;
}): string {
  const fullName = escapeHtml(safeText(input.fullName, 200));
  const email = escapeHtml(safeText(input.email, 254));
  const phone = escapeHtml(safeText(input.phone, 100));
  const jobTitle = escapeHtml(safeText(input.jobTitle, 200));
  const linkedIn = escapeHtml(safeText(input.linkedIn ?? "", 500)) || "Not provided";
  const portfolio = escapeHtml(safeText(input.portfolio ?? "", 500)) || "Not provided";
  const source = escapeHtml(safeText(input.source ?? "", 200)) || "Not provided";
  const submittedAtIst = escapeHtml(input.submittedAtIst);

  const coverLetterRaw = safeText(input.coverLetter ?? "", 8000);
  const coverLetter = coverLetterRaw ? nl2br(escapeHtml(coverLetterRaw)) : "Not provided";

  const mailtoHref = `mailto:${encodeURIComponent(safeText(input.email, 254))}`;

  const rows: Array<[string, string]> = [
    ["Position", jobTitle],
    ["Name", fullName],
    ["Email", `<a href="${mailtoHref}" style="color:#1a3c6e;text-decoration:underline;">${email}</a>`],
    ["Phone", phone],
    ["LinkedIn", linkedIn],
    ["Portfolio", portfolio],
    ["Source", source],
    ["Applied At (IST)", submittedAtIst],
  ];

  const tableRows = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#0F172A;width:32%;vertical-align:top;"><strong>${k}</strong></td>
        <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#0F172A;vertical-align:top;">${v}</td>
      </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New Job Application</title>
  </head>
  <body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;background:#F1F5F9;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
            <tr>
              <td style="background:#0D1117;border-radius:8px 8px 0 0;padding:16px 18px;">
                <div style="font-size:16px;font-weight:800;color:#FFFFFF;">
                  New Job Application
                </div>
                <div style="margin-top:4px;font-size:12px;color:#94A3B8;">
                  Vallorex Technologies
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:#FFFFFF;border-radius:0 0 8px 8px;padding:18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:8px;border-collapse:separate;border-spacing:0;overflow:hidden;">
                  ${tableRows}
                </table>

                <div style="margin-top:18px;">
                  <div style="font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#64748B;margin-bottom:8px;">
                    Cover Letter
                  </div>
                  <div style="font-size:13px;line-height:1.6;color:#0F172A;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:12px;">
                    ${coverLetter}
                  </div>
                </div>

                <div style="margin-top:16px;">
                  <a href="${mailtoHref}" style="display:inline-block;background:#F97316;color:#0D1117;text-decoration:none;font-weight:800;font-size:14px;padding:12px 16px;border-radius:8px;">
                    Reply to ${fullName}
                  </a>
                </div>

                <div style="font-size:12px;color:#64748B;line-height:1.5;margin-top:14px;">
                  Resume is attached to this email.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

