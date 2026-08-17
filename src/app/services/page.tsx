'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/60 via-white to-white pointer-events-none" />
        <div className="container-custom text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4"
          >
            What we deliver
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-5 tracking-tight"
          >
            Our <span className="text-gradient-neon">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions — each backed by clear outcomes, capabilities, and visuals of
            the work we build.
          </motion.p>
        </div>
      </section>

      <section className="section-padding relative section-muted !pt-8">
        <div className="container-custom space-y-10 md:space-y-14">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, margin: '-60px' }}
                className="glass-card overflow-hidden shadow-soft scroll-mt-28"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[360px] bg-cyan-50">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <p className="text-cyan-600 text-xs font-semibold tracking-[0.16em] uppercase mb-3">
                      Service 0{index + 1}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
                      {service.name}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.outcomes.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.id}/`}
                      className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
                    >
                      Explore this service
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 text-center max-w-4xl mx-auto section-accent"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Tell us what you need to build — we&apos;ll map the right service path and delivery plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-accent magnetic-btn inline-flex items-center justify-center">
                Book a Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/products" className="btn-secondary magnetic-btn inline-flex items-center justify-center">
                View MUTU Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
