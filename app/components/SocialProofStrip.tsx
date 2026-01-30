import { FC } from 'react';
import Reveal from './Reveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Professional Acroyogi',
    quote: 'An unforgettable experience that transformed my practice and connected me with amazing people.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marco Rossi',
    role: 'Acro Instructor',
    quote: 'The level of teaching and community spirit here is unmatched. Can\'t wait for next year!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Luna Garcia',
    role: 'First-time Attendee',
    quote: 'As a beginner, I felt welcomed and supported every step of the way. Life-changing week!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Thompson',
    role: 'Returning Participant',
    quote: 'Third year attending and it keeps getting better. The perfect blend of learning and fun.',
    rating: 5,
  },
];

const SocialProofStrip: FC = () => {
  return (
    <section className="bg-gradient-to-b from-brand-sand/20 to-white dark:from-zinc-900 dark:to-zinc-950 py-16 sm:py-20 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium mb-2">
              Trusted by the Community
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-brand-sun fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Rated 5/5 by our participants
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <div
                className="bg-white dark:bg-zinc-900 border border-neutral-200/20 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-brand-sun fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                <p className="font-semibold text-zinc-900 dark:text-white text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
