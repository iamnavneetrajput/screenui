//src/app/api/docs/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const segments = url.pathname.split('/').filter(Boolean)

  const id = segments[segments.length - 1]

  if (!id || id === 'docs') {
    return NextResponse.json(
      { error: 'Missing component id', segments },
      { status: 400 }
    )
  }

  try {
    const module = await import(`@/docs/components/${id}`)

    return NextResponse.json({
      ok: true,
      id,
      doc: module.doc,
    })
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        id,
        error: String(err),
      },
      { status: 404 }
    )
  }
}
