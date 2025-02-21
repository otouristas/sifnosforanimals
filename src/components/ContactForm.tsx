'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

interface ContactFormProps {
  animalName?: string;
  compact?: boolean;
}

export default function ContactForm({ animalName, compact = false }: ContactFormProps) {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: animalName ? translations.contact.form.placeholders.adoptSubject.replace('{name}', animalName) : '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // TODO: Implement actual form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
          {translations.contact.form.name}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="mt-1.5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder={translations.contact.form.placeholders.name}
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
          {translations.contact.form.email}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="mt-1.5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={translations.contact.form.placeholders.email}
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
          {translations.contact.form.subject}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="mt-1.5">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={animalName 
              ? translations.contact.form.placeholders.adoptSubject.replace('{name}', animalName)
              : translations.contact.form.placeholders.subject}
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
          {translations.contact.form.comments}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="mt-1.5">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={animalName 
              ? translations.contact.form.placeholders.adoptMessage.replace('{name}', animalName)
              : translations.contact.form.placeholders.message}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`
            relative w-full rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-sm
            transition-all duration-200 ease-in-out
            ${status === 'submitting' 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            }
          `}
        >
          <span className="relative flex items-center justify-center">
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {animalName 
                  ? translations.contact.form.submit.adoptSending.replace('{name}', animalName)
                  : translations.contact.form.submit.sending}
              </>
            ) : (
              animalName 
                ? translations.contact.form.submit.adopt.replace('{name}', animalName)
                : translations.contact.form.submit.default
            )}
          </span>
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                {translations.contact.successMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                {translations.contact.errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
