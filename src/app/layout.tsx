import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fabian Hauser | Portfolio',
  description: 'Personal portfolio of Fabian Hauser.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
