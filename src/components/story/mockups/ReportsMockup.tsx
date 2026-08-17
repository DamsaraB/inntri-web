'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const kpis = [
  { label: 'Orders Fulfilled', value: 12840, suffix: '', delta: '+12%' },
  { label: 'On-time Delivery', value: 96.4, suffix: '%', delta: '+2.1%' },
  { label: 'Fleet Utilization', value: 88, suffix: '%', delta: '+5%' },
  { label: 'Defect Rate', value: 0.8, suffix: '%', delta: '−0.3%' },
];

function useCount(target: number, active: boolean, decimals = 0) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1200;
    const frame = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(target * e);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target]);
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();
}

const ReportsMockup: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const c0 = useCount(kpis[0].value, inView);
  const c1 = useCount(kpis[1].value, inView, 1);
  const c2 = useCount(kpis[2].value, inView);
  const c3 = useCount(kpis[3].value, inView, 1);
  const counts = [c0, c1, c2, c3];

  const reps = [
    { name: 'Warehouse North', score: '2.4M units', rank: '01' },
    { name: 'Fleet Central', score: '1,204 trips', rank: '02' },
    { name: 'Factory Line B', score: '98.4% OEE', rank: '03' },
  ];

  return (
    <div ref={ref} className="glass-card border-gray-200 p-4 md:p-5 shadow-soft overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-cyan-600 font-medium uppercase tracking-wider">Reports</p>
          <h3 className="text-gray-900 font-heading font-semibold">Operations dashboard</h3>
        </div>
        <span className="text-xs text-gray-500">This month</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className="rounded-xl bg-gray-50 border border-gray-200 px-3 py-3"
          >
            <p className="text-[10px] text-gray-500 uppercase mb-1">{k.label}</p>
            <p className="text-xl font-heading font-bold text-gray-900">
              {counts[i]}
              {k.suffix}
            </p>
            <p className="text-[11px] text-emerald-600 mt-0.5">{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-surface-muted p-3 mb-3">
        <p className="text-[10px] text-gray-500 uppercase mb-2">Throughput</p>
        <div className="flex items-end gap-1.5 h-20">
          {[35, 48, 42, 60, 55, 78, 70, 88, 82, 95, 90, 100].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-cyan-500"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] text-gray-500 uppercase">Top performing units</p>
        {reps.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-cyan-600 font-mono">{r.rank}</span>
              <span className="text-sm text-gray-900">{r.name}</span>
            </div>
            <span className="text-xs text-gray-500">{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsMockup;
