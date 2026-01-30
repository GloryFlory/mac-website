'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';

interface ParallaxHeroProps {
  backgroundUrl: string;
  children: ReactNode;
  overlay?: boolean;
}

export default function ParallaxHero({
  backgroundUrl,
  children,
  overlay = true,
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Target position for smooth easing
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | undefined>(undefined);
  const [imageLoaded, setImageLoaded] = useState(false);

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
    // Skip parallax on mobile or if reduced motion is preferred
    if (prefersReducedMotion || !containerRef.current) return;

    // Check if device is mobile (basic check)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) return;

    const container = containerRef.current;
    const background = backgroundRef.current;
    if (!background) return;

    // Mouse move handler with passive listener for performance
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container center (-1 to 1)
      const mouseX = (e.clientX - rect.left) / rect.width;
      const mouseY = (e.clientY - rect.top) / rect.height;
      
      // Center around 0 (range: -0.5 to 0.5)
      const normalizedX = mouseX - 0.5;
      const normalizedY = mouseY - 0.5;
      
      // Apply parallax range (~20px movement)
      const maxMove = 20;
      targetPosition.current = {
        x: normalizedX * maxMove * 2,
        y: normalizedY * maxMove * 2,
      };
    };

    // Smooth animation loop with easing
    const animate = () => {
      if (!background) return;

      // Easing factor (lower = smoother/slower)
      const ease = 0.1;
      
      // Lerp (linear interpolation) for smooth movement
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * ease;

      // Apply transform
      background.style.transform = `
        translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)
        scale(1.06)
      `;

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Add passive listener for better scroll performance
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Start animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background image with parallax - using Next.js Image for optimization */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: prefersReducedMotion ? 'scale(1)' : 'scale(1.06)',
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-sea/20 to-brand-sand/20 animate-pulse" />
        )}
        <Image
          src={backgroundUrl}
          alt="Mediterranean coastline"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Optional dark overlay gradient for readability */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
