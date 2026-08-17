'use client';

import React from 'react';

const LOGOS = [
  'Logistics Co',
  'Express Freight',
  'Harbor Retail',
  'Metro Foods',
  'Island Motors',
  'Pacific Warehousing',
  'Ceylon Manufacturing',
  'BlueLine Shipping',
  'Urban Fleet',
  'Prime Distribution',
];

const LogoMarquee: React.FC = () => {
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-12 border-y border-gray-100 bg-surface-muted overflow-hidden">
      <div className="container-custom mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
          Trusted across the logistics world
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-muted to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-8 flex items-center justify-center min-w-[160px]"
            >
              <span className="text-lg md:text-xl font-heading font-semibold text-gray-400 hover:text-cyan-700 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
