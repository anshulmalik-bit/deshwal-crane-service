export default function GoogleMap() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.5!2d77.0928!3d28.9622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU3JzQ0LjAiTiA3N8KwMDUnMzQuMSJF!5e0!3m2!1sen!2sin!4v1';
  const mapFallbackUrl = 'https://maps.google.com/?q=28.9622,77.0928';

  return (
    <div className="w-full space-y-3">
      {/* Aspect-ratio container with rounded corners and steel border */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-steel/30 bg-concrete/50 shadow-sm">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Deshwal Crane Service location on Google Maps"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      {/* Fallback & direct directions link */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-charcoal/70">
        <span>Bahalgarh Chowk, Sonipat (Haryana)</span>
        <a
          href={mapFallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-hazard hover:underline transition-colors"
        >
          <span>Open in Google Maps</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 flex-shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
