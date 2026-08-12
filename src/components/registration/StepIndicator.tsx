'use client';

import React from 'react';

interface StepIndicatorProps {
  currentStep: 1 | 2;
}

const steps = [
  { id: 1 as const, label: 'Company Details' },
  { id: 2 as const, label: 'Select Service' },
];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Registration progress" className="mb-8">
      <ol className="flex items-center gap-2 sm:gap-4">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isComplete = currentStep > step.id;

          return (
            <li key={step.id} className="flex flex-1 items-center gap-2 sm:gap-4">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold border transition-colors ${
                    isActive || isComplete
                      ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                      : 'border-gray-600 bg-navy-900/40 text-gray-500'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {String(step.id).padStart(2, '0')}
                </span>
                <span
                  className={`truncate text-xs sm:text-sm font-medium ${
                    isActive || isComplete ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className={`h-px flex-1 ${
                    isComplete ? 'bg-cyan-400/60' : 'bg-cyan-500/20'
                  }`}
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
