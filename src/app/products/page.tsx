'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  TruckIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

export default function ProductsPage() {
  const products = [
    {
      id: 'tiep',
      name: 'TIEP Management System',
      description:
        'Comprehensive transportation and logistics management solution for efficient operations and real-time tracking.',
      features: [
        'Route optimization',
        'Real-time tracking',
        'Fleet management',
        'Driver management',
        'Automated reporting',
      ],
      icon: TruckIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 'shipping',
      name: 'Shipping (EMS) Management System',
      description:
        'End-to-end shipping and courier management system for streamlined delivery operations and customer satisfaction.',
      features: [
        'Package tracking',
        'Delivery scheduling',
        'Customer notifications',
        'Payment processing',
        'Analytics dashboard',
      ],
      icon: CubeIcon,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'fleet',
      name: 'Fleet Management System',
      description:
        'Advanced fleet management solution for vehicle tracking, maintenance, and operational efficiency.',
      features: [
        'GPS tracking',
        'Maintenance scheduling',
        'Fuel management',
        'Driver analytics',
        'Cost optimization',
      ],
      icon: BuildingOffice2Icon,
      gradient: 'from-cyan-400/20 to-blue-400/20',
    },
    {
      id: 'warehouse',
      name: 'Warehouse Management System',
      description:
        'Complete warehouse operations management with inventory control, order fulfillment, and logistics optimization.',
      features: [
        'Inventory management',
        'Order processing',
        'Barcode scanning',
        'Stock optimization',
        'Reporting & analytics',
      ],
      icon: BuildingStorefrontIcon,
      gradient: 'from-blue-400/20 to-cyan-400/20',
    },
    {
      id: 'factory',
      name: 'Factory Management System',
      description:
        'Manufacturing operations management system for production planning, quality control, and resource optimization.',
      features: [
        'Production planning',
        'Quality control',
        'Resource management',
        'Machine monitoring',
        'Performance analytics',
      ],
      icon: Cog6ToothIcon,
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
    {
      id: 'integrated',
      name: 'Integrated Business System',
      description:
        'All-in-one business management platform integrating all operations for seamless workflow and data synchronization.',
      features: [
        'Multi-module integration',
        'Unified dashboard',
        'Data synchronization',
        'Custom workflows',
        'Business intelligence',
      ],
      icon: Squares2X2Icon,
      gradient: 'from-blue-500/20 to-cyan-600/20',
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
            Our Ready-Made <span className="text-gradient-neon">Enterprise Software Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Premium enterprise management systems designed for efficiency, growth, and control
          </motion.p>
        </div>
      </section>

      {/* Products Grid - Premium 3D Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-8 card-3d group relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 text-center transition-transform duration-300 flex justify-center">
                    {(() => {
                      const IconComponent = product.icon;
                      return <IconComponent className="w-16 h-16 text-white" />;
                    })()}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 transition-colors text-center">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/register"
                    className="btn-primary magnetic-btn group/btn w-full inline-flex items-center justify-center"
                  >
                    Register Company
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover p-12 max-w-5xl mx-auto card-3d"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
              Why Choose <span className="text-gradient-neon">Inntrilabs</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-cyan-400 mb-4">Problems Solved</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inefficient manual processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lack of real-time visibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data silos and integration issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scalability challenges</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-cyan-400 mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scalable architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customizable workflows</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-cyan-400 mb-4">Industries Supported</h3>
              <div className="flex flex-wrap gap-3">
                {['Logistics', 'Manufacturing', 'Retail', 'E-commerce', 'Distribution', 'Transportation'].map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 glass-card border-cyan-500/30 text-cyan-300 text-sm rounded-lg"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
