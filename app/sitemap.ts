import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.acrointhesun.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-07-12'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teachers`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/venue`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/info`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/what-to-expect-first-acroyoga-convention`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/is-acroyoga-for-beginners`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/acroyoga-convention-packing-list`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/finding-practice-partner-acroyoga-festival`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/solar-vs-lunar-acroyoga`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
