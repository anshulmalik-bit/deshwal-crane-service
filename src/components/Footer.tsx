import Link from 'next/link';
import {
  BUSINESS_NAME,
  TAGLINE,
  ADDRESS,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  WHATSAPP_URL,
} from '@/data/equipment';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-concrete border-t border-steel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Business identity & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase tracking-wider text-concrete">
              {BUSINESS_NAME}
            </h3>
            <p className="text-concrete/70 text-sm sm:text-base leading-relaxed max-w-md">
              {TAGLINE}
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 font-heading tracking-wider uppercase font-semibold text-sm transition-colors shadow-sm"
                aria-label="Enquire on WhatsApp"
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
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xl uppercase tracking-wider text-concrete font-bold border-l-2 border-hazard pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-heading text-lg tracking-wide uppercase">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-concrete/70 hover:text-hazard transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & NAP (Name, Address, Phone) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-xl uppercase tracking-wider text-concrete font-bold border-l-2 border-hazard pl-3">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-concrete/70">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-hazard flex-shrink-0 mt-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <address className="not-italic leading-relaxed">
                  {ADDRESS}
                </address>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-hazard flex-shrink-0 mt-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:+91${PHONE_PRIMARY}`}
                    className="hover:text-hazard transition-colors font-medium"
                    aria-label={`Call primary phone ${PHONE_PRIMARY}`}
                  >
                    +91 {PHONE_PRIMARY}
                  </a>
                  <a
                    href={`tel:+91${PHONE_SECONDARY}`}
                    className="hover:text-hazard transition-colors font-medium"
                    aria-label={`Call secondary phone ${PHONE_SECONDARY}`}
                  >
                    +91 {PHONE_SECONDARY}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-hazard flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-hazard transition-colors break-all"
                  aria-label={`Email ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hairline divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-steel/30 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-concrete/60 gap-4">
          <p>© {new Date().getFullYear()} Deshwal Crane Service. All rights reserved.</p>
          <p className="font-heading uppercase tracking-wider text-concrete/50">
            Sonipat • Panipat • Samalkha • All Over India
          </p>
        </div>
      </div>
    </footer>
  );
}
