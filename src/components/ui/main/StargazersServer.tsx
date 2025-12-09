import { Star } from "lucide-react";
import { Avatar } from "@/packages/Avatar";

export default async function StargazersServer() {
  const res = await fetch("https://api.github.com/repos/iamnavneetrajput/screenui/stargazers", {
    headers: { Accept: "application/vnd.github+json" },
    cache: "no-store", // ensures real-time-ish freshness
  });

  if (!res.ok) {
    return (
      <p className="text-[hsl(var(--foreground)/0.5)] mt-6">
        Failed to load stargazers.
      </p>
    );
  }

  const users = await res.json();

  if (!users.length) {
    return (
      <div className="text-center py-12">
        <Star className="w-12 h-12 text-[hsl(var(--border))] mx-auto mb-4" />
        <p className="text-[hsl(var(--foreground)/0.6)]">No stargazers yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0">
      {users.map((user: any, index: number) => (
        <a
          key={user.login}
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
          style={{
            animationDelay: `${index * 50}ms`,
            animation: "fadeIn 0.5s ease-out forwards",
            opacity: 0,
          }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[hsl(var(--border))] group-hover:border-[hsl(var(--warning))] transition-colors shadow-md">
              <Avatar
               src={user.avatar_url}
               alt={user.login}
               clickable
               className="object-cover h-full w-full bg-[hsl(var(--surface))]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[hsl(var(--warning))] rounded-full p-1.5 border-2 border-[hsl(var(--surface))] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Star className="w-3 h-3 text-[hsl(var(--surface))] fill-[hsl(var(--surface))]" />
            </div>
          </div>
          <span className="text-sm text-[hsl(var(--foreground))] font-medium text-center truncate w-full px-2">
            {user.login}
          </span>
        </a>
      ))}
    </div>
  );
}
