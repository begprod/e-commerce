import { defineStore } from 'pinia';

const useuUserStore = defineStore('user', {
  state: () => ({
    user: {
      email: 'test@test.test',
      role: 'USER',
    },
    authenticated: false,
  }),

  actions: {},

  getters: {
    currentUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'ADMIN',
    isAuthenticated: (state) => state.authenticated,
  },
});

export default useuUserStore;
