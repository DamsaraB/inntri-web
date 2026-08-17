'use client';

import React from 'react';
import { motion } from 'framer-motion';

const routes = [
  { from: 'Colombo Hub', to: 'Kandy DC', loads: 18, status: 'Optimized' },
  { from: 'Negombo Port', to: 'Colombo Hub', loads: 9, status: 'In progress' },
  { from: 'Galle DC', to: 'Matara', loads: 6, status: 'Scheduled' },
];

const TiepMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">TIEP</p>
          <h3 className="text-gray-900 font-heading font-semibold">Transport orchestration</h3>
        </div>
        <span className="text-xs text-gray-500">3 corridors active</span>
      </div>

      <div className="space-y-3 mb-4">
        {routes.map((r, i) => (
          <motion.div
            key={r.from + r.to}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-gray-50 border border-gray-200 p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-900 font-medium">{r.from}</span>
              <span className="text-cyan-600 text-xs">→</span>
              <span className="text-sm text-gray-900 font-medium">{r.to}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">{r.loads} loads today</span>
              <span className="text-cyan-600">{r.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-cyan-200 bg-surface-muted p-3">
        <p className="text-[10px] text-gray-500 uppercase mb-2">Route savings this week</p>
        <div className="flex items-end gap-1 h-16">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan-600 to-cyan-400"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

export default TiepMockup;
