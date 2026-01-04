'use client'

import React, { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const stepIndicatorVariants = cva(
  'flex items-center justify-center shrink-0 rounded-full font-medium transition-all',
  {
    variants: {
      size: {
        sm: 'w-6 h-6 text-xs',
        md: 'w-8 h-8 text-sm',
        lg: 'w-10 h-10 text-base',
      },
      state: {
        pending: 'bg-muted text-muted-foreground',
        active: 'bg-primary text-primary-foreground ring-2 ring-primary/30',
        completed: 'bg-primary text-primary-foreground',
        error: 'bg-danger text-danger-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'pending',
    },
  }
)

type StepCardContextValue = {
  currentStep: number
  setCurrentStep: (step: number) => void
  orientation: 'horizontal' | 'vertical'
  size: 'sm' | 'md' | 'lg'
}

const StepCardContext = createContext<StepCardContextValue | null>(null)

const useStepCardContext = () => {
  const ctx = useContext(StepCardContext)
  if (!ctx) {
    throw new Error('StepCard must be used within StepCardContainer')
  }
  return ctx
}

export interface StepCardContainerProps {
  currentStep?: number
  defaultStep?: number
  onStepChange?: (step: number) => void
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export function StepCardContainer({
  currentStep: controlledStep,
  defaultStep = 1,
  onStepChange,
  orientation = 'horizontal',
  size = 'md',
  className,
  children,
}: StepCardContainerProps) {
  const [internalStep, setInternalStep] = useState(defaultStep)
  const currentStep = controlledStep ?? internalStep

  const setCurrentStep = (step: number) => {
    if (controlledStep === undefined) setInternalStep(step)
    onStepChange?.(step)
  }

  return (
    <StepCardContext.Provider
      value={{ currentStep, setCurrentStep, orientation, size }}
    >
      <div
        className={cn(
          orientation === 'vertical'
            ? 'flex flex-col'
            : 'flex items-start gap-6',
          className
        )}
        role="group"
        aria-label="Progress steps"
      >
        {children}
      </div>
    </StepCardContext.Provider>
  )
}

export interface StepCardProps {
  step: number
  title: string
  description?: string
  icon?: React.ReactNode
  state?: 'pending' | 'active' | 'completed' | 'error'
  disabled?: boolean
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

export function StepCard({
  step,
  title,
  description,
  icon,
  state: forcedState,
  disabled = false,
  onClick,
  className,
  children,
}: StepCardProps) {
  const { currentStep, setCurrentStep, orientation, size } =
    useStepCardContext()

  const state =
    forcedState ??
    (step < currentStep
      ? 'completed'
      : step === currentStep
      ? 'active'
      : 'pending')

  const isInteractive = !disabled && !!onClick

  const activate = () => {
    if (!isInteractive) return
    onClick?.()
    setCurrentStep(step)
  }

  const interactiveProps = isInteractive
    ? {
        role: 'button' as const,
        tabIndex: 0,
        onClick: activate,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            activate()
          }
        },
      }
    : {}

  /* ---------- Vertical ---------- */
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'grid grid-cols-[auto_1fr] gap-x-4 py-3',
          disabled && 'opacity-50',
          className
        )}
      >
        <div className="flex flex-col items-center">
          <div className={stepIndicatorVariants({ size, state })}>
            {state === 'completed' ? (
              <CheckIcon />
            ) : state === 'error' ? (
              <ErrorIcon />
            ) : (
              icon ?? step
            )}
          </div>
        </div>

        <div
          {...interactiveProps}
          aria-current={state === 'active' ? 'step' : undefined}
          className={cn(
            'min-w-0',
            isInteractive && 'cursor-pointer hover:opacity-80'
          )}
        >
          <div className="font-medium">{title}</div>
          {description && (
            <div className="mt-1 text-sm text-muted-foreground">
              {description}
            </div>
          )}
          {children && <div className="mt-2">{children}</div>}
        </div>
      </div>
    )
  }

  /* ---------- Horizontal ---------- */
  return (
    <div
      {...interactiveProps}
      aria-current={state === 'active' ? 'step' : undefined}
      className={cn(
        'grid grid-rows-[auto_auto] justify-items-center flex-1 min-w-0',
        isInteractive && 'cursor-pointer hover:opacity-80',
        disabled && 'opacity-50',
        className
      )}
    >
      <div className={stepIndicatorVariants({ size, state })}>
        {state === 'completed' ? (
          <CheckIcon />
        ) : state === 'error' ? (
          <ErrorIcon />
        ) : (
          icon ?? step
        )}
      </div>

      <div className="mt-2 text-center">
        <div className="font-medium">{title}</div>
        {description && (
          <div className="mt-1 text-sm text-muted-foreground">
            {description}
          </div>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  )
}

export interface StepConnectorProps {
  completed?: boolean
  className?: string
}

export function StepConnector({
  completed = false,
  className,
}: StepConnectorProps) {
  const { orientation, size } = useStepCardContext()

  if (orientation === 'vertical') {
    return (
      <div className="grid grid-cols-[auto_1fr]">
        <div className="flex justify-center">
          <div className={cn('w-px h-6', completed ? 'bg-primary' : 'bg-muted')} />
        </div>
        <div />
      </div>
    )
  }

  /* ---------- Horizontal (CENTERED ON INDICATOR) ---------- */
  const offset =
    size === 'sm'
      ? 'mt-[calc(theme(spacing.6)/2)]'
      : size === 'lg'
      ? 'mt-[calc(theme(spacing.10)/2)]'
      : 'mt-[calc(theme(spacing.8)/2)]'

  return (
    <div className={cn('flex-1', className)}>
      <div
        className={cn(
          'h-px w-full',
          offset,
          completed ? 'bg-primary' : 'bg-muted'
        )}
      />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export { stepIndicatorVariants }
