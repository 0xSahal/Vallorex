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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-flex h-10 max-h-11 items-center sm:h-11" aria-label="Vallorex Technology home">
              <Image
                src="/vallorex-logo-dark.png"
                alt=""
                width={320}
                height={80}
                sizes="(max-width: 768px) 200px, 240px"
                className="h-full w-auto max-w-[min(100%,14rem)] object-contain object-left sm:max-w-[15rem]"
                aria-hidden
              />
            </Link>
            <p className="text-muted text-sm mb-6 max-w-xs leading-relaxed">
              The premier engineering partner for AI and Blockchain ventures. Institutional quality from day one.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white/90">Email:</span>
                <a href="mailto:hello@vallorex.com" className="hover:text-white transition-colors">hello@vallorex.com</a>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
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

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-6 tracking-tight">Services</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/services/ai-engineering" className="hover:text-white transition-colors">AI Engineering</Link>
              </li>
              <li>
                <Link href="/services/blockchain" className="hover:text-white transition-colors">Blockchain</Link>
              </li>
              <li>
                <Link href="/services/smart-contract-audits" className="hover:text-white transition-colors">Smart Contract Audits</Link>
              </li>
              <li>
                <Link href="/services/product-engineering" className="hover:text-white transition-colors">Product Engineering</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-6 tracking-tight">Company</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {currentYear} Vallorex Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
