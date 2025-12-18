import type { Example } from '@/docs/schema'

// TypeScript (uses ScreenUI Button abstraction)

const toggleIosTsCode = `
import { Toggle } from '@/components/Toggle'
import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'

export function Example() {
  return (
    <Toggle
      render={({ checked, toggle }) => (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <p className="font-medium text-slate-900">Airplane Mode</p>
            <p className="text-xs text-slate-600">iOS-style toggle</p>
          </div>

          <Button
            onClick={toggle}
            className={cn(
              'relative w-14 h-8 rounded-full transition-colors ml-4',
              checked ? 'bg-green-500' : 'bg-slate-300'
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transition-transform',
                checked && 'translate-x-6'
              )}
            />
          </Button>
        </div>
      )}
    />
  )
}
`.trim()

// JavaScript (framework-agnostic, native button)

const toggleIosJsCode = `
import { Toggle } from '@/components/Toggle'
import { cn } from '@/lib/utils'

export function Example() {
  return (
    <Toggle
      render={({ checked, toggle }) => (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <p className="font-medium text-slate-900">Airplane Mode</p>
            <p className="text-xs text-slate-600">iOS-style toggle</p>
          </div>

          <button
            onClick={toggle}
            className={cn(
              'relative w-14 h-8 rounded-full transition-colors ml-4',
              checked ? 'bg-green-500' : 'bg-slate-300'
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transition-transform',
                checked && 'translate-x-6'
              )}
            />
          </button>
        </div>
      )}
    />
  )
}
`.trim()

// Export examples

export const toggleExamples: Example[] = [
  {
    id: 'ios',
    title: 'iOS Style Toggle',
    description:
      'A fully custom toggle built using the headless render API.',
    code: [
      { language: 'typescript', code: toggleIosTsCode },
      { language: 'javascript', code: toggleIosJsCode },
    ],
  },
]
