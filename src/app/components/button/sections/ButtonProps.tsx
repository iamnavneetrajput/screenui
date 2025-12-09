import React from "react";
import { PropsTable } from "@/components/ui/main/PropsTable";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

interface PropItem {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

const ButtonPropsData: PropItem[] = [
  // VISUAL
  { prop: "variant", type: "'solid' | 'outline' | 'ghost' | 'link' | 'soft'", default: "'solid'", description: "Visual style of the button." },
  { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl' | 'icon'", default: "'md'", description: "Controls button dimensions, spacing, and font size." },
  { prop: "rounded", type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: "Controls border-radius of the button." },
  { prop: "fullWidth", type: "boolean", default: "false", description: "Expands the button to fill its container width." },

  // ICONS
  { prop: "icon", type: "React.ReactNode", description: "Optional icon displayed before or after the label." },
  { prop: "iconPosition", type: "'left' | 'right'", default: "'left'", description: "Placement of the icon relative to the text." },

  // LOADING
  { prop: "loading", type: "boolean", default: "false", description: "Disables the button and replaces icon with spinner." },
  { prop: "loadingIcon", type: "React.ReactNode", description: "Custom loading indicator node." },
  { prop: "showIconOnLoading", type: "boolean", default: "false", description: "Shows the original icon while loading instead of spinner." },
  { prop: "loadingText", type: "string", description: "Screen-reader text announced while loading." },

  // BEHAVIOR
  { prop: "disabled", type: "boolean", default: "false", description: "Disables button interactions." },
  { prop: "asChild", type: "boolean", default: "false", description: "Renders children directly using Slot for polymorphic components." },
  { prop: "as", type: "'button' | 'a'", default: "'button'", description: "Renders as <button> or <a> with proper accessibility handling." },

  // ACCESSIBILITY
  { prop: "aria-label", type: "string", description: "Required when using icon-only buttons for accessibility." },

  // EVENTS / STANDARD HTML PROPS
  { prop: "children", type: "React.ReactNode", description: "Button label or content." },
  { prop: "className", type: "string", description: "Custom classes for styling override." },
];

export function ButtonPropsTable() {
  return (
    <ExpandSection previewHeight={400}>
      <main className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full mx-auto">

          <PropsTable
            title="Button Properties"
            description="Comprehensive list of props supported by the Button component, including polymorphic rendering, icons, loading state, and visual variants."
            propsData={ButtonPropsData}
            tip="Use variants, sizes, and icon controls to build expressive and accessible buttons."
          />

        </div>
      </main>
    </ExpandSection>
  );
}
