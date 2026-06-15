'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const REEL_LENGTH = 32;

const CONFETTI_COLORS = ['#F1B139', '#106EA9', '#466515', '#C1A31F', '#8E590D', '#ffffff'];

type ConfettiPiece = {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
  size: number;
};

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function GiveawayPage() {
  const [screen, setScreen] = useState<'entry' | 'draw'>('entry');
  const [names, setNames] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const [reel, setReel] = useState<string[]>([]);
  const [itemHeight, setItemHeight] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [spinId, setSpinId] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const windowRef = useRef<HTMLDivElement>(null);

  function addName() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setNames((prev) => [...prev, trimmed]);
    setInput('');
  }

  function removeName(index: number) {
    setNames((prev) => prev.filter((_, i) => i !== index));
  }

  function startSpin() {
    if (names.length === 0 || !windowRef.current) return;

    const height = windowRef.current.offsetHeight;
    const pickedWinner = names[Math.floor(Math.random() * names.length)];

    // Build the reel from shuffled passes through the full name list, so
    // every name appears an equal number of times (nothing looks rigged)
    // and the same name never appears twice in a row.
    const newReel: string[] = [];
    while (newReel.length < REEL_LENGTH - 1) {
      const pass = shuffle(names);
      if (newReel.length > 0 && pass[0] === newReel[newReel.length - 1]) {
        const swapIndex = pass.findIndex((n, i) => i > 0 && n !== pass[0]);
        if (swapIndex > 0) [pass[0], pass[swapIndex]] = [pass[swapIndex], pass[0]];
      }
      newReel.push(...pass);
    }
    newReel.length = REEL_LENGTH - 1;

    // Avoid the winner appearing twice in a row right before it lands.
    if (newReel[newReel.length - 1] === pickedWinner) {
      const swapIndex = newReel.findIndex((n) => n !== pickedWinner);
      if (swapIndex !== -1) {
        [newReel[newReel.length - 1], newReel[swapIndex]] = [
          newReel[swapIndex],
          newReel[newReel.length - 1],
        ];
      }
    }
    newReel.push(pickedWinner);

    setItemHeight(height);
    setReel(newReel);
    setWinner(null);
    setConfetti([]);
    setSpinning(true);
    setSpinId((id) => id + 1);
  }

  if (screen === 'entry') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a1622] via-[#142b1a] to-[#0a1622] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-center gap-4 bg-gradient-to-r from-brand-sea to-[#466515]">
              <Image
                src="/mac-logo.png"
                alt="Mediterranean Acro Convention"
                width={500}
                height={500}
                className="!h-12 !w-auto"
              />
              <span className="text-white/50 text-xl">×</span>
              <Image
                src="/antola-logo.png"
                alt="Antola Acro Festival"
                width={177}
                height={118}
                className="!h-10 !w-auto"
              />
            </div>

            <div className="p-8">
              <h1 className="text-2xl font-bold text-center mb-1">Giveaway Draw</h1>
              <p className="text-center text-sm text-gray-500 mb-6">
                Enter everyone&apos;s name, then start the draw.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addName();
                }}
                className="flex gap-2 mb-4"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a name..."
                  autoFocus
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-sea"
                />
                <button
                  type="submit"
                  className="bg-brand-sea text-white rounded-xl px-4 py-2 font-semibold hover:bg-[#0a4d75] transition-colors"
                >
                  Add
                </button>
              </form>

              {names.length > 0 && (
                <ul className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                  {names.map((name, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2"
                    >
                      <span className="text-gray-700">{name}</span>
                      <button
                        onClick={() => removeName(i)}
                        aria-label={`Remove ${name}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-sm text-gray-500 text-center mb-4">
                {names.length} {names.length === 1 ? 'name' : 'names'} entered
              </p>

              <button
                onClick={() => setScreen('draw')}
                disabled={names.length < 2}
                className="w-full bg-gradient-to-r from-brand-sun to-[#C1A31F] text-white font-bold rounded-xl py-3 text-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Continue to draw →
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1622] via-[#142b1a] to-[#0a1622] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 opacity-50">
        <Image
          src="/mac-logo.png"
          alt="Mediterranean Acro Convention"
          width={500}
          height={500}
          className="!h-12 !w-auto"
        />
      </div>
      <div className="absolute top-6 right-6 opacity-50">
        <Image
          src="/antola-logo.png"
          alt="Antola Acro Festival"
          width={177}
          height={118}
          className="!h-10 !w-auto"
        />
      </div>

      <button
        onClick={() => setScreen('entry')}
        className="absolute bottom-6 left-6 text-white/40 hover:text-white/70 text-sm transition-colors"
      >
        ← Edit names
      </button>

      <div
        ref={windowRef}
        className="w-full max-w-2xl h-40 sm:h-56 md:h-64 overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      >
        {reel.length > 0 ? (
          <motion.div
            key={spinId}
            initial={{ y: 0 }}
            animate={{ y: -itemHeight * (reel.length - 1) }}
            transition={{ duration: 5, ease: [0.12, 0, 0.15, 1] }}
            onAnimationComplete={() => {
              setSpinning(false);
              setWinner(reel[reel.length - 1]);
              setConfetti(
                Array.from({ length: 60 }, (_, i) => ({
                  id: i,
                  x: Math.random() * 100,
                  color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                  delay: Math.random() * 0.4,
                  duration: 1.6 + Math.random() * 1.2,
                  rotate: Math.random() * 360 - 180,
                  size: 6 + Math.random() * 8,
                }))
              );
            }}
          >
            {reel.map((name, i) => (
              <div
                key={i}
                style={{ height: itemHeight }}
                className="flex items-center justify-center text-center px-4"
              >
                <span className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl break-words leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-white/40 font-serif text-3xl sm:text-4xl">Ready?</span>
          </div>
        )}
      </div>

      {winner && !spinning && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="!text-[#F1B139] font-serif text-2xl sm:text-3xl font-bold">
            Congratulations!
          </p>
          <p className="mt-2 !text-white/70 max-w-md mx-auto px-4">
            We can&apos;t wait to welcome and play with you at the Mediterranean Acro Convention
            and the Antola Acro Fest!
          </p>
          <p className="mt-2 !text-white/50 text-sm">We&apos;ll be in touch with more info soon.</p>
        </motion.div>
      )}

      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {!spinning && !winner && (
          <button
            onClick={startSpin}
            className="bg-gradient-to-r from-[#F1B139] to-[#C1A31F] text-[#1a2e0f] font-bold rounded-full px-10 py-4 text-xl shadow-lg hover:scale-105 transition-transform"
          >
            Start
          </button>
        )}
      </div>

      {names.length > 0 && (
        <p className="mt-4 !text-white/30 text-sm">
          {names.length} {names.length === 1 ? 'entry' : 'entries'} in the draw
        </p>
      )}

      {confetti.map((piece) => (
        <motion.div
          key={`${spinId}-${piece.id}`}
          className="absolute bottom-0 rounded-sm pointer-events-none"
          style={{
            left: `${piece.x}%`,
            width: piece.size,
            height: piece.size * 0.4,
            backgroundColor: piece.color,
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: '-100vh', opacity: 0, rotate: piece.rotate }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeOut' }}
        />
      ))}
    </main>
  );
}
