import type { BlogPost } from '../data';
import { PAGE_SIZE } from '../data';
import { Pagination } from './Pagination';

type Props = { posts: BlogPost[]; page: number; onPageChange: (page: number) => void };

export function BlogSection({ posts, page, onPageChange }: Props) {
  const pageCount = Math.ceil(posts.length / PAGE_SIZE);
  return <section id="blog">
    <div className="section-heading"><h2>Blog</h2><p>Things I’m working on, learning, and thinking about.</p></div>
    <div className="post-list">{posts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map((post) => <a className="post-item" href={post.href} key={post.title} target="_blank" rel="noreferrer">
      <time>{post.date}</time><div><h3>{post.title}</h3><p>{post.excerpt}</p></div><span aria-hidden="true">↗</span>
    </a>)}</div>
    <Pagination label="Blog pagination" page={page} pageCount={pageCount} indented onChange={onPageChange} />
  </section>;
}
