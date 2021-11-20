import {API_URL} from '@env';
import axios from 'axios';

const apiUrl = API_URL || 'http://localhost';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
