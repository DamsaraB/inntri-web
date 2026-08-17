"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroMotion() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium"
        >
          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
          Trusted by 10+ businesses in Sri Lanka
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
        >
          <span className="text-gray-900">
            Smart Software Solutions for{" "}
          </span>
          <span className="text-gradient-neon">Modern Businesses</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
        >
          Ready-to-use products and custom web & mobile apps that transform your
          business operations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Link href="/products" className="btn-primary group inline-flex items-center">
            Our Products
          </Link>
          <Link href="/contact" className="btn-secondary group inline-flex items-center">
            Contact Us
          </Link>
        </motion.div>

        {/* Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="pt-4"
        > 
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom--1 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
}
