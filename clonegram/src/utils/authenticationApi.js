import {AUTHENTICATION_API_URL, AUTHENTICATION_API_KEY} from '@env';
import axios from 'axios';

const authenticationApiUrl = AUTHENTICATION_API_URL || 'http://localhost';
const authenticationApiKey = AUTHENTICATION_API_KEY || 'secret';

const authenticationApi = axios.create({
  baseURL: authenticationApiUrl,
});

authenticationApi.interceptors.request.use(
  config => {
    config.params = {...config.params, key: authenticationApiKey};
    return config;
  },
  error => Promise.reject(error),
);

export default authenticationApi;
