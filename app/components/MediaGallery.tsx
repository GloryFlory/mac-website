import { FC } from 'react';
import Reveal from './Reveal';
import Button from './Button';

const MediaGallery: FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-white to-brand-sand/10">
      <div className="max-w-6xl mx-auto">
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

        {/* Photo Grid Placeholder */}
        <Reveal delay={0.3}>
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-sea mb-6 text-center">
              Photo Gallery
            </h3>
            
            {/* Placeholder for actual photos */}
            <div className="bg-gradient-to-br from-brand-sand/20 to-brand-sun/10 rounded-2xl p-12 text-center border-2 border-dashed border-brand-sand">
              <svg className="w-16 h-16 mx-auto text-brand-sea/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="font-serif text-xl font-bold text-brand-sea mb-2">
                Photos Coming Soon!
              </h4>
              <p className="text-zinc-600 max-w-md mx-auto">
                We're curating the best moments from MAC 2025. Check back soon to see amazing photos from workshops, performances, and beach jams!
              </p>
            </div>

            {/* When you have photos, replace the placeholder above with this grid:
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            */}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MediaGallery;
