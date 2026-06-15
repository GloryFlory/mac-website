import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giveaway Draw',
  robots: { index: false, follow: false },
};

export default function GiveawayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
