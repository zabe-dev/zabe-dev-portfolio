import type { Metadata } from 'next';
import { BlogIndex } from './BlogIndex';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes about development, security, tools, and things I am learning.',
};

export default function BlogPage() {
  return (
    <div className="shell">
      <Header homeHref="/" sectionPrefix="/" />
      <main className="blog-index-page">
        <header className="blog-page-header">
          <h1>Blog</h1>
          <p>Notes on development, security, useful tools, and whatever I’m learning.</p>
        </header>
        <BlogIndex posts={getAllPosts()} />
      </main>
      <Footer />
    </div>
  );
}
