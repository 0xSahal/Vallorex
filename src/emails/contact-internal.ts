import { escapeHtml, labelBudget, labelProjectType, nl2br, safeText } from "./_shared";

export function buildContactInternalEmail(input: {
  fullName: string;
  workEmail: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budgetRange?: string;
  projectDetails: string;
  submittedAtIst: string;
}): string {
  const fullName = escapeHtml(safeText(input.fullName, 200));
  const workEmail = escapeHtml(safeText(input.workEmail, 254));
  const company = escapeHtml(safeText(input.company ?? "", 200)) || "-";
  const phone = escapeHtml(safeText(input.phone ?? "", 100)) || "-";
  const projectType = escapeHtml(labelProjectType(safeText(input.projectType ?? "", 50)));
  const budgetRange = escapeHtml(labelBudget(safeText(input.budgetRange ?? "", 50)));
  const projectDetails = nl2br(escapeHtml(safeText(input.projectDetails, 8000))) || "-";
  const submittedAtIst = escapeHtml(input.submittedAtIst);

  const rows: Array<[string, string]> = [
    ["Full Name", fullName],
    ["Work Email", workEmail],
    ["Company", company],
    ["Phone", phone],
    ["Project Type", projectType],
    ["Budget Range", budgetRange],
    ["Project Details", projectDetails],
    ["Submitted At (IST)", submittedAtIst],
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

  const mailtoHref = `mailto:${encodeURIComponent(safeText(input.workEmail, 254))}`;

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;background:#F1F5F9;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
            <tr>
              <td style="background:#0D1117;border-radius:8px 8px 0 0;padding:16px 18px;">
                <div style="font-size:16px;font-weight:800;color:#FFFFFF;">
                  New Contact Form Submission
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

                <div style="margin-top:16px;">
                  <a href="${mailtoHref}" style="display:inline-block;background:#F97316;color:#0D1117;text-decoration:none;font-weight:800;font-size:14px;padding:12px 16px;border-radius:8px;">
                    Reply to ${fullName}
                  </a>
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

