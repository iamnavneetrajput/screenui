'use client'
import React, { useState } from 'react'
import { Toggle } from '@/packages/Toggle'
import { cn } from '@/lib/utils'

/* Variant 1 — Basic Controlled Toggle */
export function Variant1() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-12">
      <Toggle
        checked={checked}
        onChange={setChecked}
        toggleClassName="
          bg-[hsl(var(--foreground))]
        "
        thumbClassName="
          bg-[hsl(var(--background))]
        "
      />
    </div>
  )
}

/* Variant 2 — Size Variants */
export function Variant2() {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 sm:gap-2">
        <div className="flex flex-col items-center gap-2">
          <Toggle
            size="sm"
            defaultChecked
            toggleClassName="
              bg-[hsl(var(--foreground))]
            "
            thumbClassName="
              bg-[hsl(var(--background))] 
            "
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle
            size="md"
            defaultChecked
            toggleClassName="
              bg-[hsl(var(--foreground))]
            "
            thumbClassName="
              bg-[hsl(var(--background))]
            "
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle
            size="lg"
            defaultChecked
            toggleClassName="
              bg-[hsl(var(--foreground))]
            "
            thumbClassName="
              bg-[hsl(var(--background))]
            "
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Toggle
            size="lg"
            defaultChecked
            toggleClassName="
              bg-[hsl(var(--foreground))]
            "
            thumbClassName="
              bg-[hsl(var(--background))]
            "
          />
        </div>
      </div>
    </div>
  )
}

/* Variant 3 — Custom iOS-style with animation */
export function Variant3() {
  return (
    <div className='space-y-12'>
      <Toggle
        render={({ checked, toggle }) => (
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className='p-2'>
              <p className="font-medium text-slate-900">Airplane Mode</p>
              <p className="text-xs text-slate-600">iOS-style custom toggle</p>
            </div>
            <button
              onClick={toggle}
              className={cn(
                'relative w-14 h-8 rounded-full transition-colors duration-200',
                checked ? 'bg-green-500' : 'bg-slate-300'
              )}
            >
              <span className={cn(
                'absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-200',
                checked && 'translate-x-6'
              )} />
            </button>
          </div>
        )}
      />
    </div>
  )
}

/* Variant 4 — Custom Card Toggle */
export function Variant4() {
  return (
    <div className="space-y-4">
      <Toggle
        render={({ checked, toggle, disabled }) => (
          <button
            onClick={toggle}
            disabled={disabled}
            className={cn(
              'w-full p-6 rounded-xl border-2 transition-all duration-200',
              checked
                ? 'border-[hsl(var(--border))] bg-yellow-300'
                : 'border-slate-200 bg-white hover:border-slate-300'
            )}
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Premium Plan
                </h3>
                <p className="text-sm text-slate-600">
                  {checked ? 'Active' : 'Inactive'} • $29/month
                </p>
              </div>
              <div className={cn(
                'w-16 ml-8 h-16 rounded-full flex items-center justify-center text-2xl transition-all',
                checked ? 'bg-[hsl(var(--success))] text-white' : 'bg-slate-200 text-slate-400'
              )}>
                {checked ? '✓' : '○'}
              </div>
            </div>
          </button>
        )}
      />
    </div>
  )
}