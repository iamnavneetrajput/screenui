// src/data/code-snippets/avatar.ts

// --- Installation Commands (structured) ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui add avatar --lang ts --path src/components",
  js: "npx screenui add avatar --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `
import { Avatar } from "@/components/Avatar";
import { Star } from "lucide-react";

export function Example() {
  return (
    <Avatar
      as="button"
      src="/user.png"
      clickable
      className="bg-gray-200 hover:ring-4 hover:ring-blue-200"
      onClick={() => console.log("Avatar clicked")}
    />

    <Avatar
      src="/user.png"
      fallback="John Doe"
      className="bg-blue-500 text-white ring-2 ring-blue-300"
    />

    <Avatar
      fallbackContent={<Star className="w-6 h-6" />}
      className="bg-yellow-100 text-yellow-600"
    />

    <Avatar
      variant="square"
      size="xl"
      src="/user.png"
      className="bg-gray-100 border-2 border-gray-300"
    />
  );
}
`;

// --- JavaScript Examples (reuse if same) ---
export const JsCode1 = TsCode1;

// --- Meta Data ---
export const Component = "Avatar";
export const Title = "Avatar Component";
export const Description =
  "A customizable avatar component supporting images, fallback text, icons, and various styles.";
export const Lastupdated = "2025-09-20";
export const Version = "1.0.0";
