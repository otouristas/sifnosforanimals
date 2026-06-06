'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'tips-for-first-time-pet-adopters',
    title: 'Tips for First-Time Pet Adopters',
    excerpt: 'Essential advice for making your new pet feel at home and adjusting to life together.',
    image: '/blog/adoption-tips.jpg',
    date: '2024-02-10',
    author: 'Maria Papadopoulos',
    category: 'Adoption Tips',
    readTime: '5 min read',
  },
  {
    id: 'success-story-luna-finds-her-forever-home',
    title: 'Success Story: Luna Finds Her Forever Home',
    excerpt: 'A heartwarming story of how Luna found her perfect family after months at our shelter.',
    image: '/blog/success-story.jpg',
    date: '2024-02-08',
    author: 'Nikos Stavrou',
    category: 'Success Stories',
    readTime: '4 min read',
  },
  {
    id: 'the-importance-of-spaying-and-neutering',
    title: 'The Importance of Spaying and Neutering',
    excerpt: 'Learn why spaying and neutering is crucial for pet population control and animal health.',
    image: '/blog/spay-neuter.jpg',
    date: '2024-02-05',
    author: 'Dr. Elena Dimitriou',
    category: 'Pet Health',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Adoption Tips', 'Success Stories', 'Pet Health'];

const categoryColors: Record<string, string> = {
  'Adoption Tips': 'bg-blue-100 text-blue-700',
  'Success Stories': 'bg-green-100 text-green-700',
  'Pet Health': 'bg-purple-100 text-purple-700',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="bg-deep py-20 px-4 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Blog</p>
        <h1 className="text-5xl md:text-6xl font-black text-white">
          Stories &amp; Updates
        </h1>
        <p className="mt-6 text-blue-200 text-xl max-w-xl mx-auto">
          Stories, tips, and updates from Sifnos for Animals
        </p>
      </section>

      {/* ── Categories ── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Posts Grid ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm card-lift border border-gray-100 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-black text-deep mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">By {post.author}</span>
                      <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Read more
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white">Stay Updated</h2>
          <p className="mt-3 text-blue-100 text-lg">
            Subscribe for the latest news, success stories, and animal updates from Sifnos.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              className="flex-1 rounded-full px-5 py-3 text-sm text-gray-900 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="your@email.com"
            />
            <button
              type="submit"
              className="shrink-0 bg-deep hover:bg-deep-dark text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
