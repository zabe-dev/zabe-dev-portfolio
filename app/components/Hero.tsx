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
          I build and explore AI tools that make everyday applications smarter. I built and maintain{' '}
          <a
            className="inline-link"
            href="https://endorsecoin.com"
            target="_blank"
            rel="noreferrer"
          >
            EndorseCoin
          </a>
          , and work as a freelance web developer with{' '}
          <a
            className="inline-link"
            href="https://bridgestackstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            Bridge Stack Studio
          </a>
          . Outside of development, I’m learning cybersecurity and bug bounty hunting on HackerOne.
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
