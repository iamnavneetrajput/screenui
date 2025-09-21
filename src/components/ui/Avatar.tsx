"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden transition-all duration-200 select-none",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl",
        "3xl": "w-24 h-24 text-3xl",
      },
      variant: {
        circular: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-none",
      },
      clickable: {
        true: "cursor-pointer hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2",
        false: "cursor-default",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "circular",
      clickable: false,
    },
  }
)

const avatarImageVariants = cva("w-full h-full object-cover", {
  variants: {
    variant: {
      circular: "rounded-full",
      rounded: "rounded-lg",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "circular",
  },
})

const avatarFallbackVariants = cva(
  "w-full h-full flex items-center justify-center font-medium uppercase",
  {
    variants: {
      variant: {
        circular: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "circular",
    },
  }
)

interface BaseAvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  className?: string
  clickable?: boolean
  disabled?: boolean
  fallbackContent?: React.ReactNode
  imgLoading?: "eager" | "lazy"
  placeholder?: React.ReactNode
}

interface SpanAvatarProps
  extends BaseAvatarProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseAvatarProps> {
  as?: "div"
}

interface ButtonAvatarProps
  extends BaseAvatarProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseAvatarProps> {
  as: "button"
}

type AvatarProps = SpanAvatarProps | ButtonAvatarProps

const isButtonProps = (props: AvatarProps): props is ButtonAvatarProps =>
  props.as === "button"

const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2)

const AvatarSkeleton = ({
  variant = "circular",
}: {
  variant?: string
}) => (
  <div
    className={cn(avatarFallbackVariants({ variant: variant as any }), "animate-pulse bg-gray-200")}
    aria-hidden="true"
  />
)

const DefaultFallback = ({ size = "md" }: { size?: string }) => {
  const iconSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
    "3xl": "w-12 h-12",
  }

  return <User className={cn(iconSizes[size as keyof typeof iconSizes] || iconSizes.md)} aria-hidden="true" />
}

const Avatar = React.forwardRef<HTMLDivElement | HTMLButtonElement, AvatarProps>(
  (props, ref) => {
    const {
      className,
      size = "md",
      variant = "circular",
      clickable = false,
      src,
      alt,
      fallback,
      fallbackContent,
      disabled = false,
      imgLoading = "lazy",
      placeholder,
      ...restProps
    } = props

    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [imageError, setImageError] = React.useState(false)

    React.useEffect(() => {
      if (src) {
        setImageLoaded(false)
        setImageError(false)
      }
    }, [src])

    const handleImageLoad = () => setImageLoaded(true)
    const handleImageError = () => setImageError(true)

    const showImage = src && imageLoaded && !imageError
    const showFallback = !src || imageError

    const getFallbackContent = () => {
      if (fallbackContent) return fallbackContent
      if (fallback) return getInitials(fallback)
      return <DefaultFallback size={size || 'md'} />
    }

    const classNames = cn(
      avatarVariants({ size, variant, clickable: (clickable || isButtonProps(props)) && !disabled }),
      disabled && "opacity-50 cursor-not-allowed",
      className
    )

    const content = (
      <>
        {src && (
          <img
            src={src}
            alt={alt || "Avatar"}
            className={cn(avatarImageVariants({ variant }), showImage ? "opacity-100" : "opacity-0")}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading={imgLoading}
          />
        )}
        {showFallback && <div className={avatarFallbackVariants({ variant })}>{getFallbackContent()}</div>}
        {!src && placeholder && <div>{placeholder}</div>}
      </>
    )

    if (isButtonProps(props)) {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={classNames}
          disabled={disabled}
          type="button"
          {...(restProps as ButtonAvatarProps)}
        >
          {content}
        </button>
      )
    }

    return (
      <div
        ref={ref as React.ForwardedRef<HTMLDivElement>}
        className={classNames}
        {...(restProps as SpanAvatarProps)}
      >
        {content}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

export { Avatar }
export type { AvatarProps }
