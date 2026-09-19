import type { Metadata } from 'next';
import Link from 'next/link';
import EquipmentCard from '@/components/EquipmentCard';
import {
  equipment,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_URL,
} from '@/data/equipment';

export const metadata: Metadata = {
  title: 'Crane Rental & Equipment Hire — Deshwal Crane Service, Sonipat',
  description:
    'Explore our fleet of heavy equipment including Hydra cranes, new generation cranes, forklifts, backhoe loaders, soil compactors, and recovery vans available for hire in Sonipat, Panipat, Samalkha, and across India.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-graphite py-16 md:py-24 border-b border-steel/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading text-hazard text-sm sm:text-base font-bold uppercase tracking-widest block mb-2">
            Fleet Specifications &amp; Hire
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-concrete">
            Our Equipment &amp; Services
          </h1>
          <p className="mt-4 text-concrete/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reliable heavy equipment solutions for construction, industrial lifting, and infrastructure projects across Sonipat, Panipat, Samalkha, and nationwide.
          </p>
        </div>
      </section>

      {/* Equipment Spec-Sheet Layout */}
      <section className="py-12 md:py-16 bg-concrete">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {equipment.map((item, index) => (
              <div key={item.id} id={item.id} className="scroll-mt-24">
                <EquipmentCard equipment={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-graphite text-concrete py-16 border-t border-steel/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-concrete mb-4">
            Need Equipment for Your Job Site?
          </h2>
          <p className="text-concrete/80 font-body text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Contact us today for availability, equipment mobilization, and competitive rental terms tailored to your project schedule.
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

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-steel/60 text-concrete font-heading font-bold text-lg uppercase tracking-wider px-8 py-3.5 border border-steel/40 transition-colors shadow-sm"
            >
              <span>Send Enquiry Form</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
