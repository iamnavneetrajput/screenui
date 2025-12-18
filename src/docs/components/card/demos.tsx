'use client'

import type { JSX } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/packages/Card'
import { Button } from '@/packages/Button'
import { Input } from '@/packages/Input'

export const cardDemos: Record<string, () => JSX.Element> = {
  default: () => (
    <div className="flex items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader className='flex flex-col'>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Please sign in to your account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="email" placeholder="you@example.com" />
          <Input type="password" placeholder="••••••••" />
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button fullWidth>Sign In</Button>
          <Button variant="ghost" fullWidth>
            Create an Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
