'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import {
  ClockIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

function AnimatedValue({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {Math.round(display)}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const stats = [
    {
      label: 'Years of Excellence',
      value: 5,
      suffix: '+',
      icon: ClockIcon,
      detail:
        'Building enterprise systems with a steady focus on reliability, delivery quality, and long-term partnerships.',
      highlight: 'Since day one',
    },
    {
      label: 'Enterprise Clients',
      value: 50,
      suffix: '+',
      icon: BuildingOfficeIcon,
      detail:
        'Trusted by logistics, manufacturing, retail, and distribution teams running real multi-site operations.',
      highlight: 'Across industries',
    },
    {
      label: 'Products Delivered',
      value: 6,
      suffix: '+',
      icon: ChartBarIcon,
      detail:
        'Ready-made MUTU modules spanning warehouse, fleet, shipping, factory, transport, and integrated ops.',
      highlight: 'MUTU suite',
    },
    {
      label: 'Team Members',
      value: 20,
      suffix: '+',
      icon: UserGroupIcon,
      detail:
        'Engineers, designers, and implementation specialists who stay close from discovery through go-live.',
      highlight: 'Hands-on delivery',
    },
  ];

  const values = [
    {
      title: 'Innovation-Driven',
      eyebrow: 'How we build',
      description:
        'We explore new technologies only when they create clear operational advantage — faster workflows, fewer errors, and systems that stay useful as your business grows.',
      points: [
        'Product decisions grounded in real warehouse, fleet, and factory work',
        'Continuous improvement after go-live, not just at launch',
        'Modern stacks chosen for maintainability and scale',
      ],
      image: '/about/innovation-driven.png',
      imageAlt: 'Innovation-driven product development',
    },
    {
      title: 'Mission & Vision',
      eyebrow: 'Why we exist',
      description:
        'Our mission is to empower operators with intelligent software that drives efficiency, growth, and lasting competitive advantage — so every site and team works from one reliable source of truth.',
      points: [
        'Make complex operations visible and controllable',
        'Help businesses scale without losing process discipline',
        'Deliver software teams trust every day, not only in demos',
      ],
      image: '/about/mission-vision.png',
      imageAlt: 'Mission and vision for enterprise operations',
    },
    {
      title: 'Excellence First',
      eyebrow: 'Our standard',
      description:
        'Quality is built into every design decision, integration, and client interaction. We set a high bar for reliability, clarity, and delivery — then hold ourselves to it.',
      points: [
        'Careful engineering with clear milestones and ownership',
        'Training and support that make adoption stick',
        'Outcomes measured by operational results, not slide decks',
      ],
      image: '/about/excellence.png',
      imageAlt: 'Excellence in software quality and delivery',
    },
  ];

  const storyPoints = [
    'Enterprise systems purpose-built for logistics, manufacturing, and operations',
    'MUTU suite covering warehouse, fleet, shipping, factory, and transport',
    'Implementation support from discovery through go-live and beyond',
  ];

  const innovationPoints = [
    'Modular platforms you can start small and expand without re-platforming',
    'Practical automation that reduces manual work across teams and sites',
    'Architecture designed for reliability, security, and long-term change',
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/60 via-white to-white pointer-events-none"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6"
          >
            About <span className="text-gradient-neon">Inntrilabs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto"
          >
            Empowering businesses with intelligent, enterprise-grade software solutions
          </motion.p>
        </div>
      </section>

      <section className="section-padding relative section-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
              Who is <span className="text-gradient-neon">Inntrilabs</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A Sri Lanka–based technology company building enterprise management systems that help
              operators run warehouse, fleet, shipping, and factory work with clarity and control.
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden shadow-soft mb-10 md:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-cyan-50">
                <Image
                  src="/about/story.png"
                  alt="Inntrilabs team collaborating on enterprise software"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-cyan-600 text-xs font-semibold tracking-[0.16em] uppercase mb-3">
                  Our story
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
                  Built for how real operations run
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Inntrilabs started with a clear goal: replace fragmented spreadsheets and
                  disconnected tools with software that mirrors the way logistics and manufacturing
                  teams actually work. Today we deliver MUTU and custom enterprise systems used to
                  coordinate inventory, vehicles, deliveries, production, and transport corridors.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We pair deep domain understanding with disciplined engineering — so every release
                  improves day-to-day execution, not just the demo deck. From Colombo to regional
                  deployments, we stay close to customers through implementation, training, and
                  ongoing product evolution.
                </p>
                <ul className="space-y-3">
                  {storyPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:[&>*:first-child]:order-2">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-cyan-50">
                <Image
                  src="/about/innovation.png"
                  alt="Innovation-driven enterprise system design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-cyan-600 text-xs font-semibold tracking-[0.16em] uppercase mb-3">
                  Innovation approach
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
                  Practical innovation, not novelty for its own sake
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  We innovate where it creates measurable operational advantage — cleaner workflows,
                  fewer handoffs, faster decisions, and systems that stay maintainable as your
                  business grows. New technology only ships when it earns its place in production.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  That means modular product design, thoughtful integrations, and delivery practices
                  that reduce risk: clear milestones, transparent communication, and architectures
                  ready for the next site, module, or process change.
                </p>
                <ul className="space-y-3">
                  {innovationPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-padding relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/40 via-transparent to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-14"
          >
            <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
              By the numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight mb-3">
              Proven delivery, growing impact
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A snapshot of the team, products, and partnerships behind Inntrilabs — and the
              operational results we help customers achieve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative glass-card overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400" />
                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-cyan-50 group-hover:bg-cyan-100/80 transition-colors" />

                <div className="relative p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors duration-300">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-1">
                      {stat.highlight}
                    </span>
                  </div>

                  <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-neon mb-2 tracking-tight">
                    <AnimatedValue value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative section-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
              Mission & <span className="text-gradient-neon">Vision</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The principles that guide how we design products, deliver projects, and partner with
              enterprise teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover overflow-hidden shadow-soft flex flex-col h-full"
              >
                <div className="relative h-48 bg-cyan-50">
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-cyan-600 text-xs font-semibold tracking-[0.16em] uppercase mb-2">
                    {value.eyebrow}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">
                    {value.description}
                  </p>
                  <ul className="space-y-2.5 mt-auto">
                    {value.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
