import { Metadata } from 'next';
import FlowGridEmbed from '../components/FlowGridEmbed';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export const metadata: Metadata = {
  title: 'Schedule | Mediterranean Acro Convention 2026',
  description: 'Browse the full interactive workshop schedule for MAC 2026. Filter by level, teacher, and style to plan your perfect convention experience.',
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-6">
              MAC Schedule
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Interactive schedule — filter by level, teacher, or style to build your perfect convention experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FlowGrid Feature Card */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Built with FlowGrid
                  </h2>
                  <p className="text-zinc-600">
                    The modern scheduling platform designed for events like ours.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-sea flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-zinc-700">
                    <strong className="font-semibold">View prerequisites</strong> — See required skill levels for each workshop
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-sea flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-zinc-700">
                    <strong className="font-semibold">Build your personal schedule</strong> — Select workshops and create your perfect day
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-sea flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-zinc-700">
                    <strong className="font-semibold">Export to your calendar</strong> — Sync your schedule to Google Calendar, iCal, or Outlook
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-sea flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-zinc-700">
                    <strong className="font-semibold">Mobile-friendly</strong> — Access your schedule on the go, no app needed
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schedule Embed */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.2}>
            <p className="text-center text-zinc-600 mb-4">
              The full 2026 schedule will be published soon. Below is last year's schedule as a preview of what to expect!
            </p>
            <div className="rounded-2xl overflow-hidden border border-brand-sand/30 shadow-lg">
              <iframe
                src="https://www.tryflowgrid.com/embed/mac-2025"
                className="w-full h-[75vh] sm:h-[80vh]"
                title="MAC 2025 Schedule Preview"
                allow="fullscreen"
              />
            </div>
            <p className="text-center text-sm text-zinc-500 mt-4">
              Schedule powered by{' '}
              <a
                href="https://tryflowgrid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sea hover:text-brand-sun transition-colors underline underline-offset-2 font-medium"
              >
                FlowGrid
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-white to-brand-sand/20">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-4">
              Love This Schedule System?
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              FlowGrid makes it easy to create beautiful, interactive schedules for your events, retreats, and festivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="https://tryflowgrid.com" 
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary" 
                size="lg"
              >
                Try FlowGrid for Your Event
              </Button>
              <Button href="/#pricing" variant="primary" size="lg">
                Get MAC Tickets
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
