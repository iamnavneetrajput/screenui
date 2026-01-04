'use client'
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface AccordionContextValue {
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  disabled?: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion components must be used within Accordion');
  return context;
};

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  toggle: () => void;
  disabled?: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | undefined>(undefined);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) throw new Error('AccordionItem components must be used within AccordionItem');
  return context;
};

const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "space-y-2",
      separated: "space-y-4",
      bordered: "border border-border rounded-lg divide-y divide-border",
      ghost: "space-y-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionItemVariants = cva("group bg-surface", {
  variants: {
    variant: {
      default: "border border-border rounded-lg overflow-hidden",
      separated: "border border-border rounded-lg overflow-hidden",
      bordered: "",
      ghost: "overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  `
    flex items-center justify-between w-full
    text-left font-medium transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  {
    variants: {
      variant: {
        default: "px-4 py-3 hover:bg-surface-hover",
        separated: "px-5 py-4 hover:bg-surface-hover",
        bordered: "px-4 py-3 hover:bg-surface-hover",
        ghost: "px-2 py-2 hover:bg-surface-hover rounded",
      },
      size: {
        sm: "text-sm py-2",
        md: "text-base py-3",
        lg: "text-lg py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const accordionContentVariants = cva(
  `
    overflow-hidden
    text-foreground
  `,
  {
    variants: {
      variant: {
        default: "px-4",
        separated: "px-5",
        bordered: "px-4",
        ghost: "px-2",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const accordionIconVariants = cva("transition-transform duration-200 flex-shrink-0", {
  variants: {
    isOpen: {
      true: "rotate-180",
      false: "rotate-0",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 8 10 12 14 8" />
  </svg>
);

interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  disabled?: boolean;
}

interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionItemVariants> {
  value: string;
  disabled?: boolean;
}

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof accordionTriggerVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}

interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionContentVariants> {
  size?: "sm" | "md" | "lg";
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, type = 'single', value: controlled, defaultValue, onValueChange, collapsible = false, disabled = false, variant, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (type === 'multiple' ? [] : '')
    );

    const value = controlled !== undefined ? controlled : internalValue;

    const handleValueChange = (v: string | string[]) => {
      if (controlled === undefined) setInternalValue(v);
      onValueChange?.(v);
    };

    return (
      <AccordionContext.Provider value={{ value, onValueChange: handleValueChange, type, collapsible, disabled }}>
        <div ref={ref} className={cn(accordionVariants({ variant }), className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, value, disabled, variant, ...props }, ref) => {
    const { value: all, onValueChange, type, collapsible, disabled: disabledParent } = useAccordion();
    const isDisabled = disabled || disabledParent;

    const isOpen =
      type === 'multiple'
        ? Array.isArray(all) && all.includes(value)
        : all === value;

    const toggle = () => {
      if (isDisabled) return;
      if (type === 'multiple') {
        const arr = Array.isArray(all) ? all : [];
        onValueChange?.(isOpen ? arr.filter(v => v !== value) : [...arr, value]);
      } else {
        onValueChange?.(isOpen && collapsible ? '' : value);
      }
    };

    return (
      <AccordionItemContext.Provider value={{ value, isOpen, toggle, disabled: isDisabled }}>
        <div ref={ref} className={cn(accordionItemVariants({ variant }), className)} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, icon, iconPosition = "right", size = "md", variant = "default", disabled, ...props }, ref) => {
    const { isOpen, toggle, disabled: itemDisabled } = useAccordionItem();
    const isDisabled = disabled || itemDisabled;

    const defaultIcon = <ChevronDownIcon className={accordionIconVariants({ isOpen })} />;
    const iconElement = icon !== undefined ? icon : defaultIcon;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        onClick={toggle}
        aria-expanded={isOpen}
        className={cn(accordionTriggerVariants({ variant, size }), className)}
        {...props}
      >
        {iconPosition === "left" && iconElement}
        <span className="flex-1 text-left">{children}</span>
        {iconPosition === "right" && iconElement}
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, size = "md", variant = "default", ...props }, ref) => {
    const { isOpen } = useAccordionItem();
    const innerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (!innerRef.current) return;
      setHeight(isOpen ? innerRef.current.scrollHeight : 0);
    }, [isOpen, children]);

    const getPaddingClass = () => {
      switch (variant) {
        case 'separated': return 'pt-4 pb-4';
        case 'bordered':
        case 'default': return 'pt-3 pb-3';
        case 'ghost': return 'pt-2 pb-2';
        default: return 'pt-3 pb-3';
      }
    };

    return (
      <div
        ref={ref}
        style={{ height: `${height}px`, transition: 'height 250ms cubic-bezier(0.4,0,0.2,1)' }}
        className={cn(accordionContentVariants({ variant, size }), className)}
        {...props}
      >
        <div ref={innerRef} className={getPaddingClass()}>
          {children}
        </div>
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
  accordionIconVariants,
  ChevronDownIcon,
};

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
};