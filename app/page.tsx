import ParallaxHero from './components/ParallaxHero';
import SocialProofStrip from './components/SocialProofStrip';
import WhatYouGet from './components/WhatYouGet';
import TeachersPreview from './components/TeachersPreview';
import SchedulePreview from './components/SchedulePreview';
import PricingSection from './components/PricingSection';
import FaqAccordion from './components/FaqAccordion';
import FinalCTA from './components/FinalCTA';
import VenueSection from './components/VenueSection';
import MediaGallery from './components/MediaGallery';
import Button from './components/Button';
import dynamic from 'next/dynamic';

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
      {/* 1. Parallax Hero */}
      <ParallaxHero
        backgroundVideo="/MAC.mp4"
        overlay={true}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Event Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' }}>
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

      {/* 6. Media Gallery Section - White Background */}
      <MediaGallery />

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
