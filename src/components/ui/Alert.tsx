'use client'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Alert variants using class-variance-authority
 */
const alertVariants = cva(
  // Base styles 
  "relative w-full rounded-xl border px-4 py-4 text-sm transition-all duration-200 ease-in-out grid has-[>svg]:grid-cols-[auto_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-2 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:shrink-0 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default: "border-2",
        filled: "border-0",
        outlined: "border-2 bg-transparent",
        soft: "border-0 bg-opacity-10"
      },
      size: {
        sm: "px-3 py-2 text-xs [&>svg]:size-4",
        md: "px-4 py-4 text-sm [&>svg]:size-5",
        lg: "px-6 py-5 text-base [&>svg]:size-6"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "xl"
    },
  }
)

/**
 * Base props for Alert component
 */
interface BaseAlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  /** Makes the alert dismissible with close button */
  dismissible?: boolean
  /** Callback when alert is dismissed */
  onDismiss?: () => void
  /** Border radius variant */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
}

/**
 * Main Alert component props
 */
interface AlertProps extends BaseAlertProps {}


function Alert({
  className,
  variant = "default",
  size = "md",
  rounded = "xl",
  dismissible = false,
  onDismiss,
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = React.useCallback(() => {
    setIsVisible(false)
    onDismiss?.()
  }, [onDismiss])

  if (!isVisible) return null

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, size, rounded }),
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
          type="button"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

/**
 * Alert title component
 */
interface AlertTitleProps extends React.ComponentProps<"div"> {}

function AlertTitle({ className, ...props }: AlertTitleProps) {
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

/**
 * Alert description component
 */
interface AlertDescriptionProps extends React.ComponentProps<"div"> {}

function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
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

Alert.displayName = 'Alert'
AlertTitle.displayName = 'AlertTitle'
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription, alertVariants }
export type { AlertProps, AlertTitleProps, AlertDescriptionProps }