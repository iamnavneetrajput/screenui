'use client';
import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function BadgeFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Badge Features</h1>
          <p className="mt-2 max-w-2xl">
            A versatile tag component that supports actions, removable chips, interactive tokens, and semantic theming.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="Multiple Visual Variants"
              description="Solid, outline, soft, ghost, and dot variants for flexible UI patterns."
            />

            <FeaturesItem
              label="Semantic Color Themes"
              description="Supports primary, secondary, success, warning, danger, and info color mappings."
            />

            <FeaturesItem
              label="Size Scaling"
              description="XS → XL sizes adjust padding, font size, and icon sizing."
            />

            <FeaturesItem
              label="Interactive Mode"
              description="Optional hover/press animations and keyboard activation when used as a token or button."
            />

            <FeaturesItem
              label="Removable Badges"
              description="Built-in ‘chip’ behavior with a remove button and callback."
            />

          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="Icons Support"
              description="Display any custom React icon before the badge label."
            />

            <FeaturesItem
              label="Radius Control"
              description="Choose from subtle rounding to fully pill-shaped badges."
            />

            <FeaturesItem
              label="Dot Variant"
              description="Minimal dot-style indicator ideal for statuses or category markers."
            />

            <FeaturesItem
              label="Actionable Tags"
              description="Rendering as a button enables click and keyboard interactions."
            />

          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="Accessible"
              description="Supports aria labels, focus rings, and keyboard activation for interactive badges."
            />

            <FeaturesItem
              label="TypeScript Friendly"
              description="Fully typed props ensure reliable usage with autocomplete."
            />

            <FeaturesItem
              label="Lightweight"
              description="Uses Tailwind utilities + CVA with no external dependencies."
            />

          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Customize badge styling with Tailwind utilities or extend CVA variants to match your design system.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit text-[hsl(var(--foreground))]">
{`const CustomBadge = () => (
  <Badge
    variant="soft"
    color="primary"
    className="border-primary bg-primary/10 text-primary"
  >
    New
  </Badge>
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
