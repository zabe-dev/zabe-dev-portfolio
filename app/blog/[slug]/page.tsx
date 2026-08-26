import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="shell">
      <Header homeHref="/" sectionPrefix="/" />
      <main className="article-page">
        <Link className="article-back" href="/blog">
          ← All writing
        </Link>
        <article>
          <header className="article-header">
            <time dateTime={post.date}>{post.dateLabel}</time>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </header>
          <div className="article-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
