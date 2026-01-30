import { Metadata } from 'next';
import Reveal from '../components/Reveal';

export const metadata: Metadata = {
  title: 'Event Info | Mediterranean Acro Convention 2026',
  description: 'Everything you need to know about attending MAC 2026 in Malta: travel, accommodation, what to bring, and more.',
};

export default function InfoPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-6">
              Event Info
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know to make your MAC 2026 experience smooth, safe, and unforgettable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Getting There */}
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Getting There
                  </h2>
                  <p className="text-zinc-600 mb-4">
                    Malta is well-connected to Europe and beyond, making it easy to reach our Mediterranean paradise.
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-14">
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Airport</h3>
                  <p className="text-zinc-600">
                    Fly into <strong>Malta International Airport (MLA)</strong>. Direct flights available from most major European cities. Flight time from London: ~3 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">From the Airport</h3>
                  <p className="text-zinc-600">
                    The venue is approximately 20-30 minutes from the airport. Options include taxis, Bolt ride-sharing, or the public bus network (X-routes).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Transport */}
          <Reveal delay={0.15}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Getting Around
                  </h2>
                  <p className="text-zinc-600 mb-4">
                    Malta is small and easy to navigate. Here's how to get around during the convention.
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-14">
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Walking</h3>
                  <p className="text-zinc-600">
                    If staying near the venue, most things are within walking distance. Malta's compact size means you're never far from the sea!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Public Transport</h3>
                  <p className="text-zinc-600">
                    Reliable bus network covering the island. Tallinja card available for discounted fares. Buses run frequently between major towns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Rideshare & Taxis</h3>
                  <p className="text-zinc-600">
                    Bolt and eCabs apps work well in Malta. Traditional taxis available but agree on fare beforehand.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Accommodation */}
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Accommodation
                  </h2>
                  <p className="text-zinc-600 mb-4">
                    We recommend booking early as October is a popular time in Malta. Various options to suit all budgets.
                  </p>
                </div>
              </div>
              <div className="space-y-3 pl-14">
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Partner Hotels</h3>
                  <p className="text-zinc-600">
                    We've secured discounted rates at nearby hotels. Check your ticket confirmation email for booking codes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Airbnb & Apartments</h3>
                  <p className="text-zinc-600">
                    Many attendees share apartments for a more affordable and social experience. Consider teaming up with friends!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Hostels</h3>
                  <p className="text-zinc-600">
                    Budget-friendly hostels available in nearby towns, great for solo travelers wanting to meet others.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* What to Bring */}
          <Reveal delay={0.25}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    What to Bring
                  </h2>
                  <p className="text-zinc-600 mb-4">
                    Pack smart for a week of acro in the Mediterranean sun!
                  </p>
                </div>
              </div>
              <div className="pl-14">
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Comfortable acro wear:</strong> Leggings, shorts, fitted tops (no loose clothing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Yoga mat:</strong> For warm-ups and cooldowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Water bottle:</strong> Stay hydrated throughout the day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Sunscreen & hat:</strong> October sun is still strong in Malta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Light jacket:</strong> Evenings can be cool by the sea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Swimwear:</strong> For beach jams and sunset sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-sea dark:text-brand-sun mt-1">•</span>
                    <span><strong>Notebook:</strong> Capture those new skills and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Weather */}
          <Reveal delay={0.3}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Weather
                  </h2>
                  <p className="text-zinc-600">
                    October in Malta offers perfect conditions: warm days, cooler evenings, and plenty of sunshine.
                  </p>
                </div>
              </div>
              <div className="pl-14 space-y-2 text-zinc-600">
                <p><strong>Average temperature:</strong> 22-26°C (72-79°F)</p>
                <p><strong>Sea temperature:</strong> 23°C (73°F) — perfect for swimming!</p>
                <p><strong>Sunshine:</strong> 8+ hours per day on average</p>
                <p><strong>Rain:</strong> Low chance, but pack a light rain jacket just in case</p>
              </div>
            </div>
          </Reveal>

          {/* Safety & Community Guidelines */}
          <Reveal delay={0.35}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Safety & Community Guidelines
                  </h2>
                  <p className="text-zinc-600 mb-4">
                    MAC is a space for everyone to feel welcome, safe, and supported.
                  </p>
                </div>
              </div>
              <div className="pl-14 space-y-3">
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Consent is Everything</h3>
                  <p className="text-zinc-600">
                    Always ask before initiating physical contact. "Is it okay if I...?" No one owes you a yes, and no one needs a reason to say no.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Respect Boundaries</h3>
                  <p className="text-zinc-600">
                    Everyone has different comfort levels. Honor them. Listen to your body and communicate your own needs clearly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Inclusive Language</h3>
                  <p className="text-zinc-600">
                    Be mindful of language. Avoid assumptions about gender, ability, or experience level. When in doubt, ask respectfully.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Physical Safety</h3>
                  <p className="text-zinc-600">
                    Warm up properly, spot each other, and don't push beyond your limits. First aid will be available onsite.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">If Something's Wrong</h3>
                  <p className="text-zinc-600">
                    Speak to any staff member in an orange wristband. We take all concerns seriously and will support you.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.4}>
            <div className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-sun flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-2">
                    Contact Us
                  </h2>
                  <p className="text-zinc-600">
                    Questions? We're here to help!
                  </p>
                </div>
              </div>
              <div className="pl-14 space-y-2 text-zinc-600">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@mac-convention.com" className="text-brand-sea hover:text-brand-sun transition-colors underline underline-offset-2">
                    hello@mac-convention.com
                  </a>
                </p>
                <p>
                  <strong>Instagram:</strong>{' '}
                  <a href="https://instagram.com/mac_convention" target="_blank" rel="noopener noreferrer" className="text-brand-sea hover:text-brand-sun transition-colors underline underline-offset-2">
                    @mac_convention
                  </a>
                </p>
                <p className="pt-2 text-sm">
                  We aim to respond within 24-48 hours. For urgent matters during the event, contact staff directly.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
