'use client';

import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function ButtonFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Button Features</h1>
          <p className="mt-2 max-w-2xl">
            A powerful, accessible, and customizable button component supporting icons, loading states, polymorphism, and variant-driven styling.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="Multiple Visual Variants"
              description="Includes solid, outline, ghost, link, and soft styles for broad design flexibility."
            />

            <FeaturesItem
              label="Size Control"
              description="Five sizes — from compact to oversized, including icon-only mode."
            />

            <FeaturesItem
              label="Polymorphic Rendering"
              description="Render as a native button, anchor, or custom element using `asChild`."
            />

            <FeaturesItem
              label="Icon Support"
              description="Positions icons on either side of the label or creates icon-only buttons."
            />

            <FeaturesItem
              label="Full Loading State"
              description="Disables interaction and displays a spinner or custom loading icon."
            />

          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="Rounded Variants"
              description="Customizable border-radius from square to fully pill-shaped."
            />

            <FeaturesItem
              label="Full Width Mode"
              description="Allows stretching the button to fill its container."
            />

            <FeaturesItem
              label="Custom Loading Icons"
              description="Drop in any React node as a loading indicator."
            />

            <FeaturesItem
              label="Slot Composition"
              description="Use `asChild` to style third-party components as buttons."
            />

          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">

            <FeaturesItem
              label="TypeScript Accurate"
              description="Strict prop typing for icon-only mode, polymorphism, and HTML attribute merging."
            />

            <FeaturesItem
              label="Accessible by Default"
              description="Handles aria-busy, aria-disabled, and accessibility requirements for icon-only buttons."
            />

            <FeaturesItem
              label="Lightweight & Fast"
              description="Uses CVA + Tailwind with no external dependencies."
            />

          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Extend button styles using Tailwind utilities or create new variants inside the CVA config.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit text-[hsl(var(--foreground))]">
{`const CustomButton = () => (
  <Button
    variant="soft"
    className="bg-accent/10 text-accent hover:bg-accent/20"
  >
    Explore
  </Button>
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
