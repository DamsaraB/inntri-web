'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  CloudIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'custom',
      name: 'Custom Software Development',
      description:
        'Tailored software solutions designed to address your unique business challenges.',
      icon: CodeBracketIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'web',
      name: 'Web Application Development',
      description:
        'Modern, responsive web applications built with cutting-edge technologies.',
      icon: ComputerDesktopIcon,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-cyan-400/20 to-blue-400/20',
      iconColor: 'text-cyan-300',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Systems',
      description:
        'Comprehensive enterprise solutions including ERP, CRM, and business intelligence.',
      icon: CogIcon,
      gradient: 'from-blue-400/20 to-cyan-400/20',
      iconColor: 'text-blue-300',
    },
    {
      id: 'cloud',
      name: 'Cloud & Automation Solutions',
      description:
        'Cloud infrastructure, DevOps automation, and scalable architectures.',
      icon: CloudIcon,
      gradient: 'from-cyan-500/20 to-blue-600/20',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-gradient-neon">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid - 3D Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-8 card-3d group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:border-cyan-500/35 transition-all duration-300">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-white mb-4 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-cyan-400 font-medium">
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services" className="btn-primary magnetic-btn inline-flex items-center">
            View All Services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

