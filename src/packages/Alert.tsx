'use client'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const AlertIcons = {
  info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
    </svg>
  ),
  success: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
    </svg>
  ),
  error: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
    </svg>
  ),
  close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const alertVariants = cva(
  `
    relative w-full rounded-lg border
    transition-all duration-300 ease-out
    shadow-sm hover:shadow-md
    animate-in fade-in slide-in-from-top-2
    grid items-start gap-3
    [&:has([data-slot=icon])]:grid-cols-[auto_1fr]
    [&:not(:has([data-slot=icon]))]:grid-cols-[1fr]
  `,
  {
    variants: {
      variant: {
        default: "border-2 bg-surface",
        filled: "border-0 bg-accent text-foreground-contrast",
        outlined: "border-2 bg-transparent",
        soft: "border-0 bg-surface-soft",
        glass: "border bg-surface/40 backdrop-blur-md"
      },
      color: {
        default: "",
        info: "",
        success: "",
        warning: "",
        error: ""
      },
      size: {
        sm: "px-3 py-2.5 text-xs gap-2",
        md: "px-4 py-4 text-sm gap-3",
        lg: "px-6 py-5 text-base gap-4"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-2xl"
      }
    },
    compoundVariants: [
      // Default variant
      { variant: "default", color: "info", class: "bg-cyan-900 border-cyan-600 text-cyan-200" },
      { variant: "default", color: "success", class: "bg-emerald-900 border-emerald-600 text-emerald-200" },
      { variant: "default", color: "warning", class: "bg-amber-900 border-amber-600 text-amber-200" },
      { variant: "default", color: "error", class: "bg-rose-900 border-rose-600 text-rose-200" },

      // Filled variant
      { variant: "filled", color: "info", class: "bg-cyan-600 text-white border-cyan-600" },
      { variant: "filled", color: "success", class: "bg-emerald-600 text-white border-emerald-600" },
      { variant: "filled", color: "warning", class: "bg-amber-600 text-black border-amber-600" },
      { variant: "filled", color: "error", class: "bg-rose-600 text-white border-rose-600" },

      // Outlined variant
      { variant: "outlined", color: "info", class: "border-cyan-600 text-cyan-600 bg-transparent" },
      { variant: "outlined", color: "success", class: "border-emerald-600 text-emerald-600 bg-transparent" },
      { variant: "outlined", color: "warning", class: "border-amber-600 text-amber-600 bg-transparent" },
      { variant: "outlined", color: "error", class: "border-rose-600 text-rose-600 bg-transparent" },

      // Soft variant
      { variant: "soft", color: "info", class: "bg-cyan-600/15 text-cyan-600 border-cyan-600/20" },
      { variant: "soft", color: "success", class: "bg-emerald-600/15 text-emerald-600 border-emerald-600/20" },
      { variant: "soft", color: "warning", class: "bg-amber-600/15 text-amber-600 border-amber-600/20" },
      { variant: "soft", color: "error", class: "bg-rose-600/15 text-rose-600 border-rose-600/20" },

      // Glass variant
      { variant: "glass", color: "info", class: "bg-cyan-600/10 text-cyan-600 border-cyan-600/30 backdrop-blur" },
      { variant: "glass", color: "success", class: "bg-emerald-600/10 text-emerald-600 border-emerald-600/30 backdrop-blur" },
      { variant: "glass", color: "warning", class: "bg-amber-600/10 text-amber-600 border-amber-600/30 backdrop-blur" },
      { variant: "glass", color: "error", class: "bg-rose-600/10 text-rose-600 border-rose-600/30 backdrop-blur" },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "md",
      rounded: "lg"
    }
  }
)

const iconColorClasses = {
  default: "text-muted",
  info: "text-accent",
  success: "text-accent",
  warning: "text-accent",
  error: "text-accent"
}

interface BaseAlertProps extends Omit<React.ComponentProps<"div">, 'color'> {
  variant?: "default" | "filled" | "outlined" | "soft" | "glass"
  color?: "default" | "info" | "success" | "warning" | "error"
  size?: "sm" | "md" | "lg"
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  dismissible?: boolean
  onDismiss?: () => void
  autoDismiss?: number
  showIcon?: boolean
  icon?: React.ReactNode
}

interface AlertProps extends BaseAlertProps { }

function Alert({
  className,
  variant = "default",
  color = "default",
  size = "md",
  rounded = "lg",
  dismissible = false,
  onDismiss,
  autoDismiss,
  showIcon = false,
  icon,
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isExiting, setIsExiting] = React.useState(false)

  const handleDismiss = React.useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      onDismiss?.()
    }, 200)
  }, [onDismiss])

  React.useEffect(() => {
    if (autoDismiss && autoDismiss > 0) {
      const timer = setTimeout(handleDismiss, autoDismiss)
      return () => clearTimeout(timer)
    }
  }, [autoDismiss, handleDismiss])

  if (!isVisible) return null

  const defaultIcon = color !== 'default' && showIcon ? AlertIcons[color] : null
  const IconComponent = icon || defaultIcon

  const iconSizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6"
  }

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, color, size, rounded }),
        dismissible && "pr-10",
        isExiting && "animate-out fade-out slide-out-to-top-2",
        className
      )}
      {...props}
    >
      {IconComponent && (
        <div
          data-slot="icon"
          className={cn(
            "flex-shrink-0 mt-0.5",
            iconSizeClasses[size],
            variant === "filled" ? "text-current" : iconColorClasses[color]
          )}
        >
          {typeof IconComponent === 'function' ? (
            <IconComponent className={cn("w-full h-full", iconSizeClasses[size])} />
          ) : (
            IconComponent
          )}
        </div>
      )}

      <div className="flex-1 min-w-0">
        {children}
      </div>

      {dismissible && (
        <button
          onClick={handleDismiss}
          className={cn(
            "absolute right-2 top-2 rounded-md p-1",
            "hover:bg-overlay focus:bg-overlay",
            "focus:outline-none focus:ring-2 focus:ring-focus",
            "transition-colors",
            variant === "filled" && "hover:bg-overlay-contrast focus:bg-overlay-contrast"
          )}
          aria-label="Dismiss alert"
          type="button"
        >
          <AlertIcons.close className="size-4" />
        </button>
      )}
    </div>
  )
}

interface AlertTitleProps extends React.ComponentProps<"h5"> { }

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5
      data-slot="alert-title"
      className={cn(
        "font-semibold tracking-tight leading-tight mb-1",
        "text-sm sm:text-base",
        className
      )}
      {...props}
    />
  )
}

interface AlertDescriptionProps extends React.ComponentProps<"div"> { }

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm leading-relaxed",
        "[&_p]:mb-2 [&_p:last-child]:mb-0",
        "[&_a]:underline [&_a]:underline-offset-2 [&_a]:font-medium [&_a]:hover:no-underline",
        "[&_ul]:mt-2 [&_ul]:ml-4 [&_ul]:space-y-1 [&_ul]:list-disc",
        "[&_ol]:mt-2 [&_ol]:ml-4 [&_ol]:space-y-1 [&_ol]:list-decimal",
        "[&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-black/10 [&_code]:text-xs [&_code]:font-mono",
        className
      )}
      {...props}
    />
  )
}

interface AlertActionsProps extends React.ComponentProps<"div"> { }

function AlertActions({ className, ...props }: AlertActionsProps) {
  return (
    <div
      data-slot="alert-actions"
      className={cn(
        "flex items-center gap-2 mt-3",
        "[&_button]:px-3 [&_button]:py-1.5 [&_button]:text-sm [&_button]:rounded-md",
        "[&_button]:font-medium [&_button]:transition-colors",
        "[&_button]:focus:outline-none [&_button]:focus:ring-2 [&_button]:focus:ring-offset-1",
        className
      )}
      {...props}
    />
  )
}

Alert.displayName = 'Alert'
AlertTitle.displayName = 'AlertTitle'
AlertDescription.displayName = 'AlertDescription'
AlertActions.displayName = 'AlertActions'

export { Alert, AlertTitle, AlertDescription, AlertActions, alertVariants, AlertIcons }
export type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertActionsProps }
