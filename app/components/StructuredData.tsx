import { testimonials } from '@/lib/testimonials';

export default function StructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Mediterranean Acro Convention 2026",
    "description": "The world's most luxurious acroyoga convention. 5 days of elite training at Malta's 4-star Riviera Spa Hotel with 40+ workshops and international teachers.",
    "image": "https://www.acrointhesun.com/main-fest-og.jpg",
    "startDate": "2026-10-07",
    "endDate": "2026-10-11",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Riviera Spa Hotel",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MT",
        "addressLocality": "Malta"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Mediterranean Acro Convention",
      "url": "https://www.acrointhesun.com",
      "sameAs": [
        "https://www.instagram.com/mediterranean_acro_convention/",
        "https://www.facebook.com/MediterraneanAcroConvention/",
        "https://www.youtube.com/@acrointhesun"
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817",
      "priceCurrency": "EUR",
      "lowPrice": "449",
      "highPrice": "799",
      "offerCount": "4",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "validThrough": "2026-10-07"
    },
    "performer": [
      {
        "@type": "PerformingGroup",
        "name": "Coni and Mati - Acro Conciencia"
      },
      {
        "@type": "PerformingGroup",
        "name": "Michal and Klara - Acro Klaris / Acro Misaris"
      },
      {
        "@type": "PerformingGroup",
        "name": "Eli and Bagaz - Acrobagaz"
      },
      {
        "@type": "PerformingGroup",
        "name": "Manas and Mira"
      },
      {
        "@type": "PerformingGroup",
        "name": "Lloydie and Flo"
      },
      {
        "@type": "PerformingGroup",
        "name": "Nick and Chrysa"
      },
      {
        "@type": "PerformingGroup",
        "name": "Maria and Flo"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": t.quote
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mediterranean Acro Convention",
    "url": "https://www.acrointhesun.com",
    "logo": "https://www.acrointhesun.com/icon.png",
    "description": "The world's most luxurious acroyoga convention, hosted annually in Malta.",
    "email": "mediterraneanacroconvention@gmail.com",
    "sameAs": [
      "https://www.instagram.com/mediterranean_acro_convention/",
      "https://www.facebook.com/MediterraneanAcroConvention/",
      "https://www.youtube.com/@acrointhesun"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What level do I need to be to attend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MAC welcomes everyone from curious beginners to advanced practitioners! Our workshops are clearly labeled by level, and you can filter the schedule to match your experience. If you can safely spot yourself and communicate your boundaries, you're ready to join us."
        }
      },
      {
        "@type": "Question",
        "name": "Can I come solo, or do I need a partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely come solo! Most attendees arrive without a partner. Our community is warm and welcoming—you'll have no trouble finding practice partners throughout the convention. We'll also facilitate partner rotations in workshops to help everyone connect."
        }
      },
      {
        "@type": "Question",
        "name": "When do tickets go on sale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tickets are limited to 75 participants to maintain an intimate, high-quality experience. Super Early Bird and Early Bird tickets are now SOLD OUT. Regular tickets (€799) are available now and selling fast. We recommend booking soon to secure your spot."
        }
      },
      {
        "@type": "Question",
        "name": "What's your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cancellations before 31 March 2026 are eligible for a refund minus a €40 admin fee. From 31 March onward, the €299 deposit becomes non-refundable and tickets cannot be refunded. Name changes are permitted until 15 September 2026 (€40 fee applies). We strongly recommend travel insurance."
        }
      },
      {
        "@type": "Question",
        "name": "Is accommodation included in the ticket price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Your accommodation at the 4-star Riviera Spa Hotel is included in your ticket price. You'll be staying right where all the workshops happen. Want to arrive early or stay longer? Contact the hotel directly about extending your stay at an additional cost, subject to availability."
        }
      },
      {
        "@type": "Question",
        "name": "Are meals provided?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3 meals per day are included with your ticket! The Riviera Spa Hotel provides an amazing buffet covering all dietary requirements including vegetarian, vegan, gluten-free, and other special needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get from the airport to the venue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Riviera Spa Hotel is about 60-90 minutes by bus or car from Malta International Airport (MLA). You can take a taxi, use Bolt/eCabs rideshare, or take public buses. We'll send detailed transport info in your pre-event email, and there may be shared ride options in our attendee WhatsApp group."
        }
      },
      {
        "@type": "Question",
        "name": "When will the full schedule be released?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete schedule with all workshop details will be available 6-8 weeks before the event. You'll be able to browse and filter by level, teacher, and style using our interactive FlowGrid schedule. We'll notify all ticket holders via email when it goes live."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
