import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: "How to Find a Practice Partner at an Acroyoga Festival (Coming Solo) | MAC Blog",
  description: "Around half of MAC attendees arrive without a partner. Here's why that's fine — and how the format, the meals, and the opening ceremony do the social work for you.",
  openGraph: {
    title: "How to Find a Practice Partner at an Acroyoga Festival (When You're Coming Solo)",
    description: "Around half of MAC attendees arrive without a partner. Here's why coming solo is not the disadvantage it feels like from the outside.",
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog/finding-practice-partner-acroyoga-festival',
  },
};

export default function FindingPartnerPost() {
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
              <span>5 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea leading-tight mb-6">
              How to Find a Practice Partner at an Acroyoga Festival (When You're Coming Solo)
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
              The number one thing that stops people from booking a multi-day acro convention is coming alone. Here's why that fear is mostly unfounded — and what actually happens when you show up solo.
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
                  You're not the only one
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Roughly half of MAC attendees arrive without a partner or a friend. That's not an estimate designed to make you feel better — it's the reality of how acro festivals work. People who do acroyoga regularly already know that a convention is one of the best possible environments to meet people who share a specific, unusual passion. They book alone on purpose.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  So when you walk in on day one, the person standing next to you at the opening ceremony is statistically just as likely to be solo as you are.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  How the format does the work for you
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Acroyoga cannot be done alone. That's not a metaphor — it's a structural fact. Every workshop requires a base, a flyer, and ideally a spotter. Which means every session begins with partner matching, and rotation is built into the format.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  You don't need to engineer connection at MAC. The practice does it for you. Within the first workshop, you'll have worked physically with multiple people, communicated about your bodies, supported each other through something unfamiliar, and laughed when it didn't work. That's a faster route to genuine connection than most social situations offer in an entire evening.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Couples and established pairs mix naturally into this too — they still need partners outside their duo for workshops, so the groups don't stay separate. By day two, the distinction between "came solo" and "came with someone" has largely dissolved.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What a good practice partnership actually looks like
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  It's not exclusive and it's not formal. The best partnerships at a convention involve a lot of laughter, honest communication about what's working and what isn't, and a genuine interest in helping each other get the move. People share tips from their own experience, spot each other generously, and celebrate small wins.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  You'll likely find two or three people you gravitate toward across the week — not because you planned it, but because you kept ending up in the same workshops and your styles clicked.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Where connections form fastest
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The opening ceremony sets the tone deliberately. It's designed to establish from the first hour that this is a collaborative, supportive environment — not a performance space where people are quietly being assessed. That framing matters, because it gives everyone permission to be a beginner at connection as much as at acro.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Meals are underrated as a connection point. Three times a day, everyone sits down together in the same place. By day three those meals are loud and social in a way that's hard to manufacture. Solo attendees consistently end up embedded in a group faster than they expected — some leave having made plans to travel together afterward.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  If you're introverted and this all sounds exhausting
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The advice that helps introverts at events like this tends to sound generic: smile, be open, take small steps. It sounds generic because it's true, and it's true because it works. There's a reason these things are classics.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  What MAC adds to that is structure. You're not dropped into an unstructured social situation and told to figure it out. Every session gives you a reason to interact, a shared task to focus on, and a natural conversation starter. The event creates the conditions — you just have to show up.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-brand-sea/5 border border-brand-sea/15 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">
                  Does coming solo have advantages?
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  One honest one: solo attendees have no default partner to retreat to. That sounds like a disadvantage until you realize it means you're forced to meet more people, try more combinations, and build a wider network across the five days. Couples often go deep with each other and a small circle. Solo attendees often end up knowing everyone.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Neither is better. But solo is not the disadvantage it feels like from the outside.
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
                <p className="mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Around half the attendees arrive solo. Early Bird tickets at €699 all-inclusive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg bg-brand-sun text-black hover:bg-[#E0A030] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get Your Ticket
                  </a>
                  <a
                    href="/teachers"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
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
