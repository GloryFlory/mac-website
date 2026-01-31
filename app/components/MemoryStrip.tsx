'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface MemoryStripProps {
  images: string[];
  imageHeight?: number; // Default: 300px
}

const MemoryStrip: FC<MemoryStripProps> = ({ images, imageHeight = 300 }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Hide scroll hint after 3 seconds or on scroll
    const timer = setTimeout(() => setShowScrollHint(false), 3000);
    
    const handleScroll = () => setShowScrollHint(false);
    const container = scrollContainerRef.current;
    
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      clearTimeout(timer);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!stripRef.current) return;

      const rect = stripRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when the strip is in viewport
      const isInView = rect.top < windowHeight && rect.bottom > 0;
      
      if (isInView) {
        // Progress from 0 to 1 as section scrolls through viewport
        const progress = 1 - (rect.bottom / (windowHeight + rect.height));
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  // Calculate horizontal translation based on scroll progress
  // Moves images ~30% of container width as you scroll
  const translateX = prefersReducedMotion ? 0 : -(scrollProgress * 30);

  return (
    <div 
      ref={stripRef}
      className="relative w-full overflow-hidden"
      style={{ maxHeight: '400px' }}
    >
      {/* Desktop: Parallax scrolling strip with horizontal scroll */}
      <div className="hidden md:block py-12 lg:py-16 relative">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden px-24"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
        >
          <div
            className="flex gap-4 lg:gap-6 transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${translateX}%)`,
              willChange: prefersReducedMotion ? 'auto' : 'transform',
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
                style={{
                  height: `${imageHeight}px`,
                  width: 'auto',
                  aspectRatio: '3/4',
                }}
              >
                <Image
                  src={image}
                  alt={`MAC 2025 Memory ${index + 1}`}
                  fill
                  sizes="400px"
                  className="object-cover"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Hide scrollbar via CSS */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Scroll hint indicator */}
        {showScrollHint && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-pulse pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Scroll horizontally</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
        
        {/* Fade gradient overlays - positioned on desktop wrapper */}
        <div className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10" style={{
          background: 'linear-gradient(to right, rgba(210, 180, 140, 0.1) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 100%)'
        }} />
        <div className="absolute inset-y-0 right-0 w-40 pointer-events-none z-10" style={{
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 100%)'
        }} />
      </div>

      {/* Mobile: Horizontal swipeable row */}
      <div className="md:hidden py-8 relative">
        <div className="flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 rounded-lg overflow-hidden shadow-md snap-start"
              style={{
                height: '240px',
                width: 'auto',
                aspectRatio: '3/4',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <Image
                src={image}
                alt={`MAC 2025 Memory ${index + 1}`}
                fill
                sizes="300px"
                className="object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
        
        {/* Mobile fade gradients */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{
          background: 'linear-gradient(to right, rgba(210, 180, 140, 0.1) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 100%)'
        }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 100%)'
        }} />
      </div>
    </div>
  );
};

export default MemoryStrip;
