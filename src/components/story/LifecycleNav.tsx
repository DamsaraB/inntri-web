'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STAGES = [
  { id: 'shipping', label: 'Shipping' },
  { id: 'warehouse', label: 'Warehouse' },
  { id: 'factory', label: 'Factory' },
  { id: 'transport', label: 'Transport' },
  { id: 'tiep', label: 'TIEP' },
  { id: 'finance', label: 'Finance' },
];

const LifecycleNav: React.FC = () => {
  const [active, setActive] = useState(STAGES[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    STAGES.forEach((stage) => {
      const el = document.getElementById(stage.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(stage.id);
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="section-padding pb-8 relative bg-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Logistics ERP lifecycle
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
            From shipping floor to finance close.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Follow the N2N flow through MUTU — Shipping → Warehouse → Factory → Transport → TIEP →
            Finance — one ERP spine for the logistics world, with AI signals where predictions change
            the plan.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {STAGES.map((stage, i) => (
            <React.Fragment key={stage.id}>
              <a
                href={`#${stage.id}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === stage.id
                    ? 'bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-sm'
                    : 'text-gray-500 border border-transparent hover:text-cyan-700 hover:bg-cyan-50/60'
                }`}
              >
                {stage.label}
              </a>
              {i < STAGES.length - 1 && (
                <span className="hidden md:inline text-gray-300 text-xs">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleNav;
