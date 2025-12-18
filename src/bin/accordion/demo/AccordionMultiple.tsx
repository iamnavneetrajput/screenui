"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/packages/Accordion";

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
