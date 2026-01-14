// Centralized type definitions

// API Response wrapper type
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Pagination type
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

// Common error type
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
}
