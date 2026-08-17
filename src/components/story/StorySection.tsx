'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
  muted?: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  children,
  reverse = false,
  muted = false,
}) => {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden scroll-mt-24 ${
        muted ? 'section-muted' : 'bg-white'
      }`}
    >
      <div className="container-custom relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            {eyebrow && (
              <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
