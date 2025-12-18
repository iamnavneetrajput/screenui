// --- Installation Commands (structured) ---
export const InstallCommands = {
    dependency: '',
    ts: "npx screenui-cli@latest add card --lang ts --path src/components",
    js: "npx screenui-cli@latest add card --lang js --path src/components",
};

// --- TypeScript Examples ---
export const TsCode1 = `'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function LoginCardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
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
`;

export const TsCode2 = `'use client';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/Card";
import { Button } from "@/components/Button";
import { Avatar} from "@/components/Avatar";

export function MessagePreviewCardDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex items-start gap-3">
          <Avatar className="h-10 w-10"
           name="John Doe"
          />

          <div>
            <CardTitle className="text-base font-semibold">John Doe</CardTitle>
            <CardDescription className="text-xs">2 hours ago</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hey! Just wanted to check in about the design update.  
            Do you have an ETA on the new layout?
          </p>
        </CardContent>

        <CardFooter className="flex gap-3">
          <Button size="sm">Reply</Button>
          <Button size="sm" variant="outline">Mark as Read</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`;

// --- JavaScript Examples ---
// Reuse TS code for examples that don't have type annotations
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;

// --- Meta Data ---
export const Component = "Card";
export const Title = "Versatile Card Component";
export const Description = "A customizable card component supporting various layouts, content types, and interactive states.";
export const Lastupdated = "2025-12-4";
export const Version = "1.0.0";
