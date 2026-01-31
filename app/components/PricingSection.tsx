import { FC } from 'react';
import Button from './Button';
import Reveal from './Reveal';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  deposit?: string;
  description: string;
  available: boolean;
  availabilityText: string;
  highlighted?: boolean;
  secondary?: boolean;
  special?: string;
}

const primaryTiers: PricingTier[] = [
  {
    id: 'super-early',
    name: 'Super Early Bird',
    price: '€599',
    description: 'Full payment required',
    available: true,
    availabilityText: 'Limited Spots',
    highlighted: true,
    special: 'Best Value',
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    price: '€699',
    deposit: '€299',
    description: '€299 deposit, balance due later',
    available: true,
    availabilityText: 'Available Now',
    highlighted: false,
  },
  {
    id: 'regular',
    name: 'Regular',
    price: '€799',
    deposit: '€299',
    description: '€299 deposit, balance due later',
    available: true,
    availabilityText: 'Available',
    highlighted: false,
  },
];

const secondaryTiers: PricingTier[] = [
  {
    id: 'weekend',
    name: 'Weekend Pass',
    price: '€449',
    description: 'Saturday & Sunday access only',
    available: true,
    availabilityText: 'Limited',
    secondary: true,
  },
  {
    id: 'local',
    name: 'Local Pass',
    price: 'On Request',
    description: 'No food or accommodation included',
    available: true,
    availabilityText: 'Contact Us',
    secondary: true,
    special: 'Malta Residents',
  },
];

const included = [
  'Access to all 40+ workshops',
  'Full 5-day convention pass',
  '4-star accommodation at Riviera Spa Hotel',
  'All meals included (breakfast, lunch & dinner)',
  'Opening & closing ceremonies',
  'Beach jam sessions',
  'Community social events',
  'Digital schedule via FlowGrid',
];

const notIncluded = [
  'Flights to Malta',
  'Airport transfers',
  'Spa treatments (available on-site)',
  'Optional excursions & add-ons',
];

const PricingSection: FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-4">
              Pricing
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto">
              Transparent pricing with flexible payment options. Book early to save.
            </p>
          </div>
        </Reveal>

        {/* Primary Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {primaryTiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 0.1}>
              <div
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-2 border-brand-sun shadow-xl md:scale-105'
                    : 'border border-neutral-200/20 hover:shadow-lg'
                }`}
              >
                {/* Special Badge */}
                {tier.special && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-sun text-black text-sm font-bold rounded-full shadow-md">
                    {tier.special}
                  </div>
                )}

                {/* Tier Name */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-sea mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-zinc-900 mb-1">
                    {tier.price}
                  </div>
                  {tier.deposit && (
                    <p className="text-sm text-brand-sea font-medium">
                      or {tier.deposit} deposit
                    </p>
                  )}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mt-3 ${
                      tier.available
                        ? 'bg-brand-sea/10 text-brand-sea'
                        : 'bg-zinc-100 text-zinc-500'
                    }`}
                  >
                    {tier.available ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    {tier.availabilityText}
                  </div>
                </div>

                {/* CTA Button */}
                {tier.available ? (
                  <Button
                    href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Book Now
                  </Button>
                ) : (
                  <div className="w-full px-8 py-3 text-base text-center font-semibold rounded-full bg-zinc-100 text-zinc-400 cursor-not-allowed">
                    Sold Out
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Secondary Pricing Cards */}
        <Reveal delay={0.3}>
          <div className="mb-16">
            <h3 className="text-center font-serif text-2xl font-bold text-brand-sea mb-6">
              Alternative Passes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {secondaryTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="relative bg-white/60 backdrop-blur-sm border border-neutral-200/40 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  {tier.special && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-brand-sand text-brand-sea text-xs font-bold rounded-full shadow-sm">
                      {tier.special}
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-brand-sea mb-1">
                        {tier.name}
                      </h4>
                      <p className="text-sm text-zinc-600">
                        {tier.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-zinc-900">
                        {tier.price}
                      </div>
                    </div>
                  </div>
                  <Button
                    href={tier.id === 'local' ? 'mailto:mediterraneanacroconvention@gmail.com?subject=Local Pass Inquiry' : 'https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817'}
                    target={tier.id === 'local' ? undefined : '_blank'}
                    rel={tier.id === 'local' ? undefined : 'noopener noreferrer'}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    {tier.id === 'local' ? 'Contact Us' : 'Book Now'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What's Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Reveal delay={0.3}>
            <div className="bg-white border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-sea/10 dark:bg-brand-sea/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-sea dark:text-brand-sun" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-sea">
                  What's Included
                </h3>
              </div>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-sea dark:text-brand-sun flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="bg-brand-sand/10 border border-neutral-200/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-zinc-900">
                  What's Not Included
                </h3>
              </div>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500 mt-4 pt-4 border-t border-neutral-200/20">
                See our <a href="/info" className="text-brand-sea hover:text-brand-sun transition-colors underline underline-offset-2">Info page</a> for accommodation and travel tips.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
