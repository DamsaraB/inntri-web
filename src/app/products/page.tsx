'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';

export default function ProductsPage() {
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
            MUTU product suite
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-5 tracking-tight"
          >
            Seven modules. One{' '}
            <span className="text-gradient-neon">operations platform.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Shipping, Warehouse, Transport, TIEP, Factory, Finance, and HR — ready-made enterprise
            systems designed for efficiency, growth, and control.
          </motion.p>
        </div>
      </section>

      <section className="section-padding relative section-muted !pt-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover overflow-hidden shadow-soft flex flex-col scroll-mt-28"
              >
                <div className="relative h-48 bg-cyan-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-cyan-600 text-xs font-semibold tracking-[0.14em] uppercase mb-2">
                    {product.tagline}
                  </p>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {product.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/products/${product.id}/`}
                      className="inline-flex items-center justify-center text-cyan-600 font-semibold text-sm group"
                    >
                      View details
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/register"
                      className="btn-accent !px-4 !py-2.5 text-sm inline-flex items-center justify-center"
                    >
                      Register Company
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 text-center max-w-4xl mx-auto section-accent"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Start with one module. Expand when ready.
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Register your company, pick a primary MUTU module, and add Shipping, Warehouse,
              Transport, TIEP, Factory, Finance, or HR as your operations grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-accent magnetic-btn inline-flex items-center justify-center">
                Register Company
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary magnetic-btn inline-flex items-center justify-center">
                Book a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
