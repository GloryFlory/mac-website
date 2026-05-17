import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { BLOG_POSTS } from '../../lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | Acroyoga Guides & Convention Tips | MAC',
  description: 'Honest guides for the acroyoga community — what to expect at your first convention, how to choose the right festival, packing lists, and more from the organisers of MAC 2026.',
  alternates: {
    canonical: 'https://www.acrointhesun.com/blog',
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sea/10 rounded-full mb-6">
              <span className="text-brand-sea text-sm font-medium tracking-wide uppercase">From the Organisers</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-6">
              The MAC Blog
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Honest guides for the acroyoga community — written by practitioners, for practitioners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <Reveal key={post.slug}>
                <article className="group bg-white rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-sea mb-4 group-hover:text-brand-sea/80 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-zinc-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-sea font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Read the full guide
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
