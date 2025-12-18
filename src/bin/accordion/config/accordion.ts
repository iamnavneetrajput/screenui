export const InstallCommands = {
  dependency: '',
  ts: "npx screenui-cli@latest add accordion --lang ts --path src/components",
  js: "npx screenui-cli@latest add accordion --lang js --path src/components",
};

// --- Main Examples ---
export const TsCode1 = `'use client';
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';

export function AccordionSingle() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl divide-y divide-border"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-medium">
          What is ScreenUI?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          ScreenUI is a modern UI component library and scaffolding tool designed
          to help developers build production-ready interfaces with clean,
          customizable components and a powerful CLI.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-medium">
          Why use ScreenUI?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          It removes boilerplate, enforces consistent architecture, and speeds up
          UI development. You can scaffold projects or generate components directly
          into your codebase.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export const TsCode2 = `'use client';
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/Accordion';

export function AccordionMultiple() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1"]}
      className="w-full max-w-2xl divide-y divide-border"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-medium">
          How does the ScreenUI CLI work?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          The CLI generates components and full project structures directly into
          your project. No copy/paste — everything is scaffolded cleanly with TS/JS
          options and Tailwind support.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-medium">
          What components does ScreenUI include?
        </AccordionTrigger>
        <AccordionContent className="text-sm">
          The library includes navigation, forms, tables, dashboards, file upload,
          accordions, and many more production-ready parts with consistent design
          tokens and customization.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

// Reuse TS code for JS
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;

// Component Metadata
export const Component = "Accordion";
export const Title = "Accordion";
export const Description = "Accordions allow users to expand and collapse sections of content.";
export const Lastupdated = "2025-12-3";
export const Version = "1.0.0";
