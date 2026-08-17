'use client';

import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email';
  placeholder?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  maxLength?: number;
  disabled?: boolean;
  helperText?: string;
  className?: string;
}

const inputClassName =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed';

export default function FormInput({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
  error,
  autoComplete,
  maxLength,
  disabled,
  helperText,
  className = '',
}: FormInputProps) {
  const describedBy = error ? `${id}-error` : helperText ? `${id}-help` : undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required ? <span className="text-cyan-600 ml-1">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={`${inputClassName} ${
          error ? 'border-red-300 focus:ring-red-400 focus:border-red-400' : ''
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-help`} className="mt-2 text-xs text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
