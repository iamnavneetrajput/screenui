"use client";
import { useState } from "react";
import { Button } from "@/packages/Button";

export function ButtonLoadingDemo() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button loading={loading} onClick={handleLoading}>
        {loading ? "Processing..." : "Submit"}
      </Button>
    </div>
  );
}
