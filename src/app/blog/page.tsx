import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Cleaning tips, home maintenance advice, and updates from LGX Puhastus. Learn how to keep your home fresh and clean.',
};

// Placeholder blog posts - will be replaced with MDX content
const posts = [
  {
    slug: 'spring-cleaning-checklist',
    title: 'The Ultimate Spring Cleaning Checklist',
    excerpt: 'Spring is the perfect time to give your home a thorough refresh. Here is our comprehensive checklist to help you tackle every room.',
    date: '2024-03-15',
    readTime: '5 min read',
  },
  {
    slug: 'move-out-cleaning-tips',
    title: 'Move-Out Cleaning Tips to Get Your Deposit Back',
    excerpt: 'Moving out? Make sure you get your full deposit back with these essential cleaning tips for a spotless handover.',
    date: '2024-02-28',
    readTime: '4 min read',
  },
  {
    slug: 'eco-friendly-cleaning',
    title: 'Eco-Friendly Cleaning Products You Can Make at Home',
    excerpt: 'Discover simple, effective cleaning solutions using ingredients you already have in your kitchen.',
    date: '2024-02-10',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-sage-600">
              Tips, advice, and insights to help you maintain a clean and comfortable home.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-sage-200 rounded-xl p-6 hover:border-sage-400 transition-colors"
                >
                  <div className="flex items-center gap-4 text-sm text-sage-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-sage-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-sage-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sage-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium"
                  >
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">
              Need professional cleaning?
            </h2>
            <p className="text-sage-600 mb-6">
              Let us take care of the hard work while you enjoy a clean home.
            </p>
            <Link href="/calculator" className="btn-primary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
