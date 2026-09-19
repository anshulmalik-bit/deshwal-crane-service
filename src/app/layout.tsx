import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import StructuredData from '@/components/StructuredData';

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deshwalcraneservice.in'),
  title: {
    default: 'Deshwal Crane Service — Crane Hire & Heavy Equipment, Sonipat',
    template: '%s | Deshwal Crane Service',
  },
  description:
    'Deshwal Crane Service provides reliable crane hire and heavy equipment services in Sonipat, Bahalgarh, Panipat, Samalkha, and across India with 17+ years of industry experience.',
  keywords: [
    'crane service Sonipat',
    'crane hire Panipat',
    'crane hire Samalkha',
    'crane service Bahalgarh',
    'heavy equipment rental Sonipat',
    'Hydra crane hire Haryana',
    'Deshwal Crane Service',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-concrete text-charcoal font-body antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
