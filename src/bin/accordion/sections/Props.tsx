import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const AccordionPropsData: PropItem[] = [
  { prop: "variant", type: "'default' | 'separated' | 'bordered' | 'ghost'", default: "'default'", description: "Visual style of the accordion container." },

  { prop: "type", type: "'single' | 'multiple'", default: "'single'", description: "Allows one (single) or many (multiple) items to be open." },

  { prop: "value", type: "string | string[]", description: "Controlled open item(s)." },

  { prop: "defaultValue", type: "string | string[]", description: "Initial open item(s) in uncontrolled mode." },

  { prop: "onValueChange", type: "(value: string | string[]) => void", description: "Called when an item opens or closes." },

  { prop: "collapsible", type: "boolean", default: "false", description: "Allows collapsing the currently open item when using type='single'." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables the entire accordion." },

  { prop: "className", type: "string", description: "Custom classes for the accordion wrapper." }
];


const AccordionItemPropsData: PropItem[] = [
  { prop: "value", type: "string", description: "Unique identifier for the accordion item." },

  { prop: "variant", type: "'default' | 'separated' | 'bordered' | 'ghost'", default: "'default'", description: "Visual style for the item container." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables this specific item." },

  { prop: "className", type: "string", description: "Custom classes applied to the item wrapper." }
];


const AccordionTriggerPropsData: PropItem[] = [
  { prop: "icon", type: "React.ReactNode", description: "Custom icon to replace the default chevron." },

  { prop: "iconPosition", type: "'left' | 'right'", default: "'right'", description: "Controls icon placement relative to label." },

  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls spacing and font size." },

  { prop: "variant", type: "'default' | 'separated' | 'bordered' | 'ghost'", default: "'default'", description: "Style variant matching the item and container." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables the trigger button." },

  { prop: "className", type: "string", description: "Custom classes applied to the trigger." }
];


const AccordionContentPropsData: PropItem[] = [
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls text size." },

  { prop: "variant", type: "'default' | 'separated' | 'bordered' | 'ghost'", default: "'default'", description: "Matches container and item style." },

  { prop: "className", type: "string", description: "Custom classes applied to the content wrapper." }
];


export function AccordionPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-4 mx-auto">

        <PropsTable
          title="Accordion Properties"
          description="Props for the Accordion root component controlling state, behavior, and visual style."
          propsData={AccordionPropsData}
        />

        <PropsTable
          title="AccordionItem Properties"
          description="Props for individual items within the Accordion."
          propsData={AccordionItemPropsData}
        />

        <PropsTable
          title="AccordionTrigger Properties"
          description="Props for the clickable header that opens and closes an item."
          propsData={AccordionTriggerPropsData}
        />

        <PropsTable
          title="AccordionContent Properties"
          description="Props for the animated content region of an item."
          propsData={AccordionContentPropsData}
        />

      </main>
    </ExpandSection>
  );
}
