'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section className="section-padding relative overflow-hidden section-muted">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
            Built for modern <span className="text-gradient-neon">businesses</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From custom software to enterprise platforms — explore each service with real visual context.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/services/${service.id}/`}
                className="glass-card glass-card-hover overflow-hidden group block h-full"
              >
                <div className="relative h-48 bg-cyan-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-cyan-600 font-semibold text-sm">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services" className="btn-accent magnetic-btn inline-flex items-center">
            View all services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
