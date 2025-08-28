'use client'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-xl border px-4 py-4 text-sm transition-all duration-200 ease-in-out grid has-[>svg]:grid-cols-[auto_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-2 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:shrink-0 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--surface))] border-[hsl(var(--border))] text-[hsl(var(--foreground))] [&>svg]:text-[hsl(var(--button))]",
        destructive:
          "bg-[hsl(var(--surface))] border-[hsl(var(--error))] text-[hsl(var(--error))] [&>svg]:text-[hsl(var(--error))] [&>svg]:animate-pulse",
        success:
          "bg-[hsl(var(--surface))] border-[hsl(var(--sucess))] text-[hsl(var(--sucess))] [&>svg]:text-[hsl(var(--sucess))]",
        warning:
          "bg-[hsl(var(--surface))] border-[hsl(var(--warning))] text-[hsl(var(--warning))] [&>svg]:text-[hsl(var(--warning))]",
        info:
          "bg-[hsl(var(--surface))] border-[hsl(var(--button))] text-[hsl(var(--button))] [&>svg]:text-[hsl(var(--button))]",
      },
      size: {
        sm: "px-3 py-2 text-xs",
        default: "px-4 py-4 text-sm",
        lg: "px-6 py-5 text-base",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
}

function Alert({
  className,
  variant,
  size,
  dismissible = false,
  onDismiss,
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, size }),
        dismissible && "pr-12",
        className
      )}
      {...props}
    >
      {children}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 rounded-lg p-1.5 hover:bg-black/5 focus:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current/20 transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-semibold tracking-tight leading-tight mb-1 text-base sm:text-lg",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 text-sm sm:text-base leading-relaxed opacity-90 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mt-2 [&_ul]:space-y-1 [&_li]:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }