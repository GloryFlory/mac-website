import type { Metadata } from 'next';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export const metadata: Metadata = {
  title: "Pre-Festival Intensive — Cancelled | MAC",
  description: "The MAC Pre-Festival Intensive has been cancelled. The main Mediterranean Acro Convention, Oct 7-11, 2026, is still on.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreFestPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-brand-sand/20 to-white">
      <Reveal>
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-6">
            The Pre-Festival Intensive Has Been Cancelled
          </h1>
          <p className="text-lg text-zinc-600 mb-4 leading-relaxed">
            We're sorry for the disappointment — the MAC Pre-Festival Intensive (Oct 3–5) will no longer be taking place.
          </p>
          <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
            Anyone who already registered will be contacted directly about a refund. The main Mediterranean Acro Convention, Oct 7–11, 2026, is still happening as planned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="lg">
              Back to MAC 2026
            </Button>
            <Button
              href="mailto:mediterraneanacroconvention@gmail.com?subject=Pre-Fest Cancellation"
              variant="secondary"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
