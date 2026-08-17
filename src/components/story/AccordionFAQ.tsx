'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BuildingOffice2Icon,
  ChartBarSquareIcon,
  ChevronDownIcon,
  ClockIcon,
  CubeTransparentIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

const FAQS = [
  {
    q: 'What is MUTU?',
    blurb: 'One connected ops suite',
    a: 'MUTU is Inntrilabs’ enterprise operations suite — warehouse, fleet, shipping, factory, TIEP transport, HRIS, and reporting — connected natively so your teams work from one source of truth instead of scattered tools.',
    icon: CubeTransparentIcon,
  },
  {
    q: 'How long does implementation take?',
    blurb: 'Typical go-live timeline',
    a: 'Most mid-size deployments go live in 4–8 weeks depending on modules and integrations. Larger multi-site rollouts typically take 2–3 months, with training and data migration included.',
    icon: ClockIcon,
  },
  {
    q: 'Can we start with one module and expand later?',
    blurb: 'Modular rollout path',
    a: 'Yes. Register for a primary module (for example WMS or Fleet), then add Shipping, Factory, TIEP, or HRIS when you are ready — without re-platforming.',
    icon: PuzzlePieceIcon,
  },
  {
    q: 'How is MUTU different from generic ERP or custom builds?',
    blurb: 'Built for logistics ops',
    a: 'MUTU ships ready-made for logistics and manufacturing workflows — inventory, dispatch, delivery, production, and transport — with room to customize. You avoid years of greenfield development and still get a unified operations dashboard.',
    icon: ChartBarSquareIcon,
  },
  {
    q: 'Do you support company registration and self-service onboarding?',
    blurb: 'Register & get started',
    a: 'Yes. Create your company account on our registration flow, select modules, and access MUTU at uat.mutu.solutions. Our team also offers guided demos and onboarding for enterprise accounts.',
    icon: UserPlusIcon,
  },
  {
    q: 'What industries do you serve?',
    blurb: 'Who MUTU fits best',
    a: 'Logistics, manufacturing, retail, e-commerce, distribution, and transportation — across Sri Lanka and regional enterprise clients.',
    icon: BuildingOffice2Icon,
  },
];

const AccordionFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/5 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container-custom max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 mb-4">
            <RocketLaunchIcon className="h-4 w-4 text-cyan-600" />
            <span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">
              Frequently asked questions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight mb-3">
            Your questions, answered
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Quick answers on what MUTU is, how rollout works, and how teams get started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const Icon = item.icon;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-cyan-300 shadow-soft-lg shadow-glow'
                    : 'border-gray-200 bg-white shadow-soft hover:border-cyan-200'
                }`}
              >
                {isOpen && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50/50 pointer-events-none" />
                )}

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="relative w-full flex items-start gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-shadow ${
                      isOpen
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-glow'
                        : 'bg-gradient-to-br from-cyan-500/90 to-blue-600/90'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1 pr-2">
                    <span className="block font-heading font-semibold text-gray-900 text-base md:text-lg leading-snug">
                      {item.q}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-cyan-700">
                      {item.blurb}
                    </span>
                  </span>

                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'bg-cyan-50 border-cyan-200 text-cyan-700'
                        : 'border-gray-200 bg-gray-50 text-gray-400'
                    }`}
                  >
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative"
                    >
                      <p className="px-5 pb-5 md:px-6 md:pl-[4.75rem] text-gray-500 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionFAQ;
