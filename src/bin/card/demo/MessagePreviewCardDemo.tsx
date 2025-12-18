"use client";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/packages/Card";
import { Button } from "@/packages/Button";
import { Avatar} from "@/packages/Avatar";

export function MessagePreviewCardDemo() {
  return (
    <div className="flex items-center justify-center">
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
