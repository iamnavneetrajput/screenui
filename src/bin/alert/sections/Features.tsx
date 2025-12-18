'use client';

import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function AlertFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Alert Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible, accessible, variant-driven alert component designed to deliver clear and consistent feedback in your UI.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Multiple Variants"
              description="Default, filled, outlined, soft, and glass styles provide broad design flexibility."
            />
            <FeaturesItem
              label="Status Colors"
              description="Supports info, success, warning, and error states with predefined color mappings and icons."
            />
            <FeaturesItem
              label="Dismissible Alerts"
              description="Optional close button with smooth fade and slide-out animations, including auto-dismiss support."
            />
            <FeaturesItem
              label="Icon Support"
              description="Uses built-in SVG icons or accepts fully custom icons."
            />
            <FeaturesItem
              label="Accessible by Default"
              description="Applies proper ARIA roles, keyboard focus behavior, and structured content for assistive tech."
            />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Compound Variant System"
              description="Variants and color states combine cleanly using class-variance-authority."
            />
            <FeaturesItem
              label="Custom Layouts"
              description="Rearrange alert structure using AlertTitle, AlertDescription, and AlertActions."
            />
            <FeaturesItem
              label="Size & Radius Controls"
              description="Adjust padding, font-size, and corner radii using built-in props."
            />
            <FeaturesItem
              label="Modern Visual Styles"
              description="Soft and glass variants introduce subtle gradients, transparency, and blur effects."
            />
            <FeaturesItem
              label="Theme-Friendly"
              description="Integrates seamlessly with your Tailwind design tokens (foreground, accent, surface, etc.)."
            />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="TypeScript Friendly"
              description="Fully typed props ensure reliable behavior and intuitive autocomplete support."
            />
            <FeaturesItem
              label="Composable Structure"
              description="Subcomponents allow building consistent, semantic alert layouts."
            />
            <FeaturesItem
              label="Zero External Dependencies"
              description="Runs on React and Tailwind utilities — no extra packages needed."
            />
          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Customize alert appearance using utility classes or override variants to match your design system.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit text-[hsl(var(--foreground))]">
{`const CustomAlert = () => (
  <Alert
    variant="soft"
    color="info"
    className="border-accent bg-accent/10"
  >
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      This is a custom-styled alert using the accent color utilities.
    </AlertDescription>
  </Alert>
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
