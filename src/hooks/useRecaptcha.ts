"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback } from "react";

/**
 * Call getToken(action) before any form submission.
 * Pass a unique action name per form (e.g. contact_form, job_application).
 */
export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = useCallback(
    async (action: string): Promise<string | null> => {
      if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured");
        return null;
      }
      if (!executeRecaptcha) {
        console.warn("reCAPTCHA not ready yet");
        return null;
      }
      try {
        return await executeRecaptcha(action);
      } catch (err) {
        console.error("reCAPTCHA error:", err);
        return null;
      }
    },
    [executeRecaptcha]
  );

  return { getToken };
}
