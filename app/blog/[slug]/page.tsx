import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowTextLink } from '../../components/ArrowTextLink';
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
        <div className="article-back-row">
          <ArrowTextLink className="article-back" href="/blog" arrow="left">
            All blog posts
          </ArrowTextLink>
        </div>
        <article>
          <header className="article-header">
            <h1>{post.title}</h1>
            <p className="article-subheader">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min</span>
              <span aria-hidden="true">·</span>
              <span>{post.tags.join(', ')}</span>
            </p>
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
