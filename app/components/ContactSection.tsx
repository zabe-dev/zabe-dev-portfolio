import { ArrowTextLink } from './ArrowTextLink';

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>Have something you’d like help with?</h2>
        <p>
          I’m always interested in thoughtful web and technical work. Need a copy of my resume?{' '}
          <a href="mailto:jay@zabe.dev?subject=Resume%20request">Send me a request.</a>
        </p>
      </div>
      <ArrowTextLink className="email-link" href="mailto:jay@zabe.dev" arrow="up-right">
        jay@zabe.dev
      </ArrowTextLink>
    </section>
  );
}
