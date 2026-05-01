'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── Baby-themed "affiliate calculator" ───────────────────────────────────────
function BabyCalculator() {
  const [nappies, setNappies] = useState(8);
  const [wakings, setWakings] = useState(3);

  const hoursSlept = Math.max(0, 8 - wakings * 1.2).toFixed(1);
  const caffeineNeeded = (wakings * 2 + (nappies > 10 ? 1 : 0));
  const acroSessions = Math.max(0, Math.floor((Number(hoursSlept) - 4) / 1.5));
  const smiles = nappies * 4 + wakings * 2;

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-200" style={{ background: 'rgba(241,177,57,0.08)' }}>
        <h3 className="font-semibold text-zinc-900 text-sm uppercase tracking-wide">
          The New Parent Performance Calculator™
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          Scientifically accurate · Peer reviewed by no one · Results may vary
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Nappy slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-zinc-700">Nappy changes per day</label>
            <span className="text-2xl font-bold text-brand-sea tabular-nums">{nappies}</span>
          </div>
          <input
            type="range" min={4} max={18} step={1} value={nappies}
            onChange={(e) => setNappies(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-sea"
            style={{ background: '#e2e8f0' }}
          />
          <div className="relative h-4 mt-1">
            {[4, 8, 12, 18].map((n) => (
              <span key={n} className="absolute text-xs text-zinc-400 -translate-x-1/2" style={{ left: `${((n - 4) / 14) * 100}%` }}>{n}</span>
            ))}
          </div>
        </div>

        {/* Night wakings slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-zinc-700">Night-time wakings</label>
            <span className="text-2xl font-bold text-brand-sea tabular-nums">{wakings}</span>
          </div>
          <input
            type="range" min={0} max={8} step={1} value={wakings}
            onChange={(e) => setWakings(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-sea"
            style={{ background: '#e2e8f0' }}
          />
          <div className="relative h-4 mt-1">
            {[0, 2, 4, 6, 8].map((n) => (
              <span key={n} className="absolute text-xs text-zinc-400 -translate-x-1/2" style={{ left: `${(n / 8) * 100}%` }}>{n}</span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl p-4 space-y-2" style={{ background: 'rgba(16,110,169,0.05)' }}>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Estimated hours of sleep last night</span>
            <span className="font-semibold text-zinc-900">{hoursSlept}h ☕</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Coffees required to function</span>
            <span className="font-semibold text-zinc-900">{caffeineNeeded}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Acro training sessions achievable today</span>
            <span className="font-semibold" style={{ color: acroSessions > 0 ? '#106EA9' : '#dc2626' }}>
              {acroSessions > 0 ? acroSessions : '0 (blocked)'}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-zinc-200">
            <span className="font-bold text-zinc-900">Baby smiles earned</span>
            <span className="font-bold text-xl" style={{ color: '#F1B139' }}>
              {smiles} 🥹
            </span>
          </div>
        </div>

        <p className="text-xs text-zinc-400">
          Worth noting: {smiles} baby smiles significantly outweigh any number of MAC workshops. We did the maths.
        </p>
      </div>
    </div>
  );
}

// ─── Baby milestone tracker (re-skin of checklist) ────────────────────────────
const MILESTONES = [
  { label: 'Survived first week at home', done: true },
  { label: 'First full smile (gas doesn\'t count)', done: false },
  { label: 'Baby holds their own head up', done: false },
  { label: 'First L-base with baby (supervised, on the sofa)', done: false },
  { label: 'First time baby watches an acro video', done: false },
  { label: 'Sleep regression survived', done: false },
  { label: 'Baby starts reaching for things — perfect flyer instinct', done: false },
  { label: 'First proper giggle', done: false },
  { label: 'Baby sits unsupported — core strength: unlocked', done: false },
  { label: 'Four months post-partum acro comeback session', done: false },
  { label: 'Baby\'s first acro festival (MAC 2027?)', done: false },
];

export default function CaspianLauraView() {
  const [checked, setChecked] = useState<Set<string>>(new Set(
    MILESTONES.filter(m => m.done).map(m => m.label)
  ));

  const toggle = (label: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label); else next.add(label);
      return next;
    });
  };

  const pct = Math.round((checked.size / MILESTONES.length) * 100);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f8f8f6' }}>

      {/* Top bar */}
      <div style={{ backgroundColor: '#0a4d75' }} className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-serif text-white font-bold text-lg">
            MAC<span style={{ color: '#F1B139' }} className="ml-1">2026</span>
          </Link>
          <span className="text-white/30">·</span>
          <span className="text-white/70 text-sm font-medium">Teacher Portal</span>
        </div>
        <a
          href="/api/portal/logout"
          className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </a>
      </div>

      {/* Hero */}
      <div className="px-6 py-12" style={{ background: 'linear-gradient(135deg, #0a4d75 0%, #106EA9 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-brand-sun text-zinc-900">
            Special Edition Portal 🍼
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3" style={{ color: 'white' }}>
            Caspian &amp; Laura
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }} className="text-lg leading-relaxed max-w-2xl italic font-serif">
            &ldquo;You can&apos;t make it to MAC this year — and honestly, you have the best possible excuse.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* Miss you message */}
        <section>
          <div className="rounded-2xl px-8 py-9" style={{ background: 'rgba(241,177,57,0.08)', borderLeft: '4px solid #F1B139' }}>
            <p className="font-serif text-xl sm:text-2xl leading-relaxed" style={{ color: '#1c1917', fontStyle: 'italic' }}>
              &ldquo;We are going to miss you both so much. You are two of the most beautiful teachers and human beings in this community — and honestly? Creating a tiny new human together is a pretty solid reason to skip a festival.&rdquo;
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: '#b45309' }}>— Maria &amp; Flo ❤</p>
          </div>
        </section>

        {/* Missing vs Gaining */}
        <section>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Missing */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">What You&apos;re Missing</h2>
              <p className="text-xs text-zinc-400 mb-4">A completely objective, not-at-all guilt-trippy summary.</p>
              <div className="space-y-3">
                {[
                  { emoji: '☀️', label: 'Malta in October', value: '28°C & sun' },
                  { emoji: '🤸', label: 'Workshops', value: '40+ sessions' },
                  { emoji: '🫂', label: 'Late-night jams', value: 'Many' },
                  { emoji: '💙', label: 'Community love', value: 'Off the charts' },
                ].map(({ emoji, label, value }) => (
                  <div key={label} className="bg-white rounded-xl px-4 py-3 border border-zinc-200 shadow-sm flex items-center gap-3">
                    <span className="text-2xl">{emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">{label}</p>
                      <p className="font-semibold text-zinc-800 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gaining */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-1" style={{ color: '#16a34a' }}>What You&apos;re Gaining</h2>
              <p className="text-xs text-zinc-400 mb-4">The full picture, because we&apos;re nothing if not balanced.</p>
              <div className="space-y-3">
                {[
                  { emoji: '🥹', label: 'A tiny human who loves you', value: 'Unconditionally' },
                  { emoji: '🤱', label: 'Skills no workshop covers', value: 'Nappy, swaddle, soothe' },
                  { emoji: '🌙', label: 'A new relationship with sleep', value: 'Profound' },
                  { emoji: '🏅', label: 'Best excuse ever', value: 'Certified & notarised' },
                ].map(({ emoji, label, value }) => (
                  <div key={label} className="rounded-xl px-4 py-3 border shadow-sm flex items-center gap-3" style={{ background: 'rgba(22,163,74,0.05)', borderColor: 'rgba(22,163,74,0.2)' }}>
                    <span className="text-2xl">{emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#16a34a', opacity: 0.7 }}>{label}</p>
                      <p className="font-semibold text-zinc-800 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Baby calculator */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">Your New Compensation Package</h2>
          <p className="text-xs text-zinc-400 mb-5">We replaced the workshop fee calculator with something more relevant to your current situation.</p>
          <BabyCalculator />
        </section>

        {/* Milestone tracker */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">Baby Milestone Tracker</h2>
          <p className="text-xs text-zinc-400 mb-5">
            Tick items off as you go — your progress is saved in this browser. Think of it as the most important checklist of your life.
          </p>

          {/* Progress bar */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 mb-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-zinc-700">{checked.size} of {MILESTONES.length} milestones reached</span>
              <span className="font-bold text-brand-sea">{pct}%</span>
            </div>
            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #F1B139 0%, #106EA9 100%)' }}
              />
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              {pct < 20 ? 'The adventure is just beginning. You\'ve got this. 💛'
                : pct < 50 ? 'Look at you go! Sleep when the baby sleeps. 🌙'
                : pct < 80 ? 'Absolutely smashing it. MAC 2027 is looking very possible. 🤸'
                : 'Basically ready to co-teach a workshop. We\'re calling the venue. 🏅'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden divide-y divide-zinc-100">
            {MILESTONES.map((m, i) => {
              const isChecked = checked.has(m.label);
              return (
                <div
                  key={i}
                  className="px-5 py-3 flex items-center gap-3 cursor-pointer hover:bg-zinc-50 transition-colors select-none"
                  onClick={() => toggle(m.label)}
                >
                  <div
                    className="w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150"
                    style={{ borderColor: isChecked ? '#16a34a' : '#cbd5e1', background: isChecked ? '#dcfce7' : 'transparent' }}
                  >
                    {isChecked && (
                      <svg className="w-2.5 h-2.5" fill="none" stroke="#16a34a" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm flex-1 ${isChecked ? 'line-through text-zinc-400' : 'text-zinc-700'}`}>
                    {m.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* MAC 2027 save the date */}
        <section>
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #0a4d75 0%, #106EA9 100%)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#F1B139' }}>
              Already in the calendar
            </p>
            <h2 className="font-serif text-3xl font-bold mb-3" style={{ color: 'white' }}>
            MAC will still be there 🏖️
          </h2>
          <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            The community will still be here. And by then, your little one will probably be doing better tucks than half the room.
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: '#F1B139' }}>With so much love — Maria &amp; Flo ❤</p>
          </div>
        </section>

      </div>
    </main>
  );
}
