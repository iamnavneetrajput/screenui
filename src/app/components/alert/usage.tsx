import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variant Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="default" description="Standard alert, use for general messages." />
          <UsageNoteItem label="filled" description="Filled background, ideal for high-emphasis alerts." />
          <UsageNoteItem label="outlined" description="Outline style, use for subtle alerts." />
          <UsageNoteItem label="soft" description="Soft background for gentle emphasis." />
        </ul>
      </div>

      {/* Size Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Compact size, fits tight layouts like modals." />
          <UsageNoteItem label="md" description="Default size for standard use." />
          <UsageNoteItem label="lg" description="Larger size for prominent alerts." />
        </ul>
      </div>

      {/* Dismissible Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Dismissible</h3>
        <p className="text-muted-foreground mb-2">
          To allow users to close the alert manually, use the{" "}
          <code className="bg-muted px-1 py-0.5 rounded">dismissible</code> prop.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Alert dismissible&gt;...&lt;/Alert&gt;
        </code>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-2">
          Add an icon before the content to visually indicate the alert type. Icons inherit colors from the user-defined classes.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Alert&gt;&#123;&lt;AlertCircle /&gt;&#125; Message...&lt;/Alert&gt;
        </code>
      </div>
    </div>
  )
}
