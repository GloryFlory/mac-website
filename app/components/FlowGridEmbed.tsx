'use client';

import { FC, useState } from 'react';

interface FlowGridEmbedProps {
  className?: string;
}

const FlowGridEmbed: FC<FlowGridEmbedProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Iframe Container */}
      <div className="relative w-full h-[75vh] md:h-[80vh] rounded-2xl overflow-hidden border border-neutral-200/20 bg-white">
        {/* Loading Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:via-zinc-700 bg-[length:200%_100%]">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 border-4 border-brand-sea border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-zinc-500 text-sm font-medium">
                  Loading schedule...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src="https://www.tryflowgrid.com/embed/mac-2025"
          title="Mediterranean Acro Convention 2026 Schedule - Interactive workshop timetable"
          className="w-full h-full"
          onLoad={handleLoad}
          loading="lazy"
          allow="fullscreen"
          style={{
            border: 'none',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-zinc-600">
          Schedule powered by{' '}
          <a
            href="https://tryflowgrid.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-sea hover:text-brand-sun transition-colors duration-200 underline underline-offset-2 font-medium"
          >
            FlowGrid
          </a>
        </p>
      </div>
    </div>
  );
};

export default FlowGridEmbed;
