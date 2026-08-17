'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden section-accent">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-cyan-200/40 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card shadow-soft-lg px-8 py-14 md:px-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-5 tracking-tight">
            Run logistics end to end on{' '}
            <span className="text-gradient-neon">MUTU</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            One logistics ERP with N2N flow across shipping, warehouse, factory, transport, TIEP, and
            finance — plus AI predictions that help you act before delays and demand spikes hit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-accent magnetic-btn inline-flex items-center">
              Book a Demo
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/register" className="btn-secondary magnetic-btn inline-flex items-center">
              Register Your Company
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
