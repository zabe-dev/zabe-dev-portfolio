import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = { dark: boolean; onToggleTheme: () => void };

export function Header({ dark, onToggleTheme }: HeaderProps) {
  return <header>
    <a className="nav-name" href="#top">Jay Beza</a>
    <nav aria-label="Primary navigation">
      <a href="#projects">Projects</a><a href="#about">About</a><a href="#education">Education</a><a href="#blog">Blog</a><a href="#contact">Contact</a>
      <button className="theme-icon" type="button" onClick={onToggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>
        <FontAwesomeIcon icon={dark ? faSun : faMoon} aria-hidden="true" />
      </button>
    </nav>
  </header>;
}
