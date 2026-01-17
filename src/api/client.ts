// import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
// import { API_CONFIG } from './config';

// // Create Axios instance with centralized configuration
// const apiClient: AxiosInstance = axios.create({
//   baseURL: API_CONFIG.baseURL,
//   headers: API_CONFIG.headers,
//   timeout: API_CONFIG.timeout,
// });

// // Request interceptor
// apiClient.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // You can add auth tokens here in the future
//     // const token = localStorage.getItem('token');
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//     // }
//     return config;
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// apiClient.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     // Handle common errors here
//     if (error.response) {
//       const { status } = error.response;
      
//       switch (status) {
//         case 401:
//           // Handle unauthorized - can redirect to login in the future
//           console.error('Unauthorized access');
//           break;
//         case 403:
//           console.error('Forbidden access');
//           break;
//         case 404:
//           console.error('Resource not found');
//           break;
//         case 500:
//           console.error('Server error');
//           break;
//         default:
//           console.error('API error:', error.message);
//       }
//     } else if (error.request) {
//       console.error('Network error - no response received');
//     } else {
//       console.error('Request error:', error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default apiClient;



 import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { API_CONFIG } from './config';
import { toast } from 'sonner';
import { useAuthStore } from '../store/authStore';
import { useLoadingStore } from '../store/LoadingStore';

// Create Axios instance with centralized configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: API_CONFIG.headers,
  timeout: API_CONFIG.timeout,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    useLoadingStore.getState().startLoading();
    
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    useLoadingStore.getState().stopLoading();
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    useLoadingStore.getState().stopLoading();
    return response;
  },
  (error: AxiosError) => {
    useLoadingStore.getState().stopLoading();
    
    // Skip global error handling for auth endpoints (they handle errors locally)
    const isAuthEndpoint = error.config?.url?.includes('/auth/');
    if (isAuthEndpoint) {
      return Promise.reject(error);
    }
    
    // Handle common errors here
    if (error.response) {
      const { status } = error.response;
      
      switch (status) {
        case 401:
          toast.error('Session expired. Please log in again.');
          useAuthStore.getState().logout();
          window.location.href = '/login';
          break;
        case 403:
          toast.error('You do not have permission to perform this action.');
          break;
        case 404:
          toast.error('The requested resource was not found.');
          break;
        case 500:
          toast.error('Server error. Please try again later.');
          break;
        default:
          toast.error(error.message || 'An unexpected error occurred.');
      }
    } else if (error.request) {
      toast.error('Network error. Please check your connection.');
    } else {
      toast.error(error.message || 'An unexpected error occurred.');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;

