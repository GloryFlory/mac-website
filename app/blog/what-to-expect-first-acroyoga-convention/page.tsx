import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Button';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: 'What to Expect at Your First Acroyoga Convention | MAC Blog',
  description: 'The honest breakdown of what a multi-day acroyoga convention is actually like — skill level, daily structure, community, venue, and why MAC 2026 in Malta is a great first.',
  openGraph: {
    title: 'What to Expect at Your First Acroyoga Convention',
    description: 'The honest breakdown of what a multi-day acroyoga convention is actually like — and why MAC 2026 in Malta might be the one to start with.',
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog/what-to-expect-first-acroyoga-convention',
  },
};

export default function FirstConventionPost() {
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
              What to Expect at Your First Acroyoga Convention — And Why MAC Might Be the One to Start With
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
              If you've been doing acro at local jams or weekly classes and you're finally considering a multi-day convention, here's the honest breakdown of what the experience is actually like — and what makes the Mediterranean Acro Convention in Malta stand out from the European festival circuit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-8 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom">

            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The thing most first-timers get wrong
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The assumption almost everyone brings to their first convention is that they need to be <em>good enough</em>. They spend weeks brushing up on their flows, worrying they'll be the weakest person in the room.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  That's the wrong frame entirely. The skill that actually determines whether you have a great time is <strong className="text-zinc-800">playfulness</strong> — your ability to try things, laugh when they don't work, and stay present with whoever you're practicing with. The rest develops over the week. MAC runs 40+ workshops explicitly labeled by level, so you're never thrown in the deep end — you filter your schedule to what matches where you actually are.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What a day at MAC actually looks like
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The structure is what separates a multi-day convention from a weekend workshop. At MAC, you're not just fitting acro into your life — for five days, acro <em>is</em> your life, and that changes how fast you progress.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Mornings start with yoga to prepare the body, followed by the first workshop block. After lunch, the afternoon is intentionally free — time to rest at the Riviera Spa Hotel's pool, book a massage, or quietly practice what you absorbed that morning. Late afternoon brings another session, then dinner together, then an evening lunar session or open jam that usually runs late because nobody wants to stop.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Eating three meals a day together in the same place with the same people — that's where the community forms. By day three, you're not strangers anymore. By day five, people are asking to make it longer. MAC listened: that's why the Pre-Fest Intensive now exists, adding three extra days for those who want more.
                </p>
                <figure className="mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src="/teachers/Coni and Mati/7I1A3558.jpg"
                      alt="Coni and Mati performing acroyoga — headlining teachers at MAC 2026"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-400 text-center mt-3">
                    Coni &amp; Mati — headlining teachers at MAC 2026
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The venue is doing real work here
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Most European acro festivals run out of retreat centres or sports halls. MAC is at the Riviera Spa Hotel — a 4-star resort on Malta's northwest coast with Mediterranean sea views, a full spa, and a buffet that covers every dietary requirement.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  This isn't an aesthetic flex. It materially changes the experience: when your accommodation is genuinely comfortable, the afternoon rest actually restores you. When the food is good, meals become social anchors rather than obligations. When you're sleeping in the same building where you're training, the community stays connected across the whole day rather than dispersing.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Attendees from 2025 described it as feeling more like a luxury vacation than a training camp — and that's deliberate. As Maria, the co-organiser who's been building the Malta acro community for years, puts it: the goal is for every person to feel seen, supported, and comfortable enough to take risks on the mat.
                </p>
                <figure className="mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src="/hotel/Gymhotelspace.jpg"
                      alt="The dedicated training space at Labranda Riviera Resort, venue for MAC 2026 in Malta"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-400 text-center mt-3">
                    The dedicated training space at Labranda Riviera Resort — MAC&apos;s venue in Malta
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Coming solo? This is the move.
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Walking up to someone on day one and saying "I'm here alone — want to acro?" is genuinely the most effective social approach at any festival, and at MAC specifically the culture makes it land without awkwardness.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The workshops use partner rotations by design. The venue keeps everyone in the same space. By the end of day one, solo attendees are usually more embedded in the group than pairs who arrived together.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Why Malta specifically
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Malta sits in the centre of the Mediterranean, flies well from most European cities, and offers guaranteed October sun without the summer peak-season crowds. From London, Amsterdam, or Berlin it's a 2–3 hour flight and a 30–45 minute transfer to the venue.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  For Maria, who's called Malta home for over a decade, the location is personal — it's a place she wanted to share with the global acro community, not just a convenient conference destination. That comes through in the event's texture.
                </p>
              </div>
            </Reveal>

            {/* Testimonials */}
            <Reveal>
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-6">
                  What the 2025 crowd said
                </h2>
                <div className="space-y-6">
                  <blockquote className="border-l-4 border-brand-sun pl-6 py-2">
                    <p className="text-zinc-600 leading-relaxed italic mb-3">
                      "The MAC has been my favorite Acro Festival / Convention so far — extremely nice people, wonderful food and great rooms, professional organization and basically everything you could possibly wish for."
                    </p>
                    <cite className="text-sm font-semibold text-zinc-800 not-italic">— Aida, MAC 2025</cite>
                  </blockquote>
                  <blockquote className="border-l-4 border-brand-sun pl-6 py-2">
                    <p className="text-zinc-600 leading-relaxed italic mb-3">
                      "I really enjoyed the festival — the vibe, the quality of the teaching, and the venue were all fantastic. I felt truly lucky to attend a few workshops where it felt more like one-on-one coaching — which was absolutely priceless."
                    </p>
                    <cite className="text-sm font-semibold text-zinc-800 not-italic">— Giulia, MAC 2025</cite>
                  </blockquote>
                </div>
                <p className="text-zinc-600 leading-relaxed mt-6">
                  MAC is capped at 75 participants specifically to keep that intimacy. It's a deliberate choice that shows up in the experience.
                </p>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="bg-gradient-to-br from-brand-sea to-brand-sea/80 rounded-2xl p-8 sm:p-10 text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'white' }}>
                  MAC 2026 — October 7–11, Malta
                </h3>
                <p className="mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Early Bird tickets at €699 (all-inclusive). Capped at 75 participants.
                </p>
                <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Pre-Fest Intensive (Oct 3–5) available for those who want three extra days of deep-dive Icarians & Whips training.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    variant="primary"
                    size="lg"
                  >
                    Get Your Ticket
                  </Button>
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
