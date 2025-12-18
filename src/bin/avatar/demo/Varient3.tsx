"use client";
import React from "react";
import { Avatar } from "@/packages/Avatar";

export function Variant3() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <Avatar
          name="Mike Johnson"
          status="busy"
          size="md"
        />
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold">Mike Johnson</span>
            <span className="text-xs">15 min ago</span>
          </div>
          <p className="mt-1">In a meeting, will respond soon</p>
        </div>
      </div>
    </div>
  );
}
