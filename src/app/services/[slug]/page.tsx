import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getServiceById, services } from '@/data/services';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return { title: 'Service | Inntrilabs' };
  return {
    title: `${service.name} | Inntrilabs`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 relative overflow-hidden">
        <div className="relative h-[42vh] min-h-[280px] max-h-[440px] w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        <div className="container-custom relative -mt-24 pb-12">
          <div className="glass-card shadow-soft-lg p-8 md:p-10 max-w-3xl">
            <p className="text-cyan-600 text-sm font-semibold tracking-[0.16em] uppercase mb-3">
              Service
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-4 section-muted">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {service.description}
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-5">
                What you can expect
              </h2>
              <ul className="space-y-4">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-cyan-600 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Capabilities
              </h3>
              <ul className="space-y-3">
                {service.capabilities.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 border border-gray-100 rounded-xl px-3 py-2.5 bg-surface-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 section-accent border-cyan-100">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Start a project
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Book a consultation and we&apos;ll scope the right delivery path for this service.
              </p>
              <Link
                href="/contact"
                className="btn-accent w-full justify-center inline-flex items-center !px-5 !py-3 text-sm"
              >
                Book a Demo
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              More services
            </h2>
            <Link href="/services" className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}/`}
                className="glass-card glass-card-hover overflow-hidden group"
              >
                <div className="relative h-40 bg-cyan-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
