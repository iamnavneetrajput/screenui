import React from "react";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";

export function BadgePreviewDemo() {
    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Badge className="bg-blue-100 text-blue-800">New</Badge>
                <Badge variant="dot" className="bg-green-50 text-green-700">Active</Badge>
                <Badge
                    as="button"
                    interactive
                    className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                    onClick={() => console.log("Badge clicked")}
                >
                    Clickable
                </Badge>
                <Badge
                    className="border-red-300 text-red-700"
                    icon={<InfoIcon />}
                >
                    Warning
                </Badge>

                <Badge
                    className="bg-gray-100 text-gray-800"
                    onRemove={() => console.log("Badge removed")}
                >
                    Removable
                </Badge>
            </div>
        </div>
    );
}