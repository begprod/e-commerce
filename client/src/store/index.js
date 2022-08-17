import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      isLoggedIn: false,
    },
  },
  getters: {
    isLoggedIn: (state) => state.user.isLoggedIn,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
