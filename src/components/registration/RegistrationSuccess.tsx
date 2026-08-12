'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface RegistrationSuccessProps {
  companyName: string;
  primaryServiceName: string;
  additionalServiceNames: string[];
  email: string;
  onContinue?: () => void;
}

export default function RegistrationSuccess({
  companyName,
  primaryServiceName,
  additionalServiceNames,
  email,
  onContinue,
}: RegistrationSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-4"
    >
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-glow">
        <CheckCircleIcon className="h-11 w-11 text-cyan-400" />
      </div>

      <h2 className="text-3xl font-heading font-bold text-white mb-3">
        Registration Successful!
      </h2>
      <p className="text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
        Your company has been successfully registered with MUTU.
      </p>

      <div className="glass-card border-cyan-500/30 rounded-2xl px-6 py-5 text-left max-w-md mx-auto mb-8 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Company
          </p>
          <p className="text-white font-medium break-words">{companyName}</p>
        </div>
        <div className="h-px bg-cyan-500/15" />
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Primary Service
          </p>
          <p className="text-cyan-300 font-medium">{primaryServiceName}</p>
        </div>
        {additionalServiceNames.length > 0 ? (
          <>
            <div className="h-px bg-cyan-500/15" />
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                Also Requested
              </p>
              <ul className="space-y-1">
                {additionalServiceNames.map((name) => (
                  <li key={name} className="text-cyan-200/90 text-sm font-medium">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>

      <p className="text-sm text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
        A registration confirmation has been sent to{' '}
        <span className="text-gray-200">{email}</span>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {onContinue ? (
          <button
            type="button"
            onClick={onContinue}
            className="btn-primary magnetic-btn w-full sm:w-auto inline-flex items-center justify-center"
          >
            Continue
          </button>
        ) : (
          <Link
            href="/products"
            className="btn-primary magnetic-btn w-full sm:w-auto inline-flex items-center justify-center"
          >
            Continue
          </Link>
        )}
        <Link
          href="/contact"
          className="btn-secondary magnetic-btn w-full sm:w-auto inline-flex items-center justify-center"
        >
          Contact Support
        </Link>
      </div>
    </motion.div>
  );
}
