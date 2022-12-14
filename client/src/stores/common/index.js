import { defineStore } from 'pinia';

const useCommonStore = defineStore('common', {
  state: () => ({
    isLoading: false,
    isError: false,
    isToastVisible: false,
    toastMessage: '',
    errorMessages: null,
  }),

  actions: {
    setIsLoading(isLoading) {
      this.isLoading = isLoading;
    },

    setIsError(isError) {
      this.isError = isError;
    },

    setToastMessageIsVisible(isToastVisible) {
      this.isToastVisible = isToastVisible;
    },

    setToastMessage(messages) {
      this.toastMessage = messages;
    },

    setErrorMessages(errorMessages) {
      this.errorMessages = errorMessages;
    },
  },

  getters: {
    getIsLoading: (state) => state.isLoading,
    getIsError: (state) => state.isError,
    getToastMessageIsVisible: (state) => state.isToastVisible,
    getToastMessage: (state) => state.toastMessage,
    getErrorMessages: (state) => state.errorMessages,
  },
});

export default useCommonStore;
