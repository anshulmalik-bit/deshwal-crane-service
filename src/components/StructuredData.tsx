import {
  BUSINESS_NAME,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  ADDRESS,
  TAGLINE,
} from '@/data/equipment';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    description: TAGLINE,
    telephone: `+91${PHONE_PRIMARY}`,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 10, Shri Ram Market, Bahalgarh Chowk, Bahalgarh',
      addressLocality: 'Sonipat',
      addressRegion: 'Haryana',
      postalCode: '131021',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.9622,
      longitude: 77.0928,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91${PHONE_SECONDARY}`,
        contactType: 'customer service',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Sonipat',
      },
      {
        '@type': 'City',
        name: 'Panipat',
      },
      {
        '@type': 'City',
        name: 'Samalkha',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
