import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getAllPosts(locale);

  const dateLocale = locale === 'et' ? 'et-EE' : locale === 'fi' ? 'fi-FI' : 'en-GB';

  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-sage-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-center text-sage-600">{t('noPosts')}</p>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="border border-sage-200 rounded-xl overflow-hidden hover:border-sage-400 transition-colors"
                  >
                    {post.image && (
                      <Link href={`/${locale}/blog/${post.slug}`}>
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
                          {new Date(post.date).toLocaleDateString(dateLocale, {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-sage-900 mb-2">
                        <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-sage-700">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sage-600 mb-4">
                        {post.description}
                      </p>
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium"
                      >
                        {t('readMore')} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-sage-600 mb-6">
              {t('ctaText')}
            </p>
            <Link href={`/${locale}/calculator`} className="btn-primary">
              {t('ctaButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
