export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add accordion --lang ts --path src/components",
  js: "npx screenui-cli@latest add accordion --lang js --path src/components",
};

// --- Main Examples ---
export const TsCode1 = `
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';

export function Example() {
  return (
    <div className="w-full max-w-2xl p-4 bg-card border border-border rounded-lg space-y-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces, particularly single-page applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is TypeScript?</AccordionTrigger>
          <AccordionContent>
            TypeScript is a strongly typed programming language that builds on JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
`;

export const TsCode2 = `
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';

export function Example() {
  return (
      <div className="w-full max-w-2xl p-4 bg-card border border-border rounded-lg space-y-4">
      <Accordion type="multiple" defaultValue={["item-1"]}>
        <AccordionItem value="item-2">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            Our pricing starts at $29/month for the basic plan.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Support</AccordionTrigger>
          <AccordionContent>
            24/7 customer support via email and chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
);
}
`;

export const TsCode3 = `
"use client"
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';
import { Checkbox } from '@/components/Checkbox';

export function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="max-w-2xl p-6 bg-slate-800/90 rounded-lg shadow-2xl border border-purple-500/30">
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Settings
        </h2>

        <Accordion type="multiple" defaultValue={["general"]}>
          <AccordionItem value="general" className="border-purple-500/20">
            <AccordionTrigger className="text-purple-300 hover:text-purple-200">
              General Settings
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Enable notifications"
                    defaultChecked
                  />
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Dark mode"
                  />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="privacy" className="border-purple-500/20">
            <AccordionTrigger className="text-purple-300 hover:text-purple-200">
              Privacy & Security
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Two-factor authentication"
                    defaultChecked
                  />
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Share analytics"
                  />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notifications" className="border-purple-500/20">
            <AccordionTrigger className="text-purple-300 hover:text-purple-200">
              Notification Preferences
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Email notifications"
                    defaultChecked
                  />
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox
                    className="bg-purple-600/30 border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-400"
                    label="Push notifications"
                  />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}
`;

export const TsCode4 = `
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';

export function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <Accordion
        type="single"
        collapsible
        variant="ghost"
        className="max-w-2xl border-l-4 border-cyan-500 bg-slate-800/80 backdrop-blur-sm p-4 rounded-r-lg shadow-2xl shadow-cyan-500/20"
      >
        <AccordionItem
          value="item-1"
          variant="ghost"
          className="mb-2 border-cyan-500/20"
        >
          <AccordionTrigger
            variant="ghost"
            className="bg-gradient-to-r from-cyan-600/40 to-indigo-600/40 hover:from-cyan-500/50 hover:to-indigo-500/50 text-cyan-300 font-bold rounded-lg px-4 border border-cyan-500/30 transition-all duration-300"
          >
            Custom Styled Question
          </AccordionTrigger>
          <AccordionContent
            variant="ghost"
            className="text-slate-300 bg-slate-700/50 backdrop-blur-sm rounded-lg mt-2 px-4 border border-cyan-500/20"
          >
            This accordion is completely customized using Tailwind classes while still
            maintaining all the functionality and accessibility features.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
);
}
`;

// Reuse TS code for JS
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;

// Component Metadata
export const Component = "Accordion";
export const Title = "Accordion";
export const Description = "Accordions allow users to expand and collapse sections of content.";
export const Lastupdated = "2025-12-3";
export const Version = "1.0.0";
