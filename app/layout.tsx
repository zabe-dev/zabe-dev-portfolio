import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  title: 'Jay Beza - Home',
  description: 'Jay builds clean, dependable websites and practical technical solutions.',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: 'Jay — Frontend Developer',
    description: 'Clean, dependable websites and practical technical solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jay — Frontend Developer',
    description: 'Clean, dependable websites and practical technical solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${lora.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
