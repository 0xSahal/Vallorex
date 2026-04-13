import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Vallorex Technology",
}

export default function TermsOfServicePage() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted">
            These Terms govern your use of our website and engagement with Vallorex Technology.
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-7 text-midnight/90 sm:text-base sm:leading-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, contacting us, or engaging our services, you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the website or services.
              If you are using our website or services on behalf of an entity, you represent that you have
              authority to bind that entity to these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">2. About Vallorex and our Services</h2>
            <p>
              Vallorex Technology (&quot;Vallorex,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an AI and Blockchain IT
              services company based in India serving global clients. Our services may include, without limitation:
            </p>
            <ul className="list-disc pl-5 text-midnight/90">
              <li>AI &amp; Machine Learning engineering (including model integration, MLOps, LLM systems, and RAG)</li>
              <li>Blockchain development (smart contracts, dApps, DeFi systems, tokenization)</li>
              <li>Security audits (including smart contract reviews and application security assessments)</li>
              <li>Custom SaaS and product engineering (web, backend, cloud infrastructure)</li>
            </ul>
            <p>
              Specific deliverables, timelines, service levels, and pricing are defined in written statements of
              work, proposals, or master services agreements (collectively, &quot;Project Terms&quot;).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">3. Website Use</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to misuse the website, including
              by attempting to gain unauthorized access, interfering with availability, or introducing malware.
              We may suspend or block access to protect our website and users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">4. Client Responsibilities</h2>
            <p>
              For project engagements, you agree to provide timely access to information, systems, stakeholders,
              and decisions reasonably required for us to deliver services. You are responsible for the accuracy
              and legality of materials you provide and for maintaining appropriate backups of your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">5. Intellectual Property</h2>
            <div className="space-y-4">
              <p>
                <span className="font-semibold text-midnight">Our IP.</span> The website content, brand assets,
                design elements, and materials provided by Vallorex are owned by Vallorex or its licensors and
                are protected by applicable intellectual property laws.
              </p>
              <p>
                <span className="font-semibold text-midnight">Project deliverables.</span> Ownership of project
                deliverables, source code, documentation, and other work product is governed by the Project Terms.
                Unless otherwise agreed in writing, you receive a license to use deliverables for your internal
                business purposes upon full payment.
              </p>
              <p>
                <span className="font-semibold text-midnight">Pre-existing materials.</span> Each party retains
                ownership of its pre-existing tools, libraries, templates, and know-how. Where Vallorex uses
                reusable components in deliverables, we may provide a license to use them as part of the
                deliverables, subject to the Project Terms.
              </p>
              <p>
                <span className="font-semibold text-midnight">Open-source software.</span> Deliverables may include
                third-party or open-source components subject to their respective licenses. You agree to comply
                with those license terms.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">6. Payment and Project Terms</h2>
            <p>
              Fees, invoicing cadence, payment timelines, and scope are defined in the Project Terms. Unless
              otherwise stated, invoices are due upon receipt. Late payments may result in pausing work, delaying
              delivery, and/or additional charges as permitted by law. Change requests and out-of-scope work may
              require a written change order and additional fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">7. Confidentiality</h2>
            <p>
              During discussions and projects, each party may receive confidential information of the other. Each
              party agrees to protect the other&apos;s confidential information using reasonable care and to use it
              only for the purpose of evaluating or performing the engagement. Additional confidentiality terms
              may be included in a separate non-disclosure agreement (NDA).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">8. Disclaimers</h2>
            <p>
              Our website and any publicly available materials are provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. To the maximum extent permitted by law, Vallorex disclaims all warranties, whether express,
              implied, or statutory, including implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </p>
            <p>
              AI/ML and blockchain systems can involve probabilistic behavior, third-party dependencies, and
              rapidly evolving standards. Unless expressly stated in Project Terms, Vallorex does not guarantee
              specific outcomes, performance metrics, regulatory approval, or uninterrupted operation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Vallorex will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill,
              arising from or relating to the website, services, or these Terms, even if advised of the
              possibility of such damages.
            </p>
            <p>
              To the maximum extent permitted by law, Vallorex&apos;s total liability for claims relating to these
              Terms or the services will not exceed the amounts paid to Vallorex for the specific services giving
              rise to the claim during the three (3) months preceding the event giving rise to liability, unless a
              different limit is specified in the Project Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">10. Termination</h2>
            <p>
              We may suspend or terminate your access to the website at any time for security, maintenance, or
              suspected misuse. Project engagements may be terminated according to the Project Terms, including
              for material breach or non-payment. Upon termination, you remain responsible for fees incurred for
              work performed through the termination date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India, without regard to conflict-of-law principles. Any
              disputes arising from these Terms or related to the website or services will be subject to the
              exclusive jurisdiction of the competent courts in India, unless otherwise specified in the Project
              Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">12. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes to our services, business, or legal
              requirements. Continued use of the website after changes become effective constitutes acceptance of
              the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-midnight">13. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a className="text-brand-blue font-semibold hover:underline" href="mailto:hello@vallorex.com">
                hello@vallorex.com
              </a>
              . For privacy questions, see our{" "}
              <Link href="/privacy-policy" className="text-brand-blue font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

