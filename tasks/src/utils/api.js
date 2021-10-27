import {API_BASE_URL, API_PORT} from '@env';

const baseUrl = API_BASE_URL || 'http://localhost';
const port = API_PORT || 3000;

const apiUrl = `${baseUrl}:${port}`;

export {apiUrl};
