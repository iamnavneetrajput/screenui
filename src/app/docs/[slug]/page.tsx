import { notFound } from "next/navigation";
import { docs, DocType } from "../data/docs-map";
import ComponentDoc from "../renderers/ComponentDoc";
import TemplateDoc from "../renderers/TemplateDoc";
import ThemeDocsPage from "../renderers/ThemeDoc";
import { JSX } from "react";

const DOC_RENDERERS: Record<DocType, () => JSX.Element> = {
  component: ComponentDoc,
  template: TemplateDoc,
  theme: ThemeDocsPage,
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = docs.find(d => d.slug === slug);
  if (!entry) notFound();

  const Renderer = DOC_RENDERERS[entry.type];
  if (!Renderer) notFound();

  return <Renderer />;
}
