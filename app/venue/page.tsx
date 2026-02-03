'use client';

import { FC } from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';

const hotelImages = [
  '/hotel/hotel.png',
  '/hotel/Indoorhotelpool.jpg',
  '/hotel/PrivatehotelBeach.jpg',
  '/hotel/Gymhotelspace.jpg',
  '/hotel/Quadruplehotelroomhotelwithhotelpoolhotelview-hotelBalcony.jpg',
  '/hotel/Labranda-Riviera-Premium-Resort-Spa-hotel-Malta-3742488010.jpg',
  '/hotel/Riviera+Hotel+0161-3154228205.jpg',
  '/hotel/labranda-riviera-premium-264396273.jpg',
];

const VenuePage: FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sun/10 rounded-full mb-6">
                <svg className="w-5 h-5 text-brand-sun" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-brand-sea font-semibold">4-Star Luxury Resort</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-6">
                Riviera Spa Hotel
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Experience the world's most luxurious acroyoga festival at Malta's premier resort
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Image Carousel */}
            <Reveal delay={0.1}>
              <div className="sticky top-8">
                <ImageCarousel 
                  images={hotelImages}
                  alt="Riviera Spa Hotel Malta - Luxury Resort"
                />
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-6">
                  Your Home for MAC 2026
                </h2>
                
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Immerse yourself in luxury at Malta's premier 4-star resort. The Riviera Spa Hotel combines Mediterranean elegance with world-class amenities, creating the perfect setting for the most sophisticated acroyoga convention in the world.
                </p>

                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  Located on Malta's stunning coastline, the hotel offers breathtaking sea views, modern facilities, and everything you need for an unforgettable convention experience. From sunrise sessions overlooking the Mediterranean to sunset jams on the beach, every moment at the Riviera will be magical.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    href="https://maps.app.goo.gl/9fstZkiCXVTqHPZZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    View on Google Maps
                  </Button>
                  <Button
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="lg"
                  >
                    Book Your Spot
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Features Grid */}
          <Reveal delay={0.3}>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-8 text-center">
                World-Class Amenities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Luxury Accommodations</h3>
                    <p className="text-zinc-600">Modern rooms with stunning Mediterranean views, comfortable beds, air conditioning, and premium amenities to ensure you rest well after intense training sessions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Full-Service Spa</h3>
                    <p className="text-zinc-600">Rejuvenate between sessions with professional massages, wellness treatments, and spa facilities. Perfect for recovery and self-care during the convention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Delicious Buffet</h3>
                    <p className="text-zinc-600">Extensive breakfast and dinner buffets with loads of options catering to all dietary requirements including vegetarian, vegan, and gluten-free choices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Private Beach Access</h3>
                    <p className="text-zinc-600">Exclusive access to the hotel's private beach area with stunning Mediterranean views. Perfect for morning swims, sunset jams, and relaxation between workshops.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Indoor & Outdoor Pools</h3>
                    <p className="text-zinc-600">Multiple swimming pools including a heated indoor pool and spacious outdoor pool with sun loungers. Great for cooling off and socializing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30">
                  <svg className="w-8 h-8 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-sea mb-2 text-lg">Fitness Center</h3>
                    <p className="text-zinc-600">Modern gym facilities with cardio equipment, weights, and training areas. Maintain your fitness routine or warm up before workshops.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Location Section */}
          <Reveal delay={0.4}>
            <div className="bg-gradient-to-br from-brand-sea/5 to-brand-sand/10 rounded-3xl p-8 sm:p-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-6 text-center">
                Easy to Reach
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-6 h-6 text-brand-sea flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      <strong className="text-brand-sea">From Malta International Airport:</strong>
                    </p>
                    <ul className="mt-2 space-y-2 text-zinc-600">
                      <li>• <strong>By Bus:</strong> Approximately 1 hour via public transport (affordable and scenic)</li>
                      <li>• <strong>By Car/Taxi:</strong> 30-45 minutes direct drive</li>
                      <li>• <strong>By Shuttle:</strong> Shared transfers available (details provided after booking)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-zinc-600 leading-relaxed mb-6">
                  The hotel is conveniently located on Malta's northern coast, offering easy access to the island's attractions while providing a peaceful retreat for your acro practice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="https://maps.app.goo.gl/9fstZkiCXVTqHPZZ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    View on Google Maps
                  </Button>
                  <Button
                    href="/info"
                    variant="secondary"
                    size="lg"
                  >
                    More Travel Info
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-white to-brand-sand/20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea">
                Ready for the Experience?
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Secure your spot at MAC 2026 and experience world-class acro training in a luxury Mediterranean resort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Get Tickets
                </Button>
                <Button
                  href="/schedule"
                  variant="secondary"
                  size="lg"
                >
                  View Schedule
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default VenuePage;
