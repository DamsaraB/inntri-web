'use client';

import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  { id: 'INV-2841', party: 'Harbor Retail', amount: 'LKR 485,200', status: 'Paid', tone: 'text-emerald-600' },
  { id: 'INV-2847', party: 'BlueLine Shipping', amount: 'LKR 128,900', status: 'Due', tone: 'text-amber-600' },
  { id: 'INV-2850', party: 'Ceylon Manufacturing', amount: 'LKR 912,400', status: 'Open', tone: 'text-cyan-600' },
];

const FinanceMockup: React.FC = () => {
  return (
    <div className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">Finance</p>
          <h3 className="text-gray-900 font-heading font-semibold">Ops-linked ledger</h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
          This week
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'Invoiced', value: '2.4M' },
          { label: 'Collected', value: '1.9M' },
          { label: 'Open AR', value: '512K' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-2">
            <p className="text-[10px] text-gray-500 uppercase">{s.label}</p>
            <p className="text-sm font-semibold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-3 py-2.5"
          >
            <div>
              <p className="text-sm text-gray-900 font-medium">{row.id}</p>
              <p className="text-xs text-gray-500">{row.party}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-900 font-semibold">{row.amount}</p>
              <p className={`text-xs ${row.tone}`}>{row.status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FinanceMockup;
