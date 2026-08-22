import { FC } from 'react';
import Reveal from './Reveal';
import { testimonials } from '@/lib/testimonials';

const SocialProofStrip: FC = () => {
  return (
    <section className="bg-gradient-to-b from-brand-sand/20 to-white py-16 sm:py-20 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-zinc-500 font-medium mb-2">
              Loved by Our Community
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
            <p className="text-sm text-zinc-600">
              Rated 5/5 by MAC 2025 participants
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {/* Mobile: Scroll hint */}
          <div className="md:hidden text-center mb-2">
            <p className="text-sm text-zinc-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              Swipe to see more reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </p>
          </div>
          
          {/* Mobile horizontal scroll container */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 0.1}>
                <div
                  className="flex-shrink-0 w-[85vw] max-w-sm bg-white border border-neutral-200/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 snap-center"
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
                  <blockquote className="text-zinc-700 text-sm leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-zinc-200 pt-4">
                    <p className="font-semibold text-zinc-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop grid */}
          {testimonials.map((testimonial, index) => (
            <Reveal key={`desktop-${testimonial.id}`} delay={index * 0.1}>
              <div
                className="hidden md:block bg-white border border-neutral-200/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
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
              <blockquote className="text-zinc-700 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-zinc-200 pt-4">
                <p className="font-semibold text-zinc-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500 mt-1">
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
