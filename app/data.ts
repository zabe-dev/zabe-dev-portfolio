export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  image?: string;
  theme?: 'kabayan' | 'endorsecoin' | 'security';
};
export type Course = {
  title: string;
  institution: string;
  detail: string;
  certification?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Kabayan Pastries',
    description: 'A storefront for Filipino-inspired pastries with menu, contact, and brand content.',
    stack: 'Next.js, TypeScript, PostgreSQL, Cloudflare R2, Resend',
    href: 'https://kabayan-pastries.zabe.dev',
    image: '/project-thumbnails/kabayan-pastries-480-270.png',
    theme: 'kabayan',
  },
  {
    title: 'EndorseCoin',
    description: 'A crypto discovery platform for launches, presales, airdrops, rankings, and votes.',
    stack: 'Next.js, TypeScript, PostgreSQL, Cloudflare R2, Resend, Coolify, Redis, Zod, Better Auth',
    href: 'https://endorsecoin.com/',
    image: '/project-thumbnails/endorsecoin-480-270.png',
    theme: 'endorsecoin',
  },
  {
    title: 'Bug Bounty Tools',
    description: 'Security testing tools for repeatable bug bounty research workflows.',
    stack: 'Python, Bash, Web security',
    href: 'https://github.com/zabe-dev/bug-bounty',
    image: '/project-thumbnails/bug-bounty-tools-480-270.png',
    theme: 'security',
  },
];

export const courses: Course[] = [
  {
    title: 'BS Computer Science',
    institution: 'System Plus College Foundation',
    detail: 'Attended · 2019–2022',
  },
  {
    title: 'Database Fundamentals',
    institution: 'Microsoft Technology Associate',
    detail: 'Certified in 2020',
    certification: true,
  },
  {
    title: 'BS Computer Engineering',
    institution: 'AMA Computer College',
    detail: 'Attended · 2014',
  },
  {
    title: 'Associate in Computer Technology',
    institution: 'System Technology Institute',
    detail: 'Attended · 2012',
  },
];

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'REST APIs',
  'Git',
  'Responsive design',
  'Accessibility',
  'Prompt engineering',
  'AI-assisted development',
  'LLM workflows',
  'Security research',
  'OWASP Top 10',
  'WordPress',
  'Database administration',
  'PostgreSQL',
  'Supabase',
  'Python',
  'DNS',
  'On-page SEO',
  'Technical support',
  'Email management',
  'Calendar management',
  'Data entry',
  'Internet research',
];

export const PAGE_SIZE = 3;

export const pageTitles: Record<string, string> = {
  projects: 'Projects',
  about: 'About',
  education: 'Education',
  blog: 'Blog',
  contact: 'Contact',
  ai: 'AI Prompt Engineering',
};
