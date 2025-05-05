"use client";

import { useEffect, useState } from "react";
import { Button } from "./cbutton";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";
import { Search, X, Users, Settings, LayoutDashboard, Component, Navigation } from "lucide-react";

type Tab = "navigate" | "actions" | "team";

interface TeamMember {
  id: string;
  initials: string;
  name: string;
  status: "online" | "away" | "in-meeting";
}

const teamMembers: TeamMember[] = [
  { id: "1", initials: "AS", name: "Alice Smith", status: "online" },
  { id: "2", initials: "BJ", name: "Bob Johnson", status: "away" },
  { id: "3", initials: "CW", name: "Carol Williams", status: "in-meeting" },
];

const recentSearches = [
  { id: "1", name: "Dashboard analytics", icon: <LayoutDashboard className="mr-2 h-4 w-4" /> },
  { id: "2", name: "User settings", icon: <Settings className="mr-2 h-4 w-4" /> },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("navigate");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const getStatusColor = (status: TeamMember["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "in-meeting":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: TeamMember["status"]) => {
    switch (status) {
      case "online":
        return "Online";
      case "away":
        return "Away";
      case "in-meeting":
        return "In Meeting";
      default:
        return status;
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center justify-between border-b px-3">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("navigate")}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === "navigate"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Navigate
            </button>
            <button
              onClick={() => setActiveTab("actions")}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === "actions"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Actions
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === "team"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Team
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CommandInput 
          placeholder={
            activeTab === "navigate"
              ? "Type a command or search..."
              : activeTab === "actions"
              ? "Search actions..."
              : "Search team members..."
          }
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {activeTab === "team" && (
            <CommandGroup heading="Team Members">
              {teamMembers.map((member) => (
                <CommandItem
                  key={member.id}
                  className="flex items-center justify-between py-2"
                  onSelect={() => console.log(`Selected ${member.name}`)}
                >
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium">
                      {member.initials}
                    </div>
                    <span className="ml-3">{member.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`h-2 w-2 rounded-full ${getStatusColor(member.status)} mr-2`} />
                    <span className="text-sm text-muted-foreground">
                      {getStatusText(member.status)}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          {activeTab === "navigate" && (
            <>
              <CommandGroup heading="Recent Searches">
                {recentSearches.map((item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => console.log(`Selected ${item.name}`)}
                    className="flex items-center py-2"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Pages">
                <CommandItem onSelect={() => window.location.href = "/"}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Home
                </CommandItem>
                <CommandItem onSelect={() => window.location.href = "/dashboard"}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </CommandItem>
                <CommandItem onSelect={() => window.location.href = "/settings"}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </CommandItem>
              </CommandGroup>
            </>
          )}
          {activeTab === "actions" && (
            <CommandGroup heading="Available Actions">
              <CommandItem onSelect={() => console.log("Create new project")}>
                <Component className="mr-2 h-4 w-4" />
                Create new project
              </CommandItem>
              <CommandItem onSelect={() => console.log("Invite team member")}>
                <Users className="mr-2 h-4 w-4" />
                Invite team member
              </CommandItem>
              <CommandItem onSelect={() => console.log("Update settings")}>
                <Settings className="mr-2 h-4 w-4" />
                Update settings
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}