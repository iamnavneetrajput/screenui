import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Loading spinner component
const LoadingSpinner = ({ className = "" }: { className?: string }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
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

// Button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--button))] text-[hsl(var(--foreground))] shadow focus-visible:ring-gray-950",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:ring-gray-500",
        outline: "border border-gray-300 bg-transparent text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-500",
        ghost: "text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500",
        destructive: "bg-red-500 text-white shadow hover:bg-red-600 focus-visible:ring-red-500",
        link: "text-gray-900 underline-offset-4 hover:underline focus-visible:ring-gray-500 shadow-none"
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

// TypeScript interface for Button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
  as: 'a';
  href: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

// Union type for component props
type ButtonComponentProps = ButtonProps | AnchorProps;

// Button component with forwardRef
const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    icon, 
    loading = false, 
    children, 
    as = 'button',
    disabled,
    ...props 
  }, ref) => {
    // Determine if button should be disabled
    const isDisabled = loading || disabled;
    
    // Common content for both button and anchor
    const content = (
      <>
        {loading && (
          <LoadingSpinner className={`${size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`} />
        )}
        {!loading && icon && (
          <span className={`${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
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

    // Render as anchor tag
    if (as === 'a') {
      const anchorProps = props as AnchorProps;
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={buttonVariants({ variant, size, fullWidth, className })}
          {...anchorProps}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
          style={{
            pointerEvents: isDisabled ? 'none' : 'auto',
            opacity: isDisabled ? 0.5 : 1,
            ...anchorProps.style
          }}
        >
          {content}
        </a>
      );
    }

    // Render as button tag (default)
    const buttonProps = props as ButtonProps;
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={buttonVariants({ variant, size, fullWidth, className })}
        disabled={isDisabled}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps, AnchorProps };