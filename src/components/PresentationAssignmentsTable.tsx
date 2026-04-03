'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhotoIcon } from '@heroicons/react/24/outline';
import {
  normalizePresentationRegistry,
  type PresentationRegistry,
} from '@/lib/presentationRegistry';

type ProductRow = { id: string; name: string };

type Props = {
  products: ProductRow[];
};

export default function PresentationAssignmentsTable({ products }: Props) {
  const [registry, setRegistry] = useState<PresentationRegistry | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/presentation/index.json', { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error('missing');
        return r.json();
      })
      .then((raw) => {
        if (!cancelled) setRegistry(normalizePresentationRegistry(raw));
      })
      .catch(() => {
        if (!cancelled) {
          setRegistry({});
          setError(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-padding relative border-t border-cyan-500/10">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card glass-card-hover p-8 md:p-10 card-3d"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25">
              <PhotoIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Demo images per system
              </h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                One registry file lists which images belong to each solution. Put the files in{' '}
                <code className="text-cyan-300/90 text-xs md:text-sm">public/presentation/&lt;system-id&gt;/</code>
                , then edit{' '}
                <code className="text-cyan-300/90 text-xs md:text-sm">public/presentation/index.json</code>
                .
              </p>
            </div>
          </div>

          {!registry ? (
            <p className="text-gray-500 text-sm">Loading assignment list…</p>
          ) : (
            <>
              {error && (
                <p className="text-amber-400/90 text-sm mb-4">
                  Could not load <code className="text-amber-200/90">index.json</code>. Add it under{' '}
                  <code className="text-amber-200/90">public/presentation/</code>.
                </p>
              )}
              <div className="overflow-x-auto rounded-xl border border-cyan-500/20">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-navy-900/80 text-cyan-300/90 border-b border-cyan-500/20">
                      <th className="px-4 py-3 font-semibold">System</th>
                      <th className="px-4 py-3 font-semibold">Folder</th>
                      <th className="px-4 py-3 font-semibold">Image files (slider order)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {products.map((p) => {
                      const files = registry[p.id] ?? [];
                      return (
                        <tr
                          key={p.id}
                          className="border-b border-cyan-500/10 last:border-0 hover:bg-white/[0.03]"
                        >
                          <td className="px-4 py-3 font-medium text-white">{p.name}</td>
                          <td className="px-4 py-3 font-mono text-xs text-cyan-200/70 whitespace-nowrap">
                            public/presentation/{p.id}/
                          </td>
                          <td className="px-4 py-3">
                            {files.length ? (
                              <ul className="list-disc list-inside space-y-1 text-gray-400">
                                {files.map((f) => (
                                  <li key={f} className="font-mono text-xs md:text-sm text-gray-300">
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <span className="text-gray-500 italic">No files listed in index.json</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
