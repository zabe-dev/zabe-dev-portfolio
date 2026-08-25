'use client';

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { pageTitles, posts, projects } from './data';

export default function Home() {
  const [dark, setDark] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [blogPage, setBlogPage] = useState(0);

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
    <Header dark={dark} onToggleTheme={toggleTheme} />
    <main id="top">
      <Hero />
      <ProjectsSection projects={projects} page={projectPage} onPageChange={setProjectPage} />
      <AboutSection />
      <EducationSection />
      <BlogSection posts={posts} page={blogPage} onPageChange={setBlogPage} />
      <ContactSection />
    </main>
    <Footer />
  </div>;
}
