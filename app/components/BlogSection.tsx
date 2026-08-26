import Link from 'next/link';
import type { BlogPostMeta } from '../../lib/blog';

type Props = { posts: BlogPostMeta[] };

export function BlogSection({ posts }: Props) {
  return (
    <section id="blog">
      <div className="section-heading">
        <h2>Blog</h2>
        <p>Things I’m working on, learning, and thinking about.</p>
      </div>
      <div className="post-list">
        {posts.slice(0, 5).map((post) => (
          <Link className="post-item" href={`/blog/${post.slug}`} key={post.slug}>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
      <div className="blog-all-link">
        <Link href="/blog">
          <span>View all posts</span> →
        </Link>
      </div>
    </section>
  );
}
