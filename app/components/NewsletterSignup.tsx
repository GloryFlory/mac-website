'use client';

import { FC, FormEvent, useState } from 'react';
import Reveal from './Reveal';

const NewsletterSignup: FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-brand-sand/20 border-t border-brand-sand/30">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-sea mb-3">
            Stay in the Loop
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sea mb-4">
            Get MAC Updates
          </h2>
          <p className="text-zinc-600 mb-8 text-base sm:text-lg">
            Early-bird tickets, lineup announcements, and travel tips — straight to your inbox. No spam, unsubscribe any time.
          </p>

          {status === 'success' ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-2xl">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-800 font-medium">You&apos;re on the list — see you in Malta!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="flex-1 px-5 py-3 rounded-full border border-brand-sand bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-sea text-base disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-brand-sun text-zinc-900 font-semibold rounded-full hover:bg-[#E0A030] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 whitespace-nowrap"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default NewsletterSignup;
