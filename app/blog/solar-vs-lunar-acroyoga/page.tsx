import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: 'Solar vs Lunar Acroyoga: What\'s the Difference? | MAC Blog',
  description: 'Not all acroyoga conventions teach the same thing. Here\'s the honest breakdown of solar and lunar practice — and where MAC sits on the spectrum.',
  openGraph: {
    title: 'Solar vs Lunar Acroyoga: What\'s the Difference?',
    description: 'Not all acroyoga conventions teach the same thing. Here\'s the honest breakdown of solar and lunar practice — and where MAC sits on the spectrum.',
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog/solar-vs-lunar-acroyoga',
  },
};

export default function SolarVsLunarPost() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-sea text-sm font-medium mb-8 hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              All posts
            </Link>
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
              <time dateTime="2026-05-17">17 May 2026</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea leading-tight mb-6">
              Solar vs Lunar Acroyoga: What&apos;s the Difference?
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
              If you&apos;ve started exploring acroyoga events across Europe, you&apos;ve probably noticed that not all conventions are teaching the same thing. Solar and lunar are different enough in intention that it&apos;s worth knowing which one you&apos;re signing up for before you book.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <section className="py-8 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What is solar acroyoga?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Solar acroyoga is the dynamic, athletic side of the practice — continuous flows, whips, Icarians, and transitions that build energy rather than release it. The base lies on their back with feet in the air (the L-Base position), which forms the foundation for almost all of it. But L-Base is just the platform: solar is the intention — playful, powerful, and always moving forward.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  This is what most people picture when they imagine acroyoga. It&apos;s also the harder one to explain to someone who hasn&apos;t tried it.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What is lunar acroyoga?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Lunar acroyoga — sometimes called the therapeutic practice — is a different intention entirely. Where solar is dynamic and outward, lunar is slow, receptive, and deeply restorative. Partners take turns giving and receiving: deep stretches, supported positions that decompress the spine, massage, and thai-inspired bodywork. The goal isn&apos;t a trick or a flow — it&apos;s restoration.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  It also uses L-Base positioning. The distinction isn&apos;t about where the base lies — it&apos;s about what happens next. Think of it as partner yoga meets massage, with trust at the centre.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  So what&apos;s the relationship between them?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  They share the same community, the same values — consent, communication, trust — and the same fundamental belief that movement is better with another person. Beyond that, they&apos;re genuinely distinct practices with different skill sets, different physical demands, and different reasons people are drawn to them.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  There&apos;s no snobbery between the two camps. The acroyoga world is unusually supportive across styles, and most practitioners have at least some experience with both.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Why MAC focuses on L-Base and Flow
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  MAC excludes standing acro for a practical reason: the venue ceiling height makes it difficult. L-Base and Flow are also where Maria&apos;s passion sits, which matters — a convention built around a style its organiser loves produces a different quality of event than one trying to cover everything.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What does &ldquo;Flow&rdquo; mean at MAC specifically?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Flow is about continuous, unforced movement between two people — trusting the body&apos;s momentum rather than stopping at each pose. In practice it means transitions become as important as the positions themselves. The goal is something smooth and readable, where the connection between partners does the work rather than individual strength or technique alone.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  There&apos;s a concept in partner dance called the third entity — the idea that when two people move together with genuine intention, something emerges that neither person created alone. It shows up in acroyoga too, particularly in flow work. When it clicks, the movement feels guided rather than executed.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  That&apos;s what MAC&apos;s teachers are working toward across the five days.
                </p>

                <figure className="mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src="/teachers/Manas and Mira/IMG_1800.jpeg"
                      alt="Manas and Mira in an L-Base acroyoga flow"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-400 text-center mt-3">
                    Manas &amp; Mira — L-Base flow in action
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The moves that are unique to L-Base
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Whips, flows, and most Icarian variations are native to L-Base. Interestingly, Icarians — where the flyer is thrown and caught — have roots in circus and standing acrobatics, and the L-Base versions are likely descendants of those earlier forms. It&apos;s one of the places where the lineage of acroyoga and traditional acrobatics visibly overlaps.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Where MAC sits on the spectrum
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Athletic, artistic, and spiritual — genuinely all three, depending on what you bring to it. The teacher lineup covers elite technical training for people who want to level up seriously. The flow and performance elements satisfy people drawn to acroyoga as an art form. And the evening events — ceremonies, jams, the closing circle — create space for something that goes beyond the physical.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  MAC doesn&apos;t force any of those dimensions. It just builds the conditions for all of them.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Which style should a beginner start with?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  If you find a local acroyoga class, go. All branches share the same core: connection, communication, and trust. The style matters less than the experience of trying it. Once you&apos;ve been in a few classes you&apos;ll naturally gravitate toward what calls to you.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  If you&apos;re drawn to dynamic movement, flow, and the kind of practice that looks like it defies gravity — L-Base is your world. MAC is a good place to go deep into it.
                </p>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div
                className="rounded-2xl p-8 sm:p-10 text-center"
                style={{ backgroundColor: 'var(--color-brand-sea)' }}
              >
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'white' }}>
                  MAC 2026 — Malta, October 7–11
                </h3>
                <p className="mb-6 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  L-Base and Flow focused, all levels welcome. Five days of immersive training with some of Europe&apos;s best teachers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-block bg-brand-sun text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    See Early Bird Tickets
                  </Link>
                  <a
                    href="/teachers"
                    className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Meet the Teachers
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
