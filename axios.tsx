import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://fake-json-api.mock.beeceptor.com',

  headers: {
    'Content-Type': 'application/json',
  },
});
export {axiosInstance};
