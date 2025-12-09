import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const BadgePropsData: PropItem[] = [
  { prop: "variant", type: "'solid' | 'outline' | 'soft' | 'ghost' | 'dot'", default: "'solid'", description: "Determines the visual style of the badge." },

  { prop: "color", type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: "Applies semantic colors to the badge." },

  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'sm'", description: "Controls padding, text size, and icon size." },

  { prop: "rounded", type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: "Controls border radius of the badge container." },

  { prop: "interactive", type: "boolean", default: "false", description: "Enables hover/press interactions and keyboard activation. Auto-enabled when `as='button'` or `onRemove` is used." },

  { prop: "icon", type: "React.ReactNode", description: "Optional leading icon displayed before the label." },

  { prop: "onRemove", type: "() => void", description: "Displays a remove button and triggers callback on click." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables interactions and applies muted visuals." },

  { prop: "as", type: "'span' | 'button'", default: "'span'", description: "Determines whether the badge renders as a <span> or <button> element." },

  { prop: "ariaLabel", type: "string", description: "Accessibility label used when the badge represents an action." },

  { prop: "children", type: "React.ReactNode", description: "Main text content displayed inside the badge." },

  { prop: "className", type: "string", description: "Custom classes applied to the badge container." }
];

export function BadgePropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">

          <PropsTable
            title="Badge Properties"
            description="All available props for the Badge component, covering variants, colors, interactivity, and accessibility."
            propsData={BadgePropsData}
            tip="Use badge variants and semantic colors to highlight statuses, categories, or interactive tokens."
          />

        </div>
      </main>
    </ExpandSection>
  );
}
