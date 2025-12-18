"use client";

import { useState } from "react";
import { Button } from "@/packages/Button";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export function ButtonRealWorldDemo() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="sm"
        variant="soft"
        rounded="full"
        icon={<Heart />}
      >
        125
      </Button>

      <Button
        size="sm"
        variant="ghost"
        rounded="full"
        icon={<MessageCircle />}
      >
        Comment
      </Button>

      <Button
        size="sm"
        variant="soft"
        rounded="full"
        icon={<Share2 />}
      >
        Share
      </Button>

      <Button
        size="sm"
        loading={saving}
        onClick={handleSave}
        rounded="full"
        icon={<Bookmark />}
      >
        {saving ? "Saving..." : "Save"}
      </Button>
    </div>
  );
}
