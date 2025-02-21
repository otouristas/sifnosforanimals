'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="bg-[#e9ecec]">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Logo and Description */}
          <div className="text-center md:text-left space-y-4">
            <Link href="/">
              <Image
                src="/logofinal.jpg"
                alt="Sifnos for Animals"
                width={180}
                height={60}
                className="mix-blend-multiply"
              />
            </Link>
            <p className="text-[#7d7d7d] text-sm mt-4">
              {translations.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#06a9ec] font-semibold mb-4">{translations.footer.quickLinks}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/animals" className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors">
                {translations.navigation.animals}
              </Link>
              <Link href="/about" className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors">
                {translations.navigation.about}
              </Link>
              <Link href="/contact" className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors">
                {translations.navigation.contact}
              </Link>
              <Link href="/donate" className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors">
                {translations.navigation.donate}
              </Link>
            </nav>
          </div>

          {/* Support Us */}
          <div className="text-center md:text-left">
            <h3 className="text-[#06a9ec] font-semibold mb-4">{translations.footer.supportUs}</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.067 8.478c.492.315.844.897.844 1.572 0 .898-.725 1.624-1.622 1.624h-2.89l-.81 3.976h2.89c.898 0 1.622.726 1.622 1.624 0 .675-.352 1.257-.844 1.572.492.315.844.897.844 1.572 0 .898-.725 1.624-1.622 1.624h-3.762l-.79 3.876c-.118.579-.625.999-1.218.999H9.757c-.593 0-1.1-.42-1.218-.999l-.79-3.876H4.555c-.897 0-1.622-.726-1.622-1.624 0-.675.352-1.257.844-1.572-.492-.315-.844-.897-.844-1.572 0-.898.725-1.624 1.622-1.624h2.89l-.81-3.976h-2.89c-.897 0-1.622-.726-1.622-1.624 0-.675.352-1.257.844-1.572-.492-.315-.844-.897-.844-1.572 0-.898.725-1.624 1.622-1.624h3.762l.79-3.876C7.657 2.42 8.164 2 8.757 2h3.486c.593 0 1.1.42 1.218.999l.79 3.876h3.762c.897 0 1.622.726 1.622 1.624 0 .675-.352 1.257-.844 1.572z"/>
                </svg>
                PayPal
              </a>
              <a 
                href="https://www.patreon.com/sifnosforanimals" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7d7d7d] hover:text-[#06a9ec] text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
                </svg>
                Patreon
              </a>
              <div className="pt-2 text-[#7d7d7d] text-sm">
                <p className="font-semibold mb-1">{translations.footer.bankTransfer}:</p>
                <p className="font-mono text-[#06a9ec]">GR4301727130005713102264392</p>
                <p className="text-xs mt-1">SWIFT/BIC: PIRBGRAA7</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-[#06a9ec] font-semibold mb-4">{translations.footer.customerCare}</h3>
            <div className="space-y-3">
              <p className="text-[#7d7d7d] text-sm">
                <strong>{translations.common.email}:</strong>{' '}
                <a href="mailto:info@sifnosforanimals.gr" className="hover:text-[#06a9ec] transition-colors">
                  info@sifnosforanimals.gr
                </a>
              </p>
              <p className="text-[#7d7d7d] text-sm">
                <strong>{translations.footer.location}:</strong>{' '}
                {translations.footer.locationText}
              </p>
              <div className="pt-4">
                <p className="text-[#7d7d7d] text-sm font-semibold mb-2">{translations.footer.followUs}</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://www.facebook.com/sifnosforanimals" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7d7d7d] hover:text-[#06a9ec] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/sifnosforanimals" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7d7d7d] hover:text-[#06a9ec] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#adaeae] text-center">
          <p className="text-[#adaeae] text-sm">
            {translations.footer.copyright} {new Date().getFullYear()} Sifnos for Animals. {translations.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
