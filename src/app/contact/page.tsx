'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    software: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Meeting request: ${formData.software} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nSoftware: ${formData.software}\n\nMessage:\n${formData.message}`
    );
    const mailto = `mailto:info@inntrilabs.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', software: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'info@inntrilabs.com',
      link: 'mailto:info@inntrilabs.com',
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+94 76 013 6593',
      link: 'tel:+760136593',
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      value: 'Colombo, Sri Lanka',
      link: '#',
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  const softwareOptions = [
    'TIEP Management System',
    'Shipping (EMS) Management System',
    'Fleet Management System',
    'Warehouse Management System',
    'Factory Management System',
    'Integrated Business System',
    'Custom Software Development',
    'Other',
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
            Contact <span className="text-gradient-neon">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business? Let&apos;s discuss how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-8 card-3d">
                <h2 className="text-3xl font-heading font-bold text-white mb-2">
                  Book a Meeting
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-6 text-center"
                  >
                    <CheckCircleIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white placeholder-gray-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white placeholder-gray-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white placeholder-gray-500 transition-all"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="software"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Select Software *
                      </label>
                      <select
                        id="software"
                        name="software"
                        required
                        value={formData.software}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white transition-all"
                      >
                        <option value="">Select a software solution</option>
                        {softwareOptions.map((option) => (
                          <option key={option} value={option} className="bg-navy-900">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white placeholder-gray-500 resize-none transition-all"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary magnetic-btn disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Book a Meeting'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Calendar integration placeholder - We&apos;ll contact you to schedule
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Reach out through any of these channels. We&apos;re here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card glass-card-hover p-6 card-3d"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                        <info.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="glass-card glass-card-hover p-6 card-3d">
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: 'LinkedIn',
                      href: 'https://linkedin.com/company/inntrilabs',
                      icon: Linkedin,
                    },
                    {
                      name: 'Instagram',
                      href: 'https://instagram.com/inntrilabs',
                      icon: Instagram,
                    },
                    {
                      name: 'Facebook',
                      href: 'https://facebook.com/inntrilabs',
                      icon: Facebook,
                    },
                    {
                      name: 'Twitter',
                      href: 'https://twitter.com/inntrilabs',
                      icon: Twitter,
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 magnetic-btn"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
