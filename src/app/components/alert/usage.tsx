import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variant Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="default" description="Use for general or informational messages." colorClass="bg-blue-100 text-blue-900" />
          <UsageNoteItem label="success" description="Indicates successful operations like form submissions or saves." colorClass="bg-green-100 text-green-900" />
          <UsageNoteItem label="warning" description="Warns the user about potential issues or required actions." colorClass="bg-yellow-100 text-yellow-900" />
          <UsageNoteItem label="destructive" description="Use for critical errors, deletions, or irreversible actions." colorClass="bg-red-100 text-red-900" />
          <UsageNoteItem label="info" description="For supplemental guidance or neutral messages." colorClass="bg-cyan-100 text-cyan-900" />
        </ul>
      </div>

      {/* Size Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Compact variant suitable for tight layouts like modals or sidebars." />
          <UsageNoteItem label="default" description="Balanced size for most use cases." />
          <UsageNoteItem label="lg" description="Use when you want to give the alert more emphasis and space." />
        </ul>
      </div>

      {/* Dismissible */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Dismissible</h3>
        <p className="text-muted-foreground mb-2">
          To allow users to close the alert manually, use the{" "}
          <code className="bg-muted px-1 py-0.5 rounded">dismissible</code> prop. Useful for temporary or non-blocking messages.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Alert variant="success" dismissible&gt;...&lt;/Alert&gt;
        </code>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-2">
          Add an icon before the content to visually indicate the alert type. Icons inherit the variant’s color automatically.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Alert variant="warning"&gt;&#123;&lt;AlertTriangle /&gt;&#125; Message...&lt;/Alert&gt;
        </code>
      </div>
    </div>
  )
}
