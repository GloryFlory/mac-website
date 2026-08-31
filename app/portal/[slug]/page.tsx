import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTeacherBySlug, calcWorkshopTotal } from '@/lib/portal-teachers';
import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCalculator from './AffiliateCalculator';
import WorkshopProposalForm from './WorkshopProposalForm';
import OrganiserView from './OrganiserView';
import CaspianLauraView from './CaspianLauraView';

export const metadata: Metadata = {
  title: 'Teacher Portal | MAC 2026',
  robots: { index: false, follow: false },
};

const TEACHER_QUOTE: Record<string, string> = {
  'coni-mati':    'Your playfulness in the air is infectious — and Flo may be slightly biased, but being based by Mati is one of the highlights of any festival. We\'re so happy you\'re coming back.',
  'michal-klara': 'First time at the MAC and we couldn\'t be more excited. The way you link whips and icarians into something that looks completely effortless — we can\'t wait for the community to experience it.',
  'lloydie-flo':  'Your beautiful flows and creative inspirations blew everyone away last year — we\'re thrilled to have you back and can\'t wait to see what you bring this time.',
  'eli-bagaz':    'First time at the MAC and we\'re so ready for it. The joy you bring — on and off the mat — is exactly the kind of energy that makes a festival feel alive.',
  'manas-mira':   'First time at the MAC, and we\'ve been looking forward to this one. Your beautiful, creative flows are going to be something really special for this community.',
  'nick-chrysa':  'We first crossed paths in Italy and we\'ve been hoping you\'d make it to the MAC ever since. So glad it\'s finally happening — and we\'re excited to welcome you and your Greek crew.',
};

const TIER_BADGE: Record<string, string> = {
  Headliner: 'bg-brand-sun text-zinc-900',
  Featured: 'bg-brand-sea text-white',
  Supporting: 'bg-zinc-600 text-white',
  Organiser: 'bg-zinc-900 text-white',
};

export default async function TeacherPortalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('portal-token')?.value;

  if (!token || (token !== slug && token !== 'organisers')) redirect('/portal/login');

  const teacher = getTeacherBySlug(slug);
  if (!teacher) redirect('/portal/login');

  if (teacher.isOrganiser) return <OrganiserView />;
  if (teacher.isBabyLeave) return <CaspianLauraView />;

  const workshopTotal = calcWorkshopTotal(teacher);
  const travelUnlocked = teacher.travelComp.unlocked;

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
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${TIER_BADGE[teacher.tier]}`}>
            {teacher.tier} Teacher
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2" style={{ color: 'white' }}>
            Welcome, {teacher.name}
          </h1>
          {TEACHER_QUOTE[teacher.slug] && (
            <p style={{ color: 'rgba(255,255,255,0.75)' }} className="text-lg italic">
              &ldquo;{TEACHER_QUOTE[teacher.slug]}&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Event Overview */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Event Overview</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Location',
                value: 'Riviera Spa Hotel, Malta',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Dates',
                value: 'October 7–11, 2026',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Registration opens',
                value: '2PM · Opening circle 4PM',
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(241,177,57,0.15)' }}>
                  {icon}
                </div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-zinc-800 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Schedule */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Your Workshop Schedule</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="text-left px-6 py-3 text-zinc-500 font-semibold uppercase tracking-wide text-xs">Session</th>
                  <th className="text-center px-6 py-3 text-zinc-500 font-semibold uppercase tracking-wide text-xs">Count</th>
                  <th className="text-right px-6 py-3 text-zinc-500 font-semibold uppercase tracking-wide text-xs">Rate (per person × 2)</th>
                  <th className="text-right px-6 py-3 text-zinc-500 font-semibold uppercase tracking-wide text-xs">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {teacher.workshops.map((ws, i) => (
                  <tr key={i} className="border-b border-zinc-100 last:border-0">
                    <td className="px-6 py-4 text-zinc-700">{ws.label}</td>
                    <td className="px-6 py-4 text-center text-zinc-700">{ws.count}</td>
                    <td className="px-6 py-4 text-right text-zinc-700">€{ws.rateEach}</td>
                    <td className="px-6 py-4 text-right font-semibold text-zinc-900">€{ws.count * ws.rateEach}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: 'rgba(16,110,169,0.05)' }}>
                  <td colSpan={3} className="px-6 py-4 font-bold text-zinc-900">Workshop Total</td>
                  <td className="px-6 py-4 text-right font-bold text-xl text-brand-sea">€{workshopTotal}</td>
                </tr>
              </tfoot>
            </table>
            <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
              <p className="text-xs text-amber-800">
                Each workshop is paid per teacher: the rate shown is the total for both of you combined. Final compensation confirmed once the schedule is locked.
              </p>
            </div>
          </div>
        </section>

        {/* Compensation */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Compensation &amp; Perks</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(241,177,57,0.15)' }}>
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Travel</p>
                  <p className="text-2xl font-bold text-brand-sea">€{teacher.travelComp.amount}</p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${travelUnlocked ? 'bg-green-100 text-green-800' : 'bg-zinc-100 text-zinc-500'}`}>
                  {travelUnlocked ? 'Unlocked' : `${teacher.travelComp.ticketsRequired} tickets needed`}
                </span>
              </div>
              <p className="text-sm text-zinc-600">
                {teacher.travelComp.note ?? `Sell ${teacher.travelComp.ticketsRequired} tickets via your code to unlock €${teacher.travelComp.amount} travel compensation.`}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(241,177,57,0.15)' }}>
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Accommodation &amp; Food</p>
                  <p className="text-xl font-bold text-brand-sea">{teacher.accommodation.duringMAC ? 'Included' : 'Conditional'}</p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${teacher.accommodation.duringMAC ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                  {teacher.accommodation.duringMAC ? 'Confirmed' : `${teacher.accommodation.ticketsRequired} tickets`}
                </span>
              </div>
              {teacher.accommodation.duringMAC ? (
                <p className="text-sm text-zinc-600">Full board at Riviera Spa Hotel included for the duration of MAC (Oct 7–11).</p>
              ) : (
                <p className="text-sm text-zinc-600">
                  Full Board + 4 nights double room (valued at €{teacher.accommodation.valuePerPerson}/person) unlocked when you sell {teacher.accommodation.ticketsRequired} tickets.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Discount Code */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Your Discount Code</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">Share this code with your community</p>
                <div className="inline-flex items-center gap-3 bg-brand-sea/5 border-2 border-brand-sea/20 rounded-xl px-5 py-3 mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-sea tracking-widest">{teacher.code}</span>
                </div>
                {(teacher.ticketsSold ?? 0) > 0 && (
                  <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(241,177,57,0.15)', color: '#b07c10' }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a1 1 0 01-1 1 1 1 0 100 2 1 1 0 011 1v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a1 1 0 011-1 1 1 0 100-2 1 1 0 01-1-1V6z" />
                    </svg>
                    {teacher.ticketsSold} ticket{teacher.ticketsSold !== 1 ? 's' : ''} sold so far
                  </div>
                )}
                <div className="bg-zinc-50 rounded-xl p-4 text-sm text-zinc-700 border border-zinc-200 font-mono">
                  Use code <strong>{teacher.code}</strong> for 5% off your MAC 2026 ticket → acrointhesun.com
                </div>
              </div>
              <div className="text-sm text-zinc-700 space-y-3 sm:max-w-[200px]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-sun flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>{teacher.affiliateDiscount}% off</strong> for your students</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-sea flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>{teacher.affiliateKickback}%</strong> kickback per ticket sold</span>
                </div>
                <p className="text-xs text-zinc-400">Kickbacks paid after the event, based on base ticket price.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Calculator */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Earnings Estimator</h2>
          <AffiliateCalculator teacher={teacher} />
        </section>

        {/* Workshop Proposals */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Workshop Proposals</h2>

          {teacher.proposedWorkshops && teacher.proposedWorkshops.length > 0 ? (
            <>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-900 text-sm">Proposals received — thank you!</p>
                  <p className="text-xs text-green-700">
                    We have your {teacher.proposedWorkshops.length} workshop idea{teacher.proposedWorkshops.length !== 1 ? 's' : ''} on file. Want to add more? Use the form below.
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {teacher.proposedWorkshops.map((ws, i) => (
                  <div key={i} className="bg-white rounded-xl border border-zinc-200 px-5 py-3">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-zinc-900 text-sm">{ws.name}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-brand-sea/10" style={{ color: '#106EA9' }}>{ws.level}</span>
                    </div>
                    {ws.prereqs && ws.prereqs !== 'tbc' && (
                      <p className="text-xs text-zinc-500"><span className="font-semibold">Pre-reqs:</span> {ws.prereqs}</p>
                    )}
                    {ws.details && (
                      <p className="text-xs text-zinc-500 italic mt-0.5">{ws.details}</p>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-zinc-500 text-sm mb-4">Want to submit additional ideas? Use the form below.</p>
            </>
          ) : (
            <p className="text-zinc-600 text-sm mb-4">
              If you haven&apos;t sent us your workshop ideas yet, submit them here. Separate each proposal by level — it helps us build the programme.
            </p>
          )}

          <p className="text-xs text-zinc-400 mb-3">
            No database needed — your proposals are sent by email directly to us. We&apos;ll add them to your profile once received.
          </p>
          <WorkshopProposalForm teacherName={teacher.name} teacherCode={teacher.code} />
        </section>

        {/* What we need */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">What We Need From You</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm divide-y divide-zinc-100">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Intro Video',
                deadline: teacher.videoSubmitted ? 'Received — thank you!' : 'Due: 15 May 2026',
                deadlineGreen: teacher.videoSubmitted ?? false,
                desc: teacher.videoSubmitted
                  ? "We've received your intro video — you're all set! Keep an eye out for when it goes live on our channels."
                  : "A 30–60 second vertical video introducing yourself. Answer: Who are you? What are you bringing to MAC? What are you looking forward to? Plus two bonus questions from our list. Natural and authentic — we'll handle the editing.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: 'Workshop Proposals',
                deadline: (teacher.proposedWorkshops?.length ?? 0) > 0
                  ? 'Received — still open to updates'
                  : 'Anytime before scheduling',
                deadlineGreen: (teacher.proposedWorkshops?.length ?? 0) > 0,
                desc: (teacher.proposedWorkshops?.length ?? 0) > 0
                  ? "We have your proposals on file. Feel free to submit additional ideas or tweaks at any time — the form below is always open."
                  : "A preliminary list of workshops you're happy to teach, separated by level. Use the form above or reply by email.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Be Part of the MAC Experience',
                deadline: 'Oct 7–11',
                deadlineGreen: false,
                desc: "Beyond teaching, we invite you to join jams, poolside time, and community moments. That's a huge part of what makes MAC special.",
              },
            ].map(({ icon, title, deadline, deadlineGreen, desc }) => (
              <div key={title} className="px-6 py-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(241,177,57,0.15)' }}>
                  {icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-semibold text-zinc-900">{title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${deadlineGreen ? 'text-green-700 bg-green-100' : 'text-brand-sea bg-brand-sea/10'}`}>
                      {deadline}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting There */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Getting to the Hotel</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm divide-y divide-zinc-100">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                title: 'By Bus',
                detail: '~90 min · €2.50',
                desc: (
                  <>
                    Several buses connect Malta Airport to Mellieħa. Plan your route on{' '}
                    <a href="https://www.publictransport.com.mt/" target="_blank" rel="noopener noreferrer" className="text-brand-sea hover:underline">publictransport.com.mt</a>
                    {' '}or Google Maps.
                  </>
                ),
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'By Taxi / Ride App',
                detail: '~€30–40',
                desc: 'More convenient but pricier. We recommend eCabs, Uber, or Bolt.',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-brand-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: 'Car Rental',
                detail: 'From the airport',
                desc: (
                  <>
                    Available at Malta Airport.{' '}
                    <a href="https://www.maltairport.com/passenger/getting-here/renting-a-car/" target="_blank" rel="noopener noreferrer" className="text-brand-sea hover:underline">More info here.</a>
                  </>
                ),
              },
            ].map(({ icon, title, detail, desc }) => (
              <div key={title} className="px-6 py-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(241,177,57,0.15)' }}>
                  {icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-semibold text-zinc-900">{title}</h3>
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">{detail}</span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Malta tips */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Useful Info for Malta</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Currency', desc: 'Euro (EUR)' },
              { title: 'Language', desc: 'English and Maltese — English is widely used everywhere.' },
              { title: 'Weather', desc: 'Warm and sunny. Pack sunscreen, a hat, and sunglasses.' },
              { title: 'Water', desc: 'Tap water is safe but has a strong taste. Bottled water is recommended for drinking.' },
              { title: 'Emergency', desc: 'Dial 112 for all emergencies.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-zinc-200 px-5 py-4">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">{title}</p>
                <p className="text-sm text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-brand-sea rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold mb-1" style={{ color: 'white' }}>Questions or special requests?</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">We&apos;re here. Just reply and we&apos;ll sort it.</p>
            </div>
            <a
              href="mailto:mediterraneanacroconvention@gmail.com"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-sun text-zinc-900 font-semibold rounded-full hover:bg-brand-sun/90 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Maria &amp; Flo
            </a>
          </div>
        </section>

        <p className="text-center text-xs text-zinc-400 pb-4">
          This page is private and not indexed by search engines.{' '}
          <a href="/api/portal/logout" className="hover:text-brand-sea transition-colors">Sign out</a>
        </p>
      </div>
    </main>
  );
}
