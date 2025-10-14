import type { Metadata } from 'next';
import { Inter, Righteous } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cosplay Battles',
  description:
    'Cosplay Battles is a blockchain-based platform featuring competitive cosplay battles, gacha systems, and exciting gameplay. Join the community and compete!',
  keywords: [
    'Cosplay Battles',
    'Cosplay',
    'COT',
    'Blockchain',
    'Crypto',
    'Gaming',
    'NFT',
    'Web3',
    'Competition',
  ],
  openGraph: {
    title: 'Cosplay Battles',
    description:
      'Cosplay Battles is a blockchain-based platform featuring competitive cosplay battles, gacha systems, and exciting gameplay.',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Cosplay Battles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosplay Battles',
    description:
      'Cosplay Battles is a blockchain-based platform featuring competitive cosplay battles, gacha systems, and exciting gameplay.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Cosplay Battles</title>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>

      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
