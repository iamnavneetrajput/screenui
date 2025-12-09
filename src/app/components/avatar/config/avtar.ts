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

export function Example() {
  return (
      <Avatar name="User" status="online" />
      <Avatar name="User" status="busy" />
      <Avatar name="User" status="away" />
      <Avatar name="User" status="offline" />
      <Avatar name="Jane" color="bg-green-600" status="away" />
      <Avatar name="Unknown" />
  );
}
`;

export const TsCode2 = `
import { Avatar } from "@/components/Avatar";

export function Example() {
  return (
      <Avatar name="User" notification={100} />
      <Avatar name="User" notification="!" />
      <Avatar name="Pro User" ring="ring-2" ringColor="ring-pink-500" />
      <Avatar name="Alert" status="online" notification={5} />
      <Avatar name="Small" notification={2} />
  );
}
`;

export const TsCode3 = `
import { Avatar } from "@/components/Avatar";

export function Example() {
  return (
      <div className="flex items-start gap-3">
        <Avatar
          name="Mike Johnson"
          status="busy"
          size="md"
        />

        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold">Mike Johnson</span>
            <span className="text-xs">15 min ago</span>
          </div>

          <p className="mt-1">In a meeting, will respond soon</p>
        </div>
      </div>
  );
}
`;

export const TsCode4 = `
import { Avatar } from "@/components/Avatar";

export function Example() {
  return (
      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
        <Avatar
          name="Tom"
          notification={1}
          notificationColor="bg-green-500"
          notificationPosition="top-right"
          size="lg"
        />

        <div>
          <p className="font-semibold text-slate-900">Friend Request</p>
          <p className="text-sm text-slate-600">Tom wants to connect</p>
        </div>
      </div>
  );
}
`;


// --- JavaScript Examples (reuse if same) ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;


// --- Meta Data ---
export const Component = "Avatar";
export const Title = "Avatar Component";
export const Description =
  "A customizable avatar component supporting images, fallback text, icons, and various styles.";
export const Lastupdated = "2025-12-4";
export const Version = "1.0.0";
