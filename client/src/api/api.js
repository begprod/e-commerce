import axios from 'axios';
import useCommonStore from '@/stores/common';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

apiClient.interceptors.response.use(
  (response) => {
    useCommonStore().setIsLoading(false);
    useCommonStore().setIsError(false);
    useCommonStore().setErrorMessages([]);

    console.log('response', response);
    return response;
  },
  (error) => {
    useCommonStore().setIsLoading(false);
    useCommonStore().setIsError(true);
    useCommonStore().setErrorMessages(error.response.data.message);

    return Promise.reject(error);
  },
);

export default apiClient;
