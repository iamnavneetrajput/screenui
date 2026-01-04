export type DocType = "component" | "template" | "theme";

export interface DocEntry {
  slug: string;
  title: string;
  type: DocType;
}

export const docs: DocEntry[] = [
  { slug: "components", title: "Component", type: "component" },
  { slug: "templates", title: "Template", type: "template" },
  { slug: "theme", title: "Theme", type: "theme" },
];
