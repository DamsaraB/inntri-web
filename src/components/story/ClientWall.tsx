'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from './StatCounter';

const INDUSTRIES = [
  'Logistics',
  'Manufacturing',
  'Retail',
  'E-commerce',
  'Distribution',
  'Transportation',
  'Food & Beverage',
  'Automotive',
  'Pharmaceuticals',
  'Construction',
  'Wholesale',
  'Courier',
];

const ClientWall: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden section-muted border-t border-gray-100">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <StatCounter value={50} suffix="+" label="Enterprise Clients" />
          <StatCounter value={6} suffix="+" label="Product Modules" />
          <StatCounter value={5} suffix="+" label="Years Building" />
          <StatCounter value={8} suffix="+" label="Industries Served" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            They run operations on MUTU
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {INDUSTRIES.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-medium shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
