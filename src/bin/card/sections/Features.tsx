'use client';

import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function CardFeatures() {
  return (
    <ExpandSection previewHeight={320}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Card Features</h1>
          <p className="mt-2 max-w-2xl">
            A versatile, fully composable Card system built for dashboards, layouts, product cards, and structured UI blocks.
          </p>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="Multiple Visual Variants" description="Choose between elevated, outlined, filled, and ghost card styles." />
            <FeaturesItem label="Configurable Padding" description="Fine-tune internal spacing with five padding presets." />
            <FeaturesItem label="Interactive Mode" description="Adds cursor/active effects and keyboard support when onClick is provided." />
            <FeaturesItem label="Hover Effects" description="Optional drop-shadow enhancement on hover." />
            <FeaturesItem label="Polymorphic Rendering" description="Render cards as div, section, or article." />
          </ul>
        </div>

        {/* Composition */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Composable Subcomponents</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="CardHeader" description="Layout for titles, actions, or media headers." />
            <FeaturesItem label="CardTitle" description="Semantic heading with size options and truncation support." />
            <FeaturesItem label="CardDescription" description="Supporting text with size + spacing variants." />
            <FeaturesItem label="CardContent" description="Flexible body content with optional vertical spacing." />
            <FeaturesItem label="CardFooter" description="Action area with alignment, gap, direction, and wrapping options." />
            <FeaturesItem label="CardImage" description="Built-in image component with height + aspect ratios." />
            <FeaturesItem label="CardDivider" description="Separator for visually grouping content sections." />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="Accessible Interactions" description="Interactive cards support keyboard activation out of the box." />
            <FeaturesItem label="CVA-Powered Variants" description="Clean variant management for maintainability and extensibility." />
            <FeaturesItem label="Lightweight and Dependency-Free" description="Built with React + Tailwind utilities only." />
          </ul>
        </div>

        {/* Style Modification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">Easily extend card visuals using Tailwind utilities or override CVA variants.</p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit text-[hsl(var(--foreground))]">
{`const CustomCard = () => (
  <Card variant="outlined" className="border-accent hover:bg-accent/5">
    <CardHeader>
      <CardTitle>Custom Themed Card</CardTitle>
    </CardHeader>
    <CardContent>
      Your UI, but more expressive.
    </CardContent>
  </Card>
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
