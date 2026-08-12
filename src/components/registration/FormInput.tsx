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
  'w-full px-4 py-3 glass-card border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-navy-800/50 text-white placeholder-gray-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed';

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
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required ? <span className="text-cyan-400 ml-1">*</span> : null}
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
          error ? 'border-red-400/60 focus:ring-red-400 focus:border-red-400' : ''
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400" role="alert">
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
