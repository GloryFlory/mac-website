import { Inter, Playfair_Display, Instrument_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
});

// Matches AcroPassport's own brand font, used to render their text wordmark
// since they don't have a logo image.
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});
