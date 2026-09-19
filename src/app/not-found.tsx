import Link from 'next/link';
import { PHONE_PRIMARY, PHONE_SECONDARY } from '@/data/equipment';

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-concrete">
      <div className="max-w-xl w-full text-center bg-white border border-steel/20 p-8 sm:p-12 shadow-sm">
        <span className="font-heading text-7xl sm:text-9xl font-bold text-hazard block tracking-wider leading-none">
          404
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-wide text-charcoal mt-4 mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-md mx-auto mb-8">
          The page you are looking for does not exist. It may have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-hazard hover:brightness-110 active:scale-95 text-white font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-8 py-3.5 shadow-sm transition-all"
          >
            <span>Return to Home</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-graphite hover:bg-charcoal text-concrete font-heading font-bold text-base sm:text-lg uppercase tracking-wider px-8 py-3.5 border border-steel/40 transition-colors shadow-sm"
          >
            <span>View Services</span>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-steel/20 text-center">
          <p className="font-body text-xs sm:text-sm text-steel uppercase tracking-wider font-semibold">
            Need equipment immediately?
          </p>
          <div className="mt-2 flex items-center justify-center gap-4 font-heading text-lg font-bold text-charcoal">
            <a
              href={`tel:+91${PHONE_PRIMARY}`}
              className="hover:text-hazard transition-colors"
            >
              +91 {PHONE_PRIMARY}
            </a>
            <span className="text-steel/50" aria-hidden="true">
              |
            </span>
            <a
              href={`tel:+91${PHONE_SECONDARY}`}
              className="hover:text-hazard transition-colors"
            >
              +91 {PHONE_SECONDARY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
