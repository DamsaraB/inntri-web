'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  XMarkIcon,
  PresentationChartBarIcon,
  TruckIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showPresentation, setShowPresentation] = useState(false);

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

  const handleViewDemo = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleRequestPresentation = () => {
    setShowPresentation(true);
  };

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

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleViewDemo(product.id)}
                      className="btn-primary magnetic-btn group/btn w-full inline-flex items-center justify-center"
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      View Demo
                    </button>
                    <button
                      onClick={handleRequestPresentation}
                      className="btn-secondary magnetic-btn w-full inline-flex items-center justify-center"
                    >
                      <PresentationChartBarIcon className="w-5 h-5 mr-2" />
                      Request Presentation
                    </button>
                  </div>
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

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card glass-card-hover p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-heading font-bold text-white">
                  {products.find(p => p.id === selectedProduct)?.name} Demo
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-lg glass-card border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center border border-cyan-500/30">
                  <div className="text-center">
                    <PlayIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-300">Dashboard Preview</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">Workflow Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {products.find(p => p.id === selectedProduct)?.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {products.find(p => p.id === selectedProduct)?.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="/contact" className="btn-primary magnetic-btn flex-1 inline-flex items-center justify-center">
                    Request Full Demo
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="btn-secondary magnetic-btn flex-1 inline-flex items-center justify-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Presentation Modal */}
      <AnimatePresence>
        {showPresentation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPresentation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card glass-card-hover p-8 max-w-2xl w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-heading font-bold text-white">Request Presentation</h2>
                <button
                  onClick={() => setShowPresentation(false)}
                  className="p-2 rounded-lg glass-card border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 mb-6">
                Fill out the form below and our team will contact you to schedule a personalized presentation of our solutions.
              </p>

              <a href="/contact" className="btn-primary magnetic-btn w-full inline-flex items-center justify-center">
                Go to Contact Form
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
