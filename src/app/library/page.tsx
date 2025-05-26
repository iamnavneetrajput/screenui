import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
        <div className="w-full max-w-3xl space-y-8 text-center">
          <div className="bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto">
            <Package className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Screenui Component Library
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A beautifully designed component library for modern web applications.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/components/button">
              <Button >
                Browse Components <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            {/* <Link href="https://github.com/your-username/component-library" target="_blank">
              <Button variant="outline">View on GitHub</Button>
            </Link> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card p-6 rounded-lg border border-[hsl(var(--border))] ">
              <h3 className="text-lg font-medium mb-2">Beautifully Designed</h3>
              <p className="text-muted-foreground">
                Clean, modern designs with attention to detail and accessibility.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-[hsl(var(--border))] ">
              <h3 className="text-lg font-medium mb-2">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simple installation with comprehensive documentation and examples.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-[hsl(var(--border))] ">
              <h3 className="text-lg font-medium mb-2">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Extend and modify components to fit your project's unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}