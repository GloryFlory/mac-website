'use client';

import { FC, useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'levels',
    question: 'What level do I need to be to attend?',
    answer: 'MAC welcomes everyone from curious beginners to advanced practitioners! Our workshops are clearly labeled by level, and you can filter the schedule to match your experience. If you can safely spot yourself and communicate your boundaries, you\'re ready to join us.',
  },
  {
    id: 'solo',
    question: 'Can I come solo, or do I need a partner?',
    answer: 'Absolutely come solo! Most attendees arrive without a partner. Our community is warm and welcoming—you\'ll have no trouble finding practice partners throughout the convention. We\'ll also facilitate partner rotations in workshops to help everyone connect.',
  },
  {
    id: 'tickets',
    question: 'When do tickets go on sale?',
    answer: 'Super Early Bird tickets are already sold out! Early Bird pricing is available now at €345. Regular tickets (€395) will be available until we reach capacity or the event begins. We recommend booking early to secure the best price.',
  },
  {
    id: 'refunds',
    question: 'What\'s your refund policy?',
    answer: 'Full refunds are available until August 1st, 2026. Between August 1st and September 15th, we offer 50% refunds. After September 15th, tickets are non-refundable but transferable to another person. All refund requests must be submitted via email to hello@mac-convention.com.',
  },
  {
    id: 'accommodation',
    question: 'Is accommodation included in the ticket price?',
    answer: 'No, accommodation is separate. However, we\'ve secured discounted rates at partner hotels near the venue—check your ticket confirmation email for booking codes. Many attendees also share Airbnb apartments for a more affordable and social experience. Visit our Info page for more details.',
  },
  {
    id: 'food',
    question: 'Are meals provided?',
    answer: 'Meals are not included, but Malta has incredible (and affordable!) food options within walking distance of the venue. We\'ll share a list of recommended cafes and restaurants. Bring snacks and a water bottle to stay fueled throughout the day.',
  },
  {
    id: 'airport',
    question: 'How do I get from the airport to the venue?',
    answer: 'Malta International Airport (MLA) is about 20-30 minutes from the venue. You can take a taxi, use Bolt rideshare, or hop on the X-route public bus. We\'ll send detailed transport info in your pre-event email, and there may be shared ride options in our attendee WhatsApp group.',
  },
  {
    id: 'schedule',
    question: 'When will the full schedule be released?',
    answer: 'The complete schedule with all workshop details will be available 6-8 weeks before the event. You\'ll be able to browse and filter by level, teacher, and style using our interactive FlowGrid schedule. We\'ll notify all ticket holders via email when it goes live.',
  },
  {
    id: 'what-to-bring',
    question: 'What should I bring?',
    answer: 'Pack comfortable acro wear (fitted clothing, no loose items), a yoga mat, water bottle, sunscreen, and a light jacket for evenings. Bring swimwear for beach sessions and a notebook if you like to jot down new skills. Check our Info page for a complete packing list!',
  },
  {
    id: 'safety',
    question: 'What safety measures are in place?',
    answer: 'Your safety is our priority. We have first aid trained staff onsite, clear spotting protocols in all workshops, and a strong consent culture. Staff members wear orange wristbands—approach them immediately if you have any concerns. We take all reports seriously and will support you.',
  },
];

const FaqAccordion: FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-gradient-to-br from-brand-sand/10 to-brand-sand/5 dark:from-zinc-900 dark:to-zinc-800 border border-neutral-200/20 dark:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-sea/30"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  onKeyDown={(e) => handleKeyDown(e, faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sea focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
                >
                  <span className="font-semibold text-lg text-zinc-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-brand-sea/10 dark:bg-brand-sea/20 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 text-brand-sea dark:text-brand-sun"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Panel */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 pt-2">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@mac-convention.com"
            className="inline-flex items-center gap-2 text-brand-sea hover:text-brand-sun transition-colors duration-200 font-semibold underline underline-offset-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email us at hello@mac-convention.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
