export interface CompanyRegistrationFormData {
  name: string;
  code: string;
  email: string;
  primaryModuleId: number | null;
  additionalModuleIds: number[];
}

export interface FieldErrors {
  name?: string;
  code?: string;
  email?: string;
  primaryModuleId?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMPANY_CODE_REGEX = /^[A-Z0-9]{2,12}$/;

export function sanitizeCompanyCode(value: string): string {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 12);
}

export function validateCompanyDetails(
  data: Pick<CompanyRegistrationFormData, 'name' | 'code' | 'email'>
): FieldErrors {
  const errors: FieldErrors = {};
  const name = data.name.trim();
  const code = data.code.trim().toUpperCase();
  const email = data.email.trim();

  if (!name) {
    errors.name = 'Company Name is required.';
  } else if (name.length < 2) {
    errors.name = 'Company Name must be at least 2 characters.';
  } else if (name.length > 150) {
    errors.name = 'Company Name must be 150 characters or fewer.';
  }

  if (!code) {
    errors.code = 'Company Code is required.';
  } else if (!COMPANY_CODE_REGEX.test(code)) {
    errors.code =
      'Company Code must be 2–12 characters and contain only letters and numbers.';
  }

  if (!email) {
    errors.email = 'Company Email is required.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

export function validateModuleSelection(
  primaryModuleId: number | null
): FieldErrors {
  if (primaryModuleId === null) {
    return {
      primaryModuleId: 'Please select a primary MUTU service to continue.',
    };
  }
  return {};
}

export function buildRegisteredModulesPayload(
  primaryModuleId: number,
  additionalModuleIds: number[]
): Array<{ id: number; isPrimary: boolean }> {
  const additional = additionalModuleIds
    .filter((id) => id !== primaryModuleId)
    .filter((id, index, list) => list.indexOf(id) === index)
    .map((id) => ({ id, isPrimary: false }));

  return [{ id: primaryModuleId, isPrimary: true }, ...additional];
}

export function getModuleDisplayName(name: string): string {
  const normalized = name.trim();
  const known: Record<string, string> = {
    warehouse: 'MUTU WMS',
    transport: 'MUTU TRANS',
    hris: 'MUTU HRIS',
    clearance: 'MUTU CLEARANCE',
    shipping: 'MUTU SHIPPING',
    tiep: 'MUTU TIEP',
    factory: 'MUTU FACTORY',
    finance: 'MUTU FINANCE',
  };

  const key = normalized.toLowerCase();
  if (known[key]) return known[key];

  if (/^mutu/i.test(normalized)) return normalized.toUpperCase();
  return `MUTU ${normalized.toUpperCase()}`;
}

export function getModuleDescription(name: string, description?: string): string {
  if (description?.trim()) return description.trim();

  const known: Record<string, string> = {
    warehouse: 'Warehouse Management System',
    transport: 'Fleet & Transport Management',
    hris: 'Human Resource Information System',
    clearance: 'Customs Clearance Management',
    shipping: 'Shipping & Courier Management',
    tiep: 'Transportation & Logistics Platform',
    factory: 'Factory & Production Management',
    finance: 'Finance Management',
  };

  return known[name.trim().toLowerCase()] ?? 'MUTU enterprise service module';
}
