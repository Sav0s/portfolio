import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Provider from './provider';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'fabian hauser | portfolio',
  description: 'full-stack developer portfolio of fabian hauser.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className={jetbrainsMono.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
