import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const TextareaPropsData: PropItem[] = [
  { prop: "variant", type: "'default' | 'filled' | 'outlined' | 'ghost'", default: "'default'", description: "Controls the visual style of the textarea." },

  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Adjusts padding and font size." },

  { prop: "resize", type: "'none' | 'vertical' | 'horizontal' | 'both'", default: "'vertical'", description: "Controls the allowed resizing behavior." },

  { prop: "label", type: "React.ReactNode", description: "Optional label displayed above the textarea." },

  { prop: "description", type: "React.ReactNode", description: "Helper description displayed above the textarea." },

  { prop: "helperText", type: "React.ReactNode", description: "Helper text displayed below textarea if no error is shown." },

  { prop: "error", type: "string | boolean", description: "Shows an error message and error styling." },

  { prop: "showCount", type: "boolean", default: "false", description: "Shows a live character counter." },

  { prop: "autoResize", type: "boolean", default: "false", description: "Automatically expands textarea height based on content." },

  { prop: "minRows", type: "number", default: "3", description: "Minimum number of rows when auto-resize is enabled." },

  { prop: "maxRows", type: "number", description: "Maximum number of rows when auto-resize is enabled." },

  { prop: "containerClassName", type: "string", description: "Custom classes applied to the wrapper container." },

  { prop: "labelClassName", type: "string", description: "Class override for label element." },

  { prop: "descriptionClassName", type: "string", description: "Class override for description text." },

  { prop: "errorClassName", type: "string", description: "Class override for error text." },

  { prop: "counterClassName", type: "string", description: "Class override for character counter." },

  // Built-in textarea HTML props
  { prop: "value", type: "string", description: "Controlled textarea value." },
  { prop: "defaultValue", type: "string", description: "Initial uncontrolled value." },
  { prop: "maxLength", type: "number", description: "Limits maximum character count." },
  { prop: "disabled", type: "boolean", description: "Disables the textarea." },
  { prop: "required", type: "boolean", description: "Marks textarea as required." },
  { prop: "onChange", type: "(e) => void", description: "Input change handler." },
];

export function TextareaPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">
          <PropsTable
            title="Textarea Properties"
            description="All available props for the Textarea component, including auto-resizing, error display, character counting, and styling variants."
            propsData={TextareaPropsData}
            tip="Use autoResize for dynamic layouts or control size explicitly using the resize prop."
          />
        </div>
      </main>
    </ExpandSection>
  );
}
