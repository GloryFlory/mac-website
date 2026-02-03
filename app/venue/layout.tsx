import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Riviera Spa Hotel Malta | 4-Star Luxury Resort | MAC 2026",
  description: "Your home for MAC 2026. Malta's premier 4-star resort with spa, private beach, pools, buffet dining. Easy airport access. Oct 7-11, 2026 accommodation included.",
  keywords: [
    "riviera spa hotel malta",
    "malta luxury resort",
    "4 star hotel malta",
    "acroyoga retreat venue",
    "malta spa hotel",
    "mediterranean resort",
    "malta beach hotel",
    "yoga retreat malta",
  ],
  openGraph: {
    title: "Riviera Spa Hotel | Luxury Venue for MAC 2026",
    description: "4-star luxury resort in Malta. Private beach, spa, pools, buffet dining. Your perfect acro convention home.",
  },
  alternates: {
    canonical: "https://www.acrointhesun.com/venue",
  },
};

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
