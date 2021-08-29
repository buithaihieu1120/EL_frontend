import axiosClient from './axiosClient';

const URL = '/account';

const accountApi = {
  postRegister: (email, name, password) => {
    return axiosClient.post(`${URL}/register`, { email, name, password });
  },
  postLogin: (email, password) => {
    return axiosClient.post(`${URL}/login`, { email, password });
  },
  postLogout: () => {
    return axiosClient.post(`${URL}/logout`);
  },
};

export default accountApi;
