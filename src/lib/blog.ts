import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  content: string;
  readTime: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  readTime: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function calculateReadTimeMinutes(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function formatReadTime(minutes: number, locale: string): string {
  switch (locale) {
    case 'et':
      return `${minutes} min lugemist`;
    case 'fi':
      return `${minutes} min lukuaika`;
    default:
      return `${minutes} min read`;
  }
}

export function getAllPosts(locale: string): BlogPostMeta[] {
  const localeDir = path.join(BLOG_DIR, locale);
  
  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const files = fs.readdirSync(localeDir);
  
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(localeDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        image: data.image,
        tags: data.tags,
        readTime: formatReadTime(calculateReadTimeMinutes(content), locale),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(locale: string, slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const htmlContent = marked(content) as string;

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    image: data.image,
    tags: data.tags,
    content: htmlContent,
    readTime: formatReadTime(calculateReadTimeMinutes(content), locale),
  };
}

export function getAllSlugs(locale: string): string[] {
  const localeDir = path.join(BLOG_DIR, locale);
  
  if (!fs.existsSync(localeDir)) {
    return [];
  }

  return fs
    .readdirSync(localeDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllSlugsForAllLocales(): { locale: string; slug: string }[] {
  const locales = ['et', 'en', 'fi'];
  const result: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      result.push({ locale, slug });
    }
  }

  return result;
}
