'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function PortfolioPage() {
  const projects = [
    {
      id: 'retail-pos',
      name: 'Retail POS System',
      client: 'SuperMart Chain',
      industry: 'Retail',
      description:
        'A comprehensive Point of Sale solution for a leading retail chain with 50+ locations across Sri Lanka.',
      problem:
        "SuperMart was struggling with manual inventory tracking, slow checkout processes, and lack of real-time business insights. Their existing system was outdated and couldn't handle the growing business demands.",
      solution:
        'We developed a modern, cloud-based POS system with real-time inventory management, barcode scanning, automated reporting, and multi-location support. The system integrates seamlessly with their existing business processes.',
      features: [
        'Multi-location POS management',
        'Real-time inventory tracking',
        'Barcode and QR code scanning',
        'Customer loyalty program',
        'Advanced reporting dashboard',
        'Mobile POS support',
        'Offline mode capability',
        'Integration with accounting systems',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      results: [
        '40% faster checkout process',
        'Real-time inventory updates across all locations',
        'Automated reorder alerts reducing stockouts',
        'Improved customer satisfaction scores',
        'Comprehensive business insights and analytics',
      ],
      challenges: [
        'Integrating with legacy accounting systems',
        'Ensuring offline functionality for network issues',
        'Training staff across multiple locations',
        'Data migration from old system',
      ],
      solutions: [
        'Built custom API adapters for legacy systems',
        'Implemented robust offline-first architecture',
        'Created comprehensive training materials and videos',
        'Developed automated data migration tools',
      ],
      image: '/images/pos.png', // Placeholder for actual screenshot
      demo: '#',
      liveUrl: '#',
      category: 'POS System',
      duration: '16 weeks',
      team: '4 developers',
    },
    {
      id: 'inventory-app',
      name: 'Inventory Management App',
      client: 'TechCorp Solutions',
      industry: 'Technology Distribution',
      description:
        'A mobile-first inventory management application for a technology distribution company with complex supply chain requirements.',
      problem:
        'TechCorp was using a paper-based inventory system that caused frequent stock discrepancies, delayed order fulfillment, and poor visibility into their supply chain operations.',
      solution:
        'We created a cross-platform mobile app with barcode scanning, real-time sync, automated alerts, and comprehensive reporting. The app works both online and offline, ensuring continuous operations.',
      features: [
        'Barcode and QR code scanning',
        'Real-time inventory tracking',
        'Automated reorder alerts',
        'Multi-location management',
        'Offline-first architecture',
        'Advanced reporting and analytics',
        'Integration with ERP systems',
        'Mobile app for field operations',
      ],
      techStack: [
        'React Native',
        'Firebase',
        'Node.js',
        'MongoDB',
        'Google Cloud',
        'Kubernetes',
      ],
      results: [
        '95% reduction in stock errors',
        'Real-time inventory visibility across all locations',
        'Faster order processing and fulfillment',
        'Cost savings of 25% through better stock management',
        'Improved supplier relationships through better forecasting',
      ],
      challenges: [
        'Complex barcode scanning requirements',
        'Offline functionality for remote locations',
        'Integration with multiple ERP systems',
        'Ensuring data consistency across devices',
      ],
      solutions: [
        'Implemented advanced image processing for barcode recognition',
        'Built robust offline-first architecture with sync capabilities',
        'Created flexible API adapters for various ERP systems',
        'Implemented conflict resolution and data validation',
      ],
      image: '/images/dashboard.png', // Placeholder for actual screenshot
      demo: 'https://imsdemo.unreallabss.com',
      liveUrl: 'https://imsdemo.unreallabss.com',
      category: 'Mobile App',
      duration: '12 weeks',
      team: '3 developers',
    },
    {
      id: 'erp-system',
      name: 'Enterprise ERP System',
      client: 'Global Manufacturing Ltd',
      industry: 'Manufacturing',
      description:
        'A comprehensive Enterprise Resource Planning system that integrates all business operations into one unified platform.',
      problem:
        'Global Manufacturing was operating with disconnected systems for HR, accounting, inventory, and CRM. This led to data silos, manual processes, and poor decision-making capabilities.',
      solution:
        'We developed a unified ERP system that consolidates all business operations, provides real-time insights, and automates key processes. The system is scalable and can grow with the business.',
      features: [
        'HR and employee management',
        'Financial accounting and reporting',
        'Inventory and supply chain management',
        'Customer relationship management',
        'Project management tools',
        'Business intelligence dashboard',
        'Multi-currency support',
        'Role-based access control',
      ],
      techStack: [
        'Angular',
        'C# .NET Core',
        'SQL Server',
        'Azure Redis',
        'Azure Cloud',
        'Power BI',
      ],
      results: [
        'Centralized business operations and data',
        'Improved data accuracy and consistency',
        'Better decision-making through real-time insights',
        'Reduced operational costs by 30%',
        'Scalable platform for future growth',
      ],
      challenges: [
        'Complex business process mapping',
        'Data migration from multiple legacy systems',
        'User adoption across different departments',
        'Ensuring system performance with large datasets',
      ],
      solutions: [
        'Conducted thorough business process analysis and optimization',
        'Built robust ETL processes for data migration',
        'Created comprehensive training programs and change management',
        'Implemented database optimization and caching strategies',
      ],
      image: '/images/erp_dashboard.png', // Placeholder for actual screenshot
      demo: '#',
      liveUrl: '#',
      category: 'ERP System',
      duration: '24 weeks',
      team: '6 developers',
    },
  ];

  // const categories = ['All', 'POS System', 'Mobile App', 'ERP System', 'Web App'];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-secondary-900 dark:text-white mb-6"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
          >
            Discover how we&#39;ve helped businesses transform their operations
            with our innovative software solutions
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-24 last:mb-0 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-sm font-medium rounded-full">
                        {project.industry}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 dark:text-white mb-2">
                      {project.name}
                    </h2>
                    <p className="text-xl text-primary-600 dark:text-primary-400 font-medium">
                      {project.client}
                    </p>
                  </div>

                  <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">
                        Problem
                      </h4>
                      <p className="text-sm text-red-700 dark:text-red-400">
                        {project.problem}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                        Solution
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-secondary-600 dark:text-secondary-400"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                      Results & Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center text-secondary-600 dark:text-secondary-400"
                        >
                          <StarIcon className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Info & CTA */}
                  <div className="pt-4">
                    <div className="flex items-center gap-4 mb-4 text-sm text-secondary-600 dark:text-secondary-400">
                      <span>Duration: {project.duration}</span>
                      <span>Team: {project.team}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={project.demo} className="btn-primary group">
                        <PlayIcon className="w-5 h-5 mr-2" />
                        View Demo
                      </a>
                      <a href={project.liveUrl} className="btn-secondary group">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                        Live Project
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className="aspect-video bg-gradient-to-br from-secondary-200 to-secondary-300 
    dark:from-secondary-700 dark:to-secondary-600 rounded-2xl flex items-center 
    justify-center overflow-hidden"
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} Screenshot`}
                        fill
                        unoptimized
                        className="object-cover rounded-2xl border-2 border-secondary-400 shadow-xl shadow-secondary-300/50 dark:shadow-secondary-700/50"
                      />
                    ) : (
                      <div className="text-center text-secondary-600 dark:text-secondary-400">
                        <div className="w-24 h-24 bg-secondary-300 dark:bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">
                            {project.category === 'POS System'
                              ? '💳'
                              : project.category === 'Mobile App'
                                ? '📱'
                                : '🏢'}
                          </span>
                        </div>
                        <p className="text-lg">{project.name} Screenshot</p>
                        <p className="text-sm opacity-75">
                          Upload your image here
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                    Challenges Faced
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, challengeIndex) => (
                      <div
                        key={challengeIndex}
                        className="flex items-start text-secondary-600 dark:text-secondary-400"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white mb-4">
                    Our Solutions
                  </h3>
                  <div className="space-y-3">
                    {project.solutions.map((solution, solutionIndex) => (
                      <div
                        key={solutionIndex}
                        className="flex items-start text-secondary-600 dark:text-secondary-400"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let&#39;s discuss your project and create something amazing
              together. Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a href="/services" className="btn-secondary">
                Learn About Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
