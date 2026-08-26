'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = { homeHref?: string; sectionPrefix?: string };

export function Header({ homeHref = '#top', sectionPrefix = '' }: HeaderProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(initial);
    document.documentElement.dataset.theme = initial ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <header>
      <a className="nav-name" href={homeHref}>
        Jay Beza
      </a>
      <nav aria-label="Primary navigation">
        <a href={`${sectionPrefix}#projects`}>Projects</a>
        <a href={`${sectionPrefix}#about`}>About</a>
        <a href={`${sectionPrefix}#education`}>Education</a>
        <a href={`${sectionPrefix}#blog`}>Blog</a>
        <a href={`${sectionPrefix}#contact`}>Contact</a>
        <button
          className="theme-icon"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
          title={`Switch to ${dark ? 'light' : 'dark'} mode`}
        >
          <FontAwesomeIcon icon={dark ? faSun : faMoon} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
