import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'HAN EXPORT — Экспорт автомобилей из Кореи в Россию',
  description: 'Прямой экспорт автомобилей из Южной Кореи в Россию. Надежная доставка, прозрачные цены, полный сервис оформления.',
  keywords: 'экспорт автомобилей, импорт машин из Кореи, автомобили из Кореи в Россию, корейские авто, HAN EXPORT',
  authors: [{ name: 'HAN EXPORT' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  robots: 'index, follow',
  openGraph: {
    title: 'HAN EXPORT — Экспорт автомобилей из Кореи в Россию',
    description: 'Прямой экспорт автомобилей из Южной Кореи в Россию. Надежная доставка, прозрачные цены.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAN EXPORT — Экспорт автомобилей из Кореи в Россию',
    description: 'Прямой экспорт автомобилей из Южной Кореи в Россию',
  },
  alternates: {
    canonical: 'https://han-export.ru',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'HAN EXPORT',
            'url': 'https://han-export.ru',
            'description': 'Экспорт автомобилей из Кореи в Россию',
            'sameAs': [],
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'Customer Support',
              'availableLanguage': ['ru']
            }
          })}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
