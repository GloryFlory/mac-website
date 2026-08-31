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
    proposedWorkshops: [
      { name: 'Castaway', level: 'Intermediate/Advanced', prereqs: 'Handspring from rev star', details: 'We will build or refine your castaway from the foundations, creating momentum and connection between base and flyer.' },
      { name: 'Intro to Icarians', level: 'Intermediate', prereqs: 'Experience with basic pops', details: 'Welcome to the amazing world of dynamics! You will learn the fundamentals of icarians: communication, technique and tempos.' },
      { name: 'Whippi Flow', level: 'Intermediate/Advanced', prereqs: 'Solid tarzan and solid back whip', details: 'We will play with different whips to create a challenging and beautiful sequence.' },
      { name: 'F2F World', level: 'Intermediate/Advanced', prereqs: 'Icarian straight throne, solid F2F', details: "Let's go high! We will play with different F2F entrances and exits." },
      { name: 'Rev Fish', level: 'Advanced', prereqs: 'Solid rev tarzan', details: 'Learn with us this classic and beautiful whipop, with progressions that will make it accessible and understandable.' },
      { name: 'Whipops with Twist', level: 'Advanced', prereqs: 'Solid tarzan, icarian from plank to rev throne', details: 'Take your whips to the next level by adding twist and fun.' },
      { name: 'Intro to Whips', level: 'Intermediate', prereqs: 'Ninja star, ballerina', details: 'Come and learn whips from the very beginning. We will focus on all the details to understand the pendulum and mechanics of this tricky movement.' },
      { name: 'Icarian Party', level: 'Intermediate/Advanced', prereqs: 'Experience with basic icarians', details: "Let's fly high and smooth with different and creative icarians." },
      { name: 'Cartwheel Icarians', level: 'Intermediate', prereqs: 'Tik tok, basic icarians', details: 'Come roll with different cartwheel icarians. Guaranteed fun!' },
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
    ticketsSold: 1,
    workshops: [
      { label: 'Acroyoga Workshop (90 min)', count: 4, rateEach: 90 },
    ],
    proposedWorkshops: [
      { name: 'Fridge Paradise', level: 'Open Level', details: 'Washing machine flow: flamingo → sofa → flamingo.' },
      { name: 'Caprihollow', level: 'Open Level', details: 'Flow with a lot of rolling.' },
      { name: 'Miel Pops', level: 'Open Level', details: 'Pop flow — can also work as an intro to pops.' },
      { name: 'River Flow', level: 'Open Level', details: 'Passing through shoulder stand, prasarita twist, koala.' },
      { name: 'Intro to Whip', level: 'Beginner+' },
      { name: 'Aspirapolvere Flow', level: 'Intermediate', prereqs: 'Side star, star, experience with pops', details: 'Slackro, pop, icarian flow.' },
      { name: 'Cordon Bleu', level: 'Intermediate', prereqs: 'Straight throws (chair, front plank), solid F2H and rev F2H', details: 'Flow with 180 icarians.' },
      { name: 'Silk Epil', level: 'Intermediate', prereqs: 'F2H, side star, solid star', details: 'Slackro, mono star, F2H flow.' },
      { name: 'Ambi Pur', level: 'Intermediate', prereqs: 'Solid F2H, 20 sec handstand with spotter, tuck sit', details: 'Slackro, HS on body part, icarian, F2H.' },
      { name: 'Whippie Flow', level: 'Intermediate', prereqs: 'All side stars, experience with whip', details: 'Flow with whips.' },
      { name: 'Air Frier', level: 'Intermediate', prereqs: 'Star, ninja bat', details: 'Goofy ninja, pops.' },
      { name: 'Forbidden Whipop', level: 'Intermediate', prereqs: 'Solid forbidden whip' },
      { name: 'Intro to Rev H2H', level: 'Intermediate', prereqs: 'Rev F2H, 20 sec handstand with spotter' },
      { name: 'Intro to H2H', level: 'Intermediate', prereqs: 'Star, F2H, handstand 20 sec with spotter' },
      { name: 'F2F Icarians', level: 'Intermediate', prereqs: 'Straight throws and F2F pose', details: 'Easy throws going up and down — focus on tempos and spotting.' },
      { name: 'Intro to Castaway', level: 'Intermediate', prereqs: 'Straight throws and rev H2H with spotter' },
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
    ticketsSold: 3,
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
    ticketsSold: 1,
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
