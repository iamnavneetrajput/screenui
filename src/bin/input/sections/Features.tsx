import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function InputFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl font-bold">Input Features</h1>
          <p className="mt-2 max-w-2xl">
            A flexible and accessible input component with icons, clearable behavior, variants, sizes, and controlled/uncontrolled support.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Controlled & Uncontrolled Modes"
              description="Uses internal state by default but switches to controlled mode when value is provided."
            />
            <FeaturesItem
              label="Password Visibility Toggle"
              description="Automatically renders an eye icon when type='password'."
            />
            <FeaturesItem
              label="Clearable Input"
              description="Displays a clear button when enabled and input contains text."
            />
            <FeaturesItem
              label="Character Counter"
              description="Optional character counter that respects maxLength."
            />
            <FeaturesItem
              label="Left & Right Icons"
              description="Supports custom icons on either side of the input."
            />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Variants & Sizes"
              description="Choose from default, filled, outlined, or ghost variants in multiple sizes."
            />
            <FeaturesItem
              label="Render Prop API"
              description="Fully replace the UI while keeping all input logic intact."
            />
            <FeaturesItem
              label="Classname Overrides"
              description="Customize wrapper, label, error message, and counter styling."
            />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Accessible by Default"
              description="Proper ARIA attributes, ID linking, and keyboard behavior."
            />
            <FeaturesItem
              label="Error & Helper Messaging"
              description="Shows contextual messaging with automatic error styling."
            />
            <FeaturesItem
              label="Form-Friendly"
              description="Plays nicely with form libraries and native form behavior."
            />
          </ul>
        </div>

        {/* Modification Guidance */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Adjust styling via variant props or override className values for complete visual control.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomInput = () => (
  <Input
    variant="outlined"
    size="lg"
    leftIcon={<SearchIcon />}
    className="border-border focus-visible:ring-border"
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
