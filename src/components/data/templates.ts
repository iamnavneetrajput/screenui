export interface Template {
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    category: string;
}

export const staticTemplates: Template[] = [
    {
        title: 'Next.js Template',
        description: 'A modern Next.js template with TypeScript and Tailwind CSS.',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        demoUrl: '#',
        githubUrl: '#',
        category: 'Frontend',
    },
    {
        title: 'Dashboard Template',
        description: 'Professional admin dashboard with charts and analytics.',
        tags: ['React', 'TypeScript', 'Analytics'],
        demoUrl: '#',
        githubUrl: '#',
        category: 'Admin',
    },
    {
        title: 'E-commerce Store',
        description: 'Full-featured e-commerce template with cart and checkout.',
        tags: ['Commerce', 'Payments', 'React'],
        demoUrl: '#',
        githubUrl: '#',
        category: 'Commerce',
    },
    {
        title: 'Blog Template',
        description: 'Clean and minimal blog template with dark mode support.',
        tags: ['Blog', 'MDX', 'Dark Mode'],
        demoUrl: '#',
        githubUrl: '#',
        category: 'Content',
    },
];
