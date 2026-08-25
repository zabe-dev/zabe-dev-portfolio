import { SocialLinks } from './SocialLinks';

export function Hero() {
  return <section className="hero">
    <div className="hero-copy">
      <div className="status"><span aria-hidden="true" /> Available for new work</div>
      <h1>Currently, I’m learning AI prompt engineering and exploring how AI can make everyday web products smarter and more useful.</h1>
      <p>I also work as a developer at <a className="inline-link" href="https://bridgestackstudio.com/" target="_blank" rel="noreferrer">Bridge Stack Studio</a>, where I build and manage websites for clients. Outside of development, I spend time on security research and bug bounty hunting.</p>
      <div className="hero-links"><SocialLinks /></div>
    </div>
    <div className="portrait-photo"><img src="/profile-photo.jpg" alt="Jay Beza smiling" width="704" height="880" /></div>
  </section>;
}
