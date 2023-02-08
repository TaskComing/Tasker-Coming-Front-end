import axios from 'axios';

const backendHttpInstance = () => {
  const axiosInstance = axios.create();
  axiosInstance.defaults.baseURL = 'http://localhost:5000';

  axiosInstance.defaults.headers.common.Authorization = localStorage.getItem('token') || '';

  axiosInstance.interceptors.response.use(
    (config) => {
      // update jwt
      const { authorization } = config.headers;
      if (authorization && authorization.startsWith('Bearer')) {
        localStorage.setItem('token', authorization);
      }

      return config;
    },
    (error) => {
      error && console.log(error.response);

      // jwt expired or invalid
      if (error && error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        return '';
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

const http = (endpoint, config) => {
  const axiosInstance = backendHttpInstance();
  return axiosInstance(endpoint, { ...config });
};

export default http;
