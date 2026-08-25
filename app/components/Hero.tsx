import { SocialLinks } from './SocialLinks';

export function Hero() {
  return <section className="hero">
    <div className="hero-copy">
      <div className="status"><span aria-hidden="true" /> Available for new work</div>
      <h1>I build websites, automate the boring parts, and enjoy figuring out why things break.</h1>
      <p>Currently, I’m learning <a className="inline-link" id="ai" href="#ai">AI prompt engineering</a> and exploring how AI can make everyday web products smarter and more useful. I also work as a developer at <a className="inline-link" href="https://bridgestackstudio.com/" target="_blank" rel="noreferrer">Bridge Stack Studio</a>, where I build and manage websites for clients. Outside of development, I spend time on security research and bug bounty hunting.</p>
      <div className="hero-links"><SocialLinks /></div>
    </div>
    <div className="portrait-photo"><img src="/profile-photo.jpg" alt="Jay Beza smiling" width="704" height="880" /></div>
  </section>;
}
