import { NextResponse } from "next/server";

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}`,
    { headers, cache: "no-store" }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch repo info" }, { status: res.status });
  }

  const data = await res.json();

  return NextResponse.json({ stargazers_count: data.stargazers_count });
}
