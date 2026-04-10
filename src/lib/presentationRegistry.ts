export type PresentationRegistry = Record<string, string[]>;

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === 'string');
}

/**
 * Accepts:
 * - { "systems": { "tiep": ["a.png"], ... } }
 * - { "tiep": ["a.png"], ... } (flat; keys starting with $ are ignored)
 * - { "tiep": { "slides": ["a.png"] }, ... }
 */
export function normalizePresentationRegistry(raw: unknown): PresentationRegistry {
  if (!raw || typeof raw !== 'object') return {};

  const root = raw as Record<string, unknown>;

  const fromSystems = root.systems;
  if (fromSystems && typeof fromSystems === 'object' && !Array.isArray(fromSystems)) {
    return normalizePresentationRegistry(fromSystems);
  }

  const out: PresentationRegistry = {};
  for (const [id, value] of Object.entries(root)) {
    if (id.startsWith('$')) continue;

    if (isStringArray(value)) {
      out[id] = value.filter((s) => s.length > 0 && !s.includes('..') && !s.startsWith('/'));
      continue;
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const slides = (value as { slides?: unknown }).slides;
      if (isStringArray(slides)) {
        out[id] = slides.filter((s) => s.length > 0 && !s.includes('..') && !s.startsWith('/'));
      }
    }
  }
  return out;
}

export function slidesForProduct(
  registry: PresentationRegistry,
  productId: string
): string[] {
  return registry[productId] ?? [];
}
