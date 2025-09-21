import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variant Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="solid" description="Default variant for most actions." />
          <UsageNoteItem label="outline" description="Adds a border and transparent background. Useful for secondary actions." />
          <UsageNoteItem label="ghost" description="Minimal style with subtle hover feedback." />
          <UsageNoteItem label="link" description="Renders like a text link with underline on hover." />
          <UsageNoteItem label="soft" description="Lightweight background option with softer emphasis." />
        </ul>
      </div>

      {/* Size Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Compact size for tight layouts such as modals or sidebars." />
          <UsageNoteItem label="md" description="Default balanced size suitable for most use cases." />
          <UsageNoteItem label="lg" description="Larger size for important actions or more emphasis." />
          <UsageNoteItem label="xl" description="Extra-large buttons for high visibility or call-to-actions." />
          <UsageNoteItem label="icon" description="Square button optimized for icon-only actions." />
        </ul>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-2">
          Place an icon before the label to improve clarity. Icons automatically adjust spacing with the button size.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button icon=&#123;&lt;Plus /&gt;&#125;&gt;Add Item&lt;/Button&gt;
        </code>
      </div>

      {/* Loading State */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Loading State</h3>
        <p className="text-muted-foreground mb-2">
          Set <code className="bg-muted px-1 py-0.5 rounded">loading</code> to true to show a spinner and disable the button automatically.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button loading&gt;Submitting...&lt;/Button&gt;
        </code>
      </div>

      {/* Full Width */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Full Width</h3>
        <p className="text-muted-foreground mb-2">
          Use <code className="bg-muted px-1 py-0.5 rounded">fullWidth</code> to make the button span its container.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button fullWidth&gt;Continue&lt;/Button&gt;
        </code>
      </div>

      {/* Anchor Support */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Anchor Links</h3>
        <p className="text-muted-foreground mb-2">
          Render the button as an anchor by setting <code className="bg-muted px-1 py-0.5 rounded">as="a"</code> with a valid{" "}
          <code className="bg-muted px-1 py-0.5 rounded">href</code>.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button as="a" href="/dashboard"&gt;Go to Dashboard&lt;/Button&gt;
        </code>
      </div>
    </div>
  )
}
