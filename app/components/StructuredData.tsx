export default function StructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Mediterranean Acro Convention 2026",
    "description": "The world's most luxurious acroyoga convention. 5 days of elite training at Malta's 4-star Riviera Spa Hotel with 40+ workshops and international teachers.",
    "image": "https://www.acrointhesun.com/og-image.jpg",
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
      "@type": "Offer",
      "url": "https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "performer": [
      {
        "@type": "PerformingGroup",
        "name": "Coni and Mati - Acro Conciencia"
      },
      {
        "@type": "PerformingGroup",
        "name": "Caspian and Laura - AcroSpirit"
      },
      {
        "@type": "PerformingGroup",
        "name": "Manas and Mira"
      },
      {
        "@type": "PerformingGroup",
        "name": "Maria and Flo"
      }
    ]
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
    </>
  );
}
