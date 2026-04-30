'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PortalLoginPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/portal/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await res.json() as { redirect?: string; error?: string };

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      router.push(data.redirect!);
    } catch {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-sea to-[#0a4d75] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header strip */}
          <div className="bg-brand-sea px-8 py-6 text-center">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-3xl font-bold text-white">
                MAC<span className="text-brand-sun ml-1">2026</span>
              </span>
            </Link>
            <p className="text-white/80 text-sm font-medium uppercase tracking-widest">
              Teacher Portal
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <h1 className="font-serif text-2xl font-bold text-brand-sea mb-2">
              Welcome back
            </h1>
            <p className="text-zinc-500 text-sm mb-8">
              Enter the portal access code sent to you by the MAC team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="code" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Access Code
                </label>
                <input
                  id="code"
                  type="password"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your access code"
                  autoComplete="current-password"
                  spellCheck={false}
                  className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-brand-sea focus:outline-none text-zinc-900 font-mono text-base uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal placeholder:font-sans placeholder:text-zinc-400 transition-colors"
                  required
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !code.trim()}
                className="w-full py-3.5 bg-brand-sun text-zinc-900 font-bold rounded-xl hover:bg-brand-sun/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  'Access My Portal'
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-zinc-400">
              Code not working?{' '}
              <a
                href="mailto:mediterraneanacroconvention@gmail.com"
                className="text-brand-sea hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-white/50 text-xs mt-6">
          <Link href="/" className="hover:text-white/70 transition-colors">
            ← Back to acrointhesun.com
          </Link>
        </p>
      </div>
    </main>
  );
}
