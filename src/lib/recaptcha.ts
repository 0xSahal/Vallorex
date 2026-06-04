const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const SCORE_THRESHOLD = 0.5;

export type RecaptchaVerifyResult =
  | { success: true; score: number }
  | { success: false; score?: number; message: string };

export async function verifyRecaptchaToken(
  token: string | undefined | null
): Promise<RecaptchaVerifyResult> {
  if (!token || typeof token !== "string") {
    return { success: false, message: "Token missing" };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    return { success: false, message: "reCAPTCHA not configured" };
  }

  const response = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
  });

  const data = (await response.json()) as {
    success?: boolean;
    score?: number;
    "error-codes"?: string[];
  };

  const score = typeof data.score === "number" ? data.score : undefined;

  if (!data.success || (score !== undefined && score < SCORE_THRESHOLD)) {
    return {
      success: false,
      score,
      message: "reCAPTCHA verification failed",
    };
  }

  return { success: true, score: score ?? 1 };
}
