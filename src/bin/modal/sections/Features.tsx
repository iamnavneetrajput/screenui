import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function ModalFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8">

        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl font-bold">Modal Features</h1>
          <p className="mt-2 max-w-2xl">
            A fully accessible, portal-based modal with focus trapping, scroll locking, escape handling, and customizable layout regions.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Accessible Focus Management"
              description="Tracks previously focused element, auto-focuses modal content, and traps focus inside."
            />
            <FeaturesItem
              label="Keyboard Support"
              description="Supports Escape-to-close and proper Tab / Shift+Tab looping."
            />
            <FeaturesItem
              label="Scroll Locking"
              description="Prevents background scrolling and adjusts padding to avoid layout shift."
            />
            <FeaturesItem
              label="Overlay Click Handling"
              description="Optional close-on-overlay-click behavior."
            />
            <FeaturesItem
              label="Portal Rendering"
              description="Mounts inside document.body or a custom container."
            />
          </ul>
        </div>

        {/* Customization & Layout */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Layout</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Multiple Sizes"
              description="Includes sm–4xl and full-screen options."
            />
            <FeaturesItem
              label="Centering Options"
              description="Choose between vertically centered or top-aligned modals."
            />
            <FeaturesItem
              label="Backdrop Blur"
              description="Optional blurred overlay for a frosted-glass look."
            />
            <FeaturesItem
              label="Modular Composition"
              description="Includes ModalHeader, ModalBody, and ModalFooter components for consistent layouts."
            />
            <FeaturesItem
              label="Close Button"
              description="Optional top-right close button with accessible labeling."
            />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Screen Reader Friendly"
              description="Title and description IDs are automatically bound via aria-labelledby and aria-describedby."
            />
            <FeaturesItem
              label="Works with Any Framework"
              description="Ag-agnostic modal body, supports forms, markdown, custom layouts, and dynamic content."
            />
            <FeaturesItem
              label="Lightweight API"
              description="Simple prop surface with sensible defaults."
            />
          </ul>
        </div>

        {/* Example */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Usage Example</h3>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`<Modal open={open} onClose={close} size="lg" blur>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content...</ModalBody>
  <ModalFooter align="right">
    <Button onClick={close}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
