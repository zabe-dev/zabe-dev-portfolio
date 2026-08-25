import { SocialLinks } from './SocialLinks';

export function Hero() {
  return <section className="hero">
    <div className="hero-copy">
      <div className="status"><span aria-hidden="true" /> Available for new work</div>
      <h1>I build websites, automate the boring parts, and enjoy figuring out why things break.</h1>
      <p>Currently, I’m studying <a className="inline-link" id="ai" href="#ai">AI prompt engineering</a> and exploring how AI can support useful, well-designed web products. I also work with <a className="inline-link" href="https://bridgestackstudio.com/" target="_blank" rel="noreferrer">Bridge Stack Studio</a> as the go-to developer, building and managing websites for clients. Most days, I’m somewhere between frontend work, WordPress fixes, small automations, security rabbit holes, and helping people sort out technical issues.</p>
      <div className="hero-links"><SocialLinks /></div>
    </div>
    <div className="portrait-photo"><img src="/profile-photo.jpg" alt="Jay Beza smiling" width="704" height="880" /></div>
  </section>;
}
