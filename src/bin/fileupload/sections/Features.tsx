import React from 'react';
import { FeaturesItem } from '@/components/ui/main/FeaturesItem';
import { ExpandSection } from '@/components/ui/main/ExpandSection';

export function FileUploadFeatures() {
  return (
    <ExpandSection previewHeight={300}>
      <div className="p-4 md:p-8 space-y-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        
        {/* Header */}
        <div className="border-b border-[hsl(var(--border))] pb-6 mb-6">
          <h1 className="text-2xl font-bold">File Upload Features</h1>
          <p className="mt-2 max-w-2xl">
            A customizable drag-and-drop file uploader with previews, validation, and flexible rendering options.
          </p>
        </div>

        {/* Core Capabilities */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Core Capabilities</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Drag & Drop Support"
              description="Includes drag-enter, drag-leave, drag-over, and drop handling with visual feedback."
            />
            <FeaturesItem
              label="Multiple File Upload"
              description="Supports single or multiple file selection with optional max file count enforcement."
            />
            <FeaturesItem
              label="File Validation"
              description="Built-in file size validation and optional custom validation function."
            />
            <FeaturesItem
              label="Image Previews"
              description="Automatically generates preview thumbnails for image files."
            />
            <FeaturesItem
              label="Removable Files"
              description="Users can remove selected files; the component updates its internal state accordingly."
            />
          </ul>
        </div>

        {/* Customization & Extensibility */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Customization & Extensibility</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Variants & Sizes"
              description="Supports default, filled, outlined, and ghost variants, plus sm–xl spacing options."
            />
            <FeaturesItem
              label="Custom Text"
              description="Customize browse text and drag-active text for better UX."
            />
            <FeaturesItem
              label="Custom Layout Rendering"
              description="Use the render prop to completely replace the UI while keeping all FileUpload logic."
            />
            <FeaturesItem
              label="ClassName Overrides"
              description="Container, dropzone, label, and description can all be styled with custom classes."
            />
          </ul>
        </div>

        {/* Developer Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
          <ul className="list-disc list-inside opacity-80 space-y-2">
            <FeaturesItem
              label="Typed File Metadata"
              description="Each file includes id, name, size, type, and optional preview URL."
            />
            <FeaturesItem
              label="Change Handler"
              description="Expose the full file list through the onChange callback whenever files update."
            />
            <FeaturesItem
              label="Accessible Structure"
              description="Includes ARIA attributes, keyboard support, and correct role handling."
            />
            <FeaturesItem
              label="Form-Compatible"
              description="Works cleanly inside forms and behaves like a controlled input when needed."
            />
          </ul>
        </div>

        {/* Modification Guidance */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Style Modification</h3>
          <p className="opacity-80 mb-3">
            Extend or override the dropzone styling with className or variant logic without modifying core behavior.
          </p>

          <code className="block bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm px-4 py-2 rounded-lg w-fit">
{`const CustomUploader = () => (
  <FileUpload
    variant="outlined"
    size="lg"
    dropzoneClassName="border-border hover:bg-border/5"
  />
)`}
          </code>
        </div>

      </div>
    </ExpandSection>
  );
}
