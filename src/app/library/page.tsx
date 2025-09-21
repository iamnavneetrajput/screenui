import { MainLayout } from '@/components/layout/main-layout';
import Link from 'next/link';
import { Components_ITEMS } from '@/data/command';

export default function Home() {
  // Sort components alphabetically by title
  const sortedComponents = [...Components_ITEMS].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
        {/* Dynamic Components List */}
        <div
          className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
            pt-8
            w-full
            max-w-5xl
          "
        >
          {sortedComponents.map((component) => (
            <Link
              key={component.id}
              href={component.href ?? '/'}
              className="group"
            >
              <div
                className="
                  bg-card
                  p-5
                  rounded-xl
                  border
                  border-[hsl(var(--border))]
                  transition
                  hover:shadow-lg
                  hover:border-primary
                  h-full
                  flex flex-col
                  justify-center
                "
              >
                <div className="flex items-center gap-3 mb-3 text-primary">
                  {component.icon}
                  <h3 className="text-base sm:text-lg font-medium group-hover:underline">
                    {component.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
