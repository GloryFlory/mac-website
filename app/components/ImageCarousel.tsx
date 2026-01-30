'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
      {/* Main Image Container with stacked effect */}
      <div className="relative w-full h-full">
        {/* Background stacked images effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white rounded-2xl transform translate-x-2 translate-y-2 opacity-30" />
          <div className="absolute inset-0 bg-white rounded-2xl transform translate-x-1 translate-y-1 opacity-50" />
        </div>

        {/* Active Image */}
        <div className="relative z-10 w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-all duration-500 ${
              direction === 'right' 
                ? 'animate-in slide-in-from-right-8 fade-in duration-500' 
                : 'animate-in slide-in-from-left-8 fade-in duration-500'
            }`}
            priority={currentIndex === 0}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-brand-sea"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-brand-sea"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Counter Badge */}
      <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2 text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
          <span>←</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
