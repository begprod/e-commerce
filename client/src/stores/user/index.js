import { defineStore } from 'pinia';
import jwtDecode from 'jwt-decode';
import UserServices from '@/services/UserService';

const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      email: null,
      role: null,
    },
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
  },

  getters: {
    currentUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'ADMIN',
    isAuthenticated: (state) => state.authenticated,
  },
});

export default useUserStore;
