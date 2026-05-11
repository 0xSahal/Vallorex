import Link from "next/link";
import Image from "next/image";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const linkClass =
  "text-muted text-sm hover:text-white transition-colors";

/** Matches `Navbar` inner bar wrapper — same horizontal bounds as the header. */
const NAV_SHELL_CLASS =
  "container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between w-full";

const aiEngineeringLinks: { label: string; href: string }[] = [
  { label: "AI Strategy & Roadmap", href: "/services/ai-strategy-roadmap" },
  { label: "Custom LLM Development", href: "/services/custom-llm-development" },
  { label: "AI Agents & Automation", href: "/services/ai-agents-automation" },
  { label: "ML Ops & Infrastructure", href: "/services/ml-ops-infrastructure" },
  { label: "AI Development", href: "/services/ai-development" },
  { label: "ML & Data Pipelines", href: "/services/ml-data-pipelines" },
];

const blockchainLinks: { label: string; href: string }[] = [
  { label: "Smart Contract Development", href: "/services/smart-contract-development" },
  { label: "DeFi Protocol Design", href: "/services/defi-protocol-design" },
  { label: "Layer 2 & Rollups", href: "/services/layer2-rollups" },
  { label: "NFT & Token Engineering", href: "/services/nft-token-engineering" },
  { label: "Smart Contract Audits", href: "/services/smart-contract-audits" },
  { label: "Blockchain Engineering", href: "/services/blockchain-engineering" },
  { label: "Web3 Integration", href: "/services/web3-integration" },
];

const dataAnalyticsLinks: { label: string; href: string }[] = [
  { label: "Data Platform Engineering", href: "/services/data-platform-engineering" },
  { label: "Business Intelligence", href: "/services/business-intelligence" },
  { label: "Predictive Analytics", href: "/services/predictive-analytics" },
  { label: "Cloud Data Migration", href: "/services/cloud-data-migration" },
];

const companyLinks: { label: string; href: string }[] = [
  { label: "About Us", href: "/company" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technologies", href: "/technologies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-semibold text-sm uppercase tracking-wide text-white/90 mb-4 lg:mb-6">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className={linkClass}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-midnight text-white pt-24 pb-12 border-t border-white/10">
      <div className={NAV_SHELL_CLASS}>
        {/* Row 1 — main content */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-12 lg:gap-8 mb-16">
          {/* Column 1 — Brand (full width on mobile + tablet; one column on lg) */}
          <div className="col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="mb-6 inline-flex h-10 max-h-11 items-center justify-center sm:justify-start sm:h-11" aria-label="Vallorex Technology home">
              <Image
                src="/vallorex-logo-dark.png"
                alt=""
                width={320}
                height={80}
                sizes="(max-width: 768px) 200px, 240px"
                className="h-full w-auto max-w-[min(100%,14rem)] object-contain object-center sm:object-left sm:max-w-[15rem]"
                aria-hidden
              />
            </Link>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto sm:mx-0 sm:max-w-xs leading-relaxed">
              The premier engineering partner for AI and Blockchain ventures.
            </p>
            <div className="text-sm">
              <a href="mailto:hello@vallorex.com" className="text-muted hover:text-white transition-colors">
                hello@vallorex.com
              </a>
            </div>
            <div className="mt-6 flex gap-4 justify-center sm:justify-start">
              <a href="https://www.linkedin.com/company/vallorex/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1Az3xVy6Xt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-blue transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/vallorex.technology/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-blue transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com/Vallorex_tech" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-brand-blue transition-colors" aria-label="X">
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterLinkColumn title="AI Engineering" links={aiEngineeringLinks} />
          <FooterLinkColumn title="Blockchain" links={blockchainLinks} />
          <FooterLinkColumn title="Data & Analytics" links={dataAnalyticsLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />
        </div>
      </div>

      <div className={NAV_SHELL_CLASS}>
        {/* Row 2 — bottom bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:items-center md:text-left">
          <p className="text-muted text-sm order-1">
            © {currentYear} Vallorex Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted order-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
