export type TeacherTier = 'Headliner' | 'Featured' | 'Supporting' | 'Organiser';

export interface ProposedWorkshop {
  name: string;
  level: string;
  prereqs?: string;
  details?: string;
}

export interface WorkshopSlot {
  label: string;
  count: number;
  /** Combined rate for the teaching duo (ratePerTeacher × 2) */
  rateEach: number;
}

export interface TravelComp {
  amount: number;
  unlocked: boolean;
  ticketsRequired?: number;
  note?: string;
}

export interface AccommodationComp {
  duringMAC: boolean;
  ticketsRequired?: number;
  valuePerPerson?: number;
}

export interface PortalTeacher {
  slug: string;
  name: string;
  tier: TeacherTier;
  code: string;           // public discount code for students
  portalCode: string;     // private portal access code (not the same as public code)
  isOrganiser?: boolean;
  isBabyLeave?: boolean;
  videoSubmitted?: boolean;
  ticketsSold?: number;
  workshops: WorkshopSlot[];
  proposedWorkshops?: ProposedWorkshop[];
  travelComp: TravelComp;
  accommodation: AccommodationComp;
  affiliateDiscount: number;
  affiliateKickback: number;
  referenceTicketPrice: number;
}

// Rates per teacher: 60min=€30, 90min=€45, 120min=€60, warm-up=€15
// For teaching couples the combined rate is doubled.
export const PORTAL_TEACHERS: PortalTeacher[] = [
  {
    slug: 'coni-mati',
    name: 'Coni & Mati',
    tier: 'Headliner',
    code: 'MACONCENCIA',
    portalCode: 'TERRAZZA26',
    videoSubmitted: true,
    ticketsSold: 0,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 6, rateEach: 90 },
      { label: 'Warm-Up Session', count: 2, rateEach: 30 },
    ],
    travelComp: { amount: 300, unlocked: true, note: '€150 per person × 2 — already unlocked' },
    accommodation: { duringMAC: true },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'michal-klara',
    name: 'Michal & Klara',
    tier: 'Headliner',
    code: 'MACROMISARIS',
    portalCode: 'TRAMONTO26',
    ticketsSold: 0,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 6, rateEach: 90 },
    ],
    travelComp: { amount: 300, unlocked: true, note: '€150 per person × 2 — already unlocked' },
    accommodation: { duringMAC: true },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'lloydie-flo',
    name: 'Lloydie & Flo',
    tier: 'Featured',
    code: 'DOUBLEMAC',
    portalCode: 'SIROCCO26',
    ticketsSold: 0,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 5, rateEach: 90 },
      { label: 'Warm-Up Session', count: 1, rateEach: 30 },
    ],
    proposedWorkshops: [
      { name: 'Intro to Pops', level: 'Beginner/Intermediate', prereqs: 'Bird, Straddle bat' },
      { name: 'Bubble + Squeak', level: 'Beginner/Intermediate', prereqs: 'None', details: 'An introductory flow featuring a smooth entrance, transition, and exit.' },
      { name: 'Inversion Submersion', level: 'Beginner/Intermediate', prereqs: 'Bird, handbird, 20sec headstand or handstand against a wall', details: '3 inversions brought together in a nice flow.' },
      { name: 'Intro to Whips', level: 'Intermediate', prereqs: 'Bird, Folded leaf, Straddle bat', details: 'We will cover the Tarzan, and the Reverse Backwhip using progressions.' },
      { name: 'Reverse H2H + Variations (L-base)', level: 'Intermediate/Advanced', prereqs: 'F2H, shoulderstand', details: 'Drills leading up to Reverse H2H + variations.' },
      { name: 'Pineapple Express', level: 'Intermediate/Advanced', prereqs: 'Solid Sidestar, experience in basic washing machines (Ninjastar, Ballerina, etc)', details: 'A long creative washing machine, involving some creative twists and turns.' },
      { name: 'Whip-ology', level: 'Intermediate/Advanced', prereqs: 'Solid Tarzan', details: 'Focus on 2 or 3 whips (Rising back whip, Forearm whip, Double Rising variation, or Reverse Rising), linked together in a flow.' },
      { name: 'Dream Machine', level: 'Intermediate/Advanced', prereqs: 'Solid Star and Sidestar, experience in basic washing machines (Ninjastar, Ballerina, etc)', details: 'A long washing machine with some unusual transitions.' },
      { name: 'Kombuchi Bonanza', level: 'Intermediate/Advanced', prereqs: 'tbc', details: 'A flow combining a smooth transition, an Icarian, and whip/whippop.' },
      { name: 'Shweet Gwaki Roll', level: 'Intermediate/Advanced', prereqs: 'tbc', details: 'A flow combining a smooth transition, an Icarian, and whip/whippop.' },
    ],
    travelComp: { amount: 300, unlocked: false, ticketsRequired: 5, note: '€150 per person × 2 — unlocks when you sell 5 tickets' },
    accommodation: { duringMAC: true },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'eli-bagaz',
    name: 'Eli & Bagaz',
    tier: 'Featured',
    code: 'MACROBAGAZ',
    portalCode: 'BARCHETTA26',
    videoSubmitted: true,
    ticketsSold: 0,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 4, rateEach: 90 },
    ],
    travelComp: { amount: 300, unlocked: false, ticketsRequired: 5, note: '€150 per person × 2 — unlocks when you sell 5 tickets' },
    accommodation: { duringMAC: true },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'manas-mira',
    name: 'Manas & Mira',
    tier: 'Featured',
    code: 'MIMAMAC',
    portalCode: 'MANDORLA26',
    videoSubmitted: true,
    ticketsSold: 1,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 4, rateEach: 90 },
    ],
    travelComp: { amount: 300, unlocked: false, ticketsRequired: 5, note: '€150 per person × 2 — unlocks when you sell 5 tickets' },
    accommodation: { duringMAC: true },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'nick-chrysa',
    name: 'Nick & Chrysa',
    tier: 'Supporting',
    code: 'MACROPOLIS',
    portalCode: 'CARACALLA26',
    ticketsSold: 0,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 3, rateEach: 90 },
    ],
    travelComp: { amount: 300, unlocked: false, ticketsRequired: 10, note: '€150 per person × 2 — unlocks when you sell 10 tickets' },
    accommodation: {
      duringMAC: false,
      ticketsRequired: 5,
      valuePerPerson: 350,
    },
    affiliateDiscount: 5,
    affiliateKickback: 5,
    referenceTicketPrice: 715,
  },
  {
    slug: 'caspian-laura',
    name: 'Caspian & Laura',
    tier: 'Featured',
    code: 'BABYACRO',
    portalCode: 'PICCOLINO26',
    isBabyLeave: true,
    workshops: [],
    travelComp: { amount: 0, unlocked: true },
    accommodation: { duringMAC: false },
    affiliateDiscount: 0,
    affiliateKickback: 0,
    referenceTicketPrice: 715,
  },
  {
    slug: 'organisers',
    name: 'Maria & Flo',
    tier: 'Organiser',
    code: 'ZAMPETTINA',
    portalCode: 'ZAMPETTINA',
    isOrganiser: true,
    workshops: [],
    travelComp: { amount: 0, unlocked: true },
    accommodation: { duringMAC: true },
    affiliateDiscount: 0,
    affiliateKickback: 0,
    referenceTicketPrice: 715,
  },
];

/** Keyed by PUBLIC discount code — used for ticket purchases */
export const CODE_TO_TEACHER: Map<string, PortalTeacher> = new Map(
  PORTAL_TEACHERS.map((t) => [t.code.toUpperCase(), t])
);

/** Keyed by PRIVATE portal code — used for portal login */
export const PORTAL_CODE_TO_TEACHER: Map<string, PortalTeacher> = new Map(
  PORTAL_TEACHERS.map((t) => [t.portalCode.toUpperCase(), t])
);

export function getTeacherBySlug(slug: string): PortalTeacher | undefined {
  return PORTAL_TEACHERS.find((t) => t.slug === slug);
}

export function calcWorkshopTotal(teacher: PortalTeacher): number {
  return teacher.workshops.reduce((sum, ws) => sum + ws.count * ws.rateEach, 0);
}

export function calcKickback(teacher: PortalTeacher, tickets: number): number {
  return Math.round(teacher.referenceTicketPrice * (teacher.affiliateKickback / 100) * tickets);
}
