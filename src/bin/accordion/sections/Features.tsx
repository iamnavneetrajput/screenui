import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function AccordionFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl font-bold text-[hsl(var(--foreground))]">
            Accordion Features
          </h1>
          <p className="mt-2 max-w-2xl">
            A flexible, accessible, and fully controllable accordion system built with React and Tailwind.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Headless Architecture"
              description="Complete control over markup and layout while keeping behavior and accessibility handled."
            />
            <FeaturesItem
              label="Single & Multiple Modes"
              description="Supports both single-open and multi-open patterns with optional collapsible behavior."
            />
            <FeaturesItem
              label="Accessible Out of the Box"
              description="Ships with proper ARIA attributes, keyboard navigation, and focus states."
            />
            <FeaturesItem
              label="Full Control State"
              description="Works as controlled or uncontrolled component with callbacks for value changes."
            />
            <FeaturesItem
              label="Smooth Height Animation"
              description="Automatically measures content height to animate expansion smoothly."
            />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Variants & Layout Options"
              description="Includes default, separated, bordered, and ghost variants for flexible styling."
            />
            <FeaturesItem
              label="Icon Placement"
              description="Choose left or right icon placement with automatic animation support."
            />
            <FeaturesItem
              label="Item-Level Control"
              description="Each AccordionItem can be disabled or styled independently."
            />
            <FeaturesItem
              label="Custom Icons"
              description="Replace the default chevron with any React node."
            />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Typed API"
              description="Every piece of the system is strongly typed with clean prop definitions."
            />
            <FeaturesItem
              label="Composable Structure"
              description="Accordion, AccordionItem, AccordionTrigger, and AccordionContent work together cleanly."
            />
            <FeaturesItem
              label="Variant-Based Styling"
              description="Consistent variant logic across all pieces thanks to your variants() utility."
            />
            <FeaturesItem
              label="Theming Friendly"
              description="Built to respond to your light/dark theme and design tokens."
            />
          </ul>
        </div>

        {/* Modification Guidance */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Customize styles using className or extend the component variants without breaking behavior.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomAccordion = () => (
  <Accordion variant="ghost" className="rounded-xl border border-border">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-foreground">
        Custom Trigger
      </AccordionTrigger>
      <AccordionContent>
        Custom content goes here.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
