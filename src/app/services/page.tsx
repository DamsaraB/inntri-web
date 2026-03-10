'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  CloudIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      id: 'custom',
      name: 'Custom Software Development',
      description:
        'Tailored software solutions designed to address your unique business challenges and integrate seamlessly with your existing systems.',
      icon: CodeBracketIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'web',
      name: 'Web Application Development',
      description:
        'Modern, responsive web applications built with cutting-edge technologies that deliver exceptional user experiences and business value.',
      icon: ComputerDesktopIcon,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-cyan-400/20 to-blue-400/20',
      iconColor: 'text-cyan-300',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Systems',
      description:
        'Comprehensive enterprise solutions including ERP, CRM, and business intelligence systems that scale with your organization.',
      icon: CogIcon,
      gradient: 'from-blue-400/20 to-cyan-400/20',
      iconColor: 'text-blue-300',
    },
    {
      id: 'cloud',
      name: 'Cloud & Automation Solutions',
      description:
        'Cloud infrastructure, DevOps automation, and scalable architectures that ensure reliability, security, and performance.',
      icon: CloudIcon,
      gradient: 'from-cyan-500/20 to-blue-600/20',
      iconColor: 'text-cyan-400',
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
            Our <span className="text-gradient-neon">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid - 3D Glass Cards */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center text-cyan-400 font-medium cursor-pointer">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover p-12 text-center max-w-4xl mx-auto card-3d"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary magnetic-btn inline-flex items-center">
                Book a Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a href="/products" className="btn-secondary magnetic-btn inline-flex items-center">
                View Our Solutions
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
