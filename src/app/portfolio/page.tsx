'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Portfolio case studies removed — send visitors to MUTU products. */
export default function PortfolioPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/products/');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-500 text-sm">Redirecting to products…</p>
    </main>
  );
}
