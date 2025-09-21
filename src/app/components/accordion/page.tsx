'use client';
import { MainLayout } from '@/components/layout/main-layout';
import { ComponentHeader } from '@/app/library/component/component-header';
import { ComponentDemo } from '@/app/library/component/component-demo';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/Accordion";
import { TsCode1, TsCode2, TsCode3, TsCode4, JsCode1, JsCode2, JsCode3, JsCode4, CommandTs, CommandJs, Component, Title, Description, Lastupdated, Version } from '@/data/code-snippets/accordion';
import { UsageNotes } from '@/app/components/accordion/usage';
import React, { useState } from 'react';

export default function AccordionPage() {
  const [value, setValue] = useState<string | undefined>(undefined);

  function handleValueChange(newValue: string): void {
    setValue(newValue);
  }

  return (
    <MainLayout>
      <div className="pt-12 md:p-10 max-w-5xl mx-auto space-y-10">
        <ComponentHeader
          title="Accordion"
          description="Accordions are used to display collapsible content panels for presenting information in a limited amount of space."
        />

        <ComponentDemo
          title="Accordion with Single Item"
          description="Use the Accordion component with a single item that can be expanded or collapsed."
          component="Accordion"
          dependencyCommand="npm install lucide-react"
          npmCommandTs="npm install @radix-ui/react-accordion"
          npmCommandJs="npm install @radix-ui/react-accordion"
          tsCode={TsCode1}
          jsCode={JsCode1}
          showJavascript={false}
          showTypescript={false}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion type="single" collapsible className="w-full max-w-2xl">
              <AccordionItem value="accessibility">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern with proper focus management,
                  keyboard navigation, and screen reader support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="styling">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles using CSS variables for theming,
                  and can be fully customized with Tailwind CSS classes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="animated">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It includes smooth height-based animations with proper timing
                  and easing functions for a professional feel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Accordion with Multiple Items"
          description="Allow multiple items to be expanded at once."
          component="Accordion"
          tsCode={TsCode2}
          jsCode={JsCode2}
          showJavascript={false}
          showTypescript={false}
        >
          <div className="flex flex-wrap gap-4">
            <Accordion
              type="multiple"
              variant="separated"
              className="space-y-3"
              defaultValue={["tech-1", "tech-2"]}
            >
              <Accordion
                type="single"
                collapsible
                value={value}
                onValueChange={handleValueChange}
                className="border-2 border-blue-200 rounded-xl"
              >
                <AccordionItem value="terms">
                  <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
                    Terms of Service
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-600">
                    Please read our terms of service carefully before using our platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="privacy">
                  <AccordionTrigger className="text-blue-700 hover:bg-blue-50">
                    Privacy Policy
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-600">
                    Your privacy is important to us. Learn how we protect your data.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Accordion>
          </div>
        </ComponentDemo>

        <div className="border border-dashed border-[hsl(var(--border))] rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Usage Notes</h2>
          <p className="text-muted-foreground mb-4">
            Accordions help reduce clutter by allowing users to expand or collapse sections as needed.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items=&#123;items&#125;</code> to allow only one open panel at a time.</li>
            <li>Use <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">Accordion items=&#123;items&#125; allowMultiple</code> to allow multiple open panels.</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
