export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  image?: string;
};
export type Course = {
  title: string;
  institution: string;
  detail: string;
  certification?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Bug Bounty Tools',
    description:
      'A growing collection of tools I created—with and without AI assistance—for authorized security testing and repeatable research workflows.',
    stack: 'Python · Bash · Web security',
    href: 'https://github.com/zabe-dev/bug-bounty',
    image: '/security-tools.webp',
  },
];

export const courses: Course[] = [
  {
    title: 'Computer Science',
    institution: 'System Plus College Foundation',
    detail: 'Studied in 2022',
  },
  {
    title: 'Database Fundamentals',
    institution: 'Microsoft Technology Associate',
    detail: 'Certified in 2020',
    certification: true,
  },
  { title: 'Computer Engineering', institution: 'AMA Computer College', detail: 'Studied in 2014' },
  {
    title: 'Computer Technology',
    institution: 'System Technology Institute',
    detail: 'Studied in 2012',
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
];

export const PAGE_SIZE = 2;

export const pageTitles: Record<string, string> = {
  projects: 'Projects',
  about: 'About',
  education: 'Education',
  blog: 'Blog',
  contact: 'Contact',
  ai: 'AI Prompt Engineering',
};
