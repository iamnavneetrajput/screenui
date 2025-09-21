//usage notes for Accordion component
import { UsageNoteItem } from "@/components/ui/main/UsageNoteItem";

export function UsageNotes() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Usage Notes</h2>

      {/* Types */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Types</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="single"
            description="Only one accordion item can be open at a time. Use with collapsible prop to allow closing."
          />
          <UsageNoteItem
            label="multiple"
            description="Multiple accordion items can be open simultaneously."
          />
        </ul>
      </div>

      {/* Variants */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Style Variants</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="default"
            description="Standard bordered accordion with dividers between items."
          />
          <UsageNoteItem
            label="ghost"
            description="Clean, minimalist accordion without borders or background."
          />
          <UsageNoteItem
            label="separated"
            description="Each item has its own border and spacing for a card-like appearance."
          />
        </ul>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Sizes</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem label="sm" description="Compact accordion for dense layouts or small screens." />
          <UsageNoteItem label="md (default)" description="Standard size suitable for most use cases." />
          <UsageNoteItem label="lg" description="Larger accordion for better visibility and touch targets." />
        </ul>
      </div>

      {/* Single Mode */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Single Mode</h3>
        <p className="text-muted-foreground mb-2">
          In single mode, only one item can be open at a time. Use{" "}
          <code className="bg-muted px-1 py-0.5 rounded">collapsible</code> to allow closing the open item.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Accordion type="single" collapsible defaultValue="item-1"&gt;
        </code>
      </div>

      {/* Multiple Mode */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Multiple Mode</h3>
        <p className="text-muted-foreground mb-2">
          In multiple mode, several items can be open simultaneously. Perfect for FAQs or feature lists.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;Accordion type="multiple" defaultValue={["item-1", "item-3"]}&gt;
        </code>
      </div>

      {/* Controlled vs Uncontrolled */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Controlled vs Uncontrolled</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <UsageNoteItem
            label="Uncontrolled"
            description="Use defaultValue for internal state management. Good for simple use cases."
          />
          <UsageNoteItem
            label="Controlled"
            description="Use value + onValueChange for external state control. Required for complex logic."
          />
        </ul>
      </div>

      {/* Custom Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Custom Icons</h3>
        <p className="text-muted-foreground mb-2">
          Customize the expand/collapse icon or hide it completely using the{" "}
          <code className="bg-muted px-1 py-0.5 rounded">icon</code> or{" "}
          <code className="bg-muted px-1 py-0.5 rounded">hideIcon</code> props.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          {"<AccordionTrigger icon={<Plus className=\"h-4 w-4\" />}>"}
        </code>
      </div>

      {/* Disabled State */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Disabled State</h3>
        <p className="text-muted-foreground mb-2">
          Disable the entire accordion or individual items to prevent interaction.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit mb-2">
          &lt;Accordion disabled type="single"&gt;
        </code>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;AccordionItem value="item-1" disabled&gt;
        </code>
      </div>

      {/* Animation */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Animation</h3>
        <p className="text-muted-foreground mb-2">
          Built-in smooth expand/collapse animations. Add custom CSS animations using{" "}
          <code className="bg-muted px-1 py-0.5 rounded">animate-accordion-up</code> and{" "}
          <code className="bg-muted px-1 py-0.5 rounded">animate-accordion-down</code> classes.
        </p>
      </div>

      {/* Force Mount */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Force Mount</h3>
        <p className="text-muted-foreground mb-2">
          Use <code className="bg-muted px-1 py-0.5 rounded">forceMount</code> on AccordionContent 
          to keep content in DOM even when closed. Useful for SEO or complex content.
        </p>
        <code className="block bg-muted text-sm px-2 py-1 rounded w-fit">
          &lt;AccordionContent forceMount&gt;
        </code>
      </div>
    </div>
  );
}