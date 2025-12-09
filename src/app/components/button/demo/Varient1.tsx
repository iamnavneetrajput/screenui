import { Button } from "@/packages/Button";

export function Variant1() {
  return (
    <div className="space-y-6">

      {/* Variants */}
      <div className="flex flex-wrap gap-4">
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>

      {/* Rounded */}
      <div className="flex flex-wrap gap-4">
        <Button rounded="none">None</Button>
        <Button rounded="md">Medium</Button>
        <Button rounded="lg">Large</Button>
        <Button rounded="full">Full</Button>
      </div>

    </div>
  );
}
