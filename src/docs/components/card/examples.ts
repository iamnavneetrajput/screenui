import type { Example } from '@/docs/schema'

// Shared code snippets (TS === JS)

const cardLoginCode = `
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/Card'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export function LoginCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="flex flex-col">
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Please sign in</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button fullWidth>Sign In</Button>
        <Button variant="ghost" fullWidth>
          Create Account
        </Button>
      </CardFooter>
    </Card>
  )
}
`.trim()

// Export examples

export const cardExamples: Example[] = [
  {
    id: 'default',
    title: 'Login Card',
    description: 'A simple login card layout using Card primitives.',
    code: [
      { language: 'typescript', code: cardLoginCode },
      { language: 'javascript', code: cardLoginCode },
    ],
  },
]
