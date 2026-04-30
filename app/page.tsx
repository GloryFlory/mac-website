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
  title: "Mediterranean Acro Convention 2026 | L-Base & Flow Acroyoga in Malta",
  description: "The world's most luxurious acroyoga vacation. Oct 7-11, 2026 at Malta's 4-star Riviera Spa Hotel. 5-day L-Base and Flow retreat with world-class teachers, all-inclusive resort package, and Mediterranean paradise.",
  openGraph: {
    title: "Mediterranean Acro Convention 2026 | The Most Luxurious Acroyoga Vacation",
    description: "5-day luxury acro retreat in Malta. Elite L-Base and Flow training, 4-star spa resort, international teachers, all-inclusive experience. Oct 7-11, 2026.",
  },
  alternates: {
    canonical: "https://www.acrointhesun.com",
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
        backgroundVideo="random"
        overlay={true}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-28 sm:pt-32 md:pt-28 pb-12 sm:pb-16">
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

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sun/90 backdrop-blur-sm rounded-full">
              <span className="text-zinc-900 font-semibold text-sm sm:text-base">L-Base & Flow Focused</span>
            </div>
            <a href="/pre-fest" className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:border-brand-sun hover:bg-white/20 transition-all rounded-full group">
              <span className="w-2 h-2 rounded-full bg-brand-sun flex-shrink-0 animate-pulse"></span>
              <span className="text-white font-semibold text-sm sm:text-base">NEW: Pre-Fest Intensive · Oct 3–5</span>
              <svg className="w-3.5 h-3.5 text-brand-sun group-hover:translate-x-0.5 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light" style={{ color: '#FFFFFF', textShadow: 'none' }}>
            The world's most luxurious acroyoga vacation. Five days of elite L-Base and Flow training in Mediterranean paradise.
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
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center max-w-full px-4">
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex-shrink-0">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                40+ Workshops
              </span>
            </div>
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex-shrink-0">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                All Levels Welcome
              </span>
            </div>
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex-shrink-0">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                4-Star Resort
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
              <span>Photos by Gius Visual</span>
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

      {/* Pre-Fest Teaser Strip */}
      <section className="py-10 px-6 bg-[#0a4d75]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 bg-brand-sun rounded-full items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#F1B139' }}>Oct 3–5 · Before the Main Event</p>
              <div className="font-serif text-xl sm:text-2xl font-bold" style={{ color: 'white' }}>
                Pre-Festival Intensive — Limited to 30 spots
              </div>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.92)' }}>
                3 days of deep-dive Icarians & Whips training with Mads & Gavin and Pri & Anna. Accommodation + meals included.
              </p>
            </div>
          </div>
          <Button
            href="/pre-fest"
            variant="secondary"
            size="md"
            className="bg-brand-sun text-zinc-900 border-brand-sun hover:bg-brand-sun/90 flex-shrink-0"
          >
            Find Out More →
          </Button>
        </div>
      </section>

      {/* 7. Pricing Section - Sand Background */}
      <section id="pricing" className="scroll-mt-20">
        <DynamicPricingSection />
      </section>

      {/* 8. Schedule Preview - White Background */}
      <section id="schedule" className="scroll-mt-20">
        <DynamicSchedulePreview />
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
