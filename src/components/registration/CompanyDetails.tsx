'use client';

import React from 'react';
import FormInput from '@/components/registration/FormInput';
import type {
  CompanyRegistrationFormData,
  FieldErrors,
} from '@/lib/companyRegistrationValidation';
import { sanitizeCompanyCode } from '@/lib/companyRegistrationValidation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface CompanyDetailsProps {
  formData: CompanyRegistrationFormData;
  errors: FieldErrors;
  onChange: <K extends keyof CompanyRegistrationFormData>(
    field: K,
    value: CompanyRegistrationFormData[K]
  ) => void;
  onContinue: () => void;
}

export default function CompanyDetails({
  formData,
  errors,
  onChange,
  onContinue,
}: CompanyDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-1">
          Company Information
        </h2>
        <p className="text-gray-500 text-sm">
          Enter your company details to get started with MUTU.
        </p>
      </div>

      <FormInput
        id="companyName"
        label="Company Name"
        required
        value={formData.name}
        onChange={(value) => onChange('name', value)}
        placeholder="Enter your company name"
        autoComplete="organization"
        error={errors.name}
        maxLength={150}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          id="companyCode"
          label="Company Code"
          required
          value={formData.code}
          onChange={(value) => onChange('code', sanitizeCompanyCode(value))}
          placeholder="CALT"
          autoComplete="off"
          helperText="2–12 letters or numbers. Spaces and symbols are removed."
          error={errors.code}
          maxLength={12}
        />

        <FormInput
          id="companyEmail"
          label="Company Email"
          type="email"
          required
          value={formData.email}
          onChange={(value) => onChange('email', value)}
          placeholder="Enter company email address"
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div className="pt-2 flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="btn-primary magnetic-btn inline-flex items-center justify-center w-full sm:w-auto"
        >
          Continue
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
