import jwtDecode from 'jwt-decode';
import { defineStore } from 'pinia';
import UserServices from '@/services/UserService';

const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    authenticated: false,
    cart: [],
  }),

  actions: {
    signUp(payload) {
      return UserServices.signUp(payload);
    },

    signIn(payload) {
      return UserServices.signIn(payload);
    },

    setCurrentUser(user) {
      this.user = user;
    },

    setAuthenticated(authenticated) {
      this.authenticated = authenticated;
    },

    async setCart(userId) {
      const cart = await UserServices.getCart(userId);

      this.cart = cart.data;
    },

    addToCart(userId, payload) {
      return UserServices.addToCart(userId, payload);
    },

    async check() {
      await UserServices.checkAuth()
        .then((response) => {
          const { token } = response.data;
          const decodedToken = jwtDecode(token);

          this.setCurrentUser(decodedToken);
          this.setAuthenticated(true);
          this.setCart(this.user.id);
        });
    },
  },

  getters: {
    currentUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'ADMIN',
    isAuthenticated: (state) => state.authenticated,
    currentCart: (state) => state.cart,
  },
});

export default useUserStore;
