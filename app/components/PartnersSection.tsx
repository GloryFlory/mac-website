import { FC } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { instrumentSans } from '../fonts';

interface Partner {
  name: string;
  logo?: string;
  href: string;
  width?: number;
  height?: number;
}

const partners: Partner[] = [
  {
    name: 'Beyond The Mat',
    logo: '/partners/beyond-the-mat-black.png',
    href: 'https://beyondthematco.com/',
    width: 3490,
    height: 1680,
  },
  {
    name: 'Visit Malta',
    logo: '/partners/visit-malta.png',
    href: 'https://www.visitmalta.com/en/',
    width: 2211,
    height: 581,
  },
  {
    name: 'AcroPassport',
    href: 'https://acropassport.com/',
  },
];

const PartnersSection: FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-wider text-zinc-500 font-medium text-center mb-10">
            Our Partners
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="flex items-center justify-center w-36 h-16 sm:w-40 sm:h-20 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                ) : (
                  <span className="relative flex items-center justify-center">
                    <svg
                      className="absolute w-11 h-11 sm:w-14 sm:h-14 text-zinc-900 opacity-15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    <span
                      className={`${instrumentSans.className} relative text-xl sm:text-2xl text-zinc-900`}
                    >
                      {partner.name}
                    </span>
                  </span>
                )}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PartnersSection;
