import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Vallorex Technology",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Effective date: <span className="font-medium text-midnight">January 1, 2026</span>
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-7 text-midnight/90 sm:text-base sm:leading-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">1. Who we are</h2>
            <p>
              Vallorex Technology (&quot;Vallorex,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an
              AI and Blockchain IT services company based in India serving clients globally. This
              Privacy Policy explains how we collect, use, disclose, and protect information when you
              visit our website, contact us, or engage our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">2. Scope</h2>
            <p>
              This policy applies to information we process in connection with our website and our
              marketing and sales activities, including inquiries, proposals, and project discussions.
              It does not cover information handled solely on behalf of a client as a processor within a
              signed services agreement (for example, data you provide to us to build or operate your
              systems). In those cases, client instructions and applicable agreements govern.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">3. Information we collect</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-midnight">A. Information you provide</h3>
                <ul className="list-disc pl-5 text-midnight/90">
                  <li>
                    Contact details such as name, email address, company name, role, phone number (if
                    provided), and any other details you include in forms or messages.
                  </li>
                  <li>
                    Project-related information such as requirements, timelines, budget ranges, technical
                    constraints, and supporting documents you send us.
                  </li>
                  <li>
                    Communications content, including emails, chat messages, and call notes, to the extent
                    permitted by law.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-midnight">B. Information collected automatically</h3>
                <ul className="list-disc pl-5 text-midnight/90">
                  <li>
                    Device and usage data such as IP address, browser type, device identifiers, pages
                    visited, time spent, referring/exit pages, and general location (derived from IP).
                  </li>
                  <li>
                    Cookie and similar tracking data, as described in the Cookies section below.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-midnight">C. Information from third parties</h3>
                <ul className="list-disc pl-5 text-midnight/90">
                  <li>
                    Basic business contact details from public sources or professional networks (for example,
                    name, company, role) where permitted by law.
                  </li>
                  <li>
                    Analytics and advertising data from third-party providers (e.g., aggregated metrics and
                    campaign attribution).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">4. How we use information</h2>
            <p>We use information for the following purposes:</p>
            <ul className="list-disc pl-5 text-midnight/90">
              <li>
                To respond to inquiries, schedule calls, provide proposals, and communicate about our services.
              </li>
              <li>
                To deliver, support, and improve our services, including project execution and client success.
              </li>
              <li>
                To operate, secure, and maintain our website, including debugging and preventing fraud and abuse.
              </li>
              <li>
                To understand website performance and improve content and user experience (analytics).
              </li>
              <li>
                To comply with legal obligations and enforce our agreements.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">5. Legal bases (GDPR-aware)</h2>
            <p>
              If you are in the European Economic Area, the United Kingdom, or another region with similar
              laws, we process personal data under one or more of the following legal bases:
            </p>
            <ul className="list-disc pl-5 text-midnight/90">
              <li>
                <span className="font-semibold text-midnight">Contract</span>: to take steps at your request
                prior to entering into a contract and to perform a contract with you.
              </li>
              <li>
                <span className="font-semibold text-midnight">Legitimate interests</span>: to market our services,
                improve our website, and secure our systems, where those interests are not overridden by your
                rights.
              </li>
              <li>
                <span className="font-semibold text-midnight">Consent</span>: for optional cookies/trackers or
                specific communications where required.
              </li>
              <li>
                <span className="font-semibold text-midnight">Legal obligation</span>: to comply with applicable
                laws and lawful requests.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">6. Cookies and similar technologies</h2>
            <p>
              We use cookies and similar technologies (like pixels and local storage) to operate our website,
              remember preferences, and understand usage. You can learn more in our{" "}
              <Link href="/cookie-policy" className="text-brand-blue font-semibold hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">7. Sharing and disclosure</h2>
            <p>We may share information in the following circumstances:</p>
            <ul className="list-disc pl-5 text-midnight/90">
              <li>
                <span className="font-semibold text-midnight">Service providers</span> that support our business
                (hosting, analytics, CRM, email delivery, security, and collaboration tools). They may access
                data only to perform services for us and are required to protect it.
              </li>
              <li>
                <span className="font-semibold text-midnight">Legal and safety</span> to comply with laws,
                regulations, lawful requests, or to protect rights, safety, and security.
              </li>
              <li>
                <span className="font-semibold text-midnight">Business transfers</span> in connection with a merger,
                acquisition, financing, or sale of assets, where permitted by law.
              </li>
              <li>
                <span className="font-semibold text-midnight">With your direction</span> when you ask us to share
                information or consent to sharing.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">8. International data transfers</h2>
            <p>
              We are based in India and may process information in India and other countries where we or our
              service providers operate. Where required, we use appropriate safeguards for cross-border transfers
              (such as contractual protections and security measures).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">9. Data retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this
              policy, including to provide services, maintain records, resolve disputes, enforce agreements, and
              comply with legal obligations. Retention periods vary based on the type of information and the
              context in which it was collected.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">10. Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational measures designed to protect
              personal information. No method of transmission or storage is 100% secure, so we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">11. Your rights and choices</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict the use of
              your personal information, and to object to certain processing. You may also have the right to data
              portability and to withdraw consent where processing is based on consent.
            </p>
            <p>
              To exercise your rights, contact us at{" "}
              <a className="text-brand-blue font-semibold hover:underline" href="mailto:hello@vallorex.com">
                hello@vallorex.com
              </a>
              . We may request information to verify your identity. You also have the right to lodge a complaint
              with a supervisory authority where applicable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">12. Children&apos;s privacy</h2>
            <p>
              Our website and services are not directed to children under 16, and we do not knowingly collect
              personal information from children. If you believe a child has provided us personal data, contact
              us and we will take appropriate steps.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">13. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will revise the effective date above and,
              if changes are material, we may provide additional notice on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">14. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, contact us at{" "}
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

