import React from 'react';
import { PropsTable } from '@/components/ui/main/PropsTable';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const Props: PropItem[] = [
  { prop: "variant", type: "'default' | 'filled' | 'outlined' | 'ghost'", default: "'default'", description: "Visual style variant of the input." },

  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Controls input height, padding, and icon slot size." },

  { prop: "label", type: "React.ReactNode", description: "Label displayed above the input field." },

  { prop: "description", type: "React.ReactNode", description: "Helper description shown above the input field." },

  { prop: "error", type: "string | boolean", description: "Shows error styling and an optional error message." },

  { prop: "helperText", type: "React.ReactNode", description: "Appears when no error is present, below the input." },

  { prop: "showCount", type: "boolean", default: "false", description: "Displays a live character counter." },

  { prop: "maxLength", type: "number", description: "Sets the maximum allowed input length." },

  { prop: "leftIcon", type: "React.ReactNode", description: "Icon placed at the left side of the input." },

  { prop: "rightIcon", type: "React.ReactNode", description: "Icon placed at the right side unless overridden by clear or password toggle." },

  { prop: "clearable", type: "boolean", default: "false", description: "Shows a clear (×) button when the input has value." },

  { prop: "onClear", type: "() => void", description: "Callback fired when the input is cleared." },

  { prop: "render", type: "(api: { value: string; setValue: (v: string) => void; clear: () => void; inputRef: RefObject<HTMLInputElement>; }) => ReactNode", description: "Replaces the entire input UI with a custom renderer while retaining internal logic." },

  { prop: "containerClassName", type: "string", description: "Classes applied to the outer container." },

  { prop: "labelClassName", type: "string", description: "Classes applied to the label." },

  { prop: "descriptionClassName", type: "string", description: "Classes applied to description text." },

  { prop: "errorClassName", type: "string", description: "Classes applied to the error message." },

  { prop: "counterClassName", type: "string", description: "Classes applied to the character counter." },

  { prop: "type", type: "string", default: "'text'", description: "Handled natively; supports password visibility toggling." },

  { prop: "value", type: "string", description: "Enables controlled mode when provided." },

  { prop: "defaultValue", type: "string", description: "Initial value for uncontrolled mode." },

  { prop: "onChange", type: "(e: ChangeEvent<HTMLInputElement>) => void", description: "Fires whenever the input value changes." },

  { prop: "disabled", type: "boolean", default: "false", description: "Disables user interaction." },

  { prop: "required", type: "boolean", default: "false", description: "Marks the input as required." },

  { prop: "...rest", type: "InputHTMLAttributes<HTMLInputElement>", description: "Any other native input attributes." }
];

export function InputPropsTable() {
  return (
    <ExpandSection previewHeight={300}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">
          <PropsTable
            title="Input Properties"
            description="Complete list of props supported by the Input component, including variants, states, icons, and text helpers."
            propsData={Props}
            tip="Use these props together to build accessible, flexible, and fully customizable input fields."
          />
        </div>
      </main>
    </ExpandSection>
  );
}
