'use client';
import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function SelectFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Select Features</h1>
          <p className="mt-2 max-w-2xl">
            A fully accessible select component with dropdown positioning, keyboard navigation, controlled mode, and optional headless rendering.
          </p>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Accessible Combobox"
              description="Implements ARIA combobox + listbox roles, active descendant tracking, focus states, and keyboard navigation."
            />

            <FeaturesItem
              label="Controlled & Uncontrolled Modes"
              description="Supports value and defaultValue with full two-way binding through onChange."
            />

            <FeaturesItem
              label="Keyboard Navigation"
              description="Arrow keys move between options, Enter selects, Escape closes, and active options scroll into view."
            />

            <FeaturesItem
              label="Click Outside to Close"
              description="Dropdown closes automatically when clicking outside the component."
            />

            <FeaturesItem
              label="Disabled Options"
              description="Options flagged as disabled cannot be selected or focused."
            />

          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Headless Rendering"
              description="Replace the entire UI using the render() prop while maintaining core select logic."
            />

            <FeaturesItem
              label="Variants & Sizes"
              description="Supports default, filled, outlined, and ghost styles with sm → xl sizing."
            />

            <FeaturesItem
              label="Style Overrides"
              description="Customize trigger, dropdown, labels, and error messages with className props."
            />

          </ul>
        </div>

        {/* Form Behavior */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Form Compatibility</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Hidden Input Binding"
              description="Automatically binds the selected value to a hidden input when name is provided."
            />

            <FeaturesItem
              label="Required State"
              description="Supports required fields with appropriate ARIA flags."
            />

            <FeaturesItem
              label="Error & Helper Messaging"
              description="Built-in support for validation messages and contextual helper text."
            />

          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Tailor the select trigger, dropdown, and option states using Tailwind utilities or extend variant logic.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomSelect = () => (
  <Select
    variant="outlined"
    size="lg"
    className="focus:ring-accent border-accent"
    options={[
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" }
    ]}
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
