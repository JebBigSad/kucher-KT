import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IDYLL — База отдыха в лесу',
  description: 'Уютные домики, свежий воздух и тишина в сердце природы.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}