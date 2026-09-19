import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PHONE_PRIMARY, WHATSAPP_URL } from '@/data/equipment';

export const metadata: Metadata = {
  title: 'About Deshwal Crane Service — 17+ Years in Heavy Equipment',
  description:
    'Learn about Deshwal Crane Service, a trusted heavy equipment service provider with 17+ years in the industry serving Sonipat, Panipat, Samalkha, and clients across India.',
};

const equipmentTypes = [
  { name: 'Hydra Cranes', href: '/services#hydra-crane' },
  { name: 'New Generation Cranes', href: '/services#new-generation-crane' },
  { name: 'Forklifts', href: '/services#forklift' },
  { name: 'Truck-Mounted Cranes', href: '/services' },
  { name: 'Backhoe Loaders', href: '/services#backhoe-loader' },
  { name: 'Soil Compactors', href: '/services#soil-compactor' },
  { name: 'Tower Cranes', href: '/services' },
  { name: 'Recovery Vans', href: '/services#recovery-van' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-graphite py-16 md:py-24 border-b border-steel/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading text-hazard text-sm sm:text-base font-bold uppercase tracking-widest block mb-2">
            Company Overview
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-concrete">
            About Deshwal Crane Service
          </h1>
          <p className="mt-4 text-concrete/80 font-body text-lg max-w-2xl mx-auto">
            17+ Years of Reliable Heavy Equipment Service — Based in Sonipat, Serving Clients Across India
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 border-b border-steel/30 bg-concrete">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-steel/20 p-8 sm:p-12 shadow-sm">
            <div className="w-12 h-1 bg-hazard mb-6" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal mb-6">
              Our Experience &amp; Commitment
            </h2>
            <p className="text-charcoal/90 font-body text-lg sm:text-xl leading-relaxed">
              Deshwal Crane Service is a trusted and experienced heavy equipment service provider with 17+ years in the industry. We provide reliable, efficient equipment services for construction, industrial, and infrastructure needs — including Hydra cranes, new generation cranes, forklifts, truck-mounted cranes, backhoe loaders, soil compactors, tower cranes, and recovery vans. Our focus is safety, reliability, and timely service so every project gets the right equipment when it is needed.
            </p>
          </div>

          {/* Storefront Photo — Real Business Premises */}
          <div className="mt-12 bg-white border border-steel/20 p-6 sm:p-8 shadow-sm">
            <div className="w-10 h-1 bg-hazard mb-4" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal mb-4">
              Our Premises at Bahalgarh Chowk
            </h2>
            <div className="overflow-hidden border border-steel/20">
              <Image
                src="/images/storefront.webp"
                alt="Deshwal Crane Service shopfront at Bahalgarh Chowk, Sonipat — located next to P.L. Traders"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-charcoal/70 font-body text-sm leading-relaxed">
              Our office and yard at Shop No. 10, Shri Ram Market, Bahalgarh Chowk, Bahalgarh, Sonipat, Haryana 131021 — conveniently located on the NH44 corridor.
            </p>
          </div>

          {/* Equipment Types Section */}
          <div className="mt-12">
            <div className="mb-6">
              <span className="font-heading text-hazard text-sm uppercase tracking-widest font-bold block mb-1">
                Fleet Range
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-charcoal">
                Equipment We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {equipmentTypes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group bg-white border border-steel/20 p-4 shadow-sm hover:border-hazard transition-colors flex items-center justify-between"
                >
                  <span className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-charcoal group-hover:text-hazard transition-colors">
                    {item.name}
                  </span>
                  <span
                    className="text-steel group-hover:text-hazard text-sm font-semibold transition-colors"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-graphite text-concrete p-8 sm:p-10 border border-steel/30 text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-concrete mb-3">
              Ready to Discuss Your Project Requirements?
            </h3>
            <p className="text-concrete/80 font-body text-base sm:text-lg max-w-xl mx-auto mb-6">
              Reach out to our team for equipment availability, deployment schedules, and competitive rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-hazard hover:brightness-110 active:scale-95 text-white font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
              >
                <span>Get in touch</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-steel/60 text-concrete font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-6 py-3.5 border border-steel/40 transition-colors"
              >
                <span>Call {PHONE_PRIMARY}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-6 py-3.5 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
