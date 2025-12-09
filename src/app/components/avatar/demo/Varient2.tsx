"use client";
import React from "react";
import { Avatar } from "@/packages/Avatar";

export function Variant2() {
  return (
    <div className="space-y-6">
      <Avatar name="User" notification={100} />
      <Avatar name="User" notification="!" />
      <Avatar name="Pro User" ring="ring-2" ringColor="ring-pink-500" />
      <Avatar name="Alert" status="online" notification={5} />
      <Avatar name="Small" notification={2} />
    </div>
  );
}
