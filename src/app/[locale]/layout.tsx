import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../common/styles/globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'm2.visual - Profesjonalne remonty w Krakowie | Wykończenia wnętrz',
    template: '%s | m2.visual',
  },
  description:
    'Profesjonalne remonty mieszkań i domów w Krakowie. Wykończenia wnętrz, generalne remonty, malowanie, płytki, podłogi. Doświadczony zespół, wysokiej jakości materiały, konkurencyjne ceny.',
  keywords: [
    'remonty Kraków',
    'wykończenia wnętrz Kraków',
    'generalne remonty',
    'malowanie ścian',
    'układanie płytek',
    'montaż podłóg',
    'remonty mieszkań',
    'm2.visual',
    'budowlanka Kraków',
  ],
  authors: [{ name: 'm2.visual' }],
  creator: 'm2.visual',
  publisher: 'm2.visual',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://m2visual.pl'),
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
      'en-US': '/en',
      'uk-UA': '/ua',
    },
  },
  openGraph: {
    title: 'm2.visual - Profesjonalne remonty w Krakowie',
    description:
      'Wykończenia wnętrz i generalne remonty w Krakowie. Profesjonalna ekipa, wysokiej jakości materiały, terminowość wykonania.',
    url: 'https://m2visual.pl',
    siteName: 'm2.visual',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'm2.visual - Profesjonalne remonty w Krakowie',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'm2.visual - Profesjonalne remonty w Krakowie',
    description:
      'Wykończenia wnętrz i generalne remonty w Krakowie. Profesjonalna ekipa, wysokiej jakości materiały.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
