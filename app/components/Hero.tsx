import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="status">
          <span aria-hidden="true" /> Available for new work
        </div>
        <h1>I build stuff, automate the boring parts, and enjoy figuring out why things break.</h1>
        <p>
          Currently, I’m focused on building and exploring AI tools that can make everyday
          applications smarter and more useful. I built and maintain{' '}
          <a
            className="inline-link"
            href="https://endorsecoin.com"
            target="_blank"
            rel="noreferrer"
          >
            EndorseCoin
          </a>
          , and I also work with{' '}
          <a
            className="inline-link"
            href="https://bridgestackstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            Bridge Stack Studio
          </a>{' '}
          as a freelance web developer, building and managing websites for clients. Outside of
          development, I spend time learning cybersecurity and bug bounty hunting on HackerOne.
        </p>
        <div className="hero-links">
          <SocialLinks />
        </div>
      </div>
      <div className="portrait-photo">
        <img src="/profile-photo.jpg" alt="Jay smiling" width="704" height="880" />
      </div>
    </section>
  );
}
