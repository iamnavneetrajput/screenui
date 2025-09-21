// src/data/code-snippets/button.ts

// --- TypeScript Examples ---
export const TsCode1 = `
import { Button } from "@/components/button";

export function Example() {
  return (
    <Button className="bg-blue-500 text-white hover:bg-blue-600">
      Click Me
    </Button>
  );
}
`;

export const TsCode2 = `
import { Button } from "@/components/button";

export function Example() {
  return (
    <Button 
      variant="outline" 
      icon={<Trash />}
      className="border-red-500 text-red-500 hover:bg-red-50"
    >
      Delete
    </Button>
  );
}
`;

export const TsCode3 = `
import { Button } from "@/components/button";

export function Example({ isLoading }: { isLoading: boolean }) {
  return (
    <Button 
      className="bg-green-500 text-white" 
      icon={<Plus />} 
      loading={isLoading}
    >
      Add Item
    </Button>
  );
}
`;

export const TsCode4 = `
import { Button } from "@/components/button";

export function Example() {
  return (
    <Button as="a" href="/dashboard" variant="ghost" icon={<ExternalLink />}>
      Go to Dashboard
    </Button>
  );
}
`;;


// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;

// Adjust example with type annotations for JS
export const JsCode3 = `
import { Button } from "@/components/button";

export default function Example({ isLoading }) {
  return (
    <Button 
      className="bg-green-500 text-white" 
      icon={<Plus />} 
      loading={isLoading}
    >
      Add Item
    </Button>
  );
}
`;

export const JsCode4 = TsCode4;


// --- Commands ---
export const CommandTs = "npx screenui@latest add button --lang ts --path src/components";
export const CommandJs = "npx screenui@latest add button --lang js --path src/components";


// --- Meta Data ---
export const Component = "Button";
export const Title = "Versatile Button Component";
export const Description = "A customizable button component supporting multiple variants, sizes, icons, loading states, and anchor links.";
export const Lastupdated = "2025-09-19";
export const Version = "1.0.0";
