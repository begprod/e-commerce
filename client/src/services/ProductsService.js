import apiClient from '@/api/api';

export default {
  getAllProducts() {
    return apiClient.get('/api/device');
  },

  getAllTypes() {
    return apiClient.get('/api/type');
  },

  getAllBrands() {
    return apiClient.get('/api/brand');
  },
};
