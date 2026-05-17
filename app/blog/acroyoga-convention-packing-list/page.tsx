import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: 'Acroyoga Convention Packing List: What to Actually Bring | MAC Blog',
  description: "What to pack for a 5-day acroyoga convention in Malta in October — training gear, grip aids, weather, the social side, and what the hotel already covers.",
  openGraph: {
    title: 'Acroyoga Convention Packing List: What to Actually Bring (And What to Leave Home)',
    description: "What to pack for a 5-day acroyoga convention in Malta in October — from liquid chalk to the right activewear.",
  },
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog/acroyoga-convention-packing-list',
  },
};

export default function PackingListPost() {
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
              Acroyoga Convention Packing List: What to Actually Bring (And What to Leave Home)
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
              Packing for an acroyoga convention isn't like packing for a yoga retreat or a regular holiday. You're training 4–6 hours a day, spending evenings in jams and ceremonies, and — if you're coming to MAC — staying at a 4-star resort in Malta in October. The list looks different than you'd expect.
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
                  What to wear on the mat
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Comfort is the baseline, but flyers need to pay attention to fabric. Slippery material — think silky activewear or loose gym shorts — makes a base's job significantly harder. Classic yoga pants with a textured or grippy material are ideal. Fitted clothing in general is better than loose; nothing should be catching on a foot or a hand mid-flow.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Bases have more flexibility, but avoid anything so baggy it obscures your partner's ability to read your alignment.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Pack enough sets for 5 days of sweating. If you're staying at the Riviera Spa Hotel, there may be a laundry service available which can help you pack lighter — worth checking when you arrive.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The gear experienced practitioners bring that beginners don't think of
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="text-brand-sun font-bold text-lg mt-0.5 shrink-0">→</span>
                    <div>
                      <p className="text-zinc-800 font-semibold mb-1">Liquid chalk</p>
                      <p className="text-zinc-600 leading-relaxed">
                        In Malta's October heat — expect around 25°C — grip becomes a real issue. Liquid chalk is the standard fix and worth throwing in your bag if you have it.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand-sun font-bold text-lg mt-0.5 shrink-0">→</span>
                    <div>
                      <p className="text-zinc-800 font-semibold mb-1">Wrist straps</p>
                      <p className="text-zinc-600 leading-relaxed">
                        Five days of intensive training puts cumulative load on your wrists. If you've ever had wrist issues, bring support. You'll thank yourself on day three.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand-sun font-bold text-lg mt-0.5 shrink-0">→</span>
                    <div>
                      <p className="text-zinc-800 font-semibold mb-1">An Acroback</p>
                      <p className="text-zinc-600 leading-relaxed">
                        This is a specially designed pillow by Beyond the Mat that supports bases in maintaining a more balanced acroyoga practice — particularly useful during longer sessions. MAC stocks them on-site as a sponsor product, so you can pick one up there, but if you already own one, bring it.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand-sun font-bold text-lg mt-0.5 shrink-0">→</span>
                    <div>
                      <p className="text-zinc-800 font-semibold mb-1">Your own supplements</p>
                      <p className="text-zinc-600 leading-relaxed">
                        The hotel buffet covers protein and magnesium-rich foods well, but if you have a specific recovery protocol, pack it. The buffet won't have your exact brand of magnesium glycinate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  Malta in October: what to actually pack for the weather
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  25°C and sunny is the October baseline. It's the tail end of Mediterranean summer — warm enough to swim, genuinely pleasant rather than oppressive. Evenings cool down, so bring one light jacket or layer for after-dinner jams and excursions.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  You don't need to pack for rain, but one light layer for cooler evenings is worth including. Don't leave the swimwear at home — the Riviera Spa Hotel has pool access and the beach is right there.
                </p>
                <figure className="mt-8">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                    <Image
                      src="/hotel/PrivatehotelBeach.jpg"
                      alt="The private beach at Labranda Riviera Resort — MAC 2026 venue in Malta"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                  <figcaption className="text-sm text-zinc-400 text-center mt-3">
                    The private beach at Labranda Riviera Resort — October sun in Malta
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  The social side of packing
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  MAC isn't just mat time. There's a Cacao Ceremony, Thai massage sessions, afternoon pool time, and a closing ceremony. Comfortable, non-acro clothes matter more than most people plan for. Pack something you'd be happy to relax in that isn't sweaty training gear.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Swimwear is worth repeating here — the afternoon break is your recovery window and the pool is how most people use it.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  What you can leave at home
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Civilian clothes beyond the basics. You won't need them. A MAC day is training, eating, recovering, and jamming — your acro wardrobe covers all of it. Towels are provided by the hotel. Don't waste luggage space on things the resort already supplies.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4">
                  If you forget something
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Malta has a Decathlon and most essentials are readily available. What it doesn't have is same-day Amazon delivery, so don't rely on ordering anything last minute once you land. If it's important, pack it.
                </p>
              </div>
            </Reveal>

            {/* Quick-reference list */}
            <Reveal>
              <div className="bg-brand-sand/15 border border-brand-sand/40 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-brand-sea mb-6">
                  The short version
                </h2>
                <ul className="space-y-3">
                  {[
                    'Fitted, non-slippery activewear (enough for 5 days, or plan to use laundry)',
                    'Swimwear',
                    'One light evening layer',
                    'Liquid chalk if you use it',
                    'Wrist support if you need it',
                    'Acroback if you own one',
                    'Recovery supplements beyond what the buffet covers',
                    'Comfortable non-acro clothes for ceremonies and downtime',
                    'Sunscreen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-sea shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-sm mt-6">Leave the bulk behind. The hotel handles the rest.</p>
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
                  All-inclusive at the Riviera Spa Hotel. Early Bird tickets at €699.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg bg-brand-sun text-black hover:bg-[#E0A030] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get Your Ticket
                  </a>
                  <a
                    href="/venue"
                    className="inline-flex items-center justify-center font-semibold rounded-full px-10 py-4 text-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                  >
                    See the Venue
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
