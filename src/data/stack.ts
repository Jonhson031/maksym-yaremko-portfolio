export interface StackCategory {
  label: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { label: 'Database', items: ['MongoDB', 'MySQL', 'SQL Server'] },
  { label: 'Infra', items: ['Docker', 'AWS', 'Vercel', 'Render'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Figma'] },
];
