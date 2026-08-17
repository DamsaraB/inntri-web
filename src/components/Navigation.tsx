'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const productLinks = [
  { name: 'Shipping', href: '/products/shipping/', desc: 'Courier & last-mile' },
  { name: 'Warehouse', href: '/products/warehouse/', desc: 'Inventory & fulfillment' },
  { name: 'Transport', href: '/products/transport/', desc: 'Fleet & dispatch' },
  { name: 'TIEP', href: '/products/tiep/', desc: 'Corridor orchestration' },
  { name: 'Factory', href: '/products/factory/', desc: 'Production & QC' },
  { name: 'Finance', href: '/products/finance/', desc: 'Invoicing & costs' },
  { name: 'HR', href: '/products/hr/', desc: 'People & attendance' },
  { name: 'All MUTU modules', href: '/products/', desc: 'Full suite overview' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Custom Software', href: '/services/custom/' },
  { name: 'Web Applications', href: '/services/web/' },
  { name: 'Mobile Apps', href: '/services/mobile/' },
  { name: 'Enterprise Systems', href: '/services/enterprise/' },
  { name: 'Cloud & Automation', href: '/services/cloud/' },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl ${
        scrolled ? 'border-b border-gray-200 shadow-soft' : 'border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Inntrilabs"
              width={160}
              height={56}
              className="h-12 w-auto max-w-[160px] object-contain brightness-0"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-3 py-2 text-gray-600 hover:text-cyan-700 transition-colors font-medium text-sm"
            >
              Home
            </Link>

            <div className="relative" ref={productsRef}>
              <button
                type="button"
                onClick={() => {
                  setProductsOpen((v) => !v);
                  setCompanyOpen(false);
                }}
                className="px-3 py-2 text-gray-600 hover:text-cyan-700 transition-colors font-medium text-sm inline-flex items-center gap-1"
              >
                Products
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-gray-200 bg-white p-2 shadow-soft-lg"
                  >
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="rounded-xl px-3 py-2.5 hover:bg-cyan-50 transition-colors block"
                      >
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" ref={companyRef}>
              <button
                type="button"
                onClick={() => {
                  setCompanyOpen((v) => !v);
                  setProductsOpen(false);
                }}
                className="px-3 py-2 text-gray-600 hover:text-cyan-700 transition-colors font-medium text-sm inline-flex items-center gap-1"
              >
                Company
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-soft-lg"
                  >
                    {companyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setCompanyOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-gray-600 hover:text-cyan-700 hover:bg-cyan-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="my-2 border-t border-gray-100" />
                    <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Services
                    </p>
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setCompanyOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-gray-600 hover:text-cyan-700 hover:bg-cyan-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/register"
              className="px-3 py-2 text-gray-600 hover:text-cyan-700 transition-colors font-medium text-sm"
            >
              Register
            </Link>
            <a
              href="#testimonials"
              className="px-3 py-2 text-gray-600 hover:text-cyan-700 transition-colors font-medium text-sm"
            >
              Stories
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://uat.mutu.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-cyan-700 font-medium px-2"
            >
              Sign In
            </a>
            <Link href="/contact" className="btn-accent !px-5 !py-2.5 text-sm magnetic-btn">
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white pb-4">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-3 space-y-0.5"
            >
              {[
                { name: 'Home', href: '/' },
                ...productLinks.slice(0, 5),
                ...companyLinks,
                ...serviceLinks,
                { name: 'Register', href: '/register' },
              ].map((item) => (
                <Link
                  key={item.href + item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 rounded-xl mx-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Link
                  href="/contact"
                  className="btn-accent w-full text-center inline-flex justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
