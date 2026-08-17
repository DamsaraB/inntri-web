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
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                      : 'border-gray-200 bg-surface-muted text-gray-400'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {String(step.id).padStart(2, '0')}
                </span>
                <span
                  className={`truncate text-xs sm:text-sm font-medium ${
                    isActive || isComplete ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className={`h-px flex-1 ${
                    isComplete ? 'bg-cyan-400' : 'bg-gray-200'
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
