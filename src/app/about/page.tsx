'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Excellence', value: '5+', icon: ClockIcon },
    { label: 'Enterprise Clients', value: '50+', icon: BuildingOfficeIcon },
    { label: 'Products Delivered', value: '6+', icon: ChartBarIcon },
    { label: 'Team Members', value: '20+', icon: UserGroupIcon },
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation-Driven',
      description:
        'We constantly explore cutting-edge technologies and methodologies to deliver next-generation solutions that keep your business ahead of the curve.',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Mission & Vision',
      description:
        'To empower businesses with intelligent software solutions that drive efficiency, growth, and sustainable competitive advantage in the digital era.',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: ChartBarIcon,
      title: 'Excellence First',
      description:
        'Quality is embedded in every line of code, every design decision, and every client interaction. We set the bar high and exceed expectations.',
      color: 'from-cyan-400/20 to-blue-400/20',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            About <span className="text-gradient-neon">Inntrilabs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering businesses with intelligent, enterprise-grade software solutions
          </motion.p>
        </div>
      </section>

      {/* Who We Are - 3D Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Who is <span className="text-gradient-neon">Inntrilabs</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A leading IT solutions company specializing in enterprise management systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-8 card-3d"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full mr-4"></span>
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded with a vision to revolutionize how businesses manage their operations, Inntrilabs has been at the forefront of developing intelligent software solutions that drive real business value.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We combine deep industry expertise with cutting-edge technology to deliver enterprise-grade management systems that transform how companies operate, scale, and compete.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-8 card-3d"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-4"></span>
                Innovation Approach
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our innovation-driven approach ensures that every solution we deliver is built with the latest technologies, best practices, and future scalability in mind.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We don't just build software—we architect intelligent systems that learn, adapt, and evolve with your business needs, ensuring long-term success and competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Timeline */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-6 text-center card-3d"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-gradient-neon mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - 3D Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Mission & <span className="text-gradient-neon">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card glass-card-hover p-8 card-3d relative overflow-hidden bg-gradient-to-br ${value.color}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract 3D Illustrations Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['AI & Machine Learning', 'Cloud Infrastructure', 'Data Flow & Analytics'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-8 text-center card-3d float-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl opacity-50"></div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-white">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
