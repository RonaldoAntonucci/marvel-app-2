import axios, { AxiosRequestConfig } from 'axios';
import md5 from 'md5';

export const URL_API = process.env.REACT_APP_MARVEL_URL_API;

export const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

export const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

if (!URL_API || !PUBLIC_KEY || !PRIVATE_KEY) {
  throw new Error(
    'Invalid ENVIROMENT VARIABLES(MARVEL_URL_API or MARVEL_PUBLIC_KEY or MARVEL_PRIVATE_KEY)',
  );
}

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
