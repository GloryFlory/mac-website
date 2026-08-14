interface BlogPostingSchemaProps {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}

export default function BlogPostingSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
}: BlogPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'Mediterranean Acro Convention',
      url: 'https://www.acrointhesun.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mediterranean Acro Convention',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.acrointhesun.com/icon.png',
      },
    },
    image: 'https://www.acrointhesun.com/main-fest-og.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.acrointhesun.com/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
