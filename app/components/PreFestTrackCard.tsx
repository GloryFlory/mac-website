'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';

interface PreFestTrackCardProps {
  trackNumber: number;
  title: string;
  teachers: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
  videoUrl: string;
  description: string;
  highlights: { label: string; detail: string }[];
  accentColor: 'sea' | 'sun';
  bio: string;
  instagrams?: { name: string; url: string }[];
}

const PreFestTrackCard: FC<PreFestTrackCardProps> = ({
  trackNumber,
  title,
  teachers,
  imageUrl,
  imageAlt,
  imagePosition = 'object-top',
  videoUrl,
  description,
  highlights,
  accentColor,
  bio,
  instagrams,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isSea = accentColor === 'sea';

  const badgeBg = isSea ? 'bg-brand-sea text-white' : 'bg-brand-sun text-zinc-900';
  const cardBg = isSea
    ? 'bg-gradient-to-br from-brand-sea/5 to-brand-sea/10 border-brand-sea/20 hover:border-brand-sea/40'
    : 'bg-gradient-to-br from-brand-sun/5 to-brand-sun/10 border-brand-sun/30 hover:border-brand-sun/50';
  const checkBg = isSea ? 'bg-brand-sea/20' : 'bg-brand-sun/30';
  const buttonBg = isSea
    ? 'bg-brand-sea text-white hover:bg-brand-sea/90'
    : 'bg-brand-sun text-zinc-900 hover:bg-brand-sun/90';

  return (
    <>
      {/* Card */}
      <div
        className={`group relative rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl cursor-pointer ${cardBg}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
        aria-label={`Learn more about Track ${trackNumber}: ${title} with ${teachers}`}
      >
        {/* Track Badge */}
        <div className={`absolute top-6 right-6 z-10 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${badgeBg}`}>
          Track {trackNumber}
        </div>

        {/* Photo */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className={`object-cover ${imagePosition} group-hover:scale-105 transition-transform duration-500`}
          />
          {/* Play hint overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 text-brand-sea ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="font-serif text-3xl font-bold text-brand-sea mb-2">{title}</h3>
            <p className="text-brand-sea/70 font-semibold text-lg">with {teachers}</p>
          </div>

          <p className="text-zinc-700 mb-6 leading-relaxed">{description}</p>

          <div className="space-y-3 mb-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${checkBg}`}>
                  <svg className="w-4 h-4 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-zinc-700"><strong>{h.label}</strong> - {h.detail}</p>
              </div>
            ))}
          </div>

          <button className={`w-full mt-2 py-3 px-6 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2 ${buttonBg}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Meet the Teachers & Watch Video
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-zinc-100 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="p-6 pb-4 border-b border-zinc-200">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${badgeBg}`}>
                Track {trackNumber}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-1">{title}</h2>
              <p className="text-brand-sea/70 font-semibold text-lg">with {teachers}</p>
            </div>

            {/* Side by side: video + bio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Left: portrait video */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                {videoUrl.includes('drive.google.com') ? (
                  <iframe
                    src={videoUrl}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    aria-label={`${teachers} video`}
                  />
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain bg-black"
                    aria-label={`${teachers} video`}
                  />
                )}
              </div>

              {/* Right: bio + highlights */}
              <div className="flex flex-col">
                <div className="text-zinc-700 leading-relaxed mb-6">
                  {bio.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-200 space-y-3">
                  <h4 className="font-semibold text-zinc-900 text-sm uppercase tracking-wide mb-3">What you&apos;ll focus on</h4>
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${checkBg}`}>
                        <svg className="w-3 h-3 text-brand-sea" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-zinc-700 text-sm"><strong>{h.label}</strong> — {h.detail}</p>
                    </div>
                  ))}
                </div>

                {instagrams && instagrams.length > 0 && (
                  <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-3">
                    {instagrams.map((ig) => (
                      <a
                        key={ig.url}
                        href={ig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        {ig.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreFestTrackCard;
