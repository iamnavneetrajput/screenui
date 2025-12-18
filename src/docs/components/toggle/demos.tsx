'use client'
import type { JSX } from 'react'
import { Toggle } from '@/packages/Toggle'
import { Button } from '@/packages/Button'
import { cn } from '@/lib/utils'

export const toggleDemos: Record<string, () => JSX.Element> = {
  ios: () => (
    <Toggle
      render={({ checked, toggle }) => (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg max-w-md">
          <div>
            <p className="font-medium text-slate-900">Airplane Mode</p>
            <p className="text-xs text-slate-600">iOS-style toggle</p>
          </div>

          <Button
            onClick={toggle}
            className={cn(
              'relative w-14 h-8 rounded-full transition-colors duration-200 ml-4',
              checked ? 'bg-green-500' : 'bg-slate-300'
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-200',
                checked && 'translate-x-6'
              )}
            />
          </Button>
        </div>
      )}
    />
  ),
}
