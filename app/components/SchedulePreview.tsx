import { FC } from 'react';
import Button from './Button';
import Reveal from './Reveal';

const SchedulePreview: FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea dark:text-white mb-4">
              Interactive Schedule
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Browse 40+ workshops across 5 days. Filter by level, teacher, or style to plan your perfect experience.
            </p>
          </div>
        </Reveal>

        {/* Preview Card */}
        <Reveal delay={0.2}>
          <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 dark:from-zinc-800 dark:to-zinc-900 border border-neutral-200/20 dark:border-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
            {/* FlowGrid Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm rounded-full border border-neutral-200/40 dark:border-zinc-700 mb-8">
              <svg
                className="w-4 h-4 text-brand-sea dark:text-brand-sun"
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
              <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                Powered by FlowGrid
              </span>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-brand-sea/10 dark:bg-brand-sea/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-5 h-5 text-brand-sea dark:text-brand-sun"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Filter by Level
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Find workshops matching your experience
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-brand-sea/10 dark:bg-brand-sea/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-5 h-5 text-brand-sea dark:text-brand-sun"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Browse Teachers
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  See all classes from your favorites
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-brand-sea/10 dark:bg-brand-sea/20 flex items-center justify-center mx-auto">
                  <svg
                    className="w-5 h-5 text-brand-sea dark:text-brand-sun"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  Mobile Friendly
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Access your schedule on the go
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              href="/schedule"
              variant="primary"
              size="lg"
            >
              Explore the Interactive Schedule
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SchedulePreview;
