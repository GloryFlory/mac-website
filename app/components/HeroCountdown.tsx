'use client';

import { useEffect, useState } from 'react';

interface CountdownTarget {
  label: string;
  date: string;
}

const TARGETS: CountdownTarget[] = [
  { label: 'Pre-Fest', date: '2026-10-03T00:00:00' },
  { label: 'Main Fest', date: '2026-10-07T00:00:00' },
];

function getDaysLeft(target: string): number {
  const diff = new Date(target).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function HeroCountdown() {
  const [days, setDays] = useState<number[] | null>(null);

  useEffect(() => {
    const update = () => setDays(TARGETS.map((t) => getDaysLeft(t.date)));
    update();
    const interval = setInterval(update, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 sm:gap-14 mb-8">
      {TARGETS.map((t, i) => (
        <div key={t.label} className="text-center">
          <div
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-none"
            style={{ color: '#F1B139', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            {days ? days[i] : '–'}
          </div>
          <div className="text-xs sm:text-sm uppercase tracking-[0.15em] font-medium mt-2" style={{ color: '#FFFFFF' }}>
            Days to {t.label}
          </div>
        </div>
      ))}
    </div>
  );
}
