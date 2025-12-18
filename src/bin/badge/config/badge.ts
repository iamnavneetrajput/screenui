// src/data/code-snippets/badge.ts

// --- TypeScript Examples ---
// Basic + interactive badges
export const TsCode1 = `
import { Badge } from "@/components/badge";

export function Example() {
  return (
    <div className="flex gap-2 flex-wrap">

      <Badge className="bg-blue-100 text-blue-800">New</Badge>

      <Badge variant="dot" className="bg-green-50 text-green-700">Active</Badge>

      <Badge
        as="button"
        interactive
        className="bg-purple-100 text-purple-800 hover:bg-purple-200"
        onClick={() => console.log("Badge clicked")}
      >
        Clickable
      </Badge>

      <Badge
        variant="outline"
        className="border-red-300 text-red-700"
        icon={<InfoIcon />}
      >
        Warning
      </Badge>
      
      <Badge
        className="bg-gray-100 text-gray-800"
        onRemove={() => console.log("Badge removed")}
      >
        Removable
      </Badge>
    </div>
  );
}
`;


// --- JavaScript Examples ---
// Both JS examples are identical to TS, so reuse
export const JsCode1 = TsCode1;


// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add badge --lang ts --path src/components",
  js: "npx screenui-cli@latest add badge --lang js --path src/components",
};


// --- Metadata ---
export const Component = "Badge";
export const Title = "Badge Component";
export const Description = "A versatile and accessible badge component with support for variants, sizes, rounded corners, icons, interactivity, and removal.";
export const Lastupdated = "2025-09-20";
export const Version = "1.0.0";
