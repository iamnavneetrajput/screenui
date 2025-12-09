import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const SelectPropsData: PropItem[] = [
  { prop: "options", type: "SelectOption[]", description: "Array of options containing label, value, and optional disabled flag." },

  { prop: "value", type: "string", description: "Controlled selected value." },
  { prop: "defaultValue", type: "string", description: "Initial value in uncontrolled mode." },
  { prop: "onChange", type: "(value: string) => void", description: "Called when a new option is selected." },

  { prop: "placeholder", type: "string", default: "'Select...'", description: "Placeholder text when nothing is selected." },
  { prop: "name", type: "string", description: "Sets a hidden form input name for form submissions." },

  // UI labels
  { prop: "label", type: "string", description: "Label displayed above the select trigger." },
  { prop: "helperText", type: "string", description: "Supporting text shown below the field." },
  { prop: "error", type: "string | boolean", description: "Displays error state and optional error message." },

  // Field configs
  { prop: "required", type: "boolean", default: "false", description: "Marks the select as required." },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables user interaction." },

  // Variants & sizing
  { prop: "variant", type: "'default' | 'filled' | 'outlined' | 'ghost'", default: "'default'", description: "Visual style of the select trigger." },
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Sets the height and text size of the select trigger." },

  // Class overrides
  { prop: "containerClassName", type: "string", description: "Overrides the main wrapper class." },
  { prop: "triggerClassName", type: "string", description: "Overrides the trigger element class." },
  { prop: "dropdownClassName", type: "string", description: "Overrides the dropdown panel class." },
  { prop: "labelClassName", type: "string", description: "Overrides the label class." },
  { prop: "errorClassName", type: "string", description: "Overrides the error message class." },

  // Headless mode
  {
    prop: "render",
    type: "(ctx: SelectHeadlessContext) => React.ReactNode",
    description: "Replaces the entire UI with a custom renderer while preserving select logic and state."
  }
];

export function SelectPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">

          <PropsTable
            title="Select Properties"
            description="All props supported by the Select component, including controlled mode, keyboard navigation, headless rendering, and styling options."
            propsData={SelectPropsData}
            tip="Use Select to build accessible dropdowns, or switch to headless mode for complete custom layouts."
          />

        </div>
      </main>
    </ExpandSection>
  );
}
