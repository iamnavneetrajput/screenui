import { Suspense } from "react";
import ComponentLoading from "@/components/loading/componentloading";
import StargazersServer from "./StargazersServer";
import { Button } from "@/packages/Button";
import { Star } from "lucide-react";

export default function Stargazers() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10">
      <div className="mb-6 ml-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h5 className="text-2xl font-bold leading-tight flex items-center gap-3">
            Star Givers
          </h5>
          <p className="text-sm text-muted-foreground mt-1">
            Thank you to everyone who starred this project community contributions make this better.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            as="a"
            href="https://github.com/iamnavneetrajput/screenui"
            variant="solid"
            rounded="lg"
            size="md"
            icon={<Star className="h-4 w-4"/>}
            className="bg-[hsl(var(--button))] text-white"
          >
            Star on GitHub
          </Button>
        </div>
      </div>

      <div
        className="
        relative rounded-2xl border border-[hsl(var(--border))]
        bg-[hsl(var(--surface))] p-4 sm:p-6
        shadow-sm
      "
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="text-sm">Showing recent stargazers</div>
          <div className="text-xs px-2 py-1 bg-[hsl(var(--background))] rounded-full">
            Community ❤️
          </div>
        </div>

        <div className="min-h-[120px] animate-fadeIn">
          <Suspense fallback={<ComponentLoading />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
              <StargazersServer />
            </div>
          </Suspense>
        </div>

        <div className=" text-sm text-[hsl(var(--muted))]">
          Want to be featured? Star the repo and refresh this page.
        </div>
      </div>

      <style>{`
      @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn { animation: fadeIn 280ms ease-out both; }
      .stargazer-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.6rem;
      border-radius: 0.75rem;
      border: 1px solid transparent;
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.01));
      transition: transform 120ms ease, box-shadow 120ms ease;
      }
      .stargazer-card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(2,6,23,0.08); }
      `}</style>
    </div>
  );
}
