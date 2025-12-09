import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const AlertPropsData: PropItem[] = [
  { prop: "variant", type: "'default' | 'filled' | 'outlined' | 'soft' | 'glass'", default: "'default'", description: "Visual style variant for the alert container." },

  { prop: "color", type: "'default' | 'info' | 'success' | 'warning' | 'error'", default: "'default'", description: "Semantic color theme applied to icon, border, and background depending on variant." },

  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls padding, spacing, and icon size." },

  { prop: "rounded", type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'lg'", description: "Controls border radius of the alert container." },

  { prop: "dismissible", type: "boolean", default: "false", description: "Shows a close button if true." },

  { prop: "onDismiss", type: "() => void", description: "Called when the alert is dismissed." },

  { prop: "autoDismiss", type: "number", description: "Dismisses the alert automatically after the given number of milliseconds." },

  { prop: "showIcon", type: "boolean", default: "false", description: "Shows the default icon based on color if true." },

  { prop: "icon", type: "React.ReactNode", description: "Replaces the default icon with a custom one." },

  { prop: "className", type: "string", description: "Custom classes applied to the alert container." }
];

const AlertTitlePropsData: PropItem[] = [
  { prop: "className", type: "string", description: "Custom classes applied to the title element." },
  { prop: "children", type: "React.ReactNode", description: "Text content of the alert title." }
];

const AlertDescriptionPropsData: PropItem[] = [
  { prop: "className", type: "string", description: "Custom classes applied to the description container." },
  { prop: "children", type: "React.ReactNode", description: "Content of the alert body, supports rich text." }
];

const AlertActionsPropsData: PropItem[] = [
  { prop: "className", type: "string", description: "Custom classes applied to the actions wrapper." },
  { prop: "children", type: "React.ReactNode", description: "Typically contains action buttons." }
];

export function AlertPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable
          title="Alert Properties"
          description="Props for the Alert component controlling style, icon behavior, and dismiss functionality."
          propsData={AlertPropsData}
        />

        <PropsTable
          title="AlertTitle Properties"
          description="Props for the title section of the Alert."
          propsData={AlertTitlePropsData}
        />

        <PropsTable
          title="AlertDescription Properties"
          description="Props for the description/content section of the Alert."
          propsData={AlertDescriptionPropsData}
        />

        <PropsTable
          title="AlertActions Properties"
          description="Props for the actions container inside an Alert."
          propsData={AlertActionsPropsData}
        />

      </main>
    </ExpandSection>
  );
}
