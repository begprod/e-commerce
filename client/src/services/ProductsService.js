import apiClient from '@/api/api';

export default {
  getAllProducts() {
    return apiClient.get('/api/device');
  },

  addType(type) {
    return apiClient.post('/api/type', type);
  },

  getAllTypes() {
    return apiClient.get('/api/type');
  },

  addBrand(brand) {
    return apiClient.post('/api/brand', brand);
  },

  getAllBrands() {
    return apiClient.get('/api/brand');
  },
};
