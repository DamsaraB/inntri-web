/**
 * Centralized API configuration.
 * Use NEXT_PUBLIC_API_GATEWAY in production (.env / hosting env).
 */
export const API_GATEWAY =
  process.env.NEXT_PUBLIC_API_GATEWAY ??
  'https://uat.mutu.solutions/gateway';

export const API_ENDPOINTS = {
  registeredModules: `${API_GATEWAY}/identity/api/registeredModules`,
  registerCompany: `${API_GATEWAY}/identity/api/companies/register`,
} as const;
