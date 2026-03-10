import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 bg-navy-900/80 backdrop-blur-xl">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="px-3 py-2 glass-card border-cyan-500/30">
                <Image
                  src="/logo/logo.png"
                  alt="Inntrilabs Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with intelligent, enterprise-grade software solutions designed for efficiency, growth, and control.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/intri-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/inntrilabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/inntrilabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/inntrilabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  MUTU Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products#tiep"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  TIEP Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products#shipping"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Shipping (EMS) System
                </Link>
              </li>
              <li>
                <Link
                  href="/products#fleet"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Fleet Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products#warehouse"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Warehouse Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: info@inntrilabs.com</p>
              <p>Phone: +94 76 013 6593</p>
              <p>Address: Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Inntrilabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
