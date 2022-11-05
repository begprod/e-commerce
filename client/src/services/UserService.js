import apiClient from '@/api/api';

export default {
  signUp(payload) {
    return apiClient.post('/api/user/signup', payload);
  },

  signIn(payload) {
    return apiClient.post('/api/user/login', payload);
  },

  addToCart(userId, payload) {
    return apiClient.post(`/api/user/add-to-cart/${userId}`, payload);
  },

  checkAuth() {
    return apiClient.get('/api/user/auth');
  },
};
