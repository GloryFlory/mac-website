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
    name: 'Matteo',
    role: 'MAC 2025 Participant',
    quote: 'Extrasensory experience, strong ties and a lot of positive energy shared. I\'ll be back without a doubt.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Raquel',
    role: 'MAC 2025 Participant',
    quote: 'MAC was a lovely convention, with great teachers, comfortable space and sweet people to play with. The organising team created a sweet and safe environment for everyone.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Giulia',
    role: 'MAC 2025 Participant',
    quote: 'I really enjoyed the festival—the vibe, the quality of the teaching, and the venue were all fantastic. I felt truly lucky to attend a few workshops where it felt more like one-on-one coaching—which was absolutely priceless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Aida',
    role: 'MAC 2025 Participant',
    quote: 'The MAC has been my favorite Acro Festival / Convention so far - extremely nice people, wonderful food and great rooms, professional organization and basically everything you could possibly wish for!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jakub',
    role: 'MAC 2025 Participant',
    quote: 'I am so happy that I had a chance to be a part of MAC 2025. It was A-W-E-S-O-M-E, everything! Organizers, people, teachers, workshops, accommodation, food, vibe, everything!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Aneta',
    role: 'MAC 2025 Participant',
    quote: 'Very well arranged! Good food, nice hotel, app with the schedule, good communication during the stay. Nice workshops. Would like to come back!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Clara',
    role: 'MAC 2025 Participant',
    quote: 'Loved it! Beautiful venue, great teachers and lovely people. Malta is also a great place to stay for an extended vacation.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Mikael',
    role: 'MAC 2025 Participant',
    quote: 'Best reason to visit Malta, amazing festival with warm and talented teachers from all around the world! Will definitely come back next year!',
    rating: 5,
  },
];

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
