import { escapeHtml, labelBudget, labelProjectType, safeText } from "./_shared";

export function buildContactConfirmationEmail(input: {
  fullName: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  servicesUrl: string;
}): string {
  const fullName = escapeHtml(safeText(input.fullName, 200));
  const company = escapeHtml(safeText(input.company ?? "", 200)) || "-";
  const projectType = escapeHtml(labelProjectType(safeText(input.projectType ?? "", 50)));
  const budgetRange = escapeHtml(labelBudget(safeText(input.budgetRange ?? "", 50)));
  const servicesUrl = escapeHtml(input.servicesUrl);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>We’ve received your message - Vallorex Technologies</title>
  </head>
  <body style="margin:0;padding:0;background:#0D1117;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      We’ve received your message and will respond within 1 business day.
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0D1117;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
            <tr>
              <td style="background:#0D1117;padding:0 0 16px 0;">
                <div style="font-size:18px;font-weight:800;letter-spacing:0.5px;color:#FFFFFF;">
                  Vallorex <span style="color:#F97316;">Technologies</span>
                </div>
                <div style="margin-top:6px;font-size:13px;color:#94A3B8;">
                  We build AI, Blockchain, and Product Engineering solutions.
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:#FFFFFF;border-radius:8px;padding:22px 22px 18px 22px;">
                <div style="font-size:16px;font-weight:700;color:#0D1117;margin:0 0 10px 0;">
                  Hi ${fullName},
                </div>
                <div style="font-size:14px;line-height:1.55;color:#0D1117;margin:0 0 14px 0;">
                  Thanks for reaching out to Vallorex Technologies. We’ve received your inquiry and a team member will respond within <strong>1 business day</strong>.
                </div>

                <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:14px 14px;margin:14px 0 18px 0;">
                  <div style="font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#64748B;margin-bottom:10px;">
                    Submission summary
                  </div>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;width:42%;"><strong>Project Type</strong></td>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;">${projectType}</td>
                    </tr>
                    <tr>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;"><strong>Budget Range</strong></td>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;">${budgetRange}</td>
                    </tr>
                    <tr>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;"><strong>Company</strong></td>
                      <td style="font-size:13px;color:#0D1117;padding:6px 0;">${company}</td>
                    </tr>
                  </table>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 6px 0;">
                  <tr>
                    <td>
                      <a href="${servicesUrl}" style="display:inline-block;background:#F97316;color:#0D1117;text-decoration:none;font-weight:800;font-size:14px;padding:12px 16px;border-radius:8px;">
                        Explore Our Services
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="font-size:12px;color:#64748B;line-height:1.5;margin-top:10px;">
                  If you didn’t submit this request, you can ignore this email.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 0 0 0;">
                <div style="font-size:12px;color:#94A3B8;line-height:1.6;text-align:center;">
                  hello@vallorex.com &nbsp;|&nbsp; vallorex.com<br/>
                  © 2026 Vallorex Technologies
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

