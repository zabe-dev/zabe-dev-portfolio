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
          These days, I’m mostly building random things, experimenting with AI, and figuring out how
          to make web applications a little smarter. I built and maintain{' '}
          <a
            className="inline-link"
            href="https://endorsecoin.com"
            target="_blank"
            rel="noreferrer"
          >
            EndorseCoin
          </a>{' '}
          and do freelance web development with{' '}
          <a
            className="inline-link"
            href="https://bridgestackstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            Bridge Stack Studio
          </a>
          . I also spend a good amount of time learning cybersecurity and hunting for bugs on
          HackerOne.
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
