'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const ServicesTeaser: React.FC = () => {
  const services = [
    {
      id: 'mobile',
      name: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android, tailored to your business needs.',
      icon: DevicePhoneMobileIcon,
      features: [
        'iOS & Android',
        'Cross-platform',
        'Custom UI/UX',
        'App Store deployment',
      ],
      color: 'primary',
    },
    {
      id: 'web',
      name: 'Web App Development',
      description:
        'Responsive web applications that work seamlessly across all devices and platforms.',
      icon: ComputerDesktopIcon,
      features: [
        'Responsive design',
        'Modern frameworks',
        'Scalable architecture',
        'SEO optimized',
      ],
      color: 'accent',
    },
  ];

  return (
    <section className="section-padding section-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Custom <span className="text-gradient-neon">Development</span> Services
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Need something specific? We build custom software solutions that
            perfectly fit your business requirements
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-8 group"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 ${
                  service.color === 'primary'
                    ? 'bg-cyan-50 border border-cyan-100'
                    : 'bg-sky-50 border border-sky-100'
                }`}
              >
                <service.icon
                  className={`w-10 h-10 ${
                    service.color === 'primary'
                      ? 'text-cyan-600'
                      : 'text-cyan-600'
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                {service.name}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <div className="w-2 h-2 rounded-full mr-3 bg-cyan-500"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center font-semibold text-cyan-600 hover:text-cyan-700 group-hover:translate-x-1 transition-all duration-300"
              >
                Get a Quote
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 shadow-soft">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
              Have a Unique Requirement?
            </h3>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
              We specialize in building custom software solutions from the
              ground up. Let&#39;s discuss your project and create something amazing
              together.
            </p>
            <Link
              href="/contact"
              className="btn-accent inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
