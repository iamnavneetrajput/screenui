'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/packages/Button'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant='ghost'
        icon={<Sun className="w-5 h-5" />}
        className="relative inline-flex h-9 w-9 items-center justify-center"
        disabled
      >
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  return (
    <Button
      variant='ghost'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative inline-flex h-9 w-9 items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  )
}