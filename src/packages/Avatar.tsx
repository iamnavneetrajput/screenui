"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const stringToColor = (str: string): string => {
  const colors = [
    "bg-red-500", "bg-orange-500", "bg-amber-500", "bg-yellow-500",
    "bg-lime-500", "bg-green-500", "bg-emerald-500", "bg-teal-500",
    "bg-cyan-500", "bg-sky-500", "bg-blue-500", "bg-indigo-500",
    "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", "bg-pink-500"
  ]
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

const getInitials = (name: string): string =>
  name.split(" ").map(p => p.charAt(0)).join("").toUpperCase().slice(0, 2)

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const avatarVariants = cva(
  "relative inline-flex items-center justify-center select-none flex-shrink-0 transition-all duration-200",
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
      clickable: {
        true: "cursor-pointer hover:opacity-80 active:scale-95",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      clickable: false,
    },
  }
)

const badgeVariants = cva(
  "absolute rounded-full",
  {
    variants: {
      size: {
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
      },
      position: {
        "top-left": "-top-0.5 -left-0.5",
        "top-right": "-top-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5",
      },
    },
    defaultVariants: {
      size: "md",
      position: "bottom-right",
    },
  }
)

const notificationBadgeVariants = cva(
  "absolute rounded-full border-2 border-border flex items-center justify-center font-semibold text-white px-1",
  {
    variants: {
      size: {
        sm: "h-5 min-w-5 text-[10px]",
        md: "h-5.5 min-w-5.5 text-[11px]",
        lg: "h-6 min-w-6 text-xs",
      },
      position: {
        "top-left": "-top-1.5 -left-1.5",
        "top-right": "-top-1.5 -right-1.5",
        "bottom-left": "-bottom-1.5 -left-1.5",
        "bottom-right": "-bottom-1.5 -right-1.5",
      },
    },
    defaultVariants: {
      size: "md",
      position: "top-right",
    },
  }
)

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  src?: string
  alt?: string
  name?: string
  fallback?: React.ReactNode
  size?: "sm" | "md" | "lg"
  shape?: "circle" | "square"
  color?: string
  textColor?: string
  status?: boolean | string
  statusColor?: string
  statusPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  notification?: number | string | boolean
  notificationColor?: string
  notificationPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  loading?: boolean
  clickable?: boolean
  disabled?: boolean
  as?: "div" | "button"
  onImageError?: () => void
  onImageLoad?: () => void
}

export const Avatar = React.forwardRef<HTMLDivElement | HTMLButtonElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      fallback,
      size = "md",
      shape = "circle",
      color,
      textColor = "text-white",
      status,
      statusColor,
      statusPosition = "bottom-right",
      notification,
      notificationColor = "bg-red-500",
      notificationPosition = "top-right",
      loading = false,
      clickable = false,
      disabled = false,
      as = "div",
      className,
      onImageError,
      onImageLoad,
      ...props
    },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [imageError, setImageError] = React.useState(false)

    React.useEffect(() => {
      if (src) {
        setImageLoaded(false)
        setImageError(false)
      }
    }, [src])

    const showImage = src && imageLoaded && !imageError && !loading
    const showFallback = !src || imageError || loading

    const iconSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" }

    const getFallbackContent = () => {
      if (fallback) return fallback
      if (name) return getInitials(name)
      return <UserIcon className={iconSizes[size]} />
    }

    const bgColor = color || (name ? stringToColor(name) : "bg-surface")
    const textColorClass = color ? textColor : name ? "text-foreground-contrast" : "text-muted-foreground"

    const statusColors: Record<string, string> = {
      online: "bg-green-500",
      offline: "bg-gray-400",
      busy: "bg-red-500",
      away: "bg-yellow-500",
    }
    const finalStatusColor = statusColor || (typeof status === "string" ? statusColors[status] : "bg-green-500")

    const avatarClasses = cn(
      avatarVariants({ size, shape, clickable: clickable || as === "button" }),
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    )

    const content = (
      <>
        {src && (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-200",
              shape === "circle" ? "rounded-full" : "rounded-lg",
              showImage ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => { setImageLoaded(true); onImageLoad?.() }}
            onError={() => { setImageError(true); onImageError?.() }}
            loading="lazy"
          />
        )}

        {showFallback && (
          <div
            className={cn(
              "w-full h-full flex items-center justify-center font-semibold",
              shape === "circle" ? "rounded-full" : "rounded-lg",
              loading ? "bg-surface animate-pulse" : bgColor,
              !loading && textColorClass
            )}
          >
            {!loading && getFallbackContent()}
          </div>
        )}

        {status && (
          <span
            className={cn(badgeVariants({ size, position: statusPosition }), finalStatusColor)}
            aria-label={typeof status === "string" ? `Status: ${status}` : "Online"}
          />
        )}

        {notification !== undefined && notification !== null && notification !== false && (
          <span
            className={cn(notificationBadgeVariants({ size, position: notificationPosition }), notificationColor)}
            aria-label={`${notification} notifications`}
          >
            {notification === true ? "" : typeof notification === "number" && notification > 99 ? "99+" : notification}
          </span>
        )}
      </>
    )

    if (as === "button") {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={avatarClasses}
          disabled={disabled}
          type="button"
          aria-label={alt || name || "Avatar"}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      )
    }

    return (
      <div ref={ref as React.ForwardedRef<HTMLDivElement>} className={avatarClasses} {...props}>
        {content}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: "sm" | "md" | "lg"
  spacing?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = 5, size = "md", spacing = "md", className, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const visible = max ? childrenArray.slice(0, max) : childrenArray
    const remaining = childrenArray.length - visible.length

    const spacingClasses = {
      sm: "-space-x-2",
      md: "-space-x-3",
      lg: "-space-x-4",
    }

    return (
      <div ref={ref} className={cn("flex items-center", spacingClasses[spacing], className)} {...props}>
        {visible.map((child, i) => (
          <div key={i} className="rounded-full">
            {React.isValidElement(child) && React.cloneElement(child as any, { size })}
          </div>
        ))}

        {remaining > 0 && (
          <Avatar size={size} fallback={`+${remaining}`} color="bg-surface" textColor="text-muted-foreground" />
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"

export { stringToColor, getInitials }
