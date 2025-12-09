import { useState } from "react";
import { Button } from "@/packages/Button";
import { Plus, Download } from "lucide-react";

export function Variant3() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-6">

      {/* Normal vs Disabled */}
      <div className="flex flex-wrap gap-4">
        <Button>Normal Button</Button>
        <Button disabled>Disabled Button</Button>

        <Button variant="outline">Outline Normal</Button>
        <Button variant="outline" disabled>
          Outline Disabled
        </Button>
      </div>

      {/* Loading States */}
      <div className="flex flex-wrap gap-4">
        <Button loading={loading} onClick={handleLoading}>
          {loading ? "Processing..." : "Submit Form"}
        </Button>

        <Button
          variant="outline"
          loading={loading}
          onClick={handleLoading}
          icon={<Plus />}
          showIconOnLoading
        >
          {loading ? "Creating..." : "Create"}
        </Button>
      </div>

      {/* Full Width */}
      <div className="flex flex-col gap-4 w-full">
        <Button fullWidth icon={<Download />}>
          Download Full Report
        </Button>

        <Button fullWidth variant="outline">
          View All Details
        </Button>
      </div>
    </div>
  );
}
