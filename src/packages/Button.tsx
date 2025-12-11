'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const LoadingSpinner = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = { sm: "h-3 w-3", md: "h-4 w-4", lg: "h-5 w-5" };
  return (
    <svg className={cn("animate-spin", sizeClasses[size], className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
        outline: "border border-border text-foreground bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        soft: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      size: {
        sm: "h-8 px-3 text-sm gap-1.5",
        md: "h-10 px-4 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2.5",
        xl: "h-14 px-8 text-lg gap-3",
        icon: "h-10 w-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      fullWidth: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "solid", size: "md", rounded: "md", fullWidth: false },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface BaseButtonProps extends ButtonVariantProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loadingIcon?: React.ReactNode;
  showIconOnLoading?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
  loadingText?: string;
}

interface IconOnlyButtonProps extends BaseButtonProps {
  size: "icon";
  children?: never;
  "aria-label": string;
}

interface RegularButtonProps extends BaseButtonProps {
  size?: Exclude<ButtonVariantProps["size"], "icon">;
  children: React.ReactNode;
  "aria-label"?: string;
}

interface LabeledIconButtonProps extends BaseButtonProps {
  size: "icon";
  children?: React.ReactNode;
  "aria-label": string;
}

type BaseButtonPropsUnion = IconOnlyButtonProps | RegularButtonProps | LabeledIconButtonProps;

type ButtonElementProps = BaseButtonPropsUnion & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonPropsUnion> & { as?: "button"; asChild?: never };
type AnchorElementProps = BaseButtonPropsUnion & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonPropsUnion> & { as: "a"; href: string; asChild?: never };
type AsChildProps = BaseButtonPropsUnion & { asChild: true; as?: never };

type ButtonProps = ButtonElementProps | AnchorElementProps | AsChildProps;

const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { children: React.ReactElement }>(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    const childProps = (children.props ?? {}) as Record<string, any>;
    return React.cloneElement(children, { ...props, ...childProps, className: cn(props.className, childProps.className), ref } as any);
  }
  return null;
});

Slot.displayName = "Slot";

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement | HTMLElement, ButtonProps>((props, ref) => {
  const { className, variant, size, fullWidth, rounded, icon, iconPosition = "left", loadingIcon, showIconOnLoading = false, loading = false, children, disabled, as, asChild, "aria-label": ariaLabel, loadingText, ...rest } = props as any;

  const isDisabled = loading || disabled;
  const getSpinnerSize = (): "sm" | "md" | "lg" => {
    if (size === "sm") return "sm";
    if (size === "lg" || size === "xl") return "lg";
    return "md";
  };

  const renderIcon = () => {
    if (loading) {
      if (loadingIcon) return <span className="flex-shrink-0" aria-hidden="true">{loadingIcon}</span>;
      if (showIconOnLoading && icon) return <span className="flex-shrink-0" aria-hidden="true">{icon}</span>;
      return <LoadingSpinner size={getSpinnerSize()} />;
    }
    return icon ? <span className="flex-shrink-0" aria-hidden="true">{icon}</span> : null;
  };

  const content = (
    <>
      {iconPosition === "left" && renderIcon()}
      {children && <span className={size === "icon" ? "sr-only" : ""}>{children}</span>}
      {iconPosition === "right" && renderIcon()}
      {loading && loadingText && <span className="sr-only">{loadingText}</span>}
    </>
  );

  const finalClassName = cn(buttonVariants({ variant, size, rounded, fullWidth }), className);
  const commonProps = { className: finalClassName, "aria-busy": loading, "aria-label": ariaLabel };

  if (asChild) {
    return <Slot ref={ref as React.ForwardedRef<HTMLElement>} {...commonProps} {...(rest as any)}>{children as React.ReactElement}</Slot>;
  }

  if (as === "a") {
    const { href, ...anchorRest } = rest as Omit<AnchorElementProps, keyof BaseButtonPropsUnion>;
    return (
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        {...commonProps}
        role="button"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={(e) => {
          if (isDisabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
          }
        }}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
          }
          anchorRest.onClick?.(e as any);
        }}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref as React.ForwardedRef<HTMLButtonElement>} {...commonProps} disabled={isDisabled} {...(rest as Omit<ButtonElementProps, keyof BaseButtonPropsUnion>)}>
      {content}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants, LoadingSpinner };
export type { ButtonProps, ButtonElementProps, AnchorElementProps, AsChildProps };