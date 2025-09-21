//src/app/components/avatar/usage.tsx
//usage notes for Avatar component
import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Variants */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Shape Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="circular"
            description="Perfectly round avatar. Most common usage for profile pictures."
          />
          <UsageNoteItem
            label="rounded"
            description="Avatar with slightly rounded corners for a softer look."
          />
          <UsageNoteItem
            label="square"
            description="Hard-cornered avatar for a sharp and modern style."
          />
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="xs" description="Tiny avatar for compact UI elements." />
          <UsageNoteItem label="sm" description="Small avatar for lists, menus, or sidebars." />
          <UsageNoteItem label="md (default)" description="Balanced size for most use cases." />
          <UsageNoteItem label="lg" description="Large avatar for cards, profiles, or highlights." />
          <UsageNoteItem label="xl / 2xl / 3xl" description="Extra large avatars for hero sections or main profile displays." />
        </ul>
      </div>

      {/* Clickable */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Clickable</h3>
        <p className="text-muted-foreground mb-2">
          When <code className="bg-muted px-1 py-0.5 rounded">as="button"</code> or{" "}
          <code className="bg-muted px-1 py-0.5 rounded">clickable</code> is set, the avatar becomes
          interactive with hover and focus styles.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Avatar as="button" clickable src="/user.jpg" /&gt;
        </code>
      </div>

      {/* Fallbacks */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Fallbacks</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="Initials"
            description="Provide a name in `fallback` prop to auto-generate initials."
          />
          <UsageNoteItem
            label="Custom Content"
            description="Use `fallbackContent` to display any custom React node."
          />
          <UsageNoteItem
            label="Default Icon"
            description="If no `src` or fallback is provided, a default user icon is shown."
          />
        </ul>
      </div>

      {/* Skeleton / Placeholder */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Skeleton / Placeholder</h3>
        <p className="text-muted-foreground mb-2">
          While loading images, you can show a skeleton placeholder for a smoother experience.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;AvatarSkeleton variant="circular" /&gt;
        </code>
      </div>

      {/* Disabled State */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Disabled State</h3>
        <p className="text-muted-foreground mb-2">
          Set <code className="bg-muted px-1 py-0.5 rounded">disabled</code> to visually indicate
          that the avatar is not interactive.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Avatar as="button" disabled src="/user.jpg" /&gt;
        </code>
      </div>
    </div>
  );
}
