import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        solid: "shadow-sm",
        outline: "border-2 bg-transparent shadow-sm",
        soft: "",
        ghost: "",
        dot: "gap-2",
      },
      color: {
        default: "",
        primary: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        success: "bg-green-500 text-white border-green-500",
        warning: "bg-yellow-500 text-white border-yellow-500",
        danger: "bg-red-500 text-white border-red-500",
        info: "bg-blue-500 text-white border-blue-500",
      },
      size: {
        xs: "px-1.5 py-0.5 text-xs rounded-md gap-0.5",
        sm: "px-2 py-1 text-xs rounded-md gap-1",
        md: "px-2.5 py-1.5 text-sm rounded-lg gap-1",
        lg: "px-3 py-2 text-sm rounded-lg gap-1.5",
        xl: "px-4 py-2.5 text-base rounded-xl gap-2",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      interactive: {
        true: "cursor-pointer hover:scale-105 active:scale-95",
        false: "cursor-default",
      },
    },
    compoundVariants: [
      { variant: "soft", color: "primary", class: "bg-primary/10 text-primary" },
      { variant: "soft", color: "success", class: "bg-green-500/10 text-green-700" },
      { variant: "soft", color: "warning", class: "bg-yellow-500/10 text-yellow-700" },
      { variant: "soft", color: "danger", class: "bg-red-500/10 text-red-700" },
      { variant: "soft", color: "info", class: "bg-blue-500/10 text-blue-700" },

      { variant: "ghost", color: "primary", class: "text-primary" },
      { variant: "ghost", color: "success", class: "text-green-700" },
      { variant: "ghost", color: "warning", class: "text-yellow-700" },
      { variant: "ghost", color: "danger", class: "text-red-700" },
      { variant: "ghost", color: "info", class: "text-blue-700" },

      { variant: "outline", color: "primary", class: "border-primary text-primary" },
      { variant: "outline", color: "success", class: "border-green-500 text-green-700" },
      { variant: "outline", color: "warning", class: "border-yellow-500 text-yellow-700" },
      { variant: "outline", color: "danger", class: "border-red-500 text-red-700" },
      { variant: "outline", color: "info", class: "border-blue-500 text-blue-700" },
    ],

    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "sm",
      rounded: "md",
      interactive: false,
    },
  }
)

const getIconSize = (size?: string) => {
  const sizes = { xs: "w-2.5 h-2.5", sm: "w-3 h-3", md: "w-3.5 h-3.5", lg: "w-4 h-4", xl: "w-4 h-4" }
  return sizes[size as keyof typeof sizes] || sizes.sm
}

const RemoveButton = ({ onRemove, size = "sm", disabled = false }: { onRemove: () => void; size?: string; disabled?: boolean }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onRemove() }}
    className={cn(
      "ml-1 -mr-1 rounded-full p-0.5 transition-colors",
      disabled && "cursor-not-allowed opacity-50"
    )}
    aria-label="Remove"
    type="button"
    disabled={disabled}
  >
    <svg className={cn("flex-shrink-0", getIconSize(size))} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
)

interface BaseBadgeProps {
  variant?: "solid" | "outline" | "soft" | "ghost" | "dot"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  interactive?: boolean
  icon?: React.ReactNode
  onRemove?: () => void
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  ariaLabel?: string
}

interface SpanBadgeProps extends BaseBadgeProps, Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BaseBadgeProps> {
  as?: "span"
}

interface ButtonBadgeProps extends BaseBadgeProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseBadgeProps> {
  as: "button"
}

type BadgeProps = SpanBadgeProps | ButtonBadgeProps

const Badge = React.forwardRef<HTMLSpanElement | HTMLButtonElement, BadgeProps>((props, ref) => {
  const { className, variant = "solid", color = "default", size = "sm", rounded = "md", interactive = false, icon, onRemove, disabled = false, children, ariaLabel, ...restProps } = props
  const isButton = props.as === "button"
  const isInteractive = interactive || !!onRemove || isButton

  const content = (
    <>
      {variant === "dot" && <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" role="presentation" />}
      {icon && <span className="flex-shrink-0" role="presentation">{icon}</span>}
      {children && <span className="truncate">{children}</span>}
      {onRemove && <RemoveButton onRemove={onRemove} size={size} disabled={disabled} />}
    </>
  )

  const classes = cn(badgeVariants({ variant, color, size, rounded, interactive: isInteractive }), disabled && "opacity-50 cursor-not-allowed pointer-events-none", className)

  if (isButton) {
    const { as, ...buttonProps } = restProps as Omit<ButtonBadgeProps, keyof BaseBadgeProps>
    return (
      <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={classes} disabled={disabled} type="button" aria-label={ariaLabel} {...buttonProps}>
        {content}
      </button>
    )
  }

  const { as, ...spanProps } = restProps as Omit<SpanBadgeProps, keyof BaseBadgeProps>
  return (
    <span ref={ref as React.ForwardedRef<HTMLSpanElement>} className={classes} role={isInteractive ? "button" : "status"} aria-label={ariaLabel} aria-disabled={disabled} tabIndex={isInteractive && !disabled ? 0 : undefined} onKeyDown={isInteractive && !disabled ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); (e.currentTarget as HTMLElement).click() } } : undefined} {...spanProps}>
      {content}
    </span>
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }
export type { BadgeProps }