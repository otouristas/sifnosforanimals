'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

export default function Footer() {
  const { translations } = useLanguage();

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText('GR4301727130005713102264392');
  };

  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl py-14 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" aria-label="Sifnos for Animals">
              <div className="bg-white rounded-xl p-3 inline-block">
                <Image
                  src="/logofinal.jpg"
                  alt="Sifnos for Animals"
                  width={150}
                  height={50}
                  className="w-36"
                />
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">
              {translations.footer.description}
            </p>
            <p className="text-blue-300 text-xs font-medium uppercase tracking-wide">
              Registered Nonprofit · Sifnos, Greece
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {translations.footer.quickLinks}
            </h3>
            <nav className="flex flex-col space-y-2.5">
              {[
                { href: '/animals', label: translations.navigation.animals },
                { href: '/about', label: translations.navigation.about },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: translations.navigation.contact },
                { href: '/donate', label: translations.navigation.donate },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-200 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Us */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {translations.footer.supportUs}
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all"
              >
                <svg className="w-5 h-5 text-[#009cde]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
                Donate via PayPal
              </a>
              <a
                href="https://www.patreon.com/sifnosforanimals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all"
              >
                <svg className="w-5 h-5 text-[#ff424d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
                </svg>
                Support on Patreon
              </a>
              <div className="bg-white/10 rounded-lg px-4 py-3">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide mb-1">
                  Bank Transfer (IBAN)
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-primary text-xs">GR43 0172 7130 0057 1310 2264 392</span>
                  <button
                    onClick={handleCopyIBAN}
                    className="text-blue-300 hover:text-white transition-colors shrink-0"
                    title="Copy IBAN"
                    aria-label="Copy IBAN to clipboard"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-blue-300 text-xs mt-1">SWIFT/BIC: PIRBGRAA7</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {translations.footer.customerCare}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@sifnosforanimals.gr"
                className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sifnosforanimals.gr
              </a>
              <p className="flex items-center gap-2 text-blue-200 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Apollonia, Sifnos, Cyclades, Greece
              </p>
              <div className="pt-2">
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/sifnosforanimals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#1877f2] rounded-lg p-2 transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sifnosforanimals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] rounded-lg p-2 transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Sifnos for Animals. All rights reserved.
          </p>
          <p className="text-blue-400 text-xs">
            Made with ♥ for the animals of Sifnos
          </p>
        </div>
      </div>
    </footer>
  );
}
