import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer>
      <a className="footer-home" href="/" aria-label="Go to homepage">
        JAY BEZA · 2026
      </a>
      <div>
        <SocialLinks />
      </div>
    </footer>
  );
}
