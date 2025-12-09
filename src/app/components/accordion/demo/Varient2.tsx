"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/packages/Accordion";

export function Variant2() {
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
