import './globals.scss';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Providers from './Providers/Providers';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code with SaintCode!',
  description: 'Frontend learning app',
};

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={jetBrains.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
