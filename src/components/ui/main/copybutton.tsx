"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy:", err)
      }
    } else {
      console.warn("Clipboard API not available")
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-gray-400 hover:text-white transition flex items-center gap-1"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      {/* <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span> */}
    </button>
  )
}
