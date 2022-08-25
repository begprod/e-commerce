export default {
  setAuth({ commit }, { email, password }) {
    console.log('signIn', email, password);
    console.log(commit);
  },

  setUser({ commit }, { email, password }) {
    console.log('signIn', email, password);
    console.log(commit);
  },
};
