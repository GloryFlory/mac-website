import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | Mediterranean Acro Convention",
  description: "Terms and conditions for MAC 2026. Registration, cancellation policy, refunds, liability waiver, and event guidelines.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mediterraneanacroconvention.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
