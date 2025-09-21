import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 select-none",
  {
    variants: {
      variant: {
        solid: "shadow-sm hover:shadow",
        outline: "border-2 bg-transparent shadow-sm",
        soft: "bg-opacity-10 hover:bg-opacity-20",
        ghost: "hover:bg-opacity-10",
        dot: "gap-2", // spacing only, dot rendered in JSX
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
    defaultVariants: {
      variant: "solid",
      size: "sm",
      rounded: "md",
      interactive: false,
    },
  }
);

interface BaseBadgeProps extends VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  interactive?: boolean;
  icon?: React.ReactNode;
  onRemove?: () => void;
  disabled?: boolean;
}

interface SpanBadgeProps
  extends BaseBadgeProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BaseBadgeProps> {
  as?: "span";
}

interface ButtonBadgeProps
  extends BaseBadgeProps,
    Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof BaseBadgeProps
    > {
  as: "button";
}

type BadgeProps = SpanBadgeProps | ButtonBadgeProps;

const isButtonProps = (props: BadgeProps): props is ButtonBadgeProps => {
  return props.as === "button";
};

const RemoveButton = ({
  onRemove,
  size = "sm",
}: {
  onRemove: () => void;
  size?: string;
}) => {
  const iconSize = {
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
    xl: "w-4 h-4",
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
      className="ml-1 -mr-1 rounded-full p-0.5 hover:bg-black/10 focus:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current/30 transition-colors"
      aria-label="Remove badge"
      type="button"
      tabIndex={-1}
    >
      <svg
        className={cn(
          "flex-shrink-0",
          iconSize[size as keyof typeof iconSize] || iconSize.sm
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

const Badge = React.forwardRef<HTMLSpanElement | HTMLButtonElement, BadgeProps>(
  (props, ref) => {
    const {
      className,
      variant = "solid",
      size = "sm",
      rounded = "md",
      interactive = false,
      icon,
      onRemove,
      disabled = false,
      children,
      ...restProps
    } = props;

    const isDisabled = disabled;

    const content = (
      <>
        {variant === "dot" && (
          <span
            className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"
            aria-hidden="true"
          />
        )}
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children && <span className="truncate">{children}</span>}
        {onRemove && <RemoveButton onRemove={onRemove} size={size || "sm"} />}
      </>
    );

    const classNames = cn(
      badgeVariants({
        variant,
        size,
        rounded,
        interactive: interactive || !!onRemove,
      }),
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );

    if (isButtonProps(props)) {
      const { as, ...buttonProps } = restProps as Omit<
        ButtonBadgeProps,
        keyof BaseBadgeProps
      >;

      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={classNames}
          disabled={isDisabled}
          type="button"
          {...buttonProps}
        >
          {content}
        </button>
      );
    }

    const { as, ...spanProps } = restProps as Omit<
      SpanBadgeProps,
      keyof BaseBadgeProps
    >;

    return (
      <span
        ref={ref as React.ForwardedRef<HTMLSpanElement>}
        className={classNames}
        {...spanProps}
      >
        {content}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
export type { SpanBadgeProps, ButtonBadgeProps };
