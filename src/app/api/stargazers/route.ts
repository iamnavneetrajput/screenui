import { NextResponse } from "next/server";

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3.star+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}/stargazers`,
    { headers, cache: "no-store" } // no caching
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch stargazers" },
      { status: res.status }
    );
  }

  const data = await res.json();

  const stargazers = data.map((user: any) => ({
    login: user.user?.login || user.login,
    avatar_url: user.user?.avatar_url || user.avatar_url,
    html_url: user.user?.html_url || user.html_url,
  }));

  return NextResponse.json(stargazers, { status: 200 });
}
