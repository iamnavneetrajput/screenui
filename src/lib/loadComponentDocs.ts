// lib/loadComponentDocs.ts
export async function loadComponentDocs(componentSlug: string) {
  try {
    const mod = await import(`@/app/components/${componentSlug}/config/demo`);
    const demos = mod?.Demos ?? [];
    return demos.map((d: any) => ({
      id: d.id,
      title: d.config?.title ?? d.id,
      // only a fragment; we'll combine with base href from Components_ITEMS
    }));
  } catch (err) {
    return [];
  }
}
