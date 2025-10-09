"use client";

import { useEffect, useState } from "react";
import { Icons } from "@/utils/icons";

interface Stargazer {
  login: string;
  avatar_url: string;
  html_url: string;
}

export default function Stargazers() {
  const [users, setUsers] = useState<Stargazer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStargazers = async () => {
    try {
      const res = await fetch("/api/stargazers", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch stargazers");
      const data: Stargazer[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStargazers();
    const interval = setInterval(fetchStargazers, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p className="text-gray-500 mt-6">Loading stargazers...</p>;
  }

  return (
    <div className=" text-center">
      <p className="text-[hsl(var--(foreground))] mb-3">
        <Icons.star className="inline-block text-yellow-300" /> Stars Givers — Thank you to everyone who starred this project!
      </p>
      <p className="mb-4">
        If you want, you can also <a
          href="https://github.com/iamnavneetrajput/screenui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        ><Icons.star className="inline-block" /> Star us here</a> and show up in this list.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {users.length === 0 && (
          <p className="text-gray-500">No stargazers yet <Icons.star className="inline-block" /></p>
        )}
        {users.map((u) => (
          <a
            key={u.login}
            href={u.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border mt-4 rounded overflow-hidden hover:scale-110 transition-transform"
            title={u.login}
          >
            <img
              src={u.avatar_url}
              alt={u.login}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );

}
