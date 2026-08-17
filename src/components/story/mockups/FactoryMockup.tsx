'use client';

import React from 'react';
import { motion } from 'framer-motion';

const lines = [
  { name: 'Line A · Assembly', target: 420, actual: 398, quality: 99.1 },
  { name: 'Line B · Packaging', target: 510, actual: 522, quality: 98.4 },
  { name: 'Line C · QC Gate', target: 380, actual: 361, quality: 99.6 },
];

const FactoryMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">Factory</p>
          <h3 className="text-gray-900 font-heading font-semibold">Production shift · AM</h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200">
          On schedule
        </span>
      </div>

      <div className="space-y-4">
        {lines.map((line, i) => {
          const pct = Math.min(100, Math.round((line.actual / line.target) * 100));
          return (
            <motion.div
              key={line.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-gray-50 border border-gray-200 p-3"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm text-gray-900 font-medium">{line.name}</p>
                <p className="text-xs text-gray-500">
                  QC {line.quality}%
                </p>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>
                  {line.actual} / {line.target} units
                </span>
                <span className="text-cyan-600">{pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          <p className="text-[10px] text-amber-600 uppercase">Open work orders</p>
          <p className="text-lg font-semibold text-gray-900">14</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
          <p className="text-[10px] text-emerald-600 uppercase">Defect rate</p>
          <p className="text-lg font-semibold text-gray-900">0.8%</p>
        </div>
      </div>
    </div>
  );
};

export default FactoryMockup;
