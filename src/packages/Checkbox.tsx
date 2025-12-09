'use client'
import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const checkboxVariants = cva(
  'relative inline-flex items-center cursor-pointer transition-all duration-200',
  {
    variants: {
      disabled: { true: 'opacity-50 cursor-not-allowed', false: '' }
    },
    defaultVariants: { disabled: false }
  }
)

const checkboxInputVariants = cva(
  'peer appearance-none cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      size: { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-7 h-7' },
      variant: {
        default: 'border-2 border-gray-300 rounded checked:bg-blue-600 checked:border-blue-600 hover:border-gray-400 focus-visible:ring-blue-500',
        outline: 'border-2 border-gray-400 rounded checked:border-blue-600 hover:border-gray-500 focus-visible:ring-blue-500',
        filled: 'border-2 border-gray-300 rounded bg-gray-100 checked:bg-blue-600 checked:border-blue-600 hover:bg-gray-200 focus-visible:ring-blue-500',
        soft: 'border-2 border-blue-200 rounded bg-blue-50 checked:bg-blue-600 checked:border-blue-600 hover:bg-blue-100 focus-visible:ring-blue-500'
      },
      rounded: { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded', lg: 'rounded-lg', full: 'rounded-full' },
      error: { true: 'border-red-500 focus-visible:ring-red-500', false: '' },
      disabled: { true: 'cursor-not-allowed', false: '' }
    },
    defaultVariants: { size: 'md', variant: 'default', rounded: 'md', error: false, disabled: false }
  }
)

const checkboxIconVariants = cva(
  'absolute pointer-events-none text-white transition-all duration-200 opacity-0 peer-checked:opacity-100 flex items-center justify-center',
  {
    variants: {
      size: { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-7 h-7' }
    },
    defaultVariants: { size: 'md' }
  }
)

const checkboxLabelVariants = cva('cursor-pointer select-none transition-colors duration-200', {
  variants: {
    size: { sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl' },
    disabled: { true: 'cursor-not-allowed', false: '' }
  },
  defaultVariants: { size: 'md', disabled: false }
})

const checkboxDescriptionVariants = cva('text-gray-600 select-none', {
  variants: {
    size: { sm: 'text-xs mt-0.5', md: 'text-sm mt-1', lg: 'text-base mt-1', xl: 'text-lg mt-1.5' },
    disabled: { true: 'cursor-not-allowed', false: '' }
  },
  defaultVariants: { size: 'md', disabled: false }
})

const checkboxErrorVariants = cva('text-red-600 select-none', {
  variants: {
    size: { sm: 'text-xs mt-0.5', md: 'text-sm mt-1', lg: 'text-base mt-1', xl: 'text-lg mt-1.5' }
  },
  defaultVariants: { size: 'md' }
})

const CheckIcon = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizeMap = { sm: '12', md: '16', lg: '20', xl: '24' }
  return (
    <svg width={sizeMap[size]} height={sizeMap[size]} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const IndeterminateIcon = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizeMap = { sm: '12', md: '16', lg: '20', xl: '24' }
  return (
    <svg width={sizeMap[size]} height={sizeMap[size]} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'outline' | 'filled' | 'soft'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  label?: React.ReactNode
  labelPosition?: 'left' | 'right'
  description?: React.ReactNode
  error?: string | boolean
  icon?: React.ReactNode
  indeterminate?: boolean
  checkboxAlignment?: 'start' | 'center'
  containerClassName?: string
  labelClassName?: string
  descriptionClassName?: string
  errorClassName?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      descriptionClassName,
      errorClassName,
      size = 'md',
      variant = 'default',
      rounded = 'md',
      label,
      labelPosition = 'right',
      description,
      error,
      icon,
      indeterminate = false,
      checkboxAlignment = 'start',
      disabled = false,
      id: providedId,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const generatedId = React.useId()
    const id = providedId || generatedId
    const descId = `${id}-desc`
    const errorId = `${id}-error`

    React.useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = indeterminate
    }, [indeterminate])

    React.useImperativeHandle(ref, () => inputRef.current!)

    const hasError = Boolean(error)
    const errorMessage = typeof error === 'string' ? error : undefined

    const ariaDescribedByIds = [
      description && descId,
      errorMessage && errorId,
      ariaDescribedBy
    ].filter(Boolean).join(' ') || undefined

    const renderIcon = () => {
      if (indeterminate) return icon || <IndeterminateIcon size={size} />
      return icon || <CheckIcon size={size} />
    }

    const checkboxInput = (
      <div className={cn('relative inline-flex items-center flex-shrink-0 mt-0.5', checkboxAlignment === 'start' ? 'self-start' : 'self-center')}>
        <input
          ref={inputRef}
          type="checkbox"
          id={id}
          disabled={disabled}
          aria-describedby={ariaDescribedByIds}
          aria-invalid={ariaInvalid ?? hasError}
          className={cn(checkboxInputVariants({ size, variant, rounded, error: hasError, disabled }), className)}
          {...props}
        />
        <div className={checkboxIconVariants({ size })}>{renderIcon()}</div>
      </div>
    )

    if (!label && !description && !errorMessage) return checkboxInput

    return (
      <div className={cn(checkboxVariants({ disabled }), containerClassName)}>
        {labelPosition === 'left' && (label || description) && (
          <div className="flex flex-col mr-2">
            {label && <label htmlFor={id} className={cn(checkboxLabelVariants({ size, disabled }), labelClassName)}>{label}</label>}
            {description && <span id={descId} className={cn(checkboxDescriptionVariants({ size, disabled }), descriptionClassName)}>{description}</span>}
            {errorMessage && <span id={errorId} className={cn(checkboxErrorVariants({ size }), errorClassName)} role="alert">{errorMessage}</span>}
          </div>
        )}

        {checkboxInput}

        {labelPosition === 'right' && (label || description || errorMessage) && (
          <div className="flex flex-col ml-2">
            {label && <label htmlFor={id} className={cn(checkboxLabelVariants({ size, disabled }), labelClassName)}>{label}</label>}
            {description && <span id={descId} className={cn(checkboxDescriptionVariants({ size, disabled }), descriptionClassName)}>{description}</span>}
            {errorMessage && <span id={errorId} className={cn(checkboxErrorVariants({ size }), errorClassName)} role="alert">{errorMessage}</span>}
          </div>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

interface CheckboxGroupProps {
  children: React.ReactNode
  label?: string
  description?: string
  error?: string
  orientation?: 'horizontal' | 'vertical'
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  required?: boolean
}

const checkboxGroupVariants = cva('flex', {
  variants: {
    orientation: { horizontal: 'flex-row flex-wrap', vertical: 'flex-col' },
    gap: { none: 'gap-0', sm: 'gap-2', md: 'gap-3', lg: 'gap-4', xl: 'gap-6' }
  },
  defaultVariants: { orientation: 'vertical', gap: 'md' }
})

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ children, label, description, error, orientation = 'vertical', gap = 'md', className, required = false }, ref) => {
    const groupId = React.useId()
    const descId = `${groupId}-desc`
    const errorId = `${groupId}-error`

    return (
      <div ref={ref} className={cn('space-y-2', className)} role="group" aria-labelledby={label ? `${groupId}-label` : undefined} aria-describedby={[description && descId, error && errorId].filter(Boolean).join(' ') || undefined}>
        {label && (
          <label id={`${groupId}-label`} className="text-sm font-medium text-gray-900">
            {label}
            {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        {description && <p id={descId} className="text-sm text-gray-600">{description}</p>}
        <div className={checkboxGroupVariants({ orientation, gap })}>{children}</div>
        {error && <p id={errorId} className="text-sm text-red-600" role="alert">{error}</p>}
      </div>
    )
  }
)
CheckboxGroup.displayName = 'CheckboxGroup'

export {
  Checkbox,
  CheckboxGroup,
  CheckIcon,
  IndeterminateIcon,
  checkboxVariants,
  checkboxInputVariants,
  checkboxIconVariants,
  checkboxLabelVariants,
  checkboxDescriptionVariants,
  checkboxErrorVariants,
  checkboxGroupVariants
}

export type { CheckboxProps, CheckboxGroupProps }