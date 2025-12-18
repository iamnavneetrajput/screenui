"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/packages/Card";
import { Button } from "@/packages/Button";
import { Input } from "@/packages/Input";

export function LoginCardDemo() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-xl font-semibold">Welcome Back</CardTitle>
          <CardDescription>Please sign in to your account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button fullWidth>Sign In</Button>

          <Button variant="ghost" fullWidth>
            Create an Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
