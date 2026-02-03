'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

interface TeacherCardProps {
  name: string;
  duoName?: string;
  roleTags: string[];
  imageUrl: string;
  videoUrl?: string;
  location?: string;
  bio?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
}

const TeacherCard: FC<TeacherCardProps> = ({
  name,
  duoName,
  roleTags,
  imageUrl,
  videoUrl,
  location,
  bio,
  instagram,
  youtube,
  website,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(imageUrl || '');
  const hasExpandedVideo = videoUrl && /\.(mp4|webm|ogg|mov)$/i.test(videoUrl);

  return (
    <>
      <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/20 hover:shadow-xl transition-all duration-300 hover:border-brand-sea/30 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand/10">
          {isVideo ? (
            <video
              src={imageUrl}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
              aria-label={`${name} preview video`}
            />
          ) : (
            <Image
              src={imageUrl}
              alt={`${name}, ${roleTags.join(', ')}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-sea/90 px-4 py-2 rounded-full">
              View Profile
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Name */}
          <h3 className="text-2xl font-serif font-bold text-brand-sea mb-2">
            {name}
          </h3>

          {/* Location */}
          {location && (
            <p className="text-sm text-zinc-500 mb-4 flex items-center gap-1">
              <svg
                className="w-4 h-4 text-brand-sea/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </p>
          )}

          {/* Role Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {roleTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-sand/20 text-zinc-700 text-xs font-medium rounded-full border border-brand-sand/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bio Preview */}
          {bio && (
            <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
              {bio}
            </p>
          )}
        </div>
      </article>

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-zinc-100 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with Name and Tags */}
            <div className="p-6 pb-4 border-b border-zinc-200">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-sea mb-1">
                {name}
              </h2>
              
              {duoName && (
                <p className="text-lg text-brand-sea/70 font-medium mb-3 italic">
                  {duoName}
                </p>
              )}

              {location && (
                <p className="text-zinc-500 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-sea/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {roleTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-brand-sand/20 text-zinc-700 text-sm font-medium rounded-full border border-brand-sand/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Side by Side: Video and Bio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Left: Video/Image */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-brand-sand/10">
                {hasExpandedVideo ? (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain bg-black"
                    aria-label={`${name} video`}
                  />
                ) : (
                  <Image
                    src={imageUrl}
                    alt={`${name}, ${roleTags.join(', ')}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                )}
              </div>

              {/* Right: Bio and Social */}
              <div className="flex flex-col justify-between">
                {bio && (
                  <div className="text-zinc-700 leading-relaxed mb-6 overflow-y-auto max-h-[60vh]">
                    {bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                {(instagram || youtube || website) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200">
                    {instagram && (
                      <a
                        href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    )}
                    {youtube && (
                      <a
                        href={youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </a>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-brand-sea text-white rounded-full hover:bg-brand-sea/90 transition-colors text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Website
                      </a>
                    )}
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

export default TeacherCard;
