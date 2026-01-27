'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  TruckIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const ProductsSnapshot: React.FC = () => {
  const products = [
    {
      id: 'tiep',
      name: 'TIEP Management System',
      description:
        'Comprehensive transportation and logistics management solution for efficient operations.',
      features: ['Route optimization', 'Real-time tracking', 'Fleet management'],
      icon: TruckIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 'shipping',
      name: 'Shipping (EMS) Management',
      description:
        'End-to-end shipping and courier management system for streamlined delivery operations.',
      features: ['Package tracking', 'Delivery scheduling', 'Customer notifications'],
      icon: CubeIcon,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'fleet',
      name: 'Fleet Management System',
      description:
        'Advanced fleet management solution for vehicle tracking, maintenance, and efficiency.',
      features: ['GPS tracking', 'Maintenance scheduling', 'Fuel management'],
      icon: BuildingOffice2Icon,
      gradient: 'from-cyan-400/20 to-blue-400/20',
    },
    {
      id: 'warehouse',
      name: 'Warehouse Management',
      description:
        'Complete warehouse operations management with inventory control and order fulfillment.',
      features: ['Inventory management', 'Order processing', 'Barcode scanning'],
      icon: BuildingStorefrontIcon,
      gradient: 'from-blue-400/20 to-cyan-400/20',
    },
    {
      id: 'factory',
      name: 'Factory Management System',
      description:
        'Manufacturing operations management for production planning and quality control.',
      features: ['Production planning', 'Quality control', 'Resource management'],
      icon: Cog6ToothIcon,
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
    {
      id: 'integrated',
      name: 'Integrated Business System',
      description:
        'All-in-one business management platform integrating all operations seamlessly.',
      features: ['Multi-module integration', 'Unified dashboard', 'Data synchronization'],
      icon: Squares2X2Icon,
      gradient: 'from-blue-500/20 to-cyan-600/20',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Ready-Made <span className="text-gradient-neon">Enterprise Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Premium enterprise management systems designed for efficiency, growth, and control
          </p>
        </motion.div>

        {/* Products Grid - Premium 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-xl font-heading font-bold text-white mb-4 transition-colors text-center">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-center text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/products#${product.id}`}
                  className="flex items-center justify-center text-cyan-400 font-medium"
                >
                  <span>View Details</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="btn-primary magnetic-btn inline-flex items-center justify-center"
          >
            View All WMS Solutions
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSnapshot;
