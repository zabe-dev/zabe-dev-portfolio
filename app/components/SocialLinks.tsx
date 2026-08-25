import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
  return <>
    <a href="https://x.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} aria-hidden="true" /> Twitter</a>
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /> LinkedIn</a>
    <a href="https://github.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub</a>
    <a href="https://hackerone.com/zabe-dev" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBug} aria-hidden="true" /> HackerOne</a>
  </>;
}
