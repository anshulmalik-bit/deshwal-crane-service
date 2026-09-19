import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BUSINESS_NAME,
  TAGLINE,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_URL,
  equipment,
} from '@/data/equipment';

export const metadata: Metadata = {
  title: 'Deshwal Crane Service — Heavy Equipment & Crane Hire in Sonipat',
  description:
    'Deshwal Crane Service offers Hydra cranes, forklifts, crawler cranes, and heavy equipment hire in Sonipat, Bahalgarh, Panipat, Samalkha, and across India with 17+ years of experience.',
};

const serviceAreas = [
  {
    name: 'Sonipat & Bahalgarh',
    description:
      'Our primary operating base at Bahalgarh Chowk, delivering rapid heavy equipment mobilization across Sonipat and surrounding industrial areas.',
  },
  {
    name: 'Panipat',
    description:
      'Crane and machinery rental support for industrial facilities, manufacturing units, and construction works in Panipat.',
  },
  {
    name: 'Samalkha',
    description:
      'Reliable lifting and earthmoving equipment hire for industrial plants and site infrastructure in Samalkha.',
  },
  {
    name: 'Pan-India',
    description:
      'Equipment deployment and project support for infrastructure, industrial, and construction clients across India.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-graphite py-20 md:py-32 border-b border-steel/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-heading text-hazard text-base sm:text-lg font-bold uppercase tracking-widest block mb-3">
              Heavy Equipment Hire &amp; Rental
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-concrete leading-tight">
              {BUSINESS_NAME}
            </h1>
            <p className="mt-4 text-concrete/80 text-lg md:text-xl font-body leading-relaxed">
              {TAGLINE}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-2.5 bg-hazard hover:brightness-110 active:scale-95 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
                aria-label={`Call ${PHONE_PRIMARY}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Call Now</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
                aria-label="Enquire on WhatsApp"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-concrete py-8 border-b border-steel/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:divide-x md:divide-steel/30">
            <div className="px-4">
              <span className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-wider text-charcoal block">
                17+ Years Experience
              </span>
              <p className="font-body text-steel text-sm sm:text-base font-semibold uppercase tracking-wider mt-1">
                Trusted Heavy Equipment Operations
              </p>
            </div>
            <div className="px-4">
              <span className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-wider text-charcoal block">
                Serving Clients Across India
              </span>
              <p className="font-body text-steel text-sm sm:text-base font-semibold uppercase tracking-wider mt-1">
                Regional Hub with Nationwide Reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-16 md:py-24 border-b border-steel/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-2">
            About Our Company
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-wide text-charcoal mb-6">
            Trusted Heavy Equipment Service Provider
          </h2>
          <p className="text-charcoal/85 font-body text-lg sm:text-xl leading-relaxed">
            Deshwal Crane Service is a trusted and experienced heavy equipment service provider with 17+ years in the industry. We provide reliable, efficient equipment services for construction, industrial, and infrastructure needs.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-heading font-bold text-lg uppercase tracking-wider text-hazard hover:text-hazard/80 transition-colors"
            >
              <span>Learn More About Us</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Equipment Preview Grid */}
      <section className="py-16 md:py-24 border-b border-steel/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-2">
                Machinery Fleet
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-charcoal">
                Our Equipment &amp; Services
              </h2>
            </div>
            <p className="text-steel font-body text-sm sm:text-base mt-2 md:mt-0 max-w-md">
              Reliable lifting, haulage, and site machinery ready for deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {equipment.map((item) => (
              <Link
                key={item.id}
                href={`/services#${item.id}`}
                className="group flex flex-col bg-white border border-steel/20 shadow-sm hover:border-hazard transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-steel/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-charcoal group-hover:text-hazard transition-colors">
                    {item.name}
                  </h3>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-hazard inline-flex items-center gap-1">
                    <span>View Spec</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-graphite hover:bg-charcoal text-concrete font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-8 py-3.5 border border-steel/40 transition-colors shadow-sm"
            >
              <span>View Full Fleet &amp; Specifications</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Areas We Serve */}
      <section className="py-16 md:py-24 border-b border-steel/30 bg-concrete">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-2">
              Coverage &amp; Reach
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-charcoal mb-4">
              Areas We Serve
            </h2>
            <p className="text-charcoal/80 font-body text-base sm:text-lg leading-relaxed">
              Based in Bahalgarh, Sonipat, we provide crane and heavy equipment services across the NH44 corridor including Panipat and Samalkha, and to clients across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white border border-steel/20 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-1 bg-hazard mb-4" />
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-charcoal mb-3">
                    {area.name}
                  </h3>
                  <p className="text-charcoal/80 font-body text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="bg-graphite text-concrete py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-concrete mb-4">
            Need Equipment for Your Project?
          </h2>
          <p className="text-concrete/80 font-body text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Get in touch with our team today to discuss equipment availability, job specifications, and transparent rental rates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={`tel:+91${PHONE_PRIMARY}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-hazard hover:brightness-110 active:scale-95 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Call {PHONE_PRIMARY}</span>
            </a>

            <a
              href={`tel:+91${PHONE_SECONDARY}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-steel/60 text-concrete font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 border border-steel/40 transition-colors shadow-sm"
            >
              <span>Call {PHONE_SECONDARY}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
