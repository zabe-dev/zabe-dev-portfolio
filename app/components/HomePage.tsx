'use client';

import { useEffect, useState } from 'react';
import type { BlogPostMeta } from '../../lib/blog';
import { AboutSection } from './AboutSection';
import { BlogSection } from './BlogSection';
import { ContactSection } from './ContactSection';
import { EducationSection } from './EducationSection';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { pageTitles, projects } from '../data';

type HomePageProps = { posts: BlogPostMeta[] };

export function HomePage({ posts }: HomePageProps) {
  const [projectPage, setProjectPage] = useState(0);

  useEffect(() => {
    function updatePageTitle() {
      const section = window.location.hash.slice(1);
      document.title = `Jay Beza - ${pageTitles[section] ?? 'Home'}`;
    }

    updatePageTitle();
    window.addEventListener('hashchange', updatePageTitle);
    return () => window.removeEventListener('hashchange', updatePageTitle);
  }, []);

  return (
    <div className="shell">
      <Header />
      <main id="top">
        <Hero />
        <ProjectsSection projects={projects} page={projectPage} onPageChange={setProjectPage} />
        <AboutSection />
        <EducationSection />
        <BlogSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
