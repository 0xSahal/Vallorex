import { escapeHtml, safeText } from "./_shared";

function firstNameFromFullName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return parts[0] || "there";
}

export function buildApplyConfirmationEmail(input: { fullName: string; jobTitle: string }): string {
  const fullName = safeText(input.fullName, 200);
  const jobTitle = escapeHtml(safeText(input.jobTitle, 200));
  const firstName = escapeHtml(firstNameFromFullName(fullName));

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>We’ve received your application - Vallorex</title>
  </head>
  <body style="margin:0;padding:0;background:#0D1117;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      We’ve received your application for ${jobTitle}.
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
                  Thank you for applying.
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:#FFFFFF;border-radius:8px;padding:22px 22px 18px 22px;">
                <div style="font-size:16px;font-weight:800;color:#1a3c6e;margin:0 0 10px 0;">
                  Dear ${firstName},
                </div>
                <div style="font-size:14px;line-height:1.6;color:#0F172A;margin:0 0 12px 0;">
                  We’ve received your application for <strong>${jobTitle}</strong>.
                </div>

                <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:14px 14px;margin:14px 0 16px 0;">
                  <div style="font-size:12px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#64748B;margin-bottom:8px;">
                    What happens next
                  </div>
                  <div style="font-size:14px;line-height:1.6;color:#0F172A;">
                    Our team reviews all applications within <strong>5–7 business days</strong>.
                    If your profile matches our requirements, we’ll reach out to schedule a conversation.
                  </div>
                </div>

                <div style="font-size:14px;line-height:1.6;color:#0F172A;margin:0 0 10px 0;">
                  Sincerely,<br/>
                  <strong>The Vallorex Talent Team</strong>
                </div>

                <div style="font-size:12px;color:#64748B;line-height:1.5;margin-top:10px;">
                  If you didn’t apply for a role at Vallorex, you can ignore this email.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 0 0 0;">
                <div style="font-size:12px;color:#94A3B8;line-height:1.6;text-align:center;">
                  careers@vallorex.com &nbsp;|&nbsp; vallorex.com<br/>
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

