import Link from 'next/link';
import type { ReactNode } from 'react';

type ArrowTextLinkProps = {
  href: string;
  children: ReactNode;
  arrow?: 'left' | 'right' | 'up-right';
  className?: string;
};

export function ArrowTextLink({
  href,
  children,
  arrow = 'right',
  className = '',
}: ArrowTextLinkProps) {
  const content = (
    <>
      {arrow === 'left' && <span aria-hidden="true">←</span>}
      <span className="arrow-text-link-label">{children}</span>
      {arrow === 'right' && <span aria-hidden="true">→</span>}
      {arrow === 'up-right' && <span aria-hidden="true">↗</span>}
    </>
  );

  const linkClassName = `arrow-text-link ${className}`.trim();
  if (href.startsWith('mailto:')) {
    return (
      <a className={linkClassName} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href}>
      {content}
    </Link>
  );
}
