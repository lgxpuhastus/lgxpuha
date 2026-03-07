import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Cleaning tips, home maintenance advice, and updates from LGX Puhastus. Learn how to keep your Tallinn home fresh and clean.',
};

const posts = [
  {
    slug: 'move-out-cleaning-tallinn-deposit-guide',
    title: 'How to Get Your Full Deposit Back When Moving Out in Tallinn',
    excerpt: 'Moving out of your Tallinn apartment? Learn what landlords check and how professional move-out cleaning can help protect your deposit.',
    date: '2025-03-01',
    readTime: '6 min read',
    image: '/images/moveout-clean.jpg',
  },
  {
    slug: 'regular-vs-deep-cleaning-which-do-you-need',
    title: 'Regular Cleaning vs Deep Cleaning: Which Do You Need?',
    excerpt: 'Not sure whether to book regular cleaning or deep cleaning? Here is how to decide which service is right for your Tallinn home.',
    date: '2025-02-15',
    readTime: '5 min read',
    image: '/images/kitchen-clean.jpg',
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
              Tips, advice, and insights to help you maintain a clean and comfortable home in Tallinn.
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
                  className="border border-sage-200 rounded-xl overflow-hidden hover:border-sage-400 transition-colors"
                >
                  {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 md:h-64">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
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
                  </div>
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
