import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Vallorex Technology",
}

export default function CookiePolicyPage() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            This Cookie Policy explains how Vallorex Technology uses cookies and similar technologies.
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-7 text-midnight/90 sm:text-base sm:leading-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">1. What cookies are</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help the website
              remember information about your visit (for example, your preferences) and can enable core features,
              improve performance, and provide analytics.
            </p>
            <p>
              We may also use similar technologies such as pixels, SDKs, and local storage. For simplicity, we
              refer to all of these as &quot;cookies&quot; in this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">2. How we use cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 text-midnight/90">
              <li>
                <span className="font-semibold text-midnight">Essential cookies</span> to enable core site
                functionality, security, and basic navigation.
              </li>
              <li>
                <span className="font-semibold text-midnight">Analytics cookies</span> to understand how visitors
                use our website so we can improve performance and content (typically aggregated statistics).
              </li>
              <li>
                <span className="font-semibold text-midnight">Preference cookies</span> to remember settings and
                choices that improve your experience (where applicable).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">3. Third-party cookies</h2>
            <p>
              Some cookies may be set by third parties that provide services on our behalf (for example, website
              analytics, performance monitoring, or embedded content). These third parties may collect information
              about your online activities over time and across different websites, depending on their practices.
            </p>
            <p>
              We encourage you to review third-party privacy and cookie disclosures for more details. For broader
              information about our data practices, see our{" "}
              <Link href="/privacy-policy" className="text-brand-blue font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">4. How to manage or disable cookies</h2>
            <p>
              You can control cookies through your browser settings. Most browsers let you remove or reject cookies
              and configure preferences for certain websites. The steps vary by browser, but you can usually find
              them under &quot;Settings&quot; or &quot;Privacy&quot;.
            </p>
            <p>
              Please note that disabling essential cookies may impact website functionality. If you choose to
              delete cookies, your preferences may be reset and you may need to reconfigure them during a future
              visit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">5. Updates to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technologies, legal
              requirements, or our practices. Updates will be posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">6. Contact</h2>
            <p>
              If you have questions about this Cookie Policy, contact us at{" "}
              <a className="text-brand-blue font-semibold hover:underline" href="mailto:hello@vallorex.com">
                hello@vallorex.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

