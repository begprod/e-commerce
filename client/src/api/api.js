import axios from 'axios';
import useCommonStore from '@/stores/common';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const authInterceptor = (config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};

apiClient.interceptors.request.use(authInterceptor);

apiClient.interceptors.response.use(
  (response) => {
    useCommonStore().setIsLoading(false);
    useCommonStore().setIsError(false);
    useCommonStore().setErrorMessages([]);
    useCommonStore().setToastMessageIsVisible(false);

    console.log('apiClient response', response);
    return response;
  },
  (error) => {
    useCommonStore().setIsLoading(false);
    useCommonStore().setIsError(true);
    useCommonStore().setErrorMessages(error.response.data.message || error.response.status);

    if (error.response.status !== 401) {
      useCommonStore().setToastMessageIsVisible(true);
    }

    console.log('apiClient error', error);
    return Promise.reject(error);
  },
);

export default apiClient;
