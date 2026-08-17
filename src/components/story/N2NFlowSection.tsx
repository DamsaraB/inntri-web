'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  Cog6ToothIcon,
  CubeIcon,
  PresentationChartBarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const FLOW = [
  {
    id: 'sh',
    label: 'Shipping',
    desc: 'Last-mile',
    icon: CubeIcon,
    tint: 'bg-sky-400',
  },
  {
    id: 'wh',
    label: 'Warehouse',
    desc: 'Receive & pick',
    icon: BuildingStorefrontIcon,
    tint: 'bg-emerald-400',
  },
  {
    id: 'fc',
    label: 'Factory',
    desc: 'Produce & QC',
    icon: Cog6ToothIcon,
    tint: 'bg-orange-400',
  },
  {
    id: 'tr',
    label: 'Transport',
    desc: 'Dispatch fleet',
    icon: TruckIcon,
    tint: 'bg-indigo-400',
  },
  {
    id: 'tp',
    label: 'TIEP',
    desc: 'Corridors',
    icon: PresentationChartBarIcon,
    tint: 'bg-violet-400',
  },
  {
    id: 'fn',
    label: 'Finance',
    desc: 'Bill & cost',
    icon: BanknotesIcon,
    tint: 'bg-teal-400',
  },
];

const PREDICTIONS = [
  {
    title: 'Demand forecast',
    text: 'Predict inbound and outbound volume by site so warehouses staff and stock ahead of peaks.',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: 'ETA & delay risk',
    text: 'Flag corridors and trips likely to slip — before customers ask and before SLAs break.',
    icon: ClockIcon,
  },
  {
    title: 'Next best action',
    text: 'Surface which loads, lanes, or lines need attention so planners act on signal, not noise.',
    icon: BoltIcon,
  },
];

const N2NFlowSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden section-muted">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/5 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            N2N Flow · Logistics ERP
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight mb-4">
            Node to node. One continuous operation.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            MUTU is built as a logistics ERP — every handoff from shipping to warehouse to factory,
            transport, TIEP, and finance stays connected. Add AI predictions where timing and demand
            matter most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-cyan-100 bg-white/90 backdrop-blur-sm shadow-soft-lg p-5 md:p-8 mb-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/90 via-white to-blue-50/50 pointer-events-none" />

          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5">
              <ArrowPathIcon className="h-4 w-4 text-cyan-600" />
              <span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">
                End-to-end handoff
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              N2N = node-to-node visibility across your logistics network
            </p>
          </div>

          <div className="relative -mx-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative flex items-stretch justify-between gap-2 md:gap-3 min-w-[720px] lg:min-w-0 px-1">
              <div className="absolute left-8 right-8 top-[2.15rem] h-[2px] bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-300 hidden md:block" />

              {FLOW.map((node, i) => {
                const Icon = node.icon;
                return (
                  <React.Fragment key={node.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="relative z-10 flex-1 text-center rounded-2xl border border-cyan-100 bg-white px-2.5 py-4 md:px-3 shadow-soft ring-1 ring-cyan-100/80"
                    >
                      <span
                        className={`absolute left-3 right-3 top-0 h-1 rounded-b-full ${node.tint}`}
                        aria-hidden
                      />
                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md shadow-glow bg-gradient-to-br from-cyan-500 to-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-heading font-bold text-cyan-700">{node.label}</p>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">{node.desc}</p>
                    </motion.div>
                    {i < FLOW.length - 1 && (
                      <div className="flex items-center shrink-0 self-center z-10">
                        <span className="md:hidden text-cyan-400 font-bold">→</span>
                        <span className="hidden md:inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-cyan-200 text-cyan-600 text-xs shadow-sm">
                          →
                        </span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
            AI predictions in the flow
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PREDICTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-white p-6 shadow-soft hover:shadow-soft-lg hover:border-cyan-200 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/40 pointer-events-none" />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md shadow-glow bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-cyan-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default N2NFlowSection;
