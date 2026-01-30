import { FC } from 'react';
import Image from 'next/image';

interface TeacherCardProps {
  name: string;
  roleTags: string[];
  imageUrl: string;
  location?: string;
  bio?: string;
}

const TeacherCard: FC<TeacherCardProps> = ({
  name,
  roleTags,
  imageUrl,
  location,
  bio,
}) => {
  return (
    <article className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-neutral-200/20 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:border-brand-sea/30">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand/10 dark:bg-zinc-800">
        <Image
          src={imageUrl}
          alt={`${name}, ${roleTags.join(', ')}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-serif font-bold text-brand-sea dark:text-white mb-2">
          {name}
        </h3>

        {/* Location */}
        {location && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-1">
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
              className="px-3 py-1 bg-brand-sand/20 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full border border-brand-sand/30 dark:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {bio}
          </p>
        )}
      </div>
    </article>
  );
};

export default TeacherCard;
