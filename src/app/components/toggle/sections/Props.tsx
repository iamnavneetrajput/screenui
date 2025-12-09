import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const TogglePropsData: PropItem[] = [
  { prop: "checked", type: "boolean", description: "Controlled checked state." },
  { prop: "defaultChecked", type: "boolean", default: "false", description: "Initial checked value for uncontrolled mode." },
  { prop: "onChange", type: "(checked: boolean) => void", description: "Called when the toggle is switched." },

  { prop: "disabled", type: "boolean", default: "false", description: "Prevents interaction and applies disabled styling." },

  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Controls toggle dimensions." },

  { prop: "color", type: "'primary' | 'success'", default: "'primary'", description: "Semantic color of the on-state background." },

  { prop: "label", type: "string", description: "Optional label displayed next to the toggle." },

  { prop: "helperText", type: "string", description: "Additional helper text below the toggle." },

  { prop: "labelPosition", type: "'left' | 'right'", default: "'right'", description: "Determines label placement relative to toggle." },

  { prop: "required", type: "boolean", default: "false", description: "Marks the toggle as required in forms." },

  { prop: "name", type: "string", description: "Adds a hidden checkbox input for form submission." },

  { prop: "value", type: "string", description: "Value submitted when toggle is checked." },

  { prop: "className", type: "string", description: "Custom wrapper classes." },
  { prop: "toggleClassName", type: "string", description: "Custom classes for the toggle switch element." },
  { prop: "thumbClassName", type: "string", description: "Custom classes for the movable thumb." },
];

const HeadlessTogglePropsData: PropItem[] = [
  { prop: "render", type: "(ctx: { checked: boolean; toggle: () => void; disabled: boolean; isControlled: boolean }) => ReactNode", description: "Enables full headless customization while preserving logic." },
  { prop: "checked", type: "boolean", description: "Controlled checked state." },
  { prop: "defaultChecked", type: "boolean", description: "Initial uncontrolled state." },
  { prop: "onChange", type: "(checked: boolean) => void", description: "Callback when toggled." },
  { prop: "disabled", type: "boolean", description: "Disables toggle logic." },
  { prop: "className", type: "string", description: "Custom wrapper classes." }
];

const ToggleGroupPropsData: PropItem[] = [
  { prop: "orientation", type: "'horizontal' | 'vertical'", default: "'vertical'", description: "Layout direction for grouping toggles." },
  { prop: "gap", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Controls spacing between toggles." },
  { prop: "label", type: "string", description: "Optional label for the group." },
  { prop: "className", type: "string", description: "Custom wrapper classes." },
  { prop: "children", type: "React.ReactNode", description: "Toggle elements inside the group." },
];

const UseToggleHookPropsData: PropItem[] = [
  { prop: "defaultValue", type: "boolean", default: "false", description: "Initial toggle state." },
  { prop: "onChange", type: "(value: boolean) => void", description: "Callback when the toggled state changes." }
];

export function TogglePropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen flex flex-col gap-12">

        <PropsTable
          title="Toggle Properties"
          description="Props available for the fully styled Toggle component."
          propsData={TogglePropsData}
        />

        <PropsTable
          title="Headless Toggle Properties"
          description="Props available when using Toggle with a custom render function."
          propsData={HeadlessTogglePropsData}
        />

        <PropsTable
          title="ToggleGroup Properties"
          description="Grouping and layout props for organizing toggles."
          propsData={ToggleGroupPropsData}
        />

        <PropsTable
          title="useToggle Hook Options"
          description="Configuration for the useToggle logic helper."
          propsData={UseToggleHookPropsData}
        />

      </main>
    </ExpandSection>
  );
}
