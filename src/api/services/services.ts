import apiClient from '../client';

export interface Service {
  id: number | string;
  name: string;
  description?: string;
  price?: number | string;
  image?: string;
  icon?: string;
  category?: string;
  status?: string;
  created_at?: string;
}

interface ServicesResponse {
  data: Service[];
}

export const servicesService = {
  getServices: async (): Promise<Service[]> => {
    const response = await apiClient.get<ServicesResponse>('/services');
    return response.data.data;
  },

  getServiceById: async (id: string | number): Promise<Service> => {
    const response = await apiClient.get<{ data: Service }>(`/services/${id}`);
    return response.data.data;
  },
};