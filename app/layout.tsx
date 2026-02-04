import type { Metadata, Viewport } from "next";
import { inter, playfair } from './fonts';
import Header from './components/Header';
import Footer from './components/Footer';
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#106EA9',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acrointhesun.com'),
  title: {
    default: "Mediterranean Acro Convention 2026 | Malta | Oct 7-11",
    template: "%s | Mediterranean Acro Convention 2026"
  },
  description: "Join the world's most luxurious L-Base and Flow acroyoga convention. 5 days of elite training at Malta's 4-star Riviera Spa Hotel. Oct 7-11, 2026. 40+ workshops, international teachers, all-inclusive experience.",
  keywords: [
    "acro yoga malta",
    "acroyoga convention",
    "l-base acroyoga",
    "flow acroyoga",
    "acro convention 2026",
    "mediterranean acro",
    "acrobatics malta",
    "acroyoga festival",
    "acro training malta",
    "partner acrobatics",
    "acro workshops",
    "luxury yoga retreat malta",
    "riviera spa hotel malta",
    "malta fitness retreat",
    "acro teachers",
    "international acro event"
  ],
  authors: [{ name: "Mediterranean Acro Convention" }],
  creator: "Mediterranean Acro Convention",
  publisher: "Mediterranean Acro Convention",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.acrointhesun.com",
    siteName: "Mediterranean Acro Convention",
    title: "Mediterranean Acro Convention 2026 | World's Most Luxurious Acroyoga Event",
    description: "5 days of elite acro training at Malta's luxury Riviera Spa Hotel. Oct 7-11, 2026. 40+ workshops with world-class teachers. All-inclusive experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Acro Convention 2026 - Malta",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean Acro Convention 2026 | Malta",
    description: "5 days of world-class acro training in Malta. Oct 7-11, 2026.",
    images: ["/og-image.jpg"],
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
    // Add these when available:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
