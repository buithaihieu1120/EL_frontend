import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    throw error;
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
