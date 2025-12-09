'use client';

import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function ToggleFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 bg-background text-foreground space-y-8">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Toggle Features</h1>
          <p className="mt-2 max-w-2xl">
            A simple, semantic, and accessible toggle switch with full keyboard support, controlled/uncontrolled modes, headless rendering, and form compatibility.
          </p>
        </div>

        {/* Core */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="opacity-80 space-y-2 list-disc">

            <FeaturesItem
              label="Accessible Switch Role"
              description="Implements role='switch', aria-checked, and full keyboard toggle behavior."
            />

            <FeaturesItem
              label="Controlled & Uncontrolled"
              description="Fully supports both value={checked} and defaultChecked patterns."
            />

            <FeaturesItem
              label="Keyboard Activation"
              description="Enter and Space keys toggle the switch just like mouse interactions."
            />

            <FeaturesItem
              label="Semantic Colors"
              description="Predefined appearance for 'primary' and 'success' states."
            />

            <FeaturesItem
              label="Disabled Logic"
              description="Disables toggling, focus behavior, and label interaction."
            />

          </ul>
        </div>

        {/* Customization */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="opacity-80 space-y-2 list-disc">

            <FeaturesItem
              label="Headless Mode"
              description="Use the render() API to completely replace the UI while preserving toggle logic."
            />

            <FeaturesItem
              label="Sizes"
              description="Supports four sizes with proportional thumb and track animation."
            />

            <FeaturesItem
              label="Label Placement"
              description="Place labels on the right or left side of the switch."
            />

            <FeaturesItem
              label="Form Integration"
              description="Includes a hidden checkbox input when 'name' is provided."
            />

            <FeaturesItem
              label="Custom Thumb / Track Styling"
              description="Override the toggle and thumb with className controls."
            />

          </ul>
        </div>

        {/* Groups */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Toggle Group Features</h3>
          <ul className="opacity-80 space-y-2 list-disc">

            <FeaturesItem
              label="Flexible Layouts"
              description="Arrange toggles horizontally or vertically."
            />

            <FeaturesItem
              label="Configurable Gaps"
              description="Choose sm, md, or lg spacing between items."
            />

            <FeaturesItem
              label="Group Label Support"
              description="Optional grouping label for improved structure and accessibility."
            />

          </ul>
        </div>

        {/* Style Example */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Customize toggle visuals using Tailwind utilities or extend CVA variants for new behaviors.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomToggle = () => (
  <Toggle
    size="lg"
    color="primary"
    className="text-accent"
    toggleClassName="bg-accent/20 data-[checked=true]:bg-accent"
    label="Enable feature"
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
