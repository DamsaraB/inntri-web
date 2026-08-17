'use client';

import React from 'react';
import { motion } from 'framer-motion';

const bins = [
  { sku: 'SKU-1042', name: 'Widget A', qty: 1280, status: 'OK', color: 'text-emerald-600' },
  { sku: 'SKU-2088', name: 'Packaging Kit', qty: 94, status: 'Low', color: 'text-amber-600' },
  { sku: 'SKU-3310', name: 'Fastener Set', qty: 2450, status: 'OK', color: 'text-emerald-600' },
  { sku: 'SKU-4412', name: 'Label Roll', qty: 12, status: 'Critical', color: 'text-rose-600' },
];

const WarehouseMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">MUTU WMS</p>
          <h3 className="text-gray-900 font-heading font-semibold">Inventory · Zone B</h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'SKUs', value: '4,812' },
          { label: 'Pick rate', value: '98.2%' },
          { label: 'Open orders', value: '37' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-surface-muted border border-gray-200 px-3 py-2">
            <p className="text-[10px] text-gray-500 uppercase">{s.label}</p>
            <p className="text-sm font-semibold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {bins.map((bin, i) => (
          <motion.div
            key={bin.sku}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-3 py-2.5"
          >
            <div>
              <p className="text-sm text-gray-900 font-medium">{bin.name}</p>
              <p className="text-xs text-gray-500">{bin.sku}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-900 font-semibold">{bin.qty.toLocaleString()}</p>
              <p className={`text-xs ${bin.color}`}>{bin.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseMockup;
