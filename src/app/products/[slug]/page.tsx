import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getProductById, products } from '@/data/products';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: 'Product | Inntrilabs' };
  return {
    title: `${product.name} | Inntrilabs MUTU`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 relative overflow-hidden">
        <div className="relative h-[42vh] min-h-[280px] max-h-[440px] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-transparent" />
        </div>

        <div className="container-custom relative -mt-24 pb-10">
          <div className="glass-card shadow-soft-lg p-8 md:p-10 max-w-3xl">
            <p className="text-cyan-600 text-sm font-semibold tracking-[0.16em] uppercase mb-3">
              {product.tagline}
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              {product.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/register" className="btn-accent inline-flex items-center justify-center">
                Register Company
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-4 section-muted">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {product.description}
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-5">
                What you can expect
              </h2>
              <ul className="space-y-4">
                {product.outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-cyan-600 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-5">Key features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 rounded-xl border border-gray-100 bg-surface-muted px-3.5 py-3 text-sm text-gray-700"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Capabilities
              </h3>
              <ul className="space-y-3">
                {product.capabilities.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 border border-gray-100 rounded-xl px-3 py-2.5 bg-surface-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Ideal for</h3>
              <div className="flex flex-wrap gap-2">
                {product.idealFor.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 section-accent border-cyan-100">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Get started with {product.shortName}
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Create your company account and select this module as your primary MUTU service.
              </p>
              <Link
                href="/register"
                className="btn-accent w-full justify-center inline-flex items-center !px-5 !py-3 text-sm"
              >
                Register Company
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
              More MUTU modules
            </h2>
            <Link href="/products" className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}/`}
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
