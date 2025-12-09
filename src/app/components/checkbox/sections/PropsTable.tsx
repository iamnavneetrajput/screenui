import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const CheckboxPropsData: PropItem[] = [
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Controls checkbox dimensions and icon size." },

  { prop: "variant", type: "'default' | 'outline' | 'filled' | 'soft'", default: "'default'", description: "Visual style for the checkbox surface." },

  { prop: "rounded", type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: "Border-radius shape for the checkbox." },

  { prop: "label", type: "React.ReactNode", description: "Text label displayed next to the checkbox." },

  { prop: "labelPosition", type: "'left' | 'right'", default: "'right'", description: "Controls where the label is placed relative to the checkbox." },

  { prop: "description", type: "React.ReactNode", description: "Helper text displayed under the label." },

  { prop: "error", type: "string | boolean", description: "Displays an error message and error styling." },

  { prop: "icon", type: "React.ReactNode", description: "Custom check or indeterminate icon." },

  { prop: "indeterminate", type: "boolean", default: "false", description: "Renders a half-checked state when true." },

  { prop: "checkboxAlignment", type: "'start' | 'center'", default: "'start'", description: "Controls vertical alignment of the checkbox relative to label text." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables checkbox interaction." },

  { prop: "containerClassName", type: "string", description: "Custom classes for the wrapper." },

  { prop: "labelClassName", type: "string", description: "Custom label classes." },

  { prop: "descriptionClassName", type: "string", description: "Custom description classes." },

  { prop: "errorClassName", type: "string", description: "Custom error message classes." },

  { prop: "className", type: "string", description: "Custom classes for the checkbox element." },
];

const CheckboxGroupPropsData: PropItem[] = [
  { prop: "label", type: "string", description: "Group label displayed above the checkboxes." },

  { prop: "description", type: "string", description: "Helper text displayed below the label." },

  { prop: "error", type: "string", description: "Displays a group error message." },

  { prop: "orientation", type: "'horizontal' | 'vertical'", default: "'vertical'", description: "Controls layout direction of checkbox items." },

  { prop: "gap", type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Spacing between group items." },

  { prop: "required", type: "boolean", default: "false", description: "Marks the group as required." },

  { prop: "className", type: "string", description: "Custom classes for the group wrapper." },

  { prop: "children", type: "React.ReactNode", description: "Checkbox elements inside the group." },
];

export function CheckboxPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex flex-col gap-12 mx-auto">

        <PropsTable
          title="Checkbox Properties"
          description="Props supported by the Checkbox component including variants, states, icons, and accessibility features."
          propsData={CheckboxPropsData}
        />

        <PropsTable
          title="CheckboxGroup Properties"
          description="Props for grouping checkboxes with label, description, orientation, and error support."
          propsData={CheckboxGroupPropsData}
        />

      </main>
    </ExpandSection>
  );
}
