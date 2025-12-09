"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/packages/Accordion";

export function Variant1() {
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
