'use client';

import { useState, FormEvent } from 'react';

const LEVELS = ['Beginner', 'Beginner/Intermediate', 'Intermediate', 'Intermediate/Advanced', 'Advanced', 'Open Level'];

interface Proposal {
  title: string;
  level: string;
  prereqs: string;
  details: string;
}

export default function WorkshopProposalForm({
  teacherName,
  teacherCode,
}: {
  teacherName: string;
  teacherCode: string;
}) {
  const [proposals, setProposals] = useState<Proposal[]>([
    { title: '', level: '', prereqs: '', details: '' },
  ]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function addRow() {
    setProposals((p) => [...p, { title: '', level: '', prereqs: '', details: '' }]);
  }

  function removeRow(i: number) {
    setProposals((p) => p.filter((_, idx) => idx !== i));
  }

  function update(i: number, field: keyof Proposal, value: string) {
    setProposals((p) => p.map((row, idx) => (idx === i ? { ...row, [field]: value } : row)));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    // Build a mailto link with the proposals as body
    const body = proposals
      .map((p, i) => `Workshop ${i + 1}:\nTitle: ${p.title}\nLevel: ${p.level}\nPre-requisites: ${p.prereqs || 'None'}\nDetails: ${p.details || '—'}`)
      .join('\n\n');
    const subject = encodeURIComponent(`Workshop Proposals — ${teacherName} (${teacherCode})`);
    const bodyEncoded = encodeURIComponent(
      `Hi Maria & Flo,\n\nHere are our workshop proposals for MAC 2026:\n\n${body}\n\nWith love,\n${teacherName}`
    );
    window.location.href = `mailto:mediterraneanacroconvention@gmail.com?subject=${subject}&body=${bodyEncoded}`;
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-green-900">Your email app has been opened with your proposals.</p>
          <p className="text-sm text-green-700">Just hit Send — or copy the text and paste it into any message to us.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-200">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
          Each row = one workshop idea. Add as many as you like.
        </p>
      </div>

      <div className="divide-y divide-zinc-100">
        {proposals.map((row, i) => (
          <div key={i} className="px-6 py-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Workshop {i + 1}</span>
              {proposals.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRow(i)}
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                  aria-label="Remove"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Workshop name / topic</label>
                <input
                  type="text"
                  value={row.title}
                  onChange={(e) => update(i, 'title', e.target.value)}
                  placeholder="e.g. Intro to Icarians"
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-900 focus:border-brand-sea focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Level</label>
                <select
                  value={row.level}
                  onChange={(e) => update(i, 'level', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-900 focus:border-brand-sea focus:outline-none bg-white"
                  required
                >
                  <option value="" disabled>Select a level</option>
                  {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-xs font-semibold text-zinc-600 mb-1">Pre-requisites <span className="font-normal text-zinc-400">(optional)</span></label>
              <input
                type="text"
                value={row.prereqs}
                onChange={(e) => update(i, 'prereqs', e.target.value)}
                placeholder="e.g. Bird, Straddle bat — or leave blank if none"
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-900 focus:border-brand-sea focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-600 mb-1">Details <span className="font-normal text-zinc-400">(optional)</span></label>
              <textarea
                value={row.details}
                onChange={(e) => update(i, 'details', e.target.value)}
                placeholder="Brief description of what the class covers"
                rows={2}
                className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-900 focus:border-brand-sea focus:outline-none resize-none"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={addRow}
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add another workshop
        </button>
        <button
          type="submit"
          disabled={sending}
          className="sm:ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-brand-sea text-white font-semibold rounded-lg text-sm hover:bg-brand-sea/90 transition-colors disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send to Maria &amp; Flo
        </button>
      </div>
    </form>
  );
}
