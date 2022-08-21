import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const namespaced = true;

export const state = {
  authenticated: true,
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
