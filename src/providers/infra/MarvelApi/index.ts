import axios, { AxiosRequestConfig } from 'axios';
import md5 from 'md5';

export const URL_API = 'https://gateway.marvel.com:443/v1/public/';

export const PUBLIC_KEY = '60114b4252d585e8c9ac72c1f5d3ad4e';

export const PRIVATE_KEY = '3b3cccdf7f219c6fe78a1b0e8c8c6f314e0e189d';

const timestamp = new Date().getTime();
const hashCode = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: URL_API,
  params: {
    apikey: PUBLIC_KEY,
    hash: hashCode,
    ts: timestamp,
  },
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Accept: '*/*',
    };
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
