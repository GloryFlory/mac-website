import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Mediterranean Acro Convention",
  description: "Privacy policy for Mediterranean Acro Convention 2026. Learn how we collect, use, and protect your personal data.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.acrointhesun.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
