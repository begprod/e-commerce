import actions from '@/store/modules/auth/actions';
import getters from '@/store/modules/auth/getters';
import mutations from '@/store/modules/auth/mutations';

export const namespaced = true;

export const state = {
  authenticated: false,
};

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
