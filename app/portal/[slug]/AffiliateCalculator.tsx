'use client';

import { useState } from 'react';
import type { PortalTeacher } from '@/lib/portal-teachers';
import { calcKickback } from '@/lib/portal-teachers';

export default function AffiliateCalculator({ teacher }: { teacher: PortalTeacher }) {
  const [tickets, setTickets] = useState(5);

  const kickback = calcKickback(teacher, tickets);
  const travelUnlocked =
    teacher.travelComp.unlocked ||
    (teacher.travelComp.ticketsRequired !== undefined && tickets >= teacher.travelComp.ticketsRequired);
  const accomUnlocked =
    teacher.accommodation.duringMAC ||
    (teacher.accommodation.ticketsRequired !== undefined && tickets >= teacher.accommodation.ticketsRequired);

  const totalGuaranteed =
    teacher.workshops.reduce((s, w) => s + w.count * w.rateEach, 0) +
    (travelUnlocked ? teacher.travelComp.amount : 0);

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-200">
        <h3 className="font-semibold text-zinc-900 text-sm uppercase tracking-wide">
          Affiliate Earnings Calculator
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          Based on ~€{teacher.referenceTicketPrice} ticket price · {teacher.affiliateKickback}% kickback
        </p>
      </div>

      <div className="p-6">
        {/* Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-zinc-700">Tickets sold via my code</label>
            <span className="text-2xl font-bold text-brand-sea tabular-nums">{tickets}</span>
          </div>
          <input
            type="range"
            min={0}
            max={30}
            step={1}
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-brand-sea"
          />
          <div className="relative h-4 mt-1">
            {([0, 5, 10, 15, 20, 30] as const).map((n) => (
              <span
                key={n}
                className="absolute text-xs text-zinc-400 -translate-x-1/2"
                style={{ left: `${(n / 30) * 100}%` }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {teacher.travelComp.ticketsRequired !== undefined && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              travelUnlocked
                ? 'bg-green-100 text-green-800'
                : 'bg-zinc-100 text-zinc-500'
            }`}>
              {travelUnlocked ? '✓' : `${teacher.travelComp.ticketsRequired - tickets > 0 ? teacher.travelComp.ticketsRequired - tickets : 0} more to unlock`}
              {' '}Travel (€{teacher.travelComp.amount})
            </span>
          )}
          {teacher.accommodation.ticketsRequired !== undefined && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              accomUnlocked
                ? 'bg-green-100 text-green-800'
                : 'bg-zinc-100 text-zinc-500'
            }`}>
              {accomUnlocked ? '✓' : `${teacher.accommodation.ticketsRequired - tickets > 0 ? teacher.accommodation.ticketsRequired - tickets : 0} more to unlock`}
              {' '}Accommodation (€{teacher.accommodation.valuePerPerson}/person)
            </span>
          )}
        </div>

        {/* Summary */}
        <div className="bg-brand-sea/5 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Workshop compensation</span>
            <span className="font-semibold text-zinc-900">
              €{teacher.workshops.reduce((s, w) => s + w.count * w.rateEach, 0)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">
              Travel {travelUnlocked ? '✓' : teacher.travelComp.unlocked ? '' : `(needs ${teacher.travelComp.ticketsRequired} tickets)`}
            </span>
            <span className={`font-semibold ${travelUnlocked ? 'text-zinc-900' : 'text-zinc-400'}`}>
              {travelUnlocked ? `€${teacher.travelComp.amount}` : '—'}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600">Affiliate kickback ({tickets} tickets)</span>
            <span className="font-semibold text-brand-sea">+€{kickback}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-zinc-200">
            <span className="font-bold text-zinc-900">Estimated total</span>
            <span className="font-bold text-xl text-brand-sea">
              €{totalGuaranteed + kickback}
            </span>
          </div>
        </div>

        <p className="text-xs text-zinc-400 mt-3">
          Workshop fees are indicative until the final schedule is confirmed.
          Kickback is calculated on base ticket price and paid after the event.
        </p>
      </div>
    </div>
  );
}
