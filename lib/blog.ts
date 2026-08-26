import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  month: string;
  year: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & { content: string };

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '');
  const source = fs.readFileSync(path.join(BLOG_DIRECTORY, filename), 'utf8');
  const { data, content } = matter(source);
  const date = String(data.date);
  const parsedDate = new Date(`${date}T00:00:00Z`);

  return {
    slug,
    title: String(data.title),
    excerpt: String(data.excerpt),
    date,
    dateLabel: formatDate(date),
    month: new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' }).format(parsedDate),
    year: String(parsedDate.getUTCFullYear()),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((filename) => filename.endsWith('.md'))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ content: _content, ...post }) => post);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIRECTORY, filename))) return null;
  return readPost(filename);
}
