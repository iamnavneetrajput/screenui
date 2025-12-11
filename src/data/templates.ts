export interface Template {
  title: string;
  description: string;
  tags: string[];
  support: string[];
  docs: string;
  category: string;
  terminalCommand?: string;
  version?: string;
}

export const staticTemplates: Template[] = [
  {
    title: "Layout",
    description:
      "A beautiful, modern layout application with multiple features including responsive design, grid system, and customizable components.",
    tags: ["Next.js", "React", "Vite", "TypeScript", "JavaScript", "Tailwind"],
    support: ["Dark Mode", "Light Mode", "Screenui Components"],
    docs: "/docs/templates",
    category: "Layout",
    terminalCommand: "npx screenui-cli@latest create layout",
    version: "v1.0.0",
  },
];
