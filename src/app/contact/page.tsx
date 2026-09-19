import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  WHATSAPP_URL,
  ADDRESS,
  BUSINESS_NAME,
} from '@/data/equipment';

export const metadata: Metadata = {
  title: 'Contact Deshwal Crane Service — Call 9053402400',
  description:
    'Contact Deshwal Crane Service in Bahalgarh, Sonipat for heavy equipment rental, mobile cranes, and site machinery. Call 9053402400 or message via WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-graphite py-16 md:py-24 border-b border-steel/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading text-hazard text-sm sm:text-base font-bold uppercase tracking-widest block mb-2">
            Direct Equipment Enquiries
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-concrete">
            Contact Us
          </h1>
          <p className="mt-4 text-concrete/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch with {BUSINESS_NAME} for fast equipment mobilization, project rates, and site requirements.
          </p>
        </div>
      </section>

      {/* Main Section: Details + Form */}
      <section className="py-12 md:py-16 bg-concrete">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-steel/20 p-6 sm:p-8 shadow-sm">
                <div className="w-10 h-1 bg-hazard mb-6" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div>
                    <span className="font-heading text-xs uppercase tracking-widest text-steel font-bold block mb-1">
                      Direct Phone Lines
                    </span>
                    <div className="space-y-1">
                      <a
                        href={`tel:+91${PHONE_PRIMARY}`}
                        className="font-heading text-xl sm:text-2xl font-bold text-charcoal hover:text-hazard transition-colors block"
                      >
                        +91 {PHONE_PRIMARY}
                      </a>
                      <a
                        href={`tel:+91${PHONE_SECONDARY}`}
                        className="font-heading text-lg sm:text-xl font-bold text-charcoal/80 hover:text-hazard transition-colors block"
                      >
                        +91 {PHONE_SECONDARY}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="pt-4 border-t border-steel/20">
                    <span className="font-heading text-xs uppercase tracking-widest text-steel font-bold block mb-1">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-body text-base sm:text-lg font-medium text-charcoal hover:text-hazard transition-colors break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="pt-4 border-t border-steel/20">
                    <span className="font-heading text-xs uppercase tracking-widest text-steel font-bold block mb-2">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-bold text-base uppercase tracking-wider px-5 py-2.5 shadow-sm transition-colors"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Office & Yard Address */}
                  <div className="pt-4 border-t border-steel/20">
                    <span className="font-heading text-xs uppercase tracking-widest text-steel font-bold block mb-1">
                      Office &amp; Yard Location
                    </span>
                    <p className="font-body text-base text-charcoal leading-relaxed">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas Box */}
              <div className="bg-graphite text-concrete p-6 border border-steel/30">
                <span className="font-heading text-xs uppercase tracking-widest text-hazard font-bold block mb-2">
                  Operating Hubs
                </span>
                <p className="font-heading text-lg uppercase tracking-wide text-concrete font-semibold">
                  Sonipat &bull; Bahalgarh &bull; Panipat &bull; Samalkha &bull; Pan-India
                </p>
                <p className="font-body text-xs text-concrete/70 mt-2">
                  Conveniently situated on the NH44 highway corridor for rapid dispatch.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 border border-steel/20 shadow-sm">
              <div className="mb-6">
                <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-1">
                  Send A Message
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal">
                  Request Equipment Availability
                </h2>
                <p className="font-body text-sm text-steel mt-1">
                  Fill out the form below. Submitting will open WhatsApp pre-filled with your requirements.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Below: Full-width Google Map */}
          <div className="mt-12 md:mt-16 bg-white p-6 sm:p-8 border border-steel/20 shadow-sm">
            <div className="mb-6">
              <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-1">
                Directions &amp; Map
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal">
                Our Location at Bahalgarh Chowk
              </h2>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
