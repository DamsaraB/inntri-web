'use client';

import React from 'react';
import {
  BuildingStorefrontIcon,
  TruckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  CubeIcon,
  PresentationChartBarIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  Squares2X2Icon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import type { RegisteredModule } from '@/services/companyRegistrationService';
import {
  getModuleDescription,
  getModuleDisplayName,
} from '@/lib/companyRegistrationValidation';

export type ModuleSelectionState = 'none' | 'primary' | 'additional';

interface ModuleCardProps {
  module: RegisteredModule;
  selection: ModuleSelectionState;
  onToggle: (moduleId: number) => void;
  onSetPrimary: (moduleId: number) => void;
  disabled?: boolean;
}

function resolveIcon(name: string) {
  const key = name.trim().toLowerCase();
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    warehouse: BuildingStorefrontIcon,
    wms: BuildingStorefrontIcon,
    transport: TruckIcon,
    trans: TruckIcon,
    fleet: TruckIcon,
    hris: UserGroupIcon,
    hr: UserGroupIcon,
    clearance: DocumentCheckIcon,
    shipping: CubeIcon,
    tiep: PresentationChartBarIcon,
    factory: Cog6ToothIcon,
    finance: BanknotesIcon,
  };

  return map[key] ?? Squares2X2Icon;
}

export default function ModuleCard({
  module,
  selection,
  onToggle,
  onSetPrimary,
  disabled,
}: ModuleCardProps) {
  const Icon = resolveIcon(module.name);
  const title = getModuleDisplayName(module.name);
  const description = getModuleDescription(module.name, module.description);
  const isPrimary = selection === 'primary';
  const isAdditional = selection === 'additional';
  const isSelected = isPrimary || isAdditional;

  return (
    <div
      className={`relative h-full rounded-2xl border transition-all duration-200 ${
        isPrimary
          ? 'border-cyan-400/70 bg-cyan-500/10 shadow-glow'
          : isAdditional
            ? 'border-cyan-500/45 bg-cyan-500/5'
            : 'border-cyan-500/20 bg-navy-900/30 hover:border-cyan-500/40 hover:bg-navy-800/40'
      }`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => onToggle(module.id)}
        aria-pressed={isSelected}
        className={`flex h-full w-full flex-col p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed md:p-5 ${
          isAdditional ? 'pb-12' : ''
        }`}
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl border md:h-11 md:w-11 ${
              isSelected
                ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/25 to-blue-500/20'
                : 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
            }`}
          >
            <Icon className="h-5 w-5 text-cyan-400 md:h-6 md:w-6" />
          </div>

          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
              isSelected
                ? 'border-cyan-400 bg-cyan-400 text-navy-900'
                : 'border-gray-500 bg-transparent'
            }`}
            aria-hidden
          >
            {isSelected ? (
              <span className="text-[11px] font-bold leading-none">✓</span>
            ) : null}
          </span>
        </div>

        <h3 className="font-heading text-sm font-semibold text-white md:text-base">
          {title}
        </h3>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-400 md:text-sm">
          {description}
        </p>

        {isPrimary ? (
          <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-2 py-0.5 text-[11px] font-medium text-cyan-300">
            <StarSolidIcon className="h-3 w-3" />
            Primary
          </span>
        ) : isAdditional ? (
          <span className="mt-3 inline-flex w-fit items-center rounded-full border border-cyan-500/30 bg-navy-900/50 px-2 py-0.5 text-[11px] font-medium text-cyan-400/90">
            Also requested
          </span>
        ) : (
          <span className="mt-3 text-[11px] text-gray-500">Tap to select</span>
        )}
      </button>

      {isSelected && !isPrimary ? (
        <button
          type="button"
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            onSetPrimary(module.id);
          }}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-navy-950/80 px-2 py-1 text-[11px] font-medium text-cyan-300 backdrop-blur-sm transition-colors hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50"
          aria-label={`Set ${title} as primary`}
        >
          <StarIcon className="h-3.5 w-3.5" />
          Make primary
        </button>
      ) : null}
    </div>
  );
}
