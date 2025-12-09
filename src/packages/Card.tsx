import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'relative rounded-lg overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        elevated: 'bg-card shadow-lg hover:shadow-xl',
        outlined: 'bg-card border-2 border-border hover:border-accent',
        filled: 'bg-muted hover:bg-muted/80',
        ghost: 'bg-transparent hover:bg-accent'
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10'
      },
      interactive: {
        true: 'cursor-pointer active:scale-[0.98] focus-visible:outline-none',
        false: ''
      },
      hover: {
        true: 'hover:shadow-2xl',
        false: ''
      },
      fullWidth: {
        true: 'w-full',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'elevated',
      padding: 'md',
      interactive: false,
      hover: false,
      fullWidth: false
    }
  }
)

const cardHeaderVariants = cva('flex items-start', {
  variants: {
    spacing: { none: '', sm: 'mb-2', md: 'mb-4', lg: 'mb-6', xl: 'mb-8' },
    align: { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between' }
  },
  defaultVariants: { spacing: 'md', align: 'start' }
})

const cardTitleVariants = cva('font-semibold text-foreground', {
  variants: {
    size: { xs: 'text-sm', sm: 'text-base', md: 'text-lg', lg: 'text-xl', xl: 'text-2xl', '2xl': 'text-3xl' },
    truncate: { true: 'truncate', false: '' }
  },
  defaultVariants: { size: 'md', truncate: false }
})

const cardDescriptionVariants = cva('text-muted-foreground', {
  variants: {
    size: { xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg' },
    spacing: { none: '', xs: 'mt-0.5', sm: 'mt-1', md: 'mt-2', lg: 'mt-3' },
    truncate: { true: 'truncate', false: '' }
  },
  defaultVariants: { size: 'sm', spacing: 'sm', truncate: false }
})

const cardContentVariants = cva('text-foreground', {
  variants: {
    size: { xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg' },
    spacing: { none: '', sm: 'space-y-2', md: 'space-y-4', lg: 'space-y-6' }
  },
  defaultVariants: { size: 'md', spacing: 'none' }
})

const cardFooterVariants = cva('flex items-center', {
  variants: {
    spacing: { none: '', sm: 'mt-2', md: 'mt-4', lg: 'mt-6', xl: 'mt-8' },
    align: { start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between', around: 'justify-around', evenly: 'justify-evenly' },
    direction: { row: 'flex-row', col: 'flex-col' },
    gap: { none: 'gap-0', xs: 'gap-1', sm: 'gap-2', md: 'gap-3', lg: 'gap-4', xl: 'gap-6' },
    wrap: { true: 'flex-wrap', false: 'flex-nowrap' }
  },
  defaultVariants: { spacing: 'md', align: 'start', direction: 'row', gap: 'sm', wrap: false }
})

const cardImageVariants = cva('w-full object-cover', {
  variants: {
    height: { sm: 'h-32', md: 'h-48', lg: 'h-64', xl: 'h-80', auto: 'h-auto' },
    aspectRatio: { square: 'aspect-square', video: 'aspect-video', auto: '' },
    position: { top: 'object-top', center: 'object-center', bottom: 'object-bottom' }
  },
  defaultVariants: { height: 'md', aspectRatio: 'auto', position: 'center' }
})

const cardDividerVariants = cva('border-border', {
  variants: {
    spacing: { none: 'my-0', sm: 'my-2', md: 'my-4', lg: 'my-6' },
    orientation: { horizontal: 'border-t', vertical: 'border-l h-full' }
  },
  defaultVariants: { spacing: 'md', orientation: 'horizontal' }
})

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  interactive?: boolean
  hover?: boolean
  fullWidth?: boolean
  as?: 'div' | 'article' | 'section'
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'between'
  as?: 'div' | 'header'
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  truncate?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg'
  truncate?: boolean
  as?: 'p' | 'span' | 'div'
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  as?: 'div' | 'section'
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  direction?: 'row' | 'col'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  wrap?: boolean
  as?: 'div' | 'footer'
}

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  aspectRatio?: 'square' | 'video' | 'auto'
  position?: 'top' | 'center' | 'bottom'
}

interface CardDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, hover, fullWidth, as: Comp = 'div', children, onClick, ...props }, ref) => {
    const interactiveProps = interactive && onClick ? {
      role: 'button',
      tabIndex: 0,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.(e as any)
        }
      }
    } : {}

    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, padding, interactive, hover, fullWidth }), className)}
        onClick={onClick}
        {...interactiveProps}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, spacing, align, as: Comp = 'div', children, ...props }, ref) => (
    <Comp ref={ref} className={cn(cardHeaderVariants({ spacing, align }), className)} {...props}>
      {children}
    </Comp>
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, size, truncate, as: Comp = 'h3', children, ...props }, ref) => (
    <Comp ref={ref} className={cn(cardTitleVariants({ size, truncate }), className)} {...props}>
      {children}
    </Comp>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, size, spacing, truncate, as: Comp = 'p', children, ...props }, ref) => (
    <Comp ref={ref as any} className={cn(cardDescriptionVariants({ size, spacing, truncate }), className)} {...props}>
      {children}
    </Comp>
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, size, spacing, as: Comp = 'div', children, ...props }, ref) => (
    <Comp ref={ref} className={cn(cardContentVariants({ size, spacing }), className)} {...props}>
      {children}
    </Comp>
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, spacing, align, direction, gap, wrap, as: Comp = 'div', children, ...props }, ref) => (
    <Comp ref={ref} className={cn(cardFooterVariants({ spacing, align, direction, gap, wrap }), className)} {...props}>
      {children}
    </Comp>
  )
)
CardFooter.displayName = 'CardFooter'

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, height, aspectRatio, position, alt = '', loading = 'lazy', ...props }, ref) => (
    <img
      ref={ref}
      alt={alt}
      loading={loading}
      className={cn(cardImageVariants({ height, aspectRatio, position }), className)}
      {...props}
    />
  )
)
CardImage.displayName = 'CardImage'

const CardDivider = React.forwardRef<HTMLHRElement, CardDividerProps>(
  ({ className, spacing, orientation, ...props }, ref) => (
    <hr ref={ref} className={cn(cardDividerVariants({ spacing, orientation }), className)} aria-hidden="true" {...props} />
  )
)
CardDivider.displayName = 'CardDivider'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  CardDivider,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants,
  cardImageVariants,
  cardDividerVariants
}

export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardImageProps,
  CardDividerProps
}