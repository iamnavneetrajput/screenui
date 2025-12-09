'use client';

import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function TableFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-10 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Table Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible, sortable, paginated, and selectable data table that supports custom column rendering, controlled states, and sticky headers.
          </p>
        </div>

        {/* Core Capabilities */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Configurable Columns"
              description="Each column supports sorting, width, alignment, and custom cell rendering."
            />

            <FeaturesItem
              label="Built-in Sorting"
              description="Toggle ascending/descending/no-sort states per sortable column."
            />

            <FeaturesItem
              label="Optional Row Selection"
              description="Enable checkboxes for selecting individual or all rows in the current page."
            />

            <FeaturesItem
              label="Pagination Support"
              description="Includes built-in pagination with next/previous controls and page window logic."
            />

            <FeaturesItem
              label="Sticky Table Header"
              description="Freezes the header when scrolling vertically inside a table container."
            />

          </ul>
        </section>

        {/* Customization */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Customization & Rendering</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="Custom Cell Rendering"
              description="Use the render callback inside columns to format or fully replace cell content."
            />

            <FeaturesItem
              label="Per-Row Props"
              description="Inject custom props (className, event handlers) using the onRow callback."
            />

            <FeaturesItem
              label="Variant & Size Controls"
              description="Choose from default, bordered, striped, and minimal styles in sm/md/lg sizes."
            />

          </ul>
        </section>

        {/* Accessibility */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Accessibility Features</h3>
          <ul className="list-disc space-y-2 opacity-80">

            <FeaturesItem
              label="ARIA Sorting Attributes"
              description="Automatically sets aria-sort for sortable columns."
            />

            <FeaturesItem
              label="Keyboard-Navigable"
              description="Scrollable table region is wrapped in a focusable container."
            />

            <FeaturesItem
              label="Screen-Reader Support"
              description="Supports captions, status rows ('Loading…', 'No data'), and aria-selected."
            />

          </ul>
        </section>

        {/* Style Example */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Override table visual styles using Tailwind utilities or extend the CVA variants.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomTable = () => (
  <Table
    variant="bordered"
    size="lg"
    className="border-accent"
    columns={[{ title: "Name", key: "name" }]}
    data={[{ name: "Alice" }]}
  />
)`}
          </code>
        </section>

      </div>
    </ExpandSection>
  );
}
