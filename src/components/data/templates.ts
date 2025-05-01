export interface Template {
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
    category: string;
    terminalCommand?: string;
    installCommandDescription?: string;
}

export const staticTemplates: Template[] = [
    {
        title: 'Chrono',
        description: 'A beautiful, modern clock application with multiple features including analog/digital clocks, world clock, stopwatch, and timer functionality.',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        demoUrl: 'https://chrono.screenui.com/',
        githubUrl: 'https://github.com/iamnavneetrajput/create-screenui/tree/main/templates/nextjs/clock',
        category: 'Clock',
        terminalCommand: 'npx create-screenui clock',
    },
];
