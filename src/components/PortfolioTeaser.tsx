'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const PortfolioTeaser: React.FC = () => {
  const projects = [
    {
      id: 'retail-pos',
      name: 'Retail POS System',
      client: 'SuperMart Chain',
      description:
        'Custom POS solution for a leading retail chain with 50+ locations across Sri Lanka.',
      problem:
        'Manual inventory tracking and slow checkout processes were causing customer dissatisfaction and revenue loss.',
      solution:
        'Integrated POS system with real-time inventory management, barcode scanning, and automated reporting.',
      results: [
        '40% faster checkout',
        'Real-time stock updates',
        'Automated reorder alerts',
        'Improved customer satisfaction',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: '/images/pos.png', // Placeholder for actual screenshot
      category: 'POS System',
    },
    {
      id: 'inventory-app',
      name: 'Inventory Management App',
      client: 'TechCorp Solutions',
      description:
        'Mobile-first inventory management application for a technology distribution company.',
      problem:
        'Outdated paper-based inventory system was causing stock discrepancies and delayed order fulfillment.',
      solution:
        'Cross-platform mobile app with barcode scanning, real-time sync, and comprehensive reporting.',
      results: [
        '95% reduction in stock errors',
        'Real-time inventory visibility',
        'Faster order processing',
        'Cost savings of 25%',
      ],
      techStack: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      image: '/images/mobile.png', // Placeholder for actual screenshot
      category: 'Mobile App',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-secondary-900">
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
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            See how we&#39;ve helped businesses transform their operations with our
            software solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
  <div className="aspect-video bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center">
    <Image
      src={project.image}
      alt={project.name}
      width={800}
      height={450}
      className="object-cover w-full h-full"
      unoptimized // 👈 add this if you’re using static export
    />
  </div>
  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
      {project.category}
    </span>
  </div>
</div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {project.client}
                  </p>
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                      Problem
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {project.problem}
                    </p>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center text-sm text-secondary-600 dark:text-secondary-400"
                      >
                        <StarIcon className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center justify-center"
          >
            View All Case Studies
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;
