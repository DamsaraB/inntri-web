'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-20 bg-white">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/80 via-white to-white pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-cyan-200/50 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-0 w-[380px] h-[380px] rounded-full bg-cyan-100/70 blur-[90px]"
          animate={{ x: [0, -20, 0], y: [0, -16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-7 text-center lg:text-left"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase">
                Logistics ERP · n2n Solutions
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                <SparklesIcon className="w-3.5 h-3.5" />
                AI predictions
              </span>
            </div>

            <h1 className="font-heading font-bold leading-[1.1] tracking-tight text-gray-900">
              <span className="block text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl">
                The ERP built for the
              </span>
              <span className="block text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl mt-2">
                <span className="text-gradient-neon">logistics world.</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              MUTU by Inntrilabs connects shipping → warehouse → factory → transport → TIEP →
              finance in one <span className="text-gray-800 font-medium">N2N flow</span> — with AI
              that predicts demand, delays, and the next best move.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500">
              {['Shipping', 'Warehouse', 'Factory', 'Transport', 'TIEP', 'Finance'].map(
                (m, i, arr) => (
                  <span key={m} className="inline-flex items-center gap-2">
                    <span className="font-medium text-gray-700">{m}</span>
                    {i < arr.length - 1 && <span className="text-cyan-400">→</span>}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
              <Link href="/contact" className="btn-accent magnetic-btn group inline-flex items-center">
                Book a Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/products" className="btn-secondary magnetic-btn inline-flex items-center">
                Explore MUTU ERP
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card shadow-soft-lg p-5 md:p-6 border-gray-200/80">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                    N2N command view
                  </p>
                  <p className="text-sm font-medium text-gray-900">Live logistics ERP</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Online
                </span>
              </div>

              {/* Mini N2N flow */}
              <div className="mb-4 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3 py-2.5">
                <div className="flex items-center justify-between gap-1 text-[10px] sm:text-xs font-semibold text-cyan-800">
                  {['Ship', 'WH', 'Plant', 'Fleet'].map((node, i, arr) => (
                    <span key={node} className="inline-flex items-center gap-1">
                      <span className="px-2 py-1 rounded-md bg-white border border-cyan-100 shadow-sm">
                        {node}
                      </span>
                      {i < arr.length - 1 && (
                        <motion.span
                          className="text-cyan-500"
                          animate={{ opacity: [0.35, 1, 0.35] }}
                          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                        >
                          →
                        </motion.span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-cyan-700/80">End-to-end node-to-node flow</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Shipments today', value: '1,284' },
                  { label: 'On-time ETA', value: '96.4%' },
                  { label: 'Active fleet', value: '24' },
                  { label: 'AI delay risk', value: '3 lanes' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-surface-muted border border-gray-100 px-3.5 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-wide text-gray-400">{item.label}</p>
                    <p className="text-xl font-heading font-bold text-gray-900 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-3 mb-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <SparklesIcon className="w-3.5 h-3.5 text-violet-600" />
                  <p className="text-[11px] uppercase tracking-wide text-violet-700 font-semibold">
                    AI predictions
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <p>
                    <span className="font-medium text-gray-800">Demand spike</span> · Warehouse Zone B
                    +18% next 48h
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">ETA risk</span> · Colombo→Kandy corridor
                    delay likely
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-muted border border-gray-100 p-3">
                <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-2">
                  Predicted throughput
                </p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 48, 68, 60, 82, 74, 90, 85, 96, 88, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-t ${
                        i >= 9
                          ? 'bg-gradient-to-t from-violet-500 to-violet-300'
                          : 'bg-gradient-to-t from-cyan-600 to-cyan-400'
                      }`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-[10px] text-gray-400">Blue = actual · Violet = AI forecast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
