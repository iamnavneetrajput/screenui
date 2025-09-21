import React from 'react';
import IntroBanner from '@/components/ui/main/banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/main/card';
import { Badge } from "@/components/ui/badge"
import TerminalCommand from '@/components/ui/main/TerminalCommand';
import { Code2, Palette, Moon, Zap } from "lucide-react"
const AwakenPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full pt-12">
      <IntroBanner
        title="Awaken – Starter Layout for ScreenUI"
        description="A minimal and customizable starter layout for building modern web applications with ScreenUI."
        buttonLabel='Get Started'
        buttonLink='/docs/awaken'
      />
      <div className="min-h-screen pt-4">
        <div className="mx-auto">

          <Card className="w-full mx-auto flex flex-col justify-between shadow-lg rounded-2xl border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Awaken</CardTitle>
              <CardDescription>
                A minimal and customizable starter layout for building modern web applications with ScreenUI.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2">
                <Badge className="flex items-center gap-1">
                  <Code2 size={14} /> Next.js / Vite
                </Badge>
                <Badge className="flex items-center gap-1">
                  <Palette size={14} /> Tailwind CSS
                </Badge>
                <Badge className="flex items-center gap-1">
                  <Moon size={14} /> Dark Mode
                </Badge>
                <Badge className="flex items-center gap-1">
                  <Zap size={14} /> ScreenUI Ready
                </Badge>
              </div>

              {/* Quick feature list */}
              <ul className="list-disc list-inside text-sm text-[hsl(var(--muted-foreground))] space-y-1">
                <li>Prebuilt dark/light theme toggle</li>
                <li>Responsive layout system</li>
                <li>Works with all ScreenUI components</li>
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <TerminalCommand command="npx create-screenui@latest layout" />
            </CardFooter>
          </Card>

        </div>
      </div>

    </main>
  );
};

export default AwakenPage;