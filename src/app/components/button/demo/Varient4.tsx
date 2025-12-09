"use client";

import { useState } from "react";
import { Button } from "@/packages/Button";
import { Plus, Trash, Heart, Share2, MessageCircle } from "lucide-react";

export function Variant4() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-6">

      {/* Form Actions */}
      <div className="flex flex-wrap gap-4">
        <Button loading={loading} onClick={handleSave} icon={<Plus />}>
          {loading ? "Saving..." : "Save"}
        </Button>

        <Button variant="ghost">
          Cancel
        </Button>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-wrap gap-4 w-full">
        <Button
          size="lg"
          fullWidth
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Get Started Free
        </Button>
      </div>

      {/* Destructive Actions */}
      <div className="flex flex-wrap gap-4">
        <Button icon={<Trash />} className="bg-red-600 hover:bg-red-700">
          Delete Account
        </Button>

        <Button
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-50"
        >
          Cancel Subscription
        </Button>
      </div>

      {/* Social Actions */}
      <div className="flex flex-wrap gap-4">
        <Button size="sm" variant="soft" rounded="full" icon={<Heart />}>
          125
        </Button>

        <Button size="sm" variant="soft" rounded="full" icon={<Share2 />}>
          Share
        </Button>

        <Button size="sm" variant="ghost" rounded="full" icon={<MessageCircle />}>
          Comment
        </Button>
      </div>

    </div>
  );
}
