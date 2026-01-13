// API Configuration
// Base URL can be overridden via environment variable VITE_API_BASE_URL

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://staging-nextshop-backend.prospectbdltd.com/api',
  headers: {
    'Content-Type': 'application/json',
    'X-Tenant': 'nextshop',
  },
  timeout: 30000, // 30 seconds
} as const;
