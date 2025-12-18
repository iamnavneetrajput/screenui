"use client";
import React from "react";
import { Avatar, AvatarGroup } from "@/packages/Avatar";

export function Variant4() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
        <Avatar
          name="Tom"
          notification={1}
          notificationColor="bg-green-500"
          notificationPosition="top-right"
          size="lg"
        />
        <div>
          <p className="font-semibold text-slate-900">Friend Request</p>
          <p className="text-sm text-slate-600">Tom wants to connect</p>
        </div>
      </div>
    </div>
  );
}
