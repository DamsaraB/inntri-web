'use client';

import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Operations stack',
    items: ['MUTU WMS', 'Fleet GPS', 'EMS Shipping', 'Factory MES', 'TIEP Transport'],
  },
  {
    title: 'Enterprise systems',
    items: ['ERP sync', 'Accounting', 'Barcode / RFID', 'SMS & Email', 'Webhooks'],
  },
  {
    title: 'Access & scale',
    items: ['Web app', 'Mobile ops', 'Role-based access', 'Multi-site', 'API gateway'],
  },
];

const IntegrationsSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden section-muted">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Integrations
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight mb-4">
            Connected to your business ecosystem
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            MUTU modules talk to each other natively — and plug into the systems you already run.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="glass-card glass-card-hover p-6"
            >
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm bg-surface-muted border border-gray-200 text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
