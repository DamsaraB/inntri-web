import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-300">
      <div className="container-custom section-padding !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Image
              src="/logo/logo.png"
              alt="Inntrilabs Logo"
              width={160}
              height={56}
              className="h-12 w-auto max-w-[160px] object-contain brightness-0 invert"
              unoptimized
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with intelligent, enterprise-grade software solutions designed
              for efficiency, growth, and control.
            </p>
            <div className="flex space-x-3">
              {[
                { href: 'https://www.linkedin.com/company/intri-labs', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://instagram.com/inntrilabs', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com/inntrilabs', icon: Facebook, label: 'Facebook' },
                { href: 'https://twitter.com/inntrilabs', icon: Twitter, label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-800/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-700/50 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'MUTU Solutions' },
                { href: '/services', label: 'Services' },
                { href: '/register', label: 'Company Registration' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white tracking-wide uppercase">
              Our Solutions
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/products/shipping/', label: 'Shipping' },
                { href: '/products/warehouse/', label: 'Warehouse' },
                { href: '/products/transport/', label: 'Transport' },
                { href: '/products/tiep/', label: 'TIEP' },
                { href: '/products/factory/', label: 'Factory' },
                { href: '/products/finance/', label: 'Finance' },
                { href: '/products/hr/', label: 'HR' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white tracking-wide uppercase">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Email: info@inntrilabs.com</p>
              <p>Phone: +94 76 013 6593</p>
              <p>Address: Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Inntrilabs. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-slate-500 hover:text-cyan-300 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
