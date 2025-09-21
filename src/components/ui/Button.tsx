import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Loading spinner component for button loading states
 */
const LoadingSpinner = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  };

  return (
    <svg
      className={cn("animate-spin", sizeClasses[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

/**
 * Button variants using class-variance-authority
 */
const buttonVariants = cva(
  // Base styles - no colors
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        solid: "shadow hover:opacity-90",
        outline: "border-2 bg-transparent shadow-sm hover:bg-opacity-10",
        ghost: "hover:bg-opacity-10",
        link: "underline-offset-4 hover:underline shadow-none",
        soft: "bg-opacity-10 hover:bg-opacity-20"
      },
      size: {
        sm: "h-8 px-3 text-sm gap-1.5",
        md: "h-10 px-4 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2.5",
        xl: "h-14 px-8 text-lg gap-3",
        icon: "h-10 w-10"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      rounded: "md"
    }
  }
);

/**
 * Base props shared between button and anchor variants
 */
interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  /** Optional icon to display in the button */
  icon?: React.ReactNode;
  /** Shows loading spinner when true and disables interaction */
  loading?: boolean;
  /** Makes the button take full width of its container */
  fullWidth?: boolean;
  /** Border radius variant */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  /** Additional CSS classes to apply */
  className?: string;
  /** Button content */
  children?: React.ReactNode;
}

/**
 * Props for button element variant
 */
interface ButtonElementProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  /** Render as button element (default) */
  as?: 'button';
  href?: never;
}

/**
 * Props for anchor element variant  
 */
interface AnchorElementProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  /** Render as anchor element */
  as: 'a';
  /** Required href when rendering as anchor */
  href: string;
  /** Disabled state for anchor (handled via styling) */
  disabled?: boolean;
}

/**
 * Union type for all button component props
 */
type ButtonProps = ButtonElementProps | AnchorElementProps;

/**
 * Type guard to check if props are for anchor element
 */
const isAnchorProps = (props: ButtonProps): props is AnchorElementProps => {
  return props.as === 'a';
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { 
    className, 
    variant, 
    size, 
    fullWidth,
    rounded,
    icon, 
    loading = false, 
    children, 
    disabled,
    ...restProps 
  } = props;

  // Determine if component should be disabled
  const isDisabled = loading || disabled;
  
  // Get appropriate spinner size
  const spinnerSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';
  
  // Common content for both button and anchor
  const content = (
    <>
      {loading && <LoadingSpinner size={spinnerSize} />}
      {!loading && icon && (
        <span 
          className={cn(
            "flex-shrink-0",
            size === 'sm' && "text-sm",
            size === 'lg' && "text-base"
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {children && (
        <span className={size === 'icon' ? 'sr-only' : ''}>
          {children}
        </span>
      )}
    </>
  );

  // Common class names
  const classNames = cn(buttonVariants({ variant, size, rounded, fullWidth }), className);

  // Render as anchor element
  if (isAnchorProps(props)) {
    const { as, ...anchorProps } = restProps as Omit<AnchorElementProps, keyof BaseButtonProps>;
    
    return (
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className={classNames}
        aria-disabled={isDisabled}
        aria-busy={loading}
        tabIndex={isDisabled ? -1 : undefined}
        role="button"
        {...(isDisabled && {
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          style: { pointerEvents: 'none', ...anchorProps.style }
        })}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  // Render as button element (default)
  const { as, href, ...buttonProps } = restProps as Omit<ButtonElementProps, keyof BaseButtonProps>;
  
  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      className={classNames}
      disabled={isDisabled}
      aria-busy={loading}
      type="button"
      {...buttonProps}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, type ButtonProps };
export type { ButtonElementProps, AnchorElementProps };