import React, {useState} from "react";
import { Button } from "@/packages/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/packages/Card";

export function NotificationCardDemo() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="text-6xl">✨</span>
          <p className="text-gray-600">Notification dismissed</p>
          <Button onClick={() => setDismissed(false)} variant="outline">
            Show Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-white p-8">
      <Card className="max-w-lg w-full border-l-4 border-blue-500">
        <CardHeader align="between">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
              <span className="text-3xl">🎉</span>
            </div>
            <div className="flex-1">
              <CardTitle size="lg" className="text-black">New Feature: Team Collaboration</CardTitle>
              <CardDescription className="mt-1 text-black">
                Collaborate in real-time with your team members
              </CardDescription>
            </div>
          </div>
          <Button
            variant='ghost'
            onClick={() => setDismissed(true)}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Dismiss notification"
          >
            <span className="text-gray-400 text-xl">×</span>
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              We've just launched our new team collaboration features! Now you can work together with your colleagues in real-time, share feedback instantly, and boost your team's productivity.
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">💬</p>
                <p className="text-xs font-medium text-gray-700">Live Chat</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">📝</p>
                <p className="text-xs font-medium text-gray-700">Shared Docs</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-2xl mb-1">🎯</p>
                <p className="text-xs font-medium text-gray-700">Task Assign</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter spacing="lg" align="end" gap="md" className="text-black">
          <Button variant="ghost" onClick={() => setDismissed(true)}>
            Maybe Later
          </Button>
          <Button>Try It Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}