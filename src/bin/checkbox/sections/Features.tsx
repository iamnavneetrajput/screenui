'use client';
import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function CheckboxFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Checkbox Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible, accessible checkbox component supporting states, labels, descriptions, grouping, and advanced variants.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Multiple Visual Variants"
              description="Default, outline, filled, and soft appearances for different UI contexts."
            />

            <FeaturesItem
              label="Size & Shape Control"
              description="Adjust height, width, and border radius across four sizes and five rounding styles."
            />

            <FeaturesItem
              label="Indeterminate State"
              description="Supports tri-state logic with a built-in indeterminate icon."
            />

            <FeaturesItem
              label="Error & Validation UI"
              description="Built-in error presentation including aria-invalid support."
            />

            <FeaturesItem
              label="Fully Accessible"
              description="Proper labeling, keyboard support, and descriptive aria attributes."
            />

          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Custom Icons"
              description="Easily replace check or indeterminate icons with your own."
            />

            <FeaturesItem
              label="Aligned or Stacked Labels"
              description="Place labels on either side and align checkbox to top or center."
            />

            <FeaturesItem
              label="Description & Error Blocks"
              description="Optional supporting text for clarity and validation."
            />

            <FeaturesItem
              label="Disabled State Styling"
              description="Visually communicates noninteractive behavior."
            />

          </ul>
        </div>

        {/* Grouping */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Checkbox Group</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Grouped Labels"
              description="Provide a label + description for logical checkbox sets."
            />

            <FeaturesItem
              label="Orientation Control"
              description="Switch between horizontal and vertical layouts."
            />

            <FeaturesItem
              label="Gap & Spacing Options"
              description="Fine-tune spacing between items using Tailwind-powered variants."
            />

            <FeaturesItem
              label="Group Error Support"
              description="Display validation messages at the group level."
            />

          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Customize checkbox visuals using Tailwind utilities or extend CVA variants as needed.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomCheckbox = () => (
  <Checkbox
    variant="soft"
    size="lg"
    className="border-accent text-accent"
    label="Subscribe to newsletter"
  />
)`}
          </code>
        </div>
      </div>
    </ExpandSection>
  );
}
