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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          software: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }

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

  const inputClassName =
    'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all';

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/60 via-white to-white pointer-events-none"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6"
          >
            Contact <span className="text-gradient-neon">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto"
          >
            Ready to transform your business? Let&apos;s discuss how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding relative section-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card glass-card-hover p-8 card-3d">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                  Book a Meeting
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-cyan-50 border border-cyan-100 rounded-lg p-6 text-center"
                  >
                    <CheckCircleIcon className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-500">
                      Thank you for reaching out. We&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
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
                        className={inputClassName}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
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
                        className={inputClassName}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={inputClassName}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="software"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Select Software *
                      </label>
                      <select
                        id="software"
                        name="software"
                        required
                        value={formData.software}
                        onChange={handleInputChange}
                        className={inputClassName}
                      >
                        <option value="">Select a software solution</option>
                        {softwareOptions.map((option) => (
                          <option key={option} value={option} className="bg-white text-gray-900">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
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
                        className={`${inputClassName} resize-none`}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-accent magnetic-btn disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
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
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-500">
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
                      <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-100">
                        <info.icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-gray-500 hover:text-cyan-600 transition-colors duration-200"
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
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
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
                      className="w-12 h-12 glass-card border-gray-200 rounded-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-200 magnetic-btn"
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
