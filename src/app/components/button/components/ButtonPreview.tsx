// src/app/components/button/components/ButtonPreview.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Trash, ExternalLink } from "lucide-react";

export function ButtonPreviewDemo() {
      const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-4 items-center justify-center">

                <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    Click Me
                </Button>
                <Button
                    variant="outline"
                    icon={<Trash />}
                    className="border-red-500 text-red-500 hover:bg-red-50"
                >
                    Delete
                </Button>
                <Button
                    className="bg-green-500 text-white"
                    icon={<Plus />}
                    loading={isLoading}
                >
                    Add Item
                </Button>


                <Button as="a" href="/dashboard" variant="ghost" icon={<ExternalLink />}>
                    Go to Dashboard
                </Button>
            </div>
        </div>
    );
}