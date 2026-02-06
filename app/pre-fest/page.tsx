import type { Metadata } from 'next';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Pre-Festival Intensive 2026 | MAC",
  description: "An exclusive 3-day intensive focusing on Icarians and Whips before MAC 2026. Limited to 30 intermediate/advanced practitioners. Oct 3-5, 2026.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreFestPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-6 bg-gradient-to-br from-brand-sea via-brand-sea/90 to-brand-sea/80 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            {/* Exclusive Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sun/90 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-5 h-5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-zinc-900 font-semibold text-sm">Limited to 30 Participants</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pre-Festival<br />Intensive
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-brand-sun font-semibold mb-4">
              October 3–5, 2026
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              An exclusive 3-day deep dive into Icarians and Whips with two expert couples
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
              >
                Secure Your Spot
              </Button>
              <Button
                href="#prerequisites"
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20"
              >
                Check Prerequisites
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Teachers Section - RIGHT AFTER HERO */}
      <section className="py-20 sm:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-4">
                Your Expert Instructors
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Learn from two world-class couples specializing in Icarians and Whips
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mads & Julian - Icarians */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-brand-sea/5 to-brand-sea/10 rounded-2xl overflow-hidden border border-brand-sea/20">
                <div className="relative h-80 bg-zinc-200">
                  {/* Placeholder for teacher photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-sea/20 to-brand-sea/5">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🤸</div>
                      <p className="text-brand-sea font-semibold">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-brand-sea mb-1">Mads & Julian</h3>
                    <p className="text-brand-sea/70 font-medium">Icarians Specialists</p>
                  </div>
                  <p className="text-zinc-700 mb-4">
                    Master the art of icarians with Mads and Julian. Their expertise in pop mechanics, height progression, and aerial control will take your practice to new heights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-brand-sea/10 text-brand-sea text-sm rounded-full font-medium">Icarians</span>
                    <span className="px-3 py-1 bg-brand-sea/10 text-brand-sea text-sm rounded-full font-medium">Pops</span>
                    <span className="px-3 py-1 bg-brand-sea/10 text-brand-sea text-sm rounded-full font-medium">Advanced Dynamics</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Duo Liquen - Whips */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-brand-sun/5 to-brand-sun/10 rounded-2xl overflow-hidden border border-brand-sun/30">
                <div className="relative h-80 bg-zinc-200">
                  {/* Placeholder for teacher photo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-sun/20 to-brand-sun/5">
                    <div className="text-center">
                      <div className="text-6xl mb-2">💫</div>
                      <p className="text-brand-sea font-semibold">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-brand-sea mb-1">Pauli & Nacho</h3>
                    <p className="text-brand-sea/70 font-medium">Duo Liquen • Whips & Whip-Pops</p>
                  </div>
                  <p className="text-zinc-700 mb-4">
                    Dive deep into whips and whip-pops with Duo Liquen. Their refined technique and creative approach will elevate your dynamic skills and flow.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-brand-sun/20 text-brand-sea text-sm rounded-full font-medium">Whips</span>
                    <span className="px-3 py-1 bg-brand-sun/20 text-brand-sea text-sm rounded-full font-medium">Whip-Pops</span>
                    <span className="px-3 py-1 bg-brand-sun/20 text-brand-sea text-sm rounded-full font-medium">Flow</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two Training Tracks */}
      <section className="py-20 sm:py-24 px-6 bg-gradient-to-b from-white to-brand-sand/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-4">
                Two Specialized Training Tracks
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Choose your focus or switch between tracks to master both disciplines over 3 intensive days
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Icarians Track */}
            <Reveal delay={0.1}>
              <div className="group relative bg-gradient-to-br from-brand-sea/5 to-brand-sea/10 rounded-3xl overflow-hidden border-2 border-brand-sea/20 hover:border-brand-sea/40 transition-all duration-300 hover:shadow-2xl">
                {/* Track Badge */}
                <div className="absolute top-6 right-6 z-10 bg-brand-sea text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Track 1
                </div>

                {/* Photo/Video Placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-brand-sea/20 to-brand-sea/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl mb-3">🚀</div>
                      <p className="text-brand-sea font-bold text-lg">Icarians</p>
                      <p className="text-brand-sea/60 text-sm">Photo/Video Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-3xl font-bold text-brand-sea mb-2">
                      Icarians Mastery
                    </h3>
                    <p className="text-brand-sea/70 font-semibold text-lg">with Mads & Julian</p>
                  </div>

                  <p className="text-zinc-700 mb-6 leading-relaxed">
                    Elevate your icarians game to the next level. Master pop mechanics, aerial control, and height progression with expert guidance on technique, safety, and creative combinations.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sea/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Pop Mechanics</strong> - Perfect your timing and power generation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sea/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Height Progression</strong> - Build confidence with progressive drills</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sea/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Advanced Transitions</strong> - Smooth combinations and sequences</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sea/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Aerial Control</strong> - Precision landing and spotting techniques</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-brand-sea text-white text-sm rounded-full font-medium">Pops</span>
                    <span className="px-3 py-1.5 bg-brand-sea text-white text-sm rounded-full font-medium">Throne-to-Throne</span>
                    <span className="px-3 py-1.5 bg-brand-sea text-white text-sm rounded-full font-medium">Bird-to-Bird</span>
                    <span className="px-3 py-1.5 bg-brand-sea text-white text-sm rounded-full font-medium">Side-Star</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Whips Track */}
            <Reveal delay={0.2}>
              <div className="group relative bg-gradient-to-br from-brand-sun/5 to-brand-sun/10 rounded-3xl overflow-hidden border-2 border-brand-sun/30 hover:border-brand-sun/50 transition-all duration-300 hover:shadow-2xl">
                {/* Track Badge */}
                <div className="absolute top-6 right-6 z-10 bg-brand-sun text-zinc-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Track 2
                </div>

                {/* Photo/Video Placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-brand-sun/20 to-brand-sun/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl mb-3">💫</div>
                      <p className="text-brand-sea font-bold text-lg">Whips & Whip-Pops</p>
                      <p className="text-brand-sea/60 text-sm">Photo/Video Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-3xl font-bold text-brand-sea mb-2">
                      Whips & Whip-Pops
                    </h3>
                    <p className="text-brand-sea/70 font-semibold text-lg">with Duo Liquen (Pauli & Nacho)</p>
                  </div>

                  <p className="text-zinc-700 mb-6 leading-relaxed">
                    Refine your whips and master whip-pops with Duo Liquen's signature style. Learn refined technique, dynamic flow, and creative combinations that blend power with elegance.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sun/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Whip Technique</strong> - Master the fundamentals and refinements</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sun/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Whip-Pop Progressions</strong> - Unlock advanced pop variations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sun/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Dynamic Flow</strong> - Creative combinations and sequences</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-sun/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700"><strong>Power & Precision</strong> - Balance strength with control</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-brand-sun text-zinc-900 text-sm rounded-full font-medium">Whips</span>
                    <span className="px-3 py-1.5 bg-brand-sun text-zinc-900 text-sm rounded-full font-medium">Whip-Pops</span>
                    <span className="px-3 py-1.5 bg-brand-sun text-zinc-900 text-sm rounded-full font-medium">Flow Sequences</span>
                    <span className="px-3 py-1.5 bg-brand-sun text-zinc-900 text-sm rounded-full font-medium">Creativity</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Flexibility Note */}
          <Reveal delay={0.3}>
            <div className="bg-gradient-to-r from-brand-sea/5 via-brand-sand/20 to-brand-sun/5 rounded-2xl p-8 border border-brand-sand/30 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-6 h-6 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h3 className="text-xl font-bold text-brand-sea">Flexible Training Schedule</h3>
              </div>
              <p className="text-zinc-700 max-w-3xl mx-auto">
                You're free to choose your focus each day or split your time between both tracks. Want to deep-dive into one discipline? Perfect. Curious to sample both? That works too. The choice is yours!
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section id="prerequisites" className="py-20 sm:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-4">
                Prerequisites
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                This intensive is designed for intermediate/advanced practitioners. Please ensure you meet these requirements before registering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg border border-brand-sea/10 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-brand-sea mb-6">Required Skills</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 pb-4 border-b border-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-brand-sea/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Solid Tarzan</h4>
                    <p className="text-sm text-zinc-600">Consistent, controlled execution with proper form and spotting awareness</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-brand-sea/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Throne to Throne Icarian</h4>
                    <p className="text-sm text-zinc-600">Clean transitions between throne positions with good height and control</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-brand-sea/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Bird to Bird Icarian</h4>
                    <p className="text-sm text-zinc-600">Smooth bird transitions demonstrating aerial awareness and timing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-zinc-200">
                  <div className="w-6 h-6 rounded-full bg-brand-sea/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Solid Side-Star</h4>
                    <p className="text-sm text-zinc-600">Clean side-star execution with good form and control</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-sea/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-1">Washing Machine Experience</h4>
                    <p className="text-sm text-zinc-600">Comfortable with at least one washing machine variation</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Important Note</h4>
                    <p className="text-sm text-amber-800">
                      This is an advanced intensive. If you're unsure about meeting these prerequisites, please reach out to us before registering to discuss your skill level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Accommodation & Logistics */}
      <section className="py-20 sm:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-4">
                Accommodation & Venue
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Stay at Malta's premier 4-star resort with everything included
              </p>
            </div>
          </Reveal>

          {/* Hotel Highlight */}
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-brand-sand/20 to-brand-sand/10 rounded-2xl p-8 mb-8 border-2 border-brand-sand/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sun/10 rounded-full mb-4">
                    <svg className="w-5 h-5 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-brand-sea font-semibold">4-Star Luxury Resort</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-brand-sea mb-4">
                    Riviera Spa Hotel
                  </h3>
                  
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    Your accommodation and meals are <strong>fully included</strong> at Malta's premier 4-star resort. Immerse yourself in luxury with spa facilities, pools, stunning Mediterranean views, and world-class amenities.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700">Modern rooms with sea views</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700">Full-service spa & wellness center</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700">Indoor & outdoor pools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-700">All meals included with buffet dining</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/hotel/hotel.png"
                    alt="Riviera Spa Hotel - Luxury 4-Star Resort"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-brand-sand/30 text-center">
                <Button
                  href="/venue"
                  variant="secondary"
                  size="lg"
                >
                  Explore the Hotel
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-brand-sand/20 to-brand-sand/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-brand-sea/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-sea mb-3">Bridging Accommodation</h3>
                <p className="text-zinc-600 mb-4">
                  Attending both Pre-Fest and MAC? You can bridge your stay at the Riviera Hotel & Spa from Oct 3-11 (subject to availability).
                </p>
                <p className="text-sm text-zinc-500">
                  Book early to secure your extended dates at the same venue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-brand-sand/20 to-brand-sand/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-brand-sea/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-sea mb-3">Training Venue</h3>
                <p className="text-zinc-600 mb-4">
                  Same stunning location as the main festival: Riviera Hotel & Spa in Malta with professional indoor studios and outdoor spaces.
                </p>
                <p className="text-sm text-zinc-500">
                  Full facility access including pools, spa, and training areas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-4">
                Investment
              </h2>
              <p className="text-lg text-zinc-600">
                Secure your spot in this exclusive intensive
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pre-Fest Only */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-xl border-2 border-brand-sea/20 p-8 relative flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-sea mb-2">Pre-Festival Only</h3>
                  <p className="text-zinc-600 text-sm">Intensive training Oct 3-5</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-brand-sea mb-2">€429</div>
                  <p className="text-sm text-zinc-500">3-day intensive</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700">3 days of intensive training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700">Icarians & Whips tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700"><strong>Accommodation included</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700"><strong>Food included</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700">Limited to 30 participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sea mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700">World-class instruction</span>
                  </li>
                </ul>

                <Button
                  href="mailto:hello@acrointhesun.com?subject=Pre-Fest Registration"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Register Now
                </Button>
              </div>
            </Reveal>

            {/* Pre-Fest + MAC Bundle */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-brand-sea to-brand-sea/90 rounded-2xl shadow-xl border-2 border-brand-sun p-8 relative overflow-hidden flex flex-col">
                {/* Best Value Badge */}
                <div className="absolute top-4 right-4 bg-brand-sun text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
                  SAVE €50
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pre-Fest + MAC Bundle</h3>
                  <p className="text-brand-sun font-semibold text-sm">Complete experience Oct 3-11</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-white/60 text-lg line-through mb-1">€429</div>
                  <div className="text-5xl font-bold text-white mb-2">€379</div>
                  <p className="text-sm text-white/80">With MAC 2026 ticket</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sun mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">Everything in Pre-Fest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sun mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white"><strong>Accommodation + Food</strong> included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sun mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white"><strong>€50 discount</strong> for MAC attendees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sun mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">Bridge accommodation (subject to availability)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand-sun mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">7 days of world-class training</span>
                  </li>
                </ul>

                <Button
                  href="mailto:hello@acrointhesun.com?subject=Pre-Fest + MAC Bundle Registration"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Bundle Deal
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="text-center text-sm text-zinc-500">
              <p><strong>Accommodation and food included.</strong> Limited to 30 participants — register early to secure your spot.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea text-center mb-12">
              Common Questions
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <details className="group bg-brand-sand/10 rounded-xl p-6 border border-brand-sand/30">
                <summary className="font-semibold text-brand-sea cursor-pointer list-none flex items-center justify-between">
                  <span>What if I don't meet all the prerequisites?</span>
                  <svg className="w-5 h-5 text-brand-sea group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-zinc-600">
                  Please reach out to us at hello@acrointhesun.com to discuss your skill level. We want to ensure everyone can benefit from and contribute to the intensive's advanced focus.
                </p>
              </details>
            </Reveal>

            <Reveal delay={0.2}>
              <details className="group bg-brand-sand/10 rounded-xl p-6 border border-brand-sand/30">
                <summary className="font-semibold text-brand-sea cursor-pointer list-none flex items-center justify-between">
                  <span>Can I attend without going to the main festival?</span>
                  <svg className="w-5 h-5 text-brand-sea group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-zinc-600">
                  Absolutely! The Pre-Festival Intensive is a standalone event. However, we offer a €50 discount if you're also attending MAC 2026 (Oct 7-11).
                </p>
              </details>
            </Reveal>

            <Reveal delay={0.3}>
              <details className="group bg-brand-sand/10 rounded-xl p-6 border border-brand-sand/30">
                <summary className="font-semibold text-brand-sea cursor-pointer list-none flex items-center justify-between">
                  <span>Is accommodation included?</span>
                  <svg className="w-5 h-5 text-brand-sea group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-zinc-600">
                  Yes! Accommodation and food are included in the Pre-Fest price at the Riviera Hotel & Spa. If you're attending both Pre-Fest and MAC 2026, you can bridge your stay from Oct 3-11 (subject to availability).
                </p>
              </details>
            </Reveal>

            <Reveal delay={0.4}>
              <details className="group bg-brand-sand/10 rounded-xl p-6 border border-brand-sand/30">
                <summary className="font-semibold text-brand-sea cursor-pointer list-none flex items-center justify-between">
                  <span>What's the training schedule like?</span>
                  <svg className="w-5 h-5 text-brand-sea group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-zinc-600">
                  Expect full days of training (8+ hours per day) split between Icarians and Whips/Whip-Pops tracks. Detailed schedule will be shared closer to the event.
                </p>
              </details>
            </Reveal>

            <Reveal delay={0.5}>
              <details className="group bg-brand-sand/10 rounded-xl p-6 border border-brand-sand/30">
                <summary className="font-semibold text-brand-sea cursor-pointer list-none flex items-center justify-between">
                  <span>How do I claim the €50 MAC attendee discount?</span>
                  <svg className="w-5 h-5 text-brand-sea group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-zinc-600">
                  Simply mention your MAC 2026 registration when signing up for the Pre-Fest, and we'll apply the discount. You can register for both simultaneously or add the Pre-Fest later.
                </p>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 px-6 bg-gradient-to-br from-brand-sea via-brand-sea/95 to-brand-sea text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Ready to Take Your Practice Further?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 29 other advanced practitioners for this exclusive intensive. Limited spots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="mailto:hello@acrointhesun.com?subject=Pre-Fest Registration Inquiry"
                variant="primary"
                size="lg"
              >
                Register Now
              </Button>
              <Button
                href="/#pricing"
                variant="secondary"
                size="lg"
                className="text-white border-white/40 hover:bg-white/10"
              >
                View Main Festival
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
