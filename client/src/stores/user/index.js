import jwtDecode from 'jwt-decode';
import { defineStore } from 'pinia';
import UserServices from '@/services/UserService';

const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    authenticated: false,
  }),

  actions: {
    signUp(payload) {
      return UserServices.signUp(payload);
    },

    signIn(payload) {
      return UserServices.signIn(payload);
    },

    async check() {
      await UserServices.checkAuth()
        .then((response) => {
          const { token } = response.data;
          const decodedToken = jwtDecode(token);

          this.setCurrentUser(decodedToken);
          this.setAuthenticated(true);
        });
    },

    setCurrentUser(user) {
      this.user = user;
    },

    setAuthenticated(authenticated) {
      this.authenticated = authenticated;
    },

    addToCart(userId, payload) {
      return UserServices.addToCart(userId, payload);
    },
  },

  getters: {
    currentUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'ADMIN',
    isAuthenticated: (state) => state.authenticated,
  },
});

export default useUserStore;
