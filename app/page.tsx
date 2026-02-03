import ParallaxHero from './components/ParallaxHero';
import SocialProofStrip from './components/SocialProofStrip';
import WhatYouGet from './components/WhatYouGet';
import TeachersPreview from './components/TeachersPreview';
import SchedulePreview from './components/SchedulePreview';
import PricingSection from './components/PricingSection';
import FaqAccordion from './components/FaqAccordion';
import FinalCTA from './components/FinalCTA';
import VenueSection from './components/VenueSection';
import MemoryStrip from './components/MemoryStrip';
import Button from './components/Button';
import StructuredData from './components/StructuredData';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mediterranean Acro Convention 2026 | Luxury Acroyoga in Malta",
  description: "The world's most luxurious acroyoga convention. Oct 7-11, 2026 at Malta's 4-star Riviera Spa Hotel. 40+ workshops, world-class teachers, all-inclusive package with accommodation and meals.",
  openGraph: {
    title: "Mediterranean Acro Convention 2026 | Malta's Premier Acroyoga Event",
    description: "5 days of elite acro training in paradise. Luxury resort, international teachers, all-inclusive experience. Oct 7-11, 2026.",
  },
  alternates: {
    canonical: "https://mediterraneanacroconvention.com",
  },
};

// Lazy load components below the fold for better initial load
const DynamicSchedulePreview = dynamic(() => import('./components/SchedulePreview'), {
  loading: () => <div className="py-20 bg-white" />,
});

const DynamicPricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <div className="py-20" />,
});

const DynamicFaqAccordion = dynamic(() => import('./components/FaqAccordion'), {
  loading: () => <div className="py-20 bg-white" />,
});

export default function Home() {
  return (
    <main>
      <StructuredData />
      
      {/* 1. Parallax Hero */}
      <ParallaxHero
        backgroundVideo="/MACYoutube4K.mp4"
        overlay={true}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Event Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)' }}>
            Mediterranean Acro
            <br />
            Convention
          </h1>

          {/* Date Line */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide mb-8" style={{ color: '#FFFFFF', textShadow: 'none' }}>
            Oct 7–11, 2026 <span style={{ color: '#FFFFFF', opacity: 0.9 }}>•</span> Malta
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light" style={{ color: '#FFFFFF', textShadow: 'none' }}>
            Five days of world-class training, connection, and Mediterranean sunsets with the global acro community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              href="#pricing"
              variant="primary"
              size="lg"
            >
              Get Tickets
            </Button>
            <Button
              href="#teachers"
              variant="secondary"
              size="lg"
              className="text-white border-white/40 hover:bg-white/10 focus:ring-offset-black"
            >
              Meet the Teachers
            </Button>
          </div>

          {/* Quick Stats Chips */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white font-medium text-sm sm:text-base">
                40+ Workshops
              </span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white font-medium text-sm sm:text-base">
                All Levels Welcome
              </span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white font-medium text-sm sm:text-base">
                Community Vibe
              </span>
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* 2. Social Proof Strip - Sand Background */}
      <SocialProofStrip />

      {/* 3. What You Get Section - White Background */}
      <WhatYouGet />

      {/* 4. Venue Section - White Background */}
      <VenueSection />

      {/* 5. Teachers Preview Section - Sand Background */}
      <section id="teachers" className="scroll-mt-20">
        <TeachersPreview />
      </section>

      {/* 6. Memory Strip Section - Editorial Photo Strip */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brand-sand/10 to-white">
        <div className="max-w-7xl mx-auto px-0">
          {/* YouTube Video - MAC 2025 Aftermovie */}
          <div className="max-w-5xl mx-auto px-6 mb-16">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea mb-4">
                MAC 2025 Aftermovie
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Relive the magic from last year's unforgettable convention
              </p>
            </div>
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/G-waKLp3U_8?si=QenXpymwUFj1JsRO"
                title="MAC 2025 Aftermovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Photo Strip */}
          <div className="text-center mb-8 px-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
              Photo Highlights
            </h3>
            <a
              href="https://www.instagram.com/giusvisual/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-sea hover:text-brand-sun transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>📸 Photos by Gius Visual</span>
            </a>
          </div>
          <MemoryStrip 
            images={[
              'https://lh3.googleusercontent.com/d/1l9fdwj0pOlxdx9_pnn19AakZbRhJiX2a',
              'https://lh3.googleusercontent.com/d/1A1DrxgFL68GmunFzO7HwoUMVmeh0UyIu',
              'https://lh3.googleusercontent.com/d/1SksPd1ar5A2RXrZYD5qpmHFsaukXsLoU',
              'https://lh3.googleusercontent.com/d/1YtidjKEX7L_xvOOSYJzaLGLL4nlA3qhF',
              'https://lh3.googleusercontent.com/d/1RmgEfk4KPsgWtJ41NbxqNFVYZonZSwXe',
              'https://lh3.googleusercontent.com/d/12CuB5BEbLActX52DLYtIb5pTXJzdE5Eb',
              'https://lh3.googleusercontent.com/d/1UzG5nqhlQ7nHfyiNMd2pSwvSjsd8FwO8',
              'https://lh3.googleusercontent.com/d/1rfilTHsc553Z4Sj4tEplGKllKVy4Uj1Q',
              'https://lh3.googleusercontent.com/d/1KIVknWEipQqlV2fYIgI8midm7F7_AsjL',
              'https://lh3.googleusercontent.com/d/1L5ohkjRAu1aRlIpfTa2ZvAXGM1X_8GFz',
              'https://lh3.googleusercontent.com/d/1GGY39lyjw_I7oMQ9Y-qGXqHssWnT38H6',
              'https://lh3.googleusercontent.com/d/11gdie8Cv0FqKigJuReM3ppa6jySiI3Hd',
              'https://lh3.googleusercontent.com/d/1rCQeZlUhWFz8dgQsnZtVy3IcrvJ3Thc9',
              'https://lh3.googleusercontent.com/d/1cy_Q_QHsyM-M9icYl2vMYivrvPJQEGs5',
              'https://lh3.googleusercontent.com/d/1_DNpAVZNLiouYe7vWIPV9sokwZAgib9B',
              'https://lh3.googleusercontent.com/d/1oRimFXuqF0B-75CuoMXmbaYxA7ekvPlv',
              'https://lh3.googleusercontent.com/d/1CzzFWq8IUbeomNBPfLxhwWoGMvZsFHYC',
              'https://lh3.googleusercontent.com/d/1Dd7a6fPdSQDVnRt13mud6cNm4iQxVSMr',
              'https://lh3.googleusercontent.com/d/1i_T_SEUUbWXNDZQB-TTyYPhmHPhQvq_x',
              'https://lh3.googleusercontent.com/d/1wVzYduJ1Rb77jZtCxrA1oZOaXcD3nsbs',
              'https://lh3.googleusercontent.com/d/1YZwv6dehQKZWar2KDO6kYtT8-UMJXCqD',
              'https://lh3.googleusercontent.com/d/1yIqM27Vr1br-4K6M1z3rTeUONPMubcYo',
              'https://lh3.googleusercontent.com/d/1Bi_fmLCX05xNwkPIMAA8vDc9IjjT6ir2',
              'https://lh3.googleusercontent.com/d/1RwFLbig-RjNar1WUGWnji0YdS0C-R1-f',
              'https://lh3.googleusercontent.com/d/1iFySpElmpH1YhzmHo5a1hdg19-XsPQuo',
            ]}
            imageHeight={320}
          />
        </div>
      </section>

      {/* 7. Schedule Preview - White Background */}
      <section id="schedule" className="scroll-mt-20">
        <DynamicSchedulePreview />
      </section>

      {/* 8. Pricing Section - Sand Background */}
      <section id="pricing" className="scroll-mt-20">
        <DynamicPricingSection />
      </section>

      {/* 9. FAQ Section - White Background */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <DynamicFaqAccordion />
        </div>
      </section>

      {/* 10. Final CTA Section - Sea Background */}
      <FinalCTA />
    </main>
  );
}
