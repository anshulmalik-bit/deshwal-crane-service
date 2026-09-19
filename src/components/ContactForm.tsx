'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { PHONE_PRIMARY, EMAIL } from '@/data/equipment';

interface ContactFormProps {
  initialEquipment?: string;
}

export default function ContactForm({ initialEquipment = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    website: '', // Honeypot field for spam prevention
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot validation: bots usually fill hidden inputs
    if (formData.website && formData.website.trim() !== '') {
      // Silently discard spam submission
      setSubmitted(true);
      return;
    }

    // Construct WhatsApp message text
    const messageParts = [
      `*New Equipment Enquiry*`,
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      initialEquipment ? `Equipment: ${initialEquipment}` : null,
      `Message: ${formData.message.trim()}`,
    ].filter(Boolean);

    const formattedMessage = messageParts.join('\n');
    const whatsappUrl = `https://wa.me/91${PHONE_PRIMARY}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white/70 border border-steel/30 p-6 sm:p-8 md:p-10 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block font-heading text-lg uppercase tracking-wide text-charcoal font-semibold mb-1.5"
          >
            Your Name <span className="text-hazard">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full bg-white border border-steel/40 px-4 py-3 text-charcoal font-body placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-hazard focus:border-transparent transition-all rounded-none"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block font-heading text-lg uppercase tracking-wide text-charcoal font-semibold mb-1.5"
          >
            Phone Number <span className="text-hazard">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full bg-white border border-steel/40 px-4 py-3 text-charcoal font-body placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-hazard focus:border-transparent transition-all rounded-none"
          />
        </div>

        {/* Honeypot Field (Anti-spam) - completely hidden from visual users and screen readers */}
        <div aria-hidden="true" className="hidden sr-only opacity-0 absolute -z-10">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="contact-message"
            className="block font-heading text-lg uppercase tracking-wide text-charcoal font-semibold mb-1.5"
          >
            Enquiry Details / Equipment Needed <span className="text-hazard">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your site location, lifting requirements, or project details..."
            className="w-full bg-white border border-steel/40 px-4 py-3 text-charcoal font-body placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-hazard focus:border-transparent transition-all rounded-none resize-y"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-hazard hover:brightness-110 active:scale-95 text-white font-heading font-bold text-lg tracking-wide uppercase px-8 py-3.5 transition-all shadow-sm rounded-none cursor-pointer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Send Enquiry via WhatsApp</span>
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-800 text-sm font-body">
          WhatsApp opened in a new tab. If it did not open, please use the direct WhatsApp link or email below.
        </div>
      )}

      {/* Note below with mailto link */}
      <div className="mt-6 pt-6 border-t border-steel/20 text-center sm:text-left">
        <p className="font-body text-sm text-charcoal/70">
          You can also email us directly at{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-hazard font-semibold hover:underline transition-colors"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
