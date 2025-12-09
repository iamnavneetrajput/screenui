"use client";
import React from "react";
import { Avatar } from "@/packages/Avatar";

export function Variant1() {
  return (
    <div className="space-y-6">
      <Avatar name="User" status="online" />
      <Avatar name="User" status="busy" />
      <Avatar name="User" status="away" />
      <Avatar name="User" status="offline" />
      <Avatar name="Jane" color="bg-green-600" status="away" />
      <Avatar name="Unknown" />
    </div>
  );
}
