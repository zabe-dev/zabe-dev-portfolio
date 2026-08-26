'use client';

import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a className="footer-home" href="/" aria-label="Go to homepage">
        JAY BEZA · <span suppressHydrationWarning>{currentYear}</span>
      </a>
      <div>
        <SocialLinks />
      </div>
    </footer>
  );
}
