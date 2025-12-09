import { useState } from "react";
import { Button } from "@/packages/Button";
import { Plus, Download, Heart, Trash } from "lucide-react";

export function Variant2() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleLoading1 = () => {
    setLoading1(true);
    setTimeout(() => setLoading1(false), 2000);
  };

  const handleLoading2 = () => {
    setLoading2(true);
    setTimeout(() => setLoading2(false), 2000);
  };

  return (
    <div className="space-y-6">

      {/* Icon Left / Right */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Plus />}>Add Item</Button>

        <Button variant="outline" icon={<Download />}>
          Download
        </Button>

        <Button
          variant="soft"
          icon={<Heart />}
          iconPosition="right"
        >
          Like
        </Button>
      </div>

      {/* Interactive Loading */}
      <div className="flex flex-wrap gap-4">
        <Button
          loading={loading1}
          onClick={handleLoading1}
          icon={<Download />}
        >
          {loading1 ? "Downloading..." : "Download"}
        </Button>

        <Button
          variant="outline"
          loading={loading2}
          onClick={handleLoading2}
        >
          {loading2 ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {/* Icon Only */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Heart />} size="icon" aria-label="Like"/>
        <Button size='icon' icon={<Download />} variant="outline" aria-label="Download"/>
        <Button icon={<Trash />} size="icon" variant="ghost" aria-label="Delete" />
      </div>
    </div>
  );
}
