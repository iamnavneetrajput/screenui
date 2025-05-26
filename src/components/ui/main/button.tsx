"use client"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "px-2 py-1 rounded-md transition font-medium flex items-center gap-2 cursor-pointer border border-gray-800 bg-[hsl(var(--foreground))] text-[hsla(var(--background))]"

  return (
    <button className={cn(base, className)} {...props}>
      {children}
    </button>
  )
}
