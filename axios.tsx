import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://fake-json-api.mock.beeceptor.com',

  headers: {
    'Content-Type': 'application/json',
  },
});

// const axiosInstance2 = axios.create({
//   baseURL: 'https://demo5037325.mockable.io/login',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
export {axiosInstance};
// export {axiosInstance2};
