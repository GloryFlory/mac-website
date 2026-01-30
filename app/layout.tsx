import type { Metadata, Viewport } from "next";
import { inter, playfair } from './fonts';
import Header from './components/Header';
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#106EA9',
};

export const metadata: Metadata = {
  title: "Mediterranean Acro Convention 2026 | Malta",
  description: "Five days of world-class acro training, connection, and Mediterranean sunsets. Oct 7-11, 2026 in Malta. Join 40+ workshops with international teachers.",
  keywords: ["acro yoga", "acrobatics", "malta", "convention", "workshop", "mediterranean"],
  openGraph: {
    title: "Mediterranean Acro Convention 2026",
    description: "Five days of world-class acro training in Malta. Oct 7-11, 2026.",
    type: "website",
    locale: "en_US",
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
      </body>
    </html>
  );
}
