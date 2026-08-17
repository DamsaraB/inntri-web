'use client';

import React from 'react';
import { motion } from 'framer-motion';

const vehicles = [
  { id: 'FL-01', driver: 'Kasun M.', status: 'En route', eta: '12 min', progress: 72 },
  { id: 'FL-07', driver: 'Nimal R.', status: 'Idle', eta: '—', progress: 0 },
  { id: 'FL-12', driver: 'Amaya S.', status: 'Loading', eta: '4 min', progress: 28 },
];

const FleetMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">Transport</p>
          <h3 className="text-gray-900 font-heading font-semibold">Live vehicle board</h3>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 rounded-md bg-cyan-50 text-cyan-600 border border-cyan-200">24 active</span>
          <span className="px-2 py-1 rounded-md bg-surface-muted text-gray-500 border border-gray-200">3 idle</span>
        </div>
      </div>

      {/* Simple map-like grid */}
      <div className="relative h-28 mb-4 rounded-xl bg-surface-muted border border-gray-200 overflow-hidden">
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(8,145,178,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {[
          { x: '20%', y: '40%' },
          { x: '55%', y: '28%' },
          { x: '72%', y: '62%' },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 rounded-full bg-cyan-600 shadow-soft"
            style={{ left: p.x, top: p.y }}
            animate={{ scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity }}
          />
        ))}
        <p className="absolute bottom-2 left-3 text-[10px] text-gray-500">Colombo metro · GPS</p>
      </div>

      <div className="space-y-3">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-3"
          >
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-sm text-gray-900 font-medium">
                  {v.id} · {v.driver}
                </p>
                <p className="text-xs text-gray-500">ETA {v.eta}</p>
              </div>
              <span className="text-xs text-cyan-600">{v.status}</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${v.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FleetMockup;
