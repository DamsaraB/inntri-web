'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  CubeIcon,
  PresentationChartBarIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const BRAND = {
  accent: 'text-cyan-700',
  soft: 'bg-cyan-50',
  border: 'border-cyan-200',
  glow: 'from-cyan-400/25 via-sky-300/15 to-blue-400/20',
  gradient: 'from-cyan-500 to-blue-600',
};

type Slide = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  badge: string;
};

type Stage = {
  id: string;
  label: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Soft module tint — secondary only; brand blue leads active UI */
  tintSoft: string;
  tintBorder: string;
  tintAccent: string;
  tintBar: string;
  href: string;
  slides: Slide[];
};

const STAGES: Stage[] = [
  {
    id: 'shipping',
    label: 'Shipping',
    blurb: 'Last-mile & courier',
    icon: CubeIcon,
    tintSoft: 'bg-sky-50',
    tintBorder: 'border-sky-200',
    tintAccent: 'text-sky-700',
    tintBar: 'bg-sky-400',
    href: '/products/shipping/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Courier pipelines that never lose a parcel.',
        body: 'Run pickup → transit → delivery on one EMS board so hubs, riders, and customers share the same live status.',
        points: ['Stage-based parcel boards', 'Hub handoffs & attempts', 'Customer-ready tracking'],
        badge: 'Last-mile control',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Scheduling, exceptions, and proof of delivery.',
        body: 'Plan delivery windows, handle failed attempts, and capture POD without jumping between tools.',
        points: ['Delivery window planning', 'Exception handling', 'POD & notifications'],
        badge: 'Ops-ready EMS',
      },
      {
        eyebrow: 'AI signal',
        title: 'Predict delay risk before the customer calls.',
        body: 'AI flags lanes and batches likely to slip so dispatch can rebalance before SLAs break.',
        points: ['ETA risk scoring', 'Peak-day volume hints', 'Next best re-route cues'],
        badge: 'AI predictions',
      },
    ],
  },
  {
    id: 'warehouse',
    label: 'Warehouse',
    blurb: 'Inventory & WMS',
    icon: BuildingStorefrontIcon,
    tintSoft: 'bg-emerald-50',
    tintBorder: 'border-emerald-200',
    tintAccent: 'text-emerald-700',
    tintBar: 'bg-emerald-400',
    href: '/products/warehouse/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Inventory accuracy across every zone.',
        body: 'Receive, put away, pick, and fulfill with barcode-ready WMS visibility — so stock is never a guess.',
        points: ['Multi-zone stock views', 'Pick & pack queues', 'Low-stock alerts'],
        badge: 'WMS core',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Floor execution that keeps orders moving.',
        body: 'Give supervisors live pick rates, open orders, and critical SKUs in one command surface.',
        points: ['Goods receipt & putaway', 'Cycle counts', 'Multi-warehouse support'],
        badge: 'Floor control',
      },
      {
        eyebrow: 'AI signal',
        title: 'Forecast demand before shelves go empty.',
        body: 'AI demand signals help you staff and replenish ahead of spikes across sites and seasons.',
        points: ['48h demand forecast', 'Replenishment hints', 'Hot-SKU prioritization'],
        badge: 'AI predictions',
      },
    ],
  },
  {
    id: 'factory',
    label: 'Factory',
    blurb: 'Production & QC',
    icon: Cog6ToothIcon,
    tintSoft: 'bg-orange-50',
    tintBorder: 'border-orange-200',
    tintAccent: 'text-orange-700',
    tintBar: 'bg-orange-400',
    href: '/products/factory/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Production plans that match the floor.',
        body: 'Align shifts, lines, and work orders so manufacturing stays on schedule without spreadsheet chaos.',
        points: ['Line-level targets', 'Work order status', 'Shift handoffs'],
        badge: 'MES-ready',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Quality gates without slowing output.',
        body: 'Track QC checkpoints, defect rates, and resource use while lines keep moving.',
        points: ['QC gates & defect logs', 'Resource allocation', 'OEE-style views'],
        badge: 'Quality + speed',
      },
      {
        eyebrow: 'AI signal',
        title: 'Spot bottleneck risk early.',
        body: 'Predictions highlight lines likely to miss targets so supervisors intervene before the shift ends.',
        points: ['Miss-target risk', 'Material shortfall cues', 'Priority work orders'],
        badge: 'AI predictions',
      },
    ],
  },
  {
    id: 'transport',
    label: 'Transport',
    blurb: 'Fleet & dispatch',
    icon: TruckIcon,
    tintSoft: 'bg-indigo-50',
    tintBorder: 'border-indigo-200',
    tintAccent: 'text-indigo-700',
    tintBar: 'bg-indigo-400',
    href: '/products/transport/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Every vehicle, driver, and ETA — live.',
        body: 'Dispatch and track fleet movements so logistics teams know what is en route, idle, or loading.',
        points: ['GPS vehicle board', 'Driver assignment', 'Live ETA status'],
        badge: 'Fleet ops',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Utilization, fuel, and trip discipline.',
        body: 'Raise fleet productivity with clearer trips, maintenance signals, and accountable dispatch workflows.',
        points: ['Route optimization', 'Fuel & maintenance', 'Trip performance'],
        badge: 'Dispatch power',
      },
      {
        eyebrow: 'AI signal',
        title: 'Predict which trips will slip.',
        body: 'AI delay risk helps planners reassign loads before customers feel the impact.',
        points: ['Trip delay probability', 'Idle-fleet opportunities', 'ETA confidence'],
        badge: 'AI predictions',
      },
    ],
  },
  {
    id: 'tiep',
    label: 'TIEP',
    blurb: 'Corridor planning',
    icon: PresentationChartBarIcon,
    tintSoft: 'bg-violet-50',
    tintBorder: 'border-violet-200',
    tintAccent: 'text-violet-700',
    tintBar: 'bg-violet-400',
    href: '/products/tiep/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Orchestrate corridors across hubs.',
        body: 'TIEP plans multi-hub loads and lanes so network moves stay coordinated with warehouse and fleet reality.',
        points: ['Hub-to-hub lanes', 'Corridor load boards', 'Network visibility'],
        badge: 'Corridor OS',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Plan the network, not just one trip.',
        body: 'Allocate loads across corridors, optimize sequencing, and track weekly network savings.',
        points: ['Lane management', 'Load allocation', 'Savings insights'],
        badge: 'Network planning',
      },
      {
        eyebrow: 'AI signal',
        title: 'Forecast corridor pressure.',
        body: 'AI highlights congested lanes and underused capacity so planners balance the network earlier.',
        points: ['Corridor congestion risk', 'Empty-move reduction', 'Capacity recommendations'],
        badge: 'AI predictions',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    blurb: 'Ops-linked money',
    icon: BanknotesIcon,
    tintSoft: 'bg-teal-50',
    tintBorder: 'border-teal-200',
    tintAccent: 'text-teal-700',
    tintBar: 'bg-teal-400',
    href: '/products/finance/',
    slides: [
      {
        eyebrow: 'Overview',
        title: 'Money flow tied to logistics moves.',
        body: 'Connect invoicing and collections to shipping, warehouse, and transport work — one ERP truth for ops and finance.',
        points: ['Ops-linked invoices', 'Open AR visibility', 'Cost context'],
        badge: 'Finance spine',
      },
      {
        eyebrow: 'Capabilities',
        title: 'Bill faster. Reconcile less.',
        body: 'Reduce spreadsheet handoffs with receivables tracking, cost centers, and period reporting.',
        points: ['Receivables tracking', 'Cost allocation', 'Period reports'],
        badge: 'Close with confidence',
      },
      {
        eyebrow: 'AI signal',
        title: 'Predict collection and margin risk.',
        body: 'AI cues help finance teams prioritize follow-ups and spot cost spikes tied to operational exceptions.',
        points: ['Collection priority', 'Margin leak alerts', 'Exception cost signals'],
        badge: 'AI predictions',
      },
    ],
  },
];

const AUTOPLAY_MS = 4500;

const LifecycleShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(STAGES[0].id);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = STAGES.find((s) => s.id === activeId) ?? STAGES[0];
  const slide = active.slides[slideIndex];

  useEffect(() => {
    setSlideIndex(0);
  }, [activeId]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % 3);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [activeId, paused, slideIndex]);

  const goPrev = () => setSlideIndex((i) => (i + 2) % 3);
  const goNext = () => setSlideIndex((i) => (i + 1) % 3);

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className={`absolute inset-0 bg-gradient-to-br ${BRAND.glow} pointer-events-none`} />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Logistics ERP lifecycle
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
            Pick a node. Explore the flow.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Shipping → Warehouse → Factory → Transport → TIEP → Finance — tap a module for three
            slides covering overview, capabilities, and AI predictions.
          </p>
        </motion.div>

        {/* Menu */}
        <div className="mb-8 md:mb-10 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch justify-start lg:justify-center gap-2 md:gap-3 min-w-max lg:min-w-0 lg:flex-wrap mx-auto">
            {STAGES.map((stage, i) => {
              const isActive = stage.id === activeId;
              const Icon = stage.icon;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(stage.id)}
                    className={`group relative flex items-center gap-3 text-left px-3.5 py-3 md:px-4 md:py-3.5 rounded-2xl border transition-all duration-300 min-w-[148px] md:min-w-[158px] ${
                      isActive
                        ? `bg-gradient-to-br ${BRAND.gradient} border-transparent text-white shadow-lg shadow-glow scale-[1.03]`
                        : `bg-white ${stage.tintBorder} hover:scale-[1.02] hover:shadow-soft hover:border-cyan-300`
                    }`}
                  >
                    {!isActive && (
                      <span
                        className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${stage.tintBar}`}
                        aria-hidden
                      />
                    )}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : `${stage.tintSoft} ${stage.tintAccent} border ${stage.tintBorder}`
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-bold leading-tight ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {stage.label}
                      </span>
                      <span
                        className={`block text-[11px] md:text-xs mt-0.5 leading-snug ${
                          isActive ? 'text-white/85' : 'text-gray-500'
                        }`}
                      >
                        {stage.blurb}
                      </span>
                    </span>
                  </button>
                  {i < STAGES.length - 1 && (
                    <span
                      className="hidden xl:flex items-center text-cyan-300 font-bold self-center shrink-0"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Slide stage */}
        <div
          className={`relative rounded-3xl border ${BRAND.border} bg-white/90 backdrop-blur-sm shadow-soft-lg overflow-hidden`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${BRAND.glow} opacity-70 pointer-events-none`} />

          <div className="relative p-6 md:p-10 lg:p-12 min-h-[420px] flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-6">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${BRAND.soft} ${BRAND.accent} border ${BRAND.border}`}
              >
                {slideIndex === 2 ? <SparklesIcon className="w-3.5 h-3.5" /> : null}
                {slide.badge}
              </span>
              <div className="flex items-center gap-2">
                {active.slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setSlideIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === slideIndex
                        ? `w-8 bg-gradient-to-r ${BRAND.gradient}`
                        : 'w-2.5 bg-gray-200 hover:bg-cyan-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.id}-${slideIndex}`}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.3 }}
                className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div>
                  <p className={`text-sm font-semibold ${BRAND.accent} mb-3`}>{slide.eyebrow}</p>
                  <h3 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight mb-4 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                    {slide.body}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {slide.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                        <span
                          className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r ${BRAND.gradient} shrink-0`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={active.href}
                    className={`inline-flex items-center font-semibold ${BRAND.accent} hover:opacity-80`}
                  >
                    Explore {active.label}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div
                  className={`relative rounded-3xl border ${BRAND.border} ${BRAND.soft} p-6 md:p-8 min-h-[260px] overflow-hidden`}
                >
                  <div
                    className={`absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${BRAND.gradient} opacity-30 blur-2xl`}
                  />
                  <div
                    className={`absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br ${BRAND.gradient} opacity-20 blur-2xl`}
                  />
                  <div className="relative space-y-4">
                    <div
                      className={`inline-flex px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r ${BRAND.gradient}`}
                    >
                      {active.label}
                    </div>
                    <div className="grid gap-3">
                      {slide.points.map((point, i) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}
                          className="rounded-2xl bg-white/90 border border-white shadow-soft px-4 py-3"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                            Signal 0{i + 1}
                          </p>
                          <p className="text-sm font-medium text-gray-800">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative flex items-center justify-between mt-8 pt-6 border-t border-cyan-100">
              <button
                type="button"
                onClick={goPrev}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border ${BRAND.border} ${BRAND.soft} ${BRAND.accent} font-semibold text-sm hover:scale-105 transition-transform`}
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Prev
              </button>
              <button
                type="button"
                onClick={goNext}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${BRAND.gradient} shadow-md shadow-glow hover:scale-105 transition-transform`}
              >
                Next
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifecycleShowcase;
