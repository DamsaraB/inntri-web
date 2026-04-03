'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';
import {
  normalizePresentationRegistry,
  slidesForProduct,
} from '@/lib/presentationRegistry';

type Props = {
  productId: string;
};

const NUMBERED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'] as const;

async function firstExistingPath(candidates: string[]): Promise<string | null> {
  for (const path of candidates) {
    try {
      const res = await fetch(path, { cache: 'no-store' });
      if (res.ok) return path;
    } catch {
      // Ignore probe failures and continue.
    }
  }
  return null;
}

async function discoverNumberedImages(productId: string, max = 40): Promise<string[]> {
  const discovered: string[] = [];
  let consecutiveMisses = 0;

  for (let i = 1; i <= max; i += 1) {
    const candidates = NUMBERED_EXTENSIONS.map(
      (ext) => `/presentation/${productId}/${i}.${ext}`
    );
    const hit = await firstExistingPath(candidates);

    if (hit) {
      discovered.push(hit);
      consecutiveMisses = 0;
      continue;
    }

    consecutiveMisses += 1;
    // Stop scanning once a few gaps appear after we've already found numbered files.
    if (discovered.length > 0 && consecutiveMisses >= 4) break;
  }

  return discovered;
}

async function loadSlidesForProduct(productId: string): Promise<{
  urls: string[];
}> {
  const discovered = await discoverNumberedImages(productId);
  if (discovered.length > 0) {
    return {
      urls: discovered,
    };
  }

  const indexRes = await fetch('/presentation/index.json', { cache: 'no-store' });
  if (indexRes.ok) {
    try {
      const raw = await indexRes.json();
      const registry = normalizePresentationRegistry(raw);
      const names = slidesForProduct(registry, productId);
      if (names.length > 0) {
        return {
          urls: names.map((f) => `/presentation/${productId}/${f}`),
        };
      }
    } catch {
      /* fall through */
    }
  }

  const manRes = await fetch(`/presentation/${productId}/manifest.json`, {
    cache: 'no-store',
  });
  if (!manRes.ok) {
    return { urls: [] };
  }
  try {
    const data = await manRes.json();
    if (!Array.isArray(data)) return { urls: [] };
    const names = data.filter(
      (f): f is string =>
        typeof f === 'string' && f.length > 0 && !f.includes('..') && !f.startsWith('/')
    );
    return {
      urls: names.map((f) => `/presentation/${productId}/${f}`),
    };
  } catch {
    return { urls: [] };
  }
}

export default function ProductDemoSlider({ productId }: Props) {
  const [slides, setSlides] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setReady(false);
    setIndex(0);
    let cancelled = false;

    loadSlidesForProduct(productId)
      .then(({ urls }) => {
        if (cancelled) return;
        setSlides(urls);
      })
      .catch(() => {
        if (!cancelled) {
          setSlides([]);
        }
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [productId]);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const n = slides.length;
        if (n === 0) return i;
        return (i + delta + n) % n;
      });
    },
    [slides.length]
  );

  useEffect(() => {
    if (!slides.length) return;
    setIndex((i) => Math.min(i, slides.length - 1));
  }, [slides]);

  if (!ready) {
    return (
      <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center border border-cyan-500/30">
        <p className="text-gray-400 text-sm">Loading preview…</p>
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center border border-cyan-500/30">
        <div className="text-center px-4">
          <PlayIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <p className="text-gray-300">Dashboard preview</p>
          <p className="text-gray-500 text-xs mt-3 max-w-md mx-auto">
            Add this system to <code className="text-cyan-500/80">public/presentation/index.json</code>{' '}
            and place images in <code className="text-cyan-500/80">public/presentation/{productId}/</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/30 bg-navy-900">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${productId}-${index}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- public demos: SVG/PNG/JPG from registry */}
            <img
              src={slides[index]}
              alt={`Product screenshot ${index + 1} of ${slides.length}`}
              className="absolute inset-0 h-full w-full object-contain bg-navy-950"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg glass-card border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg glass-card border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? 'w-8 bg-cyan-400'
                      : 'w-2 bg-cyan-400/40 hover:bg-cyan-400/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
}
