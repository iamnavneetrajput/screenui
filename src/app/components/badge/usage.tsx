import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variants */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="default" description="Neutral style, suitable for general labeling or categorization." />
          <UsageNoteItem label="secondary" description="Use for subtle emphasis or less important labels." />
          <UsageNoteItem label="outline" description="Minimal style for lightweight tagging, especially on colored backgrounds." />
          <UsageNoteItem label="dot" description="Displays a small status dot before the text to indicate activity or presence." />
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Compact option for tight spaces like tables or sidebars." />
          <UsageNoteItem label="md" description="Balanced size for most use cases." />
          <UsageNoteItem label="lg" description="Use when the badge needs stronger visual weight." />
        </ul>
      </div>

      {/* Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-2">
          You can add icons before or after the badge text for extra context. Icons align automatically with text.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Badge variant="default" icon=&lt;Star /&gt;&gt;Featured&lt;/Badge&gt;
        </code>
      </div>

      {/* Removable */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Removable</h3>
        <p className="text-muted-foreground mb-2">
          Enable the <code className="bg-muted px-1 py-0.5 rounded">onRemove</code> prop to display a close button, allowing users to remove the badge.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Badge variant="secondary" onRemove=&#123;handleRemove&#125;&gt;Filter&lt;/Badge&gt;
        </code>
      </div>
    </div>
  );
}
