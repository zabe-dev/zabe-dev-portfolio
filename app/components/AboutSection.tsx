import { skills } from '../data';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <h2>About me</h2>
        <p>A little about me and the things I work with.</p>
      </div>
      <div className="about-grid">
        <p>
          Born eleven thousand seven hundred twelve days ago, I’ve spent a good part of that time
          learning by following my curiosity. Coding entered the picture through online games: in
          high school, I set up forums and fixed websites for gaming communities in exchange for
          staff roles. Those early projects helped me find remote work and support myself, and I’ve
          kept learning by following whatever problem was in front of me—from WordPress and hosting
          to frontend development, automation, and security research. Most of what I know came from
          trying things, breaking things, reading the docs, and figuring out how to make them work
          again.
        </p>
        <p className="recognition">
          Right now, I spend most of my time working on bug bounties through HackerOne, Bugcrowd,
          and privately hosted programs. Along the way, I reported broken access control involving
          PII exposure to the{' '}
          <a className="inline-link" href="https://lacity.gov/" target="_blank" rel="noreferrer">
            City of Los Angeles
          </a>{' '}
          and reflected XSS to{' '}
          <a className="inline-link" href="https://iongroup.com/" target="_blank" rel="noreferrer">
            ION Group
          </a>
          . They both thanked me for sending the reports, but I can’t share the technical details
          because they were handled through responsible disclosure.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
