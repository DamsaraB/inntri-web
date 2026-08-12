import { API_ENDPOINTS } from '@/config/api';
import { apiClient, ApiError } from '@/api/apiClient';

export interface RegisteredModule {
  id: number;
  name: string;
  description?: string;
  code?: string;
  icon?: string;
}

export interface RegisterCompanyPayload {
  name: string;
  code: string;
  email: string;
  initialUser: true;
  registeredModules: Array<{ id: number; isPrimary: boolean }>;
  isUserInvited: true;
}

export interface RegisterCompanyResult {
  raw: unknown;
}

function unwrapContent(data: unknown): unknown {
  if (!data || typeof data !== 'object') return data;
  const record = data as Record<string, unknown>;

  if (Array.isArray(record.content)) return record.content;
  if (Array.isArray(record.data)) return record.data;
  if (Array.isArray(record.result)) return record.result;
  if (Array.isArray(record.items)) return record.items;
  if (Array.isArray(data)) return data;

  return data;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;
}

function pickString(
  record: Record<string, unknown>,
  keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
  }
  return undefined;
}

function normalizeModule(item: unknown): RegisteredModule | null {
  const record = asRecord(item);
  if (!record) return null;

  const rawId = record.id ?? record.moduleId ?? record.value;
  const id =
    typeof rawId === 'number'
      ? rawId
      : typeof rawId === 'string' && rawId.trim()
        ? Number(rawId)
        : NaN;

  if (!Number.isFinite(id)) return null;

  const name = pickString(record, [
    'name',
    'moduleName',
    'label',
    'title',
    'displayName',
    'code',
  ]);

  if (!name) return null;

  return {
    id,
    name,
    description: pickString(record, ['description', 'desc', 'details']),
    code: pickString(record, ['code', 'moduleCode', 'key']),
    icon: pickString(record, ['icon', 'iconUrl', 'imageUrl']),
  };
}

export async function getRegisteredModules(): Promise<RegisteredModule[]> {
  const data = await apiClient<unknown>(API_ENDPOINTS.registeredModules, {
    method: 'GET',
  });

  const list = unwrapContent(data);
  if (!Array.isArray(list)) {
    throw new ApiError('Unexpected registered modules response.', 500, data);
  }

  return list
    .map(normalizeModule)
    .filter((item): item is RegisteredModule => item !== null);
}

export async function registerCompany(
  payload: RegisterCompanyPayload
): Promise<RegisterCompanyResult> {
  const data = await apiClient<unknown>(API_ENDPOINTS.registerCompany, {
    method: 'POST',
    body: payload,
  });

  return { raw: data };
}

/**
 * Prefer the backend-provided reason whenever one is available.
 */
export function getRegistrationErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 0) {
      return 'Network error. Please check your connection and try again.';
    }

    const backendMessage = error.message?.trim();
    if (backendMessage) {
      return backendMessage;
    }

    if (error.status >= 500) {
      return 'Server error. We could not complete your registration right now. Please try again later.';
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message.trim();
  }

  return "We couldn't complete your registration. Please check your information and try again.";
}

/**
 * Maps backend validationFailures onto form fields when possible.
 */
export function getRegistrationFieldErrors(error: unknown): {
  name?: string;
  code?: string;
  email?: string;
  primaryModuleId?: string;
} {
  if (!(error instanceof ApiError) || !error.body || typeof error.body !== 'object') {
    return {};
  }

  const record = error.body as Record<string, unknown>;
  const failures = record.validationFailures;
  if (!Array.isArray(failures)) return {};

  const fieldErrors: {
    name?: string;
    code?: string;
    email?: string;
    primaryModuleId?: string;
  } = {};

  for (const item of failures) {
    if (!item || typeof item !== 'object') continue;
    const failure = item as Record<string, unknown>;
    const code =
      typeof failure.code === 'string' ? failure.code.toLowerCase().trim() : '';
    const message =
      typeof failure.message === 'string' ? failure.message.trim() : '';

    if (!message) continue;

    if (
      code.includes('company name') ||
      code === 'name' ||
      code === 'companyname' ||
      code === 'company_name'
    ) {
      fieldErrors.name = message;
      continue;
    }

    if (
      code.includes('company code') ||
      code === 'code' ||
      code === 'companycode' ||
      code === 'company_code'
    ) {
      fieldErrors.code = message;
      continue;
    }

    if (
      code.includes('email') ||
      code === 'company email' ||
      code === 'companyemail' ||
      code === 'company_email'
    ) {
      fieldErrors.email = message;
      continue;
    }

    if (code.includes('module') || code.includes('service')) {
      fieldErrors.primaryModuleId = message;
    }
  }

  return fieldErrors;
}

export function hasRegistrationFieldErrors(
  fieldErrors: ReturnType<typeof getRegistrationFieldErrors>
): boolean {
  return Object.keys(fieldErrors).length > 0;
}
