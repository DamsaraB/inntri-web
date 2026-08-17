import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/story/LogoMarquee';
import N2NFlowSection from '@/components/story/N2NFlowSection';
import LifecycleShowcase from '@/components/story/LifecycleShowcase';
import AccordionFAQ from '@/components/story/AccordionFAQ';
import Testimonials from '@/components/Testimonials';
import ClientWall from '@/components/story/ClientWall';
import FinalCTA from '@/components/story/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoMarquee />
      <N2NFlowSection />
      <LifecycleShowcase />
      <AccordionFAQ />
      <Testimonials />
      <ClientWall />
      <FinalCTA />
      <Footer />
    </main>
  );
}
