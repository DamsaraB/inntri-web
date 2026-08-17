'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajith Perera',
      position: 'CEO',
      company: 'SuperMart Chain',
      content: 'Inntrilabs transformed our retail operations completely. The WMS system is intuitive, fast, and has significantly improved our warehouse efficiency. Our operations improved by 50%!',
      rating: 5,
      verified: true,
    },
    {
      id: 2,
      name: 'Priya Fernando',
      position: 'Operations Manager',
      company: 'TechCorp Solutions',
      content: 'The Fleet Management System has been a game-changer for us. Real-time tracking, automated alerts, and comprehensive analytics make fleet operations effortless. Highly recommended!',
      rating: 5,
      verified: true,
    },
    {
      id: 3,
      name: 'Dinesh Silva',
      position: 'IT Director',
      company: 'Global Manufacturing Ltd',
      content: 'Working with Inntrilabs on our Factory Management System was seamless. They understood our requirements perfectly and delivered a solution that exceeded our expectations. The team is professional and responsive.',
      rating: 5,
      verified: true,
    },
    {
      id: 4,
      name: 'Samantha Jayasuriya',
      position: 'Logistics Director',
      company: 'Express Logistics',
      content: 'The Shipping Management System streamlined our entire courier operations. The automated workflows and real-time tracking have reduced our delivery time by 35%. Outstanding solution!',
      rating: 5,
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden section-muted">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
            Success <span className="text-cyan-600">stories</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Operators who run warehouse, fleet, and factory workflows on Inntrilabs
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] perspective-1000">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 100, rotateY: 45, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      x: offset * 50,
                      rotateY: offset * 15,
                      scale: isActive ? 1 : 0.85,
                      z: isActive ? 0 : -100,
                    }}
                    exit={{ opacity: 0, x: -100, rotateY: -45, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 glass-card glass-card-hover p-8 card-3d shadow-soft border-gray-200 ${
                      isActive ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center border border-cyan-200">
                          <span className="text-2xl text-cyan-600">&quot;</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-cyan-600 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow italic text-lg">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author */}
                      <div className="flex items-center pt-6 border-t border-gray-200">
                        <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 font-bold text-xl mr-4 border border-cyan-200">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <CheckBadgeIcon className="w-5 h-5 text-cyan-600" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-lg glass-card border-gray-200 text-cyan-600 hover:bg-cyan-50 transition-colors magnetic-btn shadow-soft"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cyan-600 w-8'
                      : 'bg-cyan-200 hover:bg-cyan-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-lg glass-card border-gray-200 text-cyan-600 hover:bg-cyan-50 transition-colors magnetic-btn shadow-soft"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
