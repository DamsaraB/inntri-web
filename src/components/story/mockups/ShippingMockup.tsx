'use client';

import React from 'react';
import { motion } from 'framer-motion';

const columns = [
  {
    title: 'Picked up',
    count: 4,
    color: 'border-blue-200',
    cards: [
      { id: '#EMS-8821', dest: 'Nugegoda', time: '08:14' },
      { id: '#EMS-8824', dest: 'Dehiwala', time: '08:31' },
    ],
  },
  {
    title: 'In transit',
    count: 6,
    color: 'border-cyan-200',
    cards: [
      { id: '#EMS-8790', dest: 'Kandy', time: 'ETA 14:20' },
      { id: '#EMS-8802', dest: 'Galle', time: 'ETA 16:05' },
      { id: '#EMS-8811', dest: 'Negombo', time: 'ETA 11:40' },
    ],
  },
  {
    title: 'Delivered',
    count: 12,
    color: 'border-emerald-200',
    cards: [
      { id: '#EMS-8701', dest: 'Colombo 03', time: 'Signed' },
      { id: '#EMS-8715', dest: 'Battaramulla', time: 'Signed' },
    ],
  },
];

const ShippingMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">Shipping EMS</p>
          <h3 className="text-gray-900 font-heading font-semibold">Courier pipeline</h3>
        </div>
        <span className="text-xs text-gray-500">Today · 22 parcels</span>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {columns.map((col, ci) => (
          <div key={col.title} className={`rounded-xl border ${col.color} bg-surface-muted p-2 min-h-[200px]`}>
            <div className="flex items-center justify-between mb-2 px-1">
              <p className="text-[11px] font-semibold text-gray-900 uppercase tracking-wide">
                {col.title}
              </p>
              <span className="text-[10px] text-cyan-600">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + i * 0.08 }}
                  className="rounded-lg bg-white border border-gray-200 p-2 cursor-default hover:border-cyan-200 transition-colors shadow-soft"
                >
                  <p className="text-xs text-gray-900 font-medium">{card.id}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{card.dest}</p>
                  <p className="text-[10px] text-cyan-600 mt-1">{card.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingMockup;
