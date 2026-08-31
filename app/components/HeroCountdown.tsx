'use client';

import { useEffect, useState } from 'react';

const MAIN_FEST_DATE = '2026-10-07T00:00:00';

function getDaysLeft(target: string): number {
  const diff = new Date(target).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function HeroCountdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setDays(getDaysLeft(MAIN_FEST_DATE));
    update();
    const interval = setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8">
      <div
        className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-none"
        style={{ color: '#F1B139', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
      >
        {days ?? '–'}
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-[0.15em] font-medium mt-2" style={{ color: '#FFFFFF' }}>
        Days to Go
      </div>
    </div>
  );
}
