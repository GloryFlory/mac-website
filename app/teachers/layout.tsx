import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Teachers | MAC 2026 Malta',
  description: 'World-class acroyoga teachers at MAC 2026. Headliners Coni & Mati and Michal & Klara, plus featured duos Lloydie & Flo, Eli & Bagaz, and Manas & Mira. Oct 7-11, Malta.',
  keywords: [
    'acroyoga teachers',
    'acro convention teachers',
    'coni and mati',
    'michal and klara',
    'eli and bagaz',
    'manas and mira',
    'acroyoga instructors malta',
    'international acroyoga teachers',
    'acro workshops malta 2026',
  ],
  openGraph: {
    title: 'Meet the Teachers | Mediterranean Acro Convention 2026',
    description: 'World-class headliners and featured duos from Chile, Slovakia, Spain, India and beyond. 40+ workshops across all levels.',
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/teachers',
  },
};

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
