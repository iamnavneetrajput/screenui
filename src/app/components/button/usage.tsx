import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variant Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="Default" description="Use for primary actions like “Submit” or “Save”." colorClass="text-primary bg-primary/10" />
          <UsageNoteItem label="Secondary" description="Use for supporting actions that aren’t the main focus." colorClass="text-secondary bg-secondary/10" />
          <UsageNoteItem label="Outline" description="Best for actions that should look minimal or subtle." colorClass="text-border bg-border/10" />
          <UsageNoteItem label="Ghost" description="Ideal when the button sits on colored backgrounds or inside cards." colorClass="text-muted-foreground bg-muted/40" />
          <UsageNoteItem label="Destructive" description="Use for delete, remove, or irreversible actions." colorClass="text-destructive bg-destructive/10" />
          <UsageNoteItem label="Link" description="Styled as a link. Use when you want a less “button-like” call-to-action." colorClass="text-blue-600 bg-blue-100" />
        </ul>
      </div>

      {/* Size Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Use in compact spaces like forms, modals, or toolbars." />
          <UsageNoteItem label="md" description="Default size. Good for general use." />
          <UsageNoteItem label="lg" description="Use when the action needs emphasis, like hero sections." />
          <UsageNoteItem label="icon" description="Use when the button only contains an icon (e.g., delete or settings)." />
        </ul>
      </div>

      {/* Icon Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">With Icons</h3>
        <p className="text-muted-foreground mb-2">
          You can add icons to the left of the button label to visually represent the action.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button icon=&#123;&lt;Mail /&gt;&#125;&gt;Email&lt;/Button&gt;
        </code>
      </div>

      {/* Loading Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Loading State</h3>
        <p className="text-muted-foreground mb-2">
          To show loading state, use the <code className="bg-muted px-1 py-0.5 rounded">loading</code> prop. It automatically disables the button and shows a spinner.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button loading&gt;Saving...&lt;/Button&gt;
        </code>
      </div>

      {/* Full Width Notes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Full Width</h3>
        <p className="text-muted-foreground mb-2">
          To make a button stretch across its container, pass the <code className="bg-muted px-1 py-0.5 rounded">fullWidth</code> prop.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Button fullWidth&gt;Submit&lt;/Button&gt;
        </code>
      </div>
    </div>
  )
}
