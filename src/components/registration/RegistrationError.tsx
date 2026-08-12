'use client';

import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface RegistrationErrorProps {
  message: string;
  onTryAgain: () => void;
}

export default function RegistrationError({
  message,
  onTryAgain,
}: RegistrationErrorProps) {
  return (
    <div className="text-center py-4">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-400/40 bg-red-500/10">
        <ExclamationTriangleIcon className="h-10 w-10 text-red-400" />
      </div>

      <h2 className="text-3xl font-heading font-bold text-white mb-3">
        Registration Failed
      </h2>
      <p className="text-gray-300 max-w-md mx-auto mb-4 leading-relaxed">
        We couldn&apos;t complete your registration.
      </p>
      <div className="mb-8 mx-auto max-w-md rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3">
        <p className="text-sm text-red-300 leading-relaxed" role="alert">
          {message}
        </p>
      </div>

      <button
        type="button"
        onClick={onTryAgain}
        className="btn-primary magnetic-btn inline-flex items-center justify-center"
      >
        Try Again
      </button>
    </div>
  );
}
