import { defineStore } from 'pinia';

const useCommonStore = defineStore('common', {
  state: () => ({
    isLoading: false,
    isError: false,
    errorMessages: [],
  }),
  actions: {
    setIsLoading(isLoading) {
      this.isLoading = isLoading;
    },
    setIsError(isError) {
      this.isError = isError;
    },
    setErrorMessages(errorMessages) {
      this.errorMessages = errorMessages;
    },
  },
  getters: {
    getIsLoading: (state) => state.isLoading,
    getIsError: (state) => state.isError,
    getErrorMessages: (state) => state.errorMessages,
  },
});

export default useCommonStore;
