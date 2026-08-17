'use client';

import React from 'react';
import ModuleCard, {
  type ModuleSelectionState,
} from '@/components/registration/ModuleCard';
import type { RegisteredModule } from '@/services/companyRegistrationService';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface ModuleSelectionProps {
  modules: RegisteredModule[];
  modulesLoading: boolean;
  modulesError: string | null;
  primaryModuleId: number | null;
  additionalModuleIds: number[];
  selectionError?: string;
  isSubmitting: boolean;
  onToggleModule: (moduleId: number) => void;
  onSetPrimary: (moduleId: number) => void;
  onBack: () => void;
  onSubmit: () => void;
  onRetryModules: () => void;
}

function getSelectionState(
  moduleId: number,
  primaryModuleId: number | null,
  additionalModuleIds: number[]
): ModuleSelectionState {
  if (primaryModuleId === moduleId) return 'primary';
  if (additionalModuleIds.includes(moduleId)) return 'additional';
  return 'none';
}

export default function ModuleSelection({
  modules,
  modulesLoading,
  modulesError,
  primaryModuleId,
  additionalModuleIds,
  selectionError,
  isSubmitting,
  onToggleModule,
  onSetPrimary,
  onBack,
  onSubmit,
  onRetryModules,
}: ModuleSelectionProps) {
  const requestedCount =
    (primaryModuleId !== null ? 1 : 0) + additionalModuleIds.length;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-heading font-bold text-gray-900 md:text-2xl mb-1">
            Select MUTU Services
          </h2>
          <p className="text-gray-500 text-sm">
            Tap to select. First choice is primary — change it anytime.
          </p>
        </div>
        {requestedCount > 0 ? (
          <p className="text-xs text-cyan-600 sm:text-right">
            {requestedCount} selected
            {additionalModuleIds.length > 0
              ? ` · ${additionalModuleIds.length} additional`
              : ''}
          </p>
        ) : null}
      </div>

      {modulesLoading ? (
        <div className="flex flex-col items-center justify-center py-12 gap-3">
          <span
            className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-200 border-t-cyan-600"
            aria-hidden
          />
          <p className="text-sm text-gray-500">Loading available services...</p>
        </div>
      ) : modulesError ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-5 text-center">
          <p className="text-sm text-red-600 mb-3">{modulesError}</p>
          <button
            type="button"
            onClick={onRetryModules}
            className="btn-secondary inline-flex items-center justify-center px-6 py-3"
          >
            Retry
          </button>
        </div>
      ) : modules.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-surface-muted px-4 py-8 text-center">
          <p className="text-sm text-gray-500">
            No MUTU services are available at the moment. Please try again later.
          </p>
        </div>
      ) : (
        <div
          role="group"
          aria-label="MUTU services"
          className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
        >
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              selection={getSelectionState(
                module.id,
                primaryModuleId,
                additionalModuleIds
              )}
              onToggle={onToggleModule}
              onSetPrimary={onSetPrimary}
              disabled={isSubmitting}
            />
          ))}
        </div>
      )}

      {selectionError ? (
        <p className="text-sm text-red-600" role="alert">
          {selectionError}
        </p>
      ) : null}

      <div className="pt-1 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="btn-secondary magnetic-btn inline-flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting || modulesLoading || Boolean(modulesError)}
          className="btn-primary magnetic-btn inline-flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <span
                className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                aria-hidden
              />
              Registering...
            </>
          ) : (
            'Register Company'
          )}
        </button>
      </div>
    </div>
  );
}
