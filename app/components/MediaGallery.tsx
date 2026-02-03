'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import Button from './Button';

const MediaGallery: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate array of all image filenames
  const imageFiles = [
    '7I1A1872', '7I1A1875', '7I1A1877', '7I1A1880', '7I1A1881', '7I1A1883', '7I1A1884', '7I1A1889',
    '7I1A1893', '7I1A1894', '7I1A1896', '7I1A1898', '7I1A1902', '7I1A1903', '7I1A1905', '7I1A1906',
    '7I1A1907', '7I1A1909', '7I1A1910', '7I1A1911', '7I1A1913', '7I1A1915', '7I1A1917', '7I1A1918',
    '7I1A1919', '7I1A1920', '7I1A1926', '7I1A1928', '7I1A1929', '7I1A1931', '7I1A1933', '7I1A1935',
    '7I1A1936', '7I1A1965', '7I1A1966', '7I1A1970', '7I1A1975', '7I1A1985', '7I1A1991', '7I1A1992',
    '7I1A2002', '7I1A2008', '7I1A2018', '7I1A2020', '7I1A2023', '7I1A2026', '7I1A2028', '7I1A2040',
    '7I1A2041', '7I1A2044', '7I1A2047', '7I1A2051', '7I1A2055', '7I1A2056', '7I1A2061', '7I1A2063',
    '7I1A2066', '7I1A2068', '7I1A2075', '7I1A2078', '7I1A2081', '7I1A2090', '7I1A2094', '7I1A2115',
    '7I1A2118', '7I1A2121', '7I1A2123', '7I1A2128', '7I1A2136', '7I1A2142', '7I1A2144', '7I1A2150',
    '7I1A2153', '7I1A2154', '7I1A2156', '7I1A2159', '7I1A2161', '7I1A2164', '7I1A2165', '7I1A2166',
    '7I1A2167', '7I1A2168', '7I1A2169', '7I1A2170', '7I1A2173', '7I1A2186', '7I1A2188', '7I1A2189',
    '7I1A2190', '7I1A2212', '7I1A2215', '7I1A2216', '7I1A2219', '7I1A2222', '7I1A2226', '7I1A2488',
    '7I1A2562', '7I1A2777', '7I1A2780', '7I1A2789', '7I1A2795', '7I1A2805', '7I1A2814', '7I1A2820',
    '7I1A2823', '7I1A2828', '7I1A2831', '7I1A2835', '7I1A2837', '7I1A2838', '7I1A2840', '7I1A2847',
    '7I1A2852', '7I1A2858', '7I1A2863', '7I1A2864', '7I1A2867', '7I1A2939', '7I1A2942', '7I1A2943',
    '7I1A2948', '7I1A2952', '7I1A2955', '7I1A2980', '7I1A2990', '7I1A3002', '7I1A3006', '7I1A3012',
    '7I1A3014', '7I1A3020', '7I1A3025', '7I1A3030', '7I1A3054', '7I1A3072', '7I1A3076', '7I1A3080',
    '7I1A3085', '7I1A3087', '7I1A3102', '7I1A3105', '7I1A3110', '7I1A3119', '7I1A3130', '7I1A3133',
    '7I1A3135', '7I1A3140', '7I1A3145', '7I1A3156', '7I1A3168', '7I1A3170', '7I1A3178', '7I1A3179',
    '7I1A3181', '7I1A3183', '7I1A3193', '7I1A3196', '7I1A3203', '7I1A3216', '7I1A3220', '7I1A3225',
    '7I1A3227', '7I1A3230', '7I1A3236', '7I1A3240', '7I1A3244', '7I1A3246', '7I1A3253', '7I1A3255',
    '7I1A3257', '7I1A3264', '7I1A3273', '7I1A3287', '7I1A3288', '7I1A3294', '7I1A3308', '7I1A3453',
    '7I1A3454', '7I1A3457', '7I1A3468', '7I1A3478', '7I1A3480', '7I1A3484', '7I1A3488', '7I1A3491',
    '7I1A3494', '7I1A3501', '7I1A3510', '7I1A3514', '7I1A3521', '7I1A3524', '7I1A3526', '7I1A3531',
    '7I1A3532', '7I1A3534'
  ];

  const photos = imageFiles.map((filename) => ({
    src: `/images/${filename}.jpg`,
    alt: `MAC 2025 - ${filename}`
  }));

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-white to-brand-sand/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-4">
              MAC 2025 Highlights
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto">
              Relive the magic from last year's unforgettable convention
            </p>
          </div>
        </Reveal>

        {/* Video Section */}
        <Reveal delay={0.2}>
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-brand-sea mb-6 text-center">
              Official Aftermovie
            </h3>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-sun/20">
              {/* Replace YOUR_VIDEO_ID with actual YouTube video ID */}
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="MAC 2025 Official Aftermovie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-zinc-500 mt-4">
              Can't wait to create new memories in 2026? 
              <Button href="/#pricing" variant="primary" size="sm" className="ml-2 inline-flex">
                Get Your Ticket
              </Button>
            </p>
          </div>
        </Reveal>

        {/* Photo Carousel */}
        <Reveal delay={0.3}>
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-sea mb-6 text-center">
              Photo Gallery
            </h3>
            
            {/* Carousel Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-sun/20">
                <Image
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority={currentIndex < 3}
                />
                
                {/* Photo Credit Overlay */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <a
                    href="https://www.instagram.com/giusvisual/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-brand-sun transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Photos by Gius Visual</span>
                  </a>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous photo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Next photo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicator */}
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-600 mb-3">
                  {currentIndex + 1} / {photos.length}
                </p>
                <div className="flex justify-center gap-1.5">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-brand-sun'
                          : 'w-2 bg-brand-sand/40 hover:bg-brand-sand'
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-zinc-500 mt-8">
              View MAC 2025 highlights • Auto-playing carousel with {photos.length} photos
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MediaGallery;
