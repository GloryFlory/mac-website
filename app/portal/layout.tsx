import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teacher Portal | MAC 2026',
  robots: { index: false, follow: false },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
