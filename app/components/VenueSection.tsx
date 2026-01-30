import { FC } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import Button from './Button';

const VenueSection: FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-4">
              The Venue
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto">
              Experience the world's most luxurious acroyoga festival at Malta's premier resort
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                alt="Riviera Spa Hotel Malta - Luxury Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.3}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sun/10 rounded-full mb-6">
                <svg className="w-5 h-5 text-brand-sun" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-brand-sea font-semibold">4-Star Luxury Resort</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-4">
                Riviera Spa Hotel
              </h3>
              
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Immerse yourself in luxury at Malta's premier 4-star resort. The Riviera Spa Hotel combines Mediterranean elegance with world-class amenities, creating the perfect setting for the most sophisticated acroyoga convention in the world.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brand-sea mb-1">Luxury Accommodations</h4>
                    <p className="text-zinc-600">Modern rooms with stunning Mediterranean views and premium amenities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brand-sea mb-1">Full-Service Spa</h4>
                    <p className="text-zinc-600">Rejuvenate between sessions with massages and wellness treatments</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brand-sea mb-1">Gourmet Dining</h4>
                    <p className="text-zinc-600">International cuisine with fresh Mediterranean ingredients</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-brand-sea mb-1">Beachfront Access</h4>
                    <p className="text-zinc-600">Private beach area perfect for jam sessions and sunset flows</p>
                  </div>
                </div>
              </div>

              <Button
                href="/info"
                variant="secondary"
                size="lg"
              >
                Learn More About the Venue
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
