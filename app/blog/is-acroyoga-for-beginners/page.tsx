import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import BlogPostingSchema from '../../components/BlogPostingSchema';

export const metadata: Metadata = {
  title: 'Is Acroyoga for Beginners? (An Honest Answer) | MAC Blog',
  description: "You don't need to be flexible, strong, light, or young to start acroyoga. The real barriers are different — and they dissolve faster than you think.",
  openGraph: {
    title: 'Is Acroyoga for Beginners? (An Honest Answer)',
    description: 'You don\'t need to be flexible, strong, light, or young to start acroyoga. The real barriers are different — and they dissolve faster than you think.',
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog/is-acroyoga-for-beginners',
  },
};

export default function IsAcroyogaForBeginnersPost() {
  return (
    <main className="min-h-screen">
      <BlogPostingSchema
        headline="Is Acroyoga for Beginners? (An Honest Answer)"
        description="You don't need to be flexible, strong, light, or young to start acroyoga. The real barriers are different — and they dissolve faster than you think."
        slug="is-acroyoga-for-beginners"
        datePublished="2026-05-17"
      />
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
              <span>5 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea leading-tight mb-6">
              Is Acroyoga for Beginners? (An Honest Answer)
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
              The short answer is yes. The longer answer dismantles a few assumptions you probably have about your own body.
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
                  The myths that keep people from trying
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The most common reasons people talk themselves out of acroyoga before they start: not flexible enough, not strong enough, too heavy, too old.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4 font-medium text-zinc-800">
                  All of them are wrong.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Maria, co-organiser of the Mediterranean Acro Convention, has personally lifted former professional rugby players. She's practiced with people well into their 70s. Flexibility helps, but acroyoga will lengthen your hamstrings — it's not a prerequisite. Strength matters, but technique matters more, and technique is learnable in a session. Age is largely irrelevant as long as you stay young at heart.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The other misconception worth addressing: that there are fixed roles. That big people base and small people fly. In reality, everyone at MAC is encouraged to try both — and for good reason. Basing teaches you what flying feels like from the other side, and vice versa. It builds empathy, communication, and a much deeper understanding of the practice.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The actual minimum requirement
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  If you can walk up a flight of stairs, you can do acroyoga.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  No yoga background needed. No gymnastics. No partner work experience. The entry point is lower than almost anyone expects, and the proof tends to show up within the first 30 seconds of trying. Maria has watched complete beginners — people who were certain a pose was physically impossible for them — achieve it on the first attempt, simply with the right cue and the right attitude.
                </p>
                <figure className="mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src="/teachers/Maria and Flo/AcroFlo-47.jpg"
                      alt="Maria and Flo demonstrating acroyoga — co-organisers of MAC 2026"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-400 text-center mt-3">
                    Maria &amp; Flo — co-organisers of MAC 2026, in practice
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Where beginners actually get stuck
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  It's rarely the body. It's the belief system.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Beginners watch experienced practitioners and can't picture themselves doing the same thing. That mental gap — between what they see and what they think they're capable of — is the real obstacle. Once the movement gets broken down into its components, the gap closes fast.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  There's also a physical dimension that catches people off guard: deep stabilising muscles in the hips that most people have never consciously used. They make your first sessions feel shaky, and they'll be sore in places you didn't know existed. That's not a sign something's wrong — it's your body waking up to a new kind of movement.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  How MAC handles beginners specifically
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Workshops at MAC are streamed by level — beginner, intermediate, and advanced tracks run separately, with clear prerequisites so nobody ends up in a class that's over their head. Within beginner workshops, the approach is progressive and unrushed: every element is broken down until it's genuinely embodied, not just attempted.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The five-day structure does something a single workshop can't. By day five, people are performing the same flows that required heavy spotting on day one — sometimes in front of the Mediterranean sunset, good enough for a video they'll actually want to share.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  On consent and communication
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  One thing worth knowing before you arrive: acroyoga is a full-body contact sport, and that means consent and clear communication aren't optional extras — they're core to the practice. MAC attracts participants from across Europe and beyond, which means different cultural backgrounds and different assumptions about physical boundaries. The workshops address this directly. It's part of what makes the environment safe enough for beginners to take risks.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The thing most people don't expect
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The physical progress is real, but it's not what people tend to remember. What catches most beginners off guard is how much acroyoga turns out to be about connection — with a partner, with a community, with yourself. The poses are the vehicle. What they're carrying is something else.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  If you're on the fence about whether you're ready: you are. The question is just whether you're curious enough to find out.
                </p>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="bg-gradient-to-br from-brand-sea to-brand-sea/80 rounded-2xl p-8 sm:p-10 text-center">
                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold mb-3"
                  style={{ color: 'white' }}
                >
                  MAC 2026 — October 7–11, Malta
                </h3>
                <p className="mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Beginner tracks available across all five days. Early Bird tickets at €699 (all-inclusive).
                </p>
                <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Capped at 75 participants. Pre-Fest Intensive (Oct 3–5) available for those who want more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg bg-brand-sun text-black hover:bg-[#E0A030] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get Your Ticket
                  </a>
                  <a
                    href="/schedule"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  >
                    View Schedule
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
