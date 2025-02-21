'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { translations } = useLanguage();

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {translations.contact.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {translations.contact.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {translations.contact.getInTouch}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {translations.contact.getInTouchText}
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {translations.contact.location}
                </h3>
                <address className="mt-3 space-y-1 text-gray-600 not-italic">
                  <p>{translations.contact.address.line1}</p>
                  <p>{translations.contact.address.line2}</p>
                  <p>{translations.contact.address.line3}</p>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {translations.contact.website}
                </h3>
                <p className="mt-3 text-gray-600">
                  <a href="https://www.sifnosforanimals.org" className="text-blue-600 hover:text-blue-500">
                    www.sifnosforanimals.org
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {translations.contact.followSupport}
                </h3>
                <div className="mt-3 space-y-3">
                  <a
                    href="https://www.facebook.com/sifnosforanimals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                    <span className="ml-3">{translations.contact.social.facebook}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/sifnosforanimals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-pink-600"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                    <span className="ml-3">{translations.contact.social.instagram}</span>
                  </a>
                  <a
                    href="https://twitter.com/sifnosforanimals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
                    <span className="ml-3">{translations.contact.social.twitter}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl lg:max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
