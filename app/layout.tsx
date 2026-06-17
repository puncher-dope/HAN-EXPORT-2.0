import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'HAN EXPORT — Экспорт автомобилей из Кореи в Россию',
  description: 'Прямой экспорт автомобилей из Южной Кореи в Россию. Надежная доставка, прозрачные цены, полный сервис оформления.',
  openGraph: {
    title: 'HAN EXPORT — Экспорт автомобилей из Кореи в Россию',
    description: 'Прямой экспорт автомобилей из Южной Кореи в Россию',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
