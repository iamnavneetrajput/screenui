// src/app/components/checkbox/usage.tsx
import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function CheckboxUsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variants */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="default"
            description="The standard checkbox style."
          />
          <UsageNoteItem
            label="filled"
            description="A checkbox with filled background for emphasis."
          />
          <UsageNoteItem
            label="outlined"
            description="Checkbox with border outline, minimal fill."
          />
          <UsageNoteItem
            label="soft"
            description="A lighter variant with subtle background."
          />
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Small checkbox for compact UIs." />
          <UsageNoteItem label="md (default)" description="Default medium size for standard forms." />
          <UsageNoteItem label="lg" description="Large checkbox for emphasis or touch targets." />
          <UsageNoteItem label="xl" description="Extra large checkbox, rarely used." />
        </ul>
      </div>

      {/* Rounded Corners */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Rounded Corners</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Slightly rounded corners." />
          <UsageNoteItem label="md" description="Medium rounded corners." />
          <UsageNoteItem label="lg" description="Large rounded corners." />
          <UsageNoteItem label="full" description="Completely rounded checkbox." />
        </ul>
      </div>

      {/* Special States */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Special States</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="indeterminate" description="Checkbox partially checked, usually for parent-child relationships." />
          <UsageNoteItem label="disabled" description="Non-interactive checkbox to indicate disabled option." />
        </ul>
      </div>

      {/* Select All Pattern */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Select All Pattern</h3>
        <p className="text-muted-foreground mb-2">
          A parent checkbox can control multiple child checkboxes, supporting the "indeterminate" state.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;CheckboxWithLabel label="Select All" checked= {"selectAll"}  onChange={"handleSelectAll"} /&gt;
        </code>
      </div>

      {/* Disabled / Non-Interactive */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Disabled State</h3>
        <p className="text-muted-foreground mb-2">
          Use <code className="bg-muted px-1 py-0.5 rounded">disabled</code> to make checkboxes non-interactive.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;CheckboxWithLabel label="Option" checked={true} disabled /&gt;
        </code>
      </div>
    </div>
  );
}
