import axios, { AxiosInstance } from 'axios';

export const baseRequest = () => {
  return axios.create({
    baseURL: '/',
  });
};