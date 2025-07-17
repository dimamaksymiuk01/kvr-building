/* core */
import '@/common/styles/globals.scss';
import '@/common/styles/normalize.css';
/* components */
import HorizontalLayout from '@/common/layout/horizontal/HorizontalLayout';
/* instruments */
import { Montserrat } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'KVR-BUILDING',
  description: 'KVR-BUILDING',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' }],
    shortcut: '/icon512_rounded.png',
    apple: [{ url: '/icon512_rounded.png', sizes: '512x512', type: 'image/png' }],
  },
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TESLA-POSHUK',
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
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider>
          <HorizontalLayout>{children}</HorizontalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
