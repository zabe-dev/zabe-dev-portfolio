'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const projects = [
  { title: 'Bug bounty tools', description: 'A growing collection of tools I created—with and without AI assistance—for authorized security testing and repeatable research workflows.', stack: 'Python · Bash · Web security', href: 'https://github.com/zabe-dev/bug-bounty', image: '/bug-bounty-tools.jpg' },
];

const posts = [
  { date: 'Coming soon', title: 'A placeholder for my first post', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. This space will hold notes about what I’m building, learning, and thinking about.', href: 'https://example.com' },
];

const PAGE_SIZE = 2;

const pageTitles: Record<string, string> = {
  projects: 'Projects',
  about: 'About',
  education: 'Education',
  blog: 'Blog',
  contact: 'Contact',
  ai: 'AI Prompt Engineering',
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [blogPage, setBlogPage] = useState(0);
  const projectPages = Math.ceil(projects.length / PAGE_SIZE);
  const blogPages = Math.ceil(posts.length / PAGE_SIZE);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(initial);
    document.documentElement.dataset.theme = initial ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    function updatePageTitle() {
      const section = window.location.hash.slice(1);
      document.title = `Jay Beza - ${pageTitles[section] ?? 'Home'}`;
    }

    updatePageTitle();
    window.addEventListener('hashchange', updatePageTitle);
    return () => window.removeEventListener('hashchange', updatePageTitle);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return <div className="shell">
    <header>
      <a className="nav-name" href="#top">Jay Beza</a>
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <button className="theme-icon" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>
          <FontAwesomeIcon icon={dark ? faSun : faMoon} aria-hidden="true" />
        </button>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="status"><span aria-hidden="true" /> Available for new work</div>
          <h1>I build websites, automate the boring parts, and enjoy figuring out why things break.</h1>
          <p>Currently, I’m studying <a className="inline-link" id="ai" href="#ai">AI prompt engineering</a> and exploring how AI can support useful, well-designed web products. I also work with <a className="inline-link" href="https://bridgestackstudio.com/" target="_blank" rel="noreferrer">BridgeStack Studio</a> as the go-to developer, building and managing websites for clients. Most days, I’m somewhere between frontend work, WordPress fixes, small automations, security rabbit holes, and helping people sort out technical issues.</p>
          <div className="hero-links">
            <a id="x" href="https://x.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} aria-hidden="true" /> Twitter</a>
            <a id="linkedin" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub</a>
            <a href="https://hackerone.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBug} aria-hidden="true" /> HackerOne</a>
          </div>
        </div>
        <div className="portrait-photo">
          <img src="/jay-beza-portrait-optimized.jpg" alt="Jay Beza smiling" width="704" height="880" />
        </div>
      </section>

      <section id="projects">
        <div className="section-heading"><h2>Projects</h2><p>A few things I’ve worked on and thought about.</p></div>
        <div className="project-grid">
          {projects.slice(projectPage * PAGE_SIZE, (projectPage + 1) * PAGE_SIZE).map((project, index) => {
            const itemNumber = projectPage * PAGE_SIZE + index + 1;
            return <a className="project-card" href={project.href} key={project.title} target="_blank" rel="noreferrer">
            <div className={`placeholder tone-${itemNumber}${project.image ? ' project-image' : ''}`} aria-hidden="true">
              {project.image && <img src={project.image} alt="" width="1000" height="690" />}
              <span>{String(itemNumber).padStart(2, '0')}</span>
            </div>
            <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small></div>
          </a>;})}
        </div>
        <div className="pagination" aria-label="Projects pagination">
          <button type="button" onClick={() => setProjectPage((page) => page - 1)} disabled={projectPage === 0}>Previous</button>
          <span>{projectPage + 1} / {projectPages}</span>
          <button type="button" onClick={() => setProjectPage((page) => page + 1)} disabled={projectPage === projectPages - 1}>Next</button>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-heading"><h2>About me</h2><p>A little about me and the things I work with.</p></div>
        <div className="about-grid">
          <p>I got into coding through online games. In high school, I set up forums and fixed websites for gaming communities in exchange for staff roles, and those early projects eventually helped me find remote work and support myself. Since then, I’ve kept learning by following whatever problem was in front of me—from WordPress and hosting to frontend development, automation, and security research. Most of what I know came from trying things, breaking things, reading the docs, and figuring out how to make them work again.</p>
          <p className="recognition">Right now, I spend most of my time working on bug bounties through HackerOne, Bugcrowd, and privately hosted programs. Along the way, I reported broken access control involving PII exposure to the <a className="inline-link" href="https://lacity.gov/" target="_blank" rel="noreferrer">City of Los Angeles</a> and reflected XSS to <a className="inline-link" href="https://iongroup.com/" target="_blank" rel="noreferrer">ION Group</a>. They both thanked me for sending the reports, but I can’t share the technical details because they were handled through responsible disclosure.</p>
          <div className="skills"><span>React</span><span>Next.js</span><span>TypeScript</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Node.js</span><span>REST APIs</span><span>Git</span><span>Responsive design</span><span>Accessibility</span><span>Prompt engineering</span><span>AI-assisted development</span><span>LLM workflows</span><span>Security research</span><span>OWASP Top 10</span><span>WordPress</span><span>Database administration</span><span>PostgreSQL</span><span>Supabase</span><span>Python</span><span>DNS</span><span>On-page SEO</span><span>Technical support</span></div>
        </div>
      </section>

      <section id="education">
        <div className="section-heading"><h2>Education</h2><p>A mix of school, courses, and hands-on learning.</p></div>
        <div className="course-list">
          <article className="course-item"><div><h3>Computer Science</h3><p>System Plus College Foundation</p></div><span>Studied in 2022</span></article>
          <article className="course-item certification"><div><h3>Database fundamentals</h3><p>Microsoft Technology Associate</p></div><span>Certified in 2020</span></article>
          <article className="course-item"><div><h3>Computer Engineering</h3><p>AMA Computer College</p></div><span>Studied in 2014</span></article>
          <article className="course-item"><div><h3>Computer Technology</h3><p>System Technology Institute</p></div><span>Studied in 2012</span></article>
        </div>
      </section>

      <section id="blog">
        <div className="section-heading"><h2>Blog</h2><p>Things I’m working on, learning, and thinking about.</p></div>
        <div className="post-list">
          {posts.slice(blogPage * PAGE_SIZE, (blogPage + 1) * PAGE_SIZE).map((post) => <a className="post-item" href={post.href} key={post.title} target="_blank" rel="noreferrer">
            <time>{post.date}</time>
            <div><h3>{post.title}</h3><p>{post.excerpt}</p></div>
            <span aria-hidden="true">↗</span>
          </a>)}
        </div>
        <div className="pagination pagination-indented" aria-label="Blog pagination">
          <button type="button" onClick={() => setBlogPage((page) => page - 1)} disabled={blogPage === 0}>Previous</button>
          <span>{blogPage + 1} / {blogPages}</span>
          <button type="button" onClick={() => setBlogPage((page) => page + 1)} disabled={blogPage === blogPages - 1}>Next</button>
        </div>
      </section>

      <section className="contact" id="contact">
        <div><h2>Have something you’d like help with?</h2><p>I’m always interested in thoughtful web and technical work. Need a copy of my resume? <a href="mailto:jay@zabe.dev?subject=Resume%20request">Send me a request.</a></p></div>
        <a className="email-link" href="mailto:jay@zabe.dev"><span>jay@zabe.dev</span> ↗</a>
      </section>

    </main>

    <footer><span>JAY BEZA · 2026</span><div><a href="https://x.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} aria-hidden="true" /> Twitter</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /> LinkedIn</a><a id="github" href="https://github.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub</a><a href="https://hackerone.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBug} aria-hidden="true" /> HackerOne</a></div></footer>
  </div>;
}
