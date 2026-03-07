import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';

// Placeholder blog posts - will be replaced with MDX content
const posts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'spring-cleaning-checklist': {
    title: 'The Ultimate Spring Cleaning Checklist',
    excerpt: 'Spring is the perfect time to give your home a thorough refresh. Here is our comprehensive checklist to help you tackle every room.',
    date: '2024-03-15',
    readTime: '5 min read',
    content: `
      <p>Spring is the perfect time to give your home a thorough refresh. After months of winter, dust and grime can accumulate in places you might not notice during regular cleaning. Here is our comprehensive checklist to help you tackle every room.</p>
      
      <h2>Kitchen</h2>
      <ul>
        <li>Clean inside the refrigerator and freezer</li>
        <li>Degrease the oven and stovetop</li>
        <li>Wipe down all cabinet fronts</li>
        <li>Clean the microwave inside and out</li>
        <li>Organize the pantry and check expiration dates</li>
      </ul>
      
      <h2>Bathroom</h2>
      <ul>
        <li>Deep clean the toilet, including behind and around the base</li>
        <li>Remove limescale from showerheads and faucets</li>
        <li>Wash shower curtains or clean glass doors</li>
        <li>Clean tile grout</li>
        <li>Organize medicine cabinet and discard expired items</li>
      </ul>
      
      <h2>Bedrooms</h2>
      <ul>
        <li>Wash all bedding, including pillows and mattress covers</li>
        <li>Flip or rotate mattresses</li>
        <li>Clean under the bed and furniture</li>
        <li>Organize closets and donate unused items</li>
        <li>Dust light fixtures and ceiling fans</li>
      </ul>
      
      <h2>Living Areas</h2>
      <ul>
        <li>Deep clean upholstered furniture</li>
        <li>Wash curtains or clean blinds</li>
        <li>Clean windows inside and out</li>
        <li>Move furniture and vacuum underneath</li>
        <li>Dust all surfaces, including high shelves and decor</li>
      </ul>
      
      <p>If this list feels overwhelming, remember that you do not have to do it all at once. Or, you can always call us for a professional deep cleaning service!</p>
    `,
  },
  'move-out-cleaning-tips': {
    title: 'Move-Out Cleaning Tips to Get Your Deposit Back',
    excerpt: 'Moving out? Make sure you get your full deposit back with these essential cleaning tips for a spotless handover.',
    date: '2024-02-28',
    readTime: '4 min read',
    content: `
      <p>Moving is stressful enough without worrying about whether you will get your deposit back. Here are our top tips for a move-out cleaning that will impress your landlord.</p>
      
      <h2>Start with the Kitchen</h2>
      <p>The kitchen is often the most scrutinized area during move-out inspections. Pay special attention to:</p>
      <ul>
        <li>Inside the oven, including the door and racks</li>
        <li>The refrigerator, inside and out</li>
        <li>Cabinet interiors and exteriors</li>
        <li>Range hood and filters</li>
        <li>Sink and faucets</li>
      </ul>
      
      <h2>Bathroom Essentials</h2>
      <p>Landlords often check for limescale and mold, so focus on:</p>
      <ul>
        <li>Removing all limescale from fixtures</li>
        <li>Cleaning grout and tile</li>
        <li>Scrubbing the toilet thoroughly</li>
        <li>Cleaning exhaust fans</li>
      </ul>
      
      <h2>Do Not Forget</h2>
      <ul>
        <li>Light switches and door handles</li>
        <li>Interior windows</li>
        <li>Built-in wardrobes</li>
        <li>Skirting boards</li>
        <li>Any marks on walls (use a magic eraser for scuffs)</li>
      </ul>
      
      <p>Moving out soon? Our move-out cleaning service covers all of this and more, giving you peace of mind and the best chance of getting your full deposit back.</p>
    `,
  },
  'eco-friendly-cleaning': {
    title: 'Eco-Friendly Cleaning Products You Can Make at Home',
    excerpt: 'Discover simple, effective cleaning solutions using ingredients you already have in your kitchen.',
    date: '2024-02-10',
    readTime: '6 min read',
    content: `
      <p>You do not need harsh chemicals to keep your home clean. Many effective cleaning solutions can be made with simple ingredients you probably already have in your kitchen.</p>
      
      <h2>All-Purpose Cleaner</h2>
      <p>Mix equal parts white vinegar and water in a spray bottle. Add a few drops of essential oil (like lemon or lavender) for a pleasant scent. This works great on counters, appliances, and most surfaces.</p>
      
      <h2>Glass Cleaner</h2>
      <p>Combine 2 cups of water, 1/2 cup of white vinegar, and 1/4 cup of rubbing alcohol. Use with newspaper or a microfiber cloth for streak-free windows and mirrors.</p>
      
      <h2>Bathroom Scrub</h2>
      <p>Make a paste with baking soda and a little water. Add a few drops of dish soap for extra cleaning power. This is excellent for sinks, tubs, and tiles.</p>
      
      <h2>Drain Cleaner</h2>
      <p>Pour 1/2 cup of baking soda down the drain, followed by 1/2 cup of vinegar. Wait 15 minutes, then flush with hot water. Use monthly to prevent clogs.</p>
      
      <h2>Tips for Success</h2>
      <ul>
        <li>Always label your homemade cleaners</li>
        <li>Do not mix vinegar with hydrogen peroxide or bleach</li>
        <li>Test on a small area first, especially on delicate surfaces</li>
        <li>Use white vinegar, not apple cider or other types</li>
      </ul>
      
      <p>While these DIY solutions are great for daily maintenance, sometimes you need a professional deep clean. Contact us for thorough, eco-conscious cleaning services.</p>
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
              <div className="flex items-center gap-4 text-sm text-sage-500">
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
            </header>

            <div
              className="prose prose-sage max-w-none [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-sage-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:text-sage-600 [&>p]:mb-4 [&>ul]:text-sage-600 [&>ul]:mb-4 [&>ul>li]:mb-2"
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
