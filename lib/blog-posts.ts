export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-to-expect-first-acroyoga-convention',
    title: 'What to Expect at Your First Acroyoga Convention — And Why MAC Might Be the One to Start With',
    excerpt: 'If you\'ve been doing acro at local jams or weekly classes and you\'re finally considering a multi-day convention, here\'s the honest breakdown of what the experience is actually like — and what makes the Mediterranean Acro Convention in Malta stand out.',
    date: '2026-05-17',
    readingTime: '6 min read',
  },
  {
    slug: 'is-acroyoga-for-beginners',
    title: 'Is Acroyoga for Beginners? (An Honest Answer)',
    excerpt: 'The short answer is yes. The longer answer dismantles a few assumptions you probably have about your own body — flexibility, strength, weight, age, and the idea that there are fixed roles.',
    date: '2026-05-17',
    readingTime: '5 min read',
  },
  {
    slug: 'acroyoga-convention-packing-list',
    title: 'Acroyoga Convention Packing List: What to Actually Bring (And What to Leave Home)',
    excerpt: 'Packing for an acroyoga convention isn\'t like packing for a yoga retreat or a regular holiday. You\'re training 4–6 hours a day at a 4-star resort in Malta in October. The list looks different than you\'d expect.',
    date: '2026-05-17',
    readingTime: '5 min read',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
