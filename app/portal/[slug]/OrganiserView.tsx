import MemoryStrip from '@/app/components/MemoryStrip';
import ChecklistClient, { type Task } from './ChecklistClient';
import { PORTAL_TEACHERS } from '@/lib/portal-teachers';

const MEMORIES = [
  'https://lh3.googleusercontent.com/d/1l9fdwj0pOlxdx9_pnn19AakZbRhJiX2a',
  'https://lh3.googleusercontent.com/d/1A1DrxgFL68GmunFzO7HwoUMVmeh0UyIu',
  'https://lh3.googleusercontent.com/d/1SksPd1ar5A2RXrZYD5qpmHFsaukXsLoU',
  'https://lh3.googleusercontent.com/d/1YtidjKEX7L_xvOOSYJzaLGLL4nlA3qhF',
  'https://lh3.googleusercontent.com/d/1RmgEfk4KPsgWtJ41NbxqNFVYZonZSwXe',
  'https://lh3.googleusercontent.com/d/12CuB5BEbLActX52DLYtIb5pTXJzdE5Eb',
  'https://lh3.googleusercontent.com/d/1UzG5nqhlQ7nHfyiNMd2pSwvSjsd8FwO8',
  'https://lh3.googleusercontent.com/d/1rfilTHsc553Z4Sj4tEplGKllKVy4Uj1Q',
  'https://lh3.googleusercontent.com/d/1KIVknWEipQqlV2fYIgI8midm7F7_AsjL',
  'https://lh3.googleusercontent.com/d/1L5ohkjRAu1aRlIpfTa2ZvAXGM1X_8GFz',
  'https://lh3.googleusercontent.com/d/1GGY39lyjw_I7oMQ9Y-qGXqHssWnT38H6',
  'https://lh3.googleusercontent.com/d/11gdie8Cv0FqKigJuReM3ppa6jySiI3Hd',
  'https://lh3.googleusercontent.com/d/1rCQeZlUhWFz8dgQsnZtVy3IcrvJ3Thc9',
  'https://lh3.googleusercontent.com/d/1cy_Q_QHsyM-M9icYl2vMYivrvPJQEGs5',
  'https://lh3.googleusercontent.com/d/1_DNpAVZNLiouYe7vWIPV9sokwZAgib9B',
  'https://lh3.googleusercontent.com/d/1oRimFXuqF0B-75CuoMXmbaYxA7ekvPlv',
];

// ─── Ticket numbers — update manually when sales change ───────────────────────
const MAIN_FEST_TICKETS_SOLD = 30;  // total tickets sold for Main Fest
const MAIN_FEST_CAPACITY    = 74;   // adjust when confirmed
const PRE_FEST_TICKETS_SOLD = 2;    // total tickets sold for Pre-Fest
const PRE_FEST_CAPACITY     = 30;   // adjust when confirmed
// ──────────────────────────────────────────────────────────────────────────────

const TASKS: Task[] = [
  // Teachers
  { label: 'Create short list of teachers', status: 'Done', category: 'Teachers' },
  { label: 'Contact teachers and get quotes', status: 'Done', category: 'Teachers' },
  { label: 'Set up affiliate links for teachers', status: 'Done', category: 'Teachers' },
  { label: 'Organize meet up with teachers up front', status: '', category: 'Teachers' },
  { label: 'Send email to teachers', status: '', category: 'Teachers' },
  { label: 'Follow up with teachers for workshop curriculum', status: '', category: 'Teachers' },
  { label: 'Update/Create list for teacher compensation', status: '', category: 'Teachers' },
  { label: 'Check which teachers won the free massage', status: '', category: 'Teachers' },

  // Program & Schedule
  { label: 'Create schedule for the event', status: 'Pending', category: 'Program & Schedule' },
  { label: 'Day trip between Pre- and Main Fest', status: 'Pending', category: 'Program & Schedule' },
  { label: 'Create info for pre/post festival workshops if teachers are interested', status: '', category: 'Program & Schedule' },
  { label: 'Consider ecstatic dance session', status: '', category: 'Program & Schedule' },
  { label: 'Consider Sound Healing Session with Mats', status: '', category: 'Program & Schedule' },
  { label: 'Consider Cocoa Ceremony with Daria', status: '', category: 'Program & Schedule' },
  { label: 'Create Opening Circle Overview', status: '', category: 'Program & Schedule' },
  { label: 'Create Closing Circle Overview', status: '', category: 'Program & Schedule' },
  { label: 'Organise Acrolympics', status: '', category: 'Program & Schedule' },

  // Venue & Equipment
  { label: 'Make sure AC is working', status: 'Closed', category: 'Venue & Equipment' },
  { label: 'Organise catering', status: 'Closed', category: 'Venue & Equipment' },
  { label: 'Organise water dispenser', status: 'Closed', category: 'Venue & Equipment' },
  { label: 'Organise music system', status: 'Closed', category: 'Venue & Equipment' },
  { label: 'Organise gazebo / pavilion', status: 'Closed', category: 'Venue & Equipment' },
  { label: 'Organise daily cleaner', status: 'Done', category: 'Venue & Equipment' },
  { label: 'Organise puzzle mats', status: 'Pending', category: 'Venue & Equipment' },
  { label: 'Organise big banner/poster', status: '', category: 'Venue & Equipment' },
  { label: 'Review van rental', status: '', category: 'Venue & Equipment' },
  { label: 'Consider a sustainable approach', status: '', category: 'Venue & Equipment' },

  // Marketing & Website
  { label: 'Create website', status: 'Done', category: 'Marketing & Website' },
  { label: 'Get website URL', status: 'Done', category: 'Marketing & Website' },
  { label: 'Set up Instagram account', status: 'Done', category: 'Marketing & Website' },
  { label: 'Set up Facebook account', status: 'Done', category: 'Marketing & Website' },
  { label: 'Set up welcome email', status: 'Done', category: 'Marketing & Website' },
  { label: 'Organise photographer/videographer', status: 'Pending', category: 'Marketing & Website' },
  { label: 'Contact previous guests (email + WhatsApp)', status: 'Pending', category: 'Marketing & Website' },
  { label: 'Create marketing material/design', status: 'Pending', category: 'Marketing & Website' },
  { label: 'Create Facebook event for the festival', status: 'Pending', category: 'Marketing & Website' },
  { label: 'Update Social Media accounts with info, links, photos etc.', status: '', category: 'Marketing & Website' },
  { label: 'Competitor analysis', status: '', category: 'Marketing & Website' },
  { label: 'Update website/booking page to mention Valletta fast ferry to Gozo', status: '', category: 'Marketing & Website' },
  { label: 'Organise location for the Photoshoot', status: '', category: 'Marketing & Website' },

  // Finance & Legal
  { label: 'Set up booking system', status: 'Done', category: 'Finance & Legal' },
  { label: 'Discuss ticket prices (Early Bird, Normal, Volunteers, etc.)', status: 'Done', category: 'Finance & Legal' },
  { label: 'Discuss event with local council', status: 'Closed', category: 'Finance & Legal' },
  { label: 'Set up business account (VAT etc.)', status: 'Blocked', category: 'Finance & Legal' },
  { label: 'Get corporate bank account', status: 'Blocked', category: 'Finance & Legal' },
  { label: 'Sponsorships', status: 'Pending', category: 'Finance & Legal' },
  { label: 'Research insurance requirement', status: '', category: 'Finance & Legal' },

  // Event Day & Logistics
  { label: 'Get custom festival wrist bands', status: 'Pending', category: 'Event Day & Logistics' },
  { label: 'Ask for volunteers', status: 'Pending', category: 'Event Day & Logistics' },
  { label: 'Organise "registration" for festival', status: '', category: 'Event Day & Logistics' },
  { label: 'Create contingency plans', status: '', category: 'Event Day & Logistics' },
  { label: 'Welcome package', status: '', category: 'Event Day & Logistics' },
  { label: 'Print out Code of Conduct', status: '', category: 'Event Day & Logistics' },
  { label: 'Update guest list and organise it', status: '', category: 'Event Day & Logistics' },

  // Merch
  { label: 'Design merch', status: 'Pending', category: 'Merch' },
  { label: 'Find company for merch', status: 'Pending', category: 'Merch' },
  { label: 'Add Acroyoga Balance merch to festival', status: '', category: 'Merch' },
];

// Non-organiser teachers — for the affiliate tracker
const TEACHERS = PORTAL_TEACHERS.filter((t) => !t.isOrganiser);
// Non-organiser teachers — for the readiness grid
const READINESS_TEACHERS = PORTAL_TEACHERS.filter((t) => !t.isOrganiser);

function TicketBar({ sold, capacity, label }: { sold: number; capacity: number; label: string }) {
  const pct = Math.min(Math.round((sold / capacity) * 100), 100);
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-semibold text-zinc-700">{label}</span>
        <span className="text-sm font-bold" style={{ color: '#106EA9' }}>
          {sold} <span className="font-normal text-zinc-400">/ {capacity}</span>
        </span>
      </div>
      <div className="h-3 rounded-full bg-zinc-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: pct >= 80
              ? 'linear-gradient(90deg, #16a34a, #22c55e)'
              : pct >= 40
              ? 'linear-gradient(90deg, #106EA9, #F1B139)'
              : 'linear-gradient(90deg, #106EA9, #38bdf8)',
          }}
        />
      </div>
      <p className="text-xs text-zinc-400 mt-1">{pct}% full · {capacity - sold} spots remaining</p>
    </div>
  );
}

export default function OrganiserView() {
  const totalAffiliateTickets = TEACHERS.reduce((s, t) => s + (t.ticketsSold ?? 0), 0);

  return (
    <div style={{ fontFamily: 'inherit' }}>

      {/* Hero */}
      <div
        className="px-6 py-14 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a4d75 0%, #106EA9 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: '#F1B139', transform: 'translate(35%, -35%)' }}
        />
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 relative" style={{ color: '#F1B139' }}>
          MAC 2026 · Organisers only
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 relative" style={{ color: 'white' }}>
          Hey Maria &amp; Flo ❤
        </h1>
        <p className="max-w-md mx-auto text-base leading-relaxed relative" style={{ color: 'rgba(255,255,255,0.75)' }}>
          You&apos;re building something real. This page is yours — your progress, your people, your moment.
        </p>
        <div className="mt-6 relative">
          <a
            href="/api/portal/logout"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
            </svg>
            Sign out
          </a>
        </div>
      </div>

      {/* Memory strip */}
      <div className="py-8 bg-zinc-50">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
          Remember why you started ✦ MAC 2025
        </p>
        <MemoryStrip images={MEMORIES} imageHeight={260} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* Quote from Flo — clean, no gimmicks */}
        <section>
          <div
            className="rounded-2xl px-8 py-9"
            style={{ background: 'rgba(241,177,57,0.08)', borderLeft: '4px solid #F1B139' }}
          >
            <p className="font-serif text-xl sm:text-2xl leading-relaxed" style={{ color: '#1c1917', fontStyle: 'italic' }}>
              &ldquo;Since day one of this journey, you&apos;ve been there. You continue to be one of the greatest inspirations in my life.&rdquo;
            </p>
            <p className="mt-5 text-sm font-semibold" style={{ color: '#b45309' }}>— Flo ❤</p>
          </div>
        </section>

        {/* Ticket sales */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">Ticket Sales</h2>
          <p className="text-xs text-zinc-400 mb-5">Update <code className="text-zinc-500">MAIN_FEST_TICKETS_SOLD</code> / <code className="text-zinc-500">PRE_FEST_TICKETS_SOLD</code> in OrganiserView.tsx when new sales come in.</p>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 space-y-6">
            <TicketBar sold={MAIN_FEST_TICKETS_SOLD} capacity={MAIN_FEST_CAPACITY} label="Main Fest — Oct 7–11, Malta" />
            <TicketBar sold={PRE_FEST_TICKETS_SOLD} capacity={PRE_FEST_CAPACITY} label="Pre-Fest — Oct 4–6, Malta" />
          </div>
        </section>

        {/* Affiliate tracker */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">Teacher Affiliate Tracker</h2>
          <p className="text-xs text-zinc-400 mb-5">Update <code className="text-zinc-500">ticketsSold</code> in portal-teachers.ts. Travel comp unlocks automatically per teacher.</p>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(16,110,169,0.06)' }}>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide">Teacher</th>
                  <th className="px-5 py-3 text-center text-xs font-semibold text-zinc-500 uppercase tracking-wide">Tickets</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide">Travel comp</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wide">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {TEACHERS.map((t) => {
                  const sold = t.ticketsSold ?? 0;
                  const travelUnlocked = t.travelComp.unlocked;
                  const travelReq = t.travelComp.ticketsRequired;
                  const remaining = travelReq ? Math.max(0, travelReq - sold) : 0;
                  return (
                    <tr key={t.slug} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-zinc-800">{t.name}</td>
                      <td className="px-5 py-3 text-center">
                        {sold > 0 ? (
                          <span
                            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold"
                            style={{ background: 'rgba(241,177,57,0.2)', color: '#92600a' }}
                          >
                            {sold}
                          </span>
                        ) : (
                          <span className="text-zinc-300">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3">
                        {travelUnlocked ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            €{t.travelComp.amount} unlocked
                          </span>
                        ) : (
                          <span className="text-xs text-zinc-400">
                            {remaining > 0 ? `${remaining} more to unlock €${t.travelComp.amount}` : `€${t.travelComp.amount} — check threshold`}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-xs text-zinc-500">{t.tier}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr style={{ background: 'rgba(16,110,169,0.04)' }}>
                  <td className="px-5 py-3 text-xs font-semibold text-zinc-600">Total via affiliates</td>
                  <td className="px-5 py-3 text-center text-xs font-bold" style={{ color: '#106EA9' }}>{totalAffiliateTickets}</td>
                  <td colSpan={2} />
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Teacher readiness */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-1">Teacher Readiness</h2>
          <p className="text-xs text-zinc-400 mb-5">Click any teacher to open their portal (you&apos;re already signed in).</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {READINESS_TEACHERS.map((t) => {
              const hasVideo = t.videoSubmitted === true;
              const proposalCount = t.proposedWorkshops?.length ?? 0;
              const hasProposals = proposalCount > 0;
              const isSpecial = t.isBabyLeave;
              const ready = hasVideo && hasProposals;
              return (
                <a
                  key={t.slug}
                  href={`/portal/${t.slug}`}
                  className="bg-white rounded-xl border px-5 py-4 flex items-center justify-between gap-4 hover:shadow-md transition-shadow group"
                  style={{ borderColor: ready ? '#bbf7d0' : '#e4e4e7' }}
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 group-hover:text-brand-sea transition-colors">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {t.isPreFest ? 'Pre-Fest · ' : ''}{t.tier}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 items-center">
                    {!isSpecial && (
                      <>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={hasVideo
                            ? { background: '#dcfce7', color: '#16a34a' }
                            : { background: '#f1f5f9', color: '#94a3b8' }}
                        >
                          Video
                        </span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          title={hasProposals ? `${proposalCount} proposals received` : 'No proposals yet'}
                          style={hasProposals
                            ? { background: '#dcfce7', color: '#16a34a' }
                            : { background: '#fef9c3', color: '#854d0e' }}
                        >
                          {hasProposals ? `${proposalCount} workshops` : 'Pending'}
                        </span>
                      </>
                    )}
                    {isSpecial && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#f1f5f9', color: '#94a3b8' }}>
                        Baby leave
                      </span>
                    )}
                    <svg className="w-3.5 h-3.5 text-zinc-300 group-hover:text-brand-sea transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Interactive checklist */}
        <ChecklistClient tasks={TASKS} />

        {/* Quick links */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Quick Links</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm px-5 py-4 flex flex-wrap gap-3">
            {[
              { href: '/', label: 'Main website', external: false },
              { href: '/pre-fest', label: 'Pre-Fest page', external: false },
              { href: '/schedule', label: 'Schedule page', external: false },
              { href: '/teachers', label: 'Teachers page', external: false },
              {
                href: 'https://docs.google.com/spreadsheets/d/1iHlqD5pt2WvWXUhhVDei01hNY8Dja5mgJICJl8e6FTc/edit?usp=sharing',
                label: 'Task spreadsheet',
                external: true,
              },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
