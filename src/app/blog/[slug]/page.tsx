import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';

const posts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  content: string;
}> = {
  'move-out-cleaning-tallinn-deposit-guide': {
    title: 'How to Get Your Full Deposit Back When Moving Out in Tallinn',
    excerpt: 'Moving out of your Tallinn apartment? Learn what landlords check and how professional move-out cleaning can help protect your deposit.',
    date: '2025-03-01',
    readTime: '6 min read',
    image: '/images/moveout-clean.jpg',
    content: `
      <p>Moving out of a rental apartment in Tallinn can be stressful, especially when you are worried about getting your deposit back. Estonian landlords have specific expectations for the condition of the property when you leave, and not meeting these standards can mean losing hundreds of euros.</p>
      
      <h2>What Estonian Landlords Check</h2>
      <p>Based on our experience helping tenants across Tallinn, here are the areas landlords inspect most carefully:</p>
      
      <h3>Kitchen</h3>
      <ul>
        <li><strong>Oven interior</strong> - Landlords often check for baked-on grease and food residue</li>
        <li><strong>Refrigerator</strong> - Inside shelves, drawers, and the area underneath</li>
        <li><strong>Cabinets</strong> - Inside and out, including shelving paper</li>
        <li><strong>Stovetop and hood</strong> - Grease buildup is a common issue</li>
        <li><strong>Sink and taps</strong> - Limescale and water stains</li>
      </ul>
      
      <h3>Bathroom</h3>
      <ul>
        <li><strong>Shower glass</strong> - Limescale and soap scum buildup</li>
        <li><strong>Tiles and grout</strong> - Mold and mildew in corners</li>
        <li><strong>Toilet</strong> - Including under the rim and behind</li>
        <li><strong>Taps and fixtures</strong> - Limescale removal is essential</li>
        <li><strong>Ventilation</strong> - Dust and debris in vents</li>
      </ul>
      
      <h3>Throughout the Apartment</h3>
      <ul>
        <li><strong>Windows</strong> - Both glass and frames</li>
        <li><strong>Floors</strong> - Scuff marks and deep cleaning</li>
        <li><strong>Walls</strong> - Marks, scuffs, and dust</li>
        <li><strong>Light switches and door handles</strong> - Often overlooked but inspected</li>
        <li><strong>Cabinet interiors</strong> - All wardrobes and storage spaces</li>
      </ul>
      
      <h2>Common Deposit Disputes in Tallinn</h2>
      <p>If you are renting through services like Rendin, the stakes are even higher. These services often have strict requirements and can charge significant amounts for professional cleaning if the apartment does not meet standards.</p>
      
      <p>Common reasons tenants lose part of their deposit:</p>
      <ol>
        <li><strong>Limescale on bathroom fixtures</strong> - The hard water in Tallinn causes buildup quickly</li>
        <li><strong>Oven and appliance cleaning</strong> - Often requires professional products</li>
        <li><strong>General dust and dirt</strong> - In corners, on top of cabinets, in light fixtures</li>
        <li><strong>Floor condition</strong> - Scuff marks, sticky residue, or improper mopping</li>
      </ol>
      
      <h2>Why Professional Move-Out Cleaning Helps</h2>
      <p>Professional cleaning addresses all the areas landlords check. Our <a href="/services/move-out-cleaning">move-out cleaning service</a> is specifically designed to meet landlord standards in Tallinn.</p>
      
      <p>We include:</p>
      <ul>
        <li>Complete appliance interior cleaning</li>
        <li>Limescale removal from all fixtures</li>
        <li>Cabinet interior cleaning</li>
        <li>Window cleaning (interior)</li>
        <li>Floor deep cleaning</li>
        <li>Wall and surface cleaning</li>
      </ul>
      
      <h2>Tips for a Smooth Move-Out</h2>
      <ol>
        <li><strong>Book cleaning at least 3 days before your move-out date</strong> - This gives you time to address any issues</li>
        <li><strong>Document the condition</strong> - Take photos before and after cleaning</li>
        <li><strong>Be present during the handover</strong> - Address any concerns immediately</li>
        <li><strong>Keep your cleaning receipt</strong> - Proof of professional cleaning can help in disputes</li>
      </ol>
      
      <h2>Ready to Protect Your Deposit?</h2>
      <p>Do not risk losing your deposit over cleaning issues. <a href="/calculator">Get a quote</a> for professional move-out cleaning, or <a href="/contact">contact us</a> to discuss your needs.</p>
    `,
  },
  'regular-vs-deep-cleaning-which-do-you-need': {
    title: 'Regular Cleaning vs Deep Cleaning: Which Do You Need?',
    excerpt: 'Not sure whether to book regular cleaning or deep cleaning? Here is how to decide which service is right for your Tallinn home.',
    date: '2025-02-15',
    readTime: '5 min read',
    image: '/images/kitchen-clean.jpg',
    content: `
      <p>When booking a professional cleaning service, one of the first questions is: do you need regular cleaning or deep cleaning? The answer depends on your situation, the current condition of your home, and your ongoing needs.</p>
      
      <h2>What is Regular Cleaning?</h2>
      <p><a href="/services/regular-cleaning">Regular cleaning</a> is maintenance cleaning designed to keep an already clean home in good condition. It covers all the essentials:</p>
      <ul>
        <li>Dusting surfaces</li>
        <li>Vacuuming and mopping floors</li>
        <li>Bathroom cleaning (toilet, sink, shower)</li>
        <li>Kitchen surface cleaning</li>
        <li>Mirror and glass cleaning</li>
        <li>General tidying</li>
      </ul>
      <p><strong>Best for:</strong> Homes that are already clean and need consistent maintenance. Most families book regular cleaning weekly or bi-weekly.</p>
      <p><strong>Price:</strong> Starting from 70 EUR for a studio apartment.</p>
      
      <h2>What is Deep Cleaning?</h2>
      <p><a href="/services/deep-cleaning">Deep cleaning</a> goes beyond the surface. It is a thorough cleaning that reaches areas typically missed during regular cleaning:</p>
      <ul>
        <li>Everything in regular cleaning, plus:</li>
        <li>Inside cabinets and drawers</li>
        <li>Interior of appliances (oven, refrigerator, microwave)</li>
        <li>Detailed bathroom cleaning with limescale removal</li>
        <li>Behind and under furniture</li>
        <li>Baseboards and light fixtures</li>
        <li>Wall areas where reachable</li>
      </ul>
      <p><strong>Best for:</strong> First-time cleanings, seasonal cleaning, homes that have not been professionally cleaned recently, or before special occasions.</p>
      <p><strong>Price:</strong> Starting from 120 EUR for a studio apartment.</p>
      
      <h2>How to Decide</h2>
      
      <h3>Choose Regular Cleaning If:</h3>
      <ul>
        <li>Your home is already in good condition</li>
        <li>You want to maintain cleanliness week to week</li>
        <li>You clean regularly yourself but want professional help</li>
        <li>You want to save time on routine tasks</li>
      </ul>
      
      <h3>Choose Deep Cleaning If:</h3>
      <ul>
        <li>It is your first time hiring a cleaning service</li>
        <li>Your home has not been professionally cleaned in over 3 months</li>
        <li>You are preparing for guests or a special event</li>
        <li>You just moved into a new place</li>
        <li>It is time for spring or seasonal cleaning</li>
        <li>You notice buildup in appliances or hard-to-reach areas</li>
      </ul>
      
      <h2>Our Recommendation</h2>
      <p>For most clients, we recommend starting with a deep cleaning, then switching to regular cleaning for maintenance. This gives us a clean baseline to work from, and regular visits keep everything in excellent condition.</p>
      <p>Many of our clients in Tallinn book bi-weekly regular cleaning after an initial deep clean. This schedule keeps their homes consistently fresh without the need for frequent deep cleaning.</p>
      
      <h2>Book Your Cleaning</h2>
      <p>Not sure what you need? <a href="/contact">Contact us</a> and we will help you decide. You can also use our <a href="/calculator">price calculator</a> to see estimates for both services.</p>
      <p>We serve all areas of Tallinn and Harjumaa. <a href="/pricing">View our full pricing</a> or <a href="/contact">get in touch</a> today.</p>
    `,
  },
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts[params.slug];
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-sage-500 mb-6">
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
              Need professional cleaning help?
            </h2>
            <p className="text-sage-600 mb-6">
              We are here to take care of your home with the same attention and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-primary">
                Get a Quote
              </Link>
              <a
                href="https://wa.me/372XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
