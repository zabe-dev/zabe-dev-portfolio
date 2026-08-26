'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { BlogPostMeta } from '../../lib/blog';

type BlogIndexProps = { posts: BlogPostMeta[] };

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activeTag, setActiveTag] = useState('All');
  const tags = ['All', ...Array.from(new Set(posts.flatMap((post) => post.tags)))];
  const visiblePosts =
    activeTag === 'All' ? posts : posts.filter((post) => post.tags.includes(activeTag));

  const groups = useMemo(() => {
    return visiblePosts.reduce<
      Array<{ key: string; month: string; year: string; posts: BlogPostMeta[] }>
    >((result, post) => {
      const key = `${post.year}-${post.month}`;
      const current = result.at(-1);
      if (current?.key === key) current.posts.push(post);
      else result.push({ key, month: post.month, year: post.year, posts: [post] });
      return result;
    }, []);
  }, [visiblePosts]);

  return (
    <>
      <div className="blog-filters" aria-label="Filter posts by topic">
        {tags.map((tag) => (
          <button
            className={activeTag === tag ? 'active' : ''}
            type="button"
            onClick={() => setActiveTag(tag)}
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="blog-timeline">
        {groups.map((group) => (
          <section className="timeline-group" key={group.key}>
            <div className="timeline-date">
              <strong>{group.month}</strong>
              <span>{group.year}</span>
            </div>
            <div className="timeline-track" aria-hidden="true">
              <span />
            </div>
            <div className="timeline-posts">
              {group.posts.map((post) => (
                <Link className="timeline-post" href={`/blog/${post.slug}`} key={post.slug}>
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="timeline-post-meta">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
