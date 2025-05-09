// src/lib/seo.utils.ts
import { Metadata } from 'next';
import { DEFAULT_SEO } from './seo.config';

export function mergeMetadata(overrides: Metadata): Metadata {
  return {
    ...DEFAULT_SEO,
    ...overrides,
    title: overrides.title ?? DEFAULT_SEO.title,
    description: overrides.description ?? DEFAULT_SEO.description,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      ...overrides.twitter,
    },
  };
}
