import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getPostBySlug, getAllSlugsForAllLocales } from '@/lib/blog';
import { locales } from '@/i18n/config';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    const slugsData = getAllSlugsForAllLocales().filter(s => s.locale === locale);
    for (const item of slugsData) {
      params.push({ locale: item.locale, slug: item.slug });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  
  if (!post) {
    const t = await getTranslations({ locale, namespace: 'blog' });
    return { title: t('postNotFound') };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  const t = await getTranslations({ locale, namespace: 'blog' });

  if (!post) {
    notFound();
  }

  const dateLocale = locale === 'et' ? 'et-EE' : locale === 'fi' ? 'fi-FI' : 'en-GB';

  return (
    <>
      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              {t('backToBlog')}
            </Link>

            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-sage-500 mb-6">
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
              {post.image && (
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            <div
              className="prose prose-sage max-w-none 
                [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-sage-900 [&>h2]:mt-8 [&>h2]:mb-4 
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-sage-800 [&>h3]:mt-6 [&>h3]:mb-3
                [&>p]:text-sage-600 [&>p]:mb-4 [&>p]:leading-relaxed
                [&>ul]:text-sage-600 [&>ul]:mb-4 [&>ul>li]:mb-2
                [&>ol]:text-sage-600 [&>ol]:mb-4 [&>ol>li]:mb-2
                [&_a]:text-sage-700 [&_a]:underline [&_a:hover]:text-sage-900
                [&_strong]:text-sage-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">
              {t('postCtaTitle')}
            </h2>
            <p className="text-sage-600 mb-6">
              {t('postCtaText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/calculator`} className="btn-primary">
                {t('ctaButton')}
              </Link>
              <a
                href="https://wa.me/37253955896"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
