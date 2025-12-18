'use client';
import React from "react";
import { FeaturesItem } from "@/components/ui/main/FeaturesItem";
import { ExpandSection } from "@/components/ui/main/ExpandSection";

export function PaginationFeatures() {
  return (
    <ExpandSection previewHeight={320}>
      <div className="p-4 md:p-8 space-y-8 bg-background text-foreground">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">Pagination Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible pagination system offering styled, compact, simple, and headless rendering options with full accessibility.
          </p>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="Styled Pagination" description="Full-featured UI with variants, sizes, ellipsis, and page buttons." />
            <FeaturesItem label="Headless Mode" description="Customize the markup entirely using a render function." />
            <FeaturesItem label="Ellipsis Logic" description="Smartly collapses long page ranges using centered ellipsis." />
            <FeaturesItem label="Accessible Controls" description="Includes aria labels, focus rings, and keyboard navigation." />
            <FeaturesItem label="Disabled State Handling" description="Disables all controls consistently when paginated content is locked." />
          </ul>
        </div>

        {/* Additional UI Components */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Additional Components</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="SimplePagination" description="Lightweight previous/next layout for minimal UIs." />
            <FeaturesItem label="CompactPagination" description="Numeric input pagination for large datasets." />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="Variants & Sizes" description="Supports default, outlined, and ghost variants in multiple sizes." />
            <FeaturesItem label="First/Last Controls" description="Optionally show navigation to jump directly to extremes." />
            <FeaturesItem label="Page & Item Info" description="Optional text showing the current range or current page." />
            <FeaturesItem label="CVA-powered Styling" description="Variant-based styling using class-variance-authority." />
          </ul>
        </div>

        {/* Hook */}
        <div>
          <h3 className="text-xl font-semibold mb-3">usePagination Hook</h3>
          <ul className="list-disc space-y-2 opacity-80">
            <FeaturesItem label="State Management" description="Controls currentPage and calculates totalPages from item count." />
            <FeaturesItem label="Automatic Clamping" description="Automatically adjusts currentPage when totalPages changes." />
            <FeaturesItem label="Sliced Results" description="Returns paginated data based on pageSize." />
          </ul>
        </div>

        {/* Style Example */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">Extend or override pagination aesthetics with Tailwind utilities.</p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomPagination = () => (
  <Pagination
    currentPage={2}
    totalPages={10}
    onPageChange={(n) => console.log(n)}
    variant="outlined"
    className="text-accent border-accent"
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
