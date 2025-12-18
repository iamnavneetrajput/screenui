// lib/loadComponentDocs.ts

type DemoChild = { id: string; title: string };

/**
 * Loads component documentation and returns demo children for sidebar
 * @param componentId - The component ID (e.g., 'accordion', 'button')
 * @returns Array of demo children with id and title
 */
export async function loadComponentDocs(
  componentId: string
): Promise<DemoChild[]> {
  try {
    // Dynamically import the component module
    const module = await import(`@/docs/components/${componentId}`);
    
    if (!module.doc || !module.doc.examples) {
      console.warn(`No examples found for component: ${componentId}`);
      return [];
    }

    // Map examples to demo children format
    const demoChildren: DemoChild[] = module.doc.examples.map((example: any) => ({
      id: example.id,
      title: example.title,
    }));

    return demoChildren;
  } catch (error) {
    console.error(`Failed to load docs for ${componentId}:`, error);
    return [];
  }
}