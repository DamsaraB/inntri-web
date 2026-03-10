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
    <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-800 dark:via-secondary-900 dark:to-secondary-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 dark:text-white mb-4">
            Custom <span className="text-gradient">Development</span> Services
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
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
              className="card p-8 group hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.color === 'primary'
                    ? 'bg-primary-100 dark:bg-primary-900/30'
                    : 'bg-accent-100 dark:bg-accent-900/30'
                }`}
              >
                <service.icon
                  className={`w-10 h-10 ${
                    service.color === 'primary'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-accent-600 dark:text-accent-400'
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                {service.name}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-secondary-600 dark:text-secondary-400"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        service.color === 'primary'
                          ? 'bg-primary-500'
                          : 'bg-accent-500'
                      }`}
                    ></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/services"
                className={`inline-flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300 ${
                  service.color === 'primary'
                    ? 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300'
                    : 'text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300'
                }`}
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
          <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg border border-secondary-200 dark:border-secondary-700">
            <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-3">
              Have a Unique Requirement?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6 max-w-2xl mx-auto">
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
