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
    title: "Chrono",
    description:
      "A beautiful, modern clock application with multiple features including analog/digital clocks, world clock, stopwatch, and timer functionality.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    support: ["Dark Mode", "Light Mode", "Screenui Components"],
    docs: "https://screenui/docs/awaken",
    category: "Clock",
    terminalCommand: "npx create-screenui clock",
    version: "v1.0.0",
  },
];
