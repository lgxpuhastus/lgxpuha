import { Metadata } from 'next';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Gallery | Before & After Cleaning Results',
  description: 'See real before and after photos and videos of our professional cleaning work in Tallinn homes and offices.',
};

const imageKeys = ['bathroomSink', 'stovetop', 'desk', 'showerFaucet'] as const;
const imageFiles = [
  '/gallery/images/bathroom-sink.jpg',
  '/gallery/images/stovetop.jpg',
  '/gallery/images/desk.jpg',
  '/gallery/images/shower-faucet.jpg',
];

const videos = [
  { src: '/gallery/videos/video-1.mp4', title: 'Cleaning Transformation 1' },
  { src: '/gallery/videos/video-2.mp4', title: 'Cleaning Transformation 2' },
  { src: '/gallery/videos/video-3.mp4', title: 'Cleaning Transformation 3' },
  { src: '/gallery/videos/video-4.mp4', title: 'Cleaning Transformation 4' },
  { src: '/gallery/videos/video-5.mp4', title: 'Cleaning Transformation 5' },
  { src: '/gallery/videos/video-6.mp4', title: 'Cleaning Transformation 6' },
];

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('gallery');
  const tCommon = await getTranslations('common');

  const beforeAfterImages = imageKeys.map((key, index) => ({
    title: t(`images.${key}.title`),
    description: t(`images.${key}.description`),
    image: imageFiles[index],
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              {t('pageTitle')}
            </h1>
            <p className="text-lg text-sage-600">
              {t('pageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-8 text-center">
            {t('beforeAfter')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div
                key={index}
                className="bg-sage-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Before and After`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sage-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-8 text-center">
            {t('videoTransformations')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <video
                  className="w-full aspect-[9/16] object-cover bg-black"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                {tCommon('getQuote')}
              </Link>
              <a
                href="https://wa.me/37253955896"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-sage-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {tCommon('whatsappUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
