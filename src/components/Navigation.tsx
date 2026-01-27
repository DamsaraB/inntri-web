'use client';

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'MUTU ', href: '/products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-navy-900/80 border-b border-cyan-500/20 shadow-glow' 
        : 'backdrop-blur-md bg-navy-900/40 border-b border-cyan-500/10'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-lg group-hover:bg-cyan-500/30 transition-colors"></div>
              <div className="relative px-3 py-2 glass-card border-cyan-500/30">
                <Image
                  src="/logo/logo.png"
                  alt="Inntrilabs Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                {item.href === '/products' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-glow"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-card border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/20 backdrop-blur-xl bg-navy-900/90">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-4 space-y-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200 font-medium rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
