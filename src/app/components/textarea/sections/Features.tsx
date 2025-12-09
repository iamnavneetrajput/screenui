'use client';
import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function TextareaFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Textarea Features</h1>
          <p className="mt-2 max-w-2xl">
            A customizable, accessible textarea component with auto-resizing, validation states, labels, descriptions, and character counting.
          </p>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Auto-Resizing Textarea"
              description="Grows vertically as the user types, clamped between minRows and maxRows."
            />

            <FeaturesItem
              label="Error & Validation States"
              description="Displays error styling and screen-reader-friendly error messaging."
            />

            <FeaturesItem
              label="Character Counter"
              description="Live counter with optional maxLength integration."
            />

            <FeaturesItem
              label="Labels & Descriptions"
              description="Supports accessible label text, helper descriptions, and contextual guidance."
            />

            <FeaturesItem
              label="Resize Controls"
              description="Choose between none, vertical, horizontal, or both resizing modes."
            />
          </ul>
        </div>

        {/* Customization */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Visual Variants"
              description="Default, filled, outlined, and ghost variants for different design contexts."
            />

            <FeaturesItem
              label="Responsive Sizing"
              description="Small, medium, and large field sizes for scalable layouts."
            />

            <FeaturesItem
              label="Class Overrides"
              description="Customize container, textarea, label, helper text, and error messages individually."
            />

          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Controlled & Uncontrolled Modes"
              description="Supports both input patterns with seamless auto-resize behavior."
            />

            <FeaturesItem
              label="Accessible by Default"
              description="Correct ARIA attributes for error, required state, and descriptions."
            />

            <FeaturesItem
              label="Zero External Dependencies"
              description="Powered by React + Tailwind utilities only."
            />

          </ul>
        </div>

        {/* Style Example */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Style the textarea using Tailwind classes or extend variant logic with CVA for more complex behavior.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomTextarea = () => (
  <Textarea
    variant="outlined"
    size="lg"
    className="border-accent focus:ring-accent"
    label="Message"
    placeholder="Write something..."
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
