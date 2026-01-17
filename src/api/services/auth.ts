import apiClient from '../client';

export interface LoginRequest {
  email: string;
  password: string;
}

// Updated to match NextShop API response structure
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    permissions: string[];
  };
}

export const authService = {
  // Updated endpoint from /auth/login → /v2/auth/login
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/v2/auth/login', data);
    console.log(response.data)
    return response.data;
  },
};
