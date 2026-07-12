import { FC } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

interface Partner {
  name: string;
  logo: string;
  href: string;
  width: number;
  height: number;
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
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PartnersSection;
