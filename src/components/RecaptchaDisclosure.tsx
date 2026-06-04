export function RecaptchaDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-muted leading-relaxed ${className}`.trim()}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-midnight"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-midnight"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
