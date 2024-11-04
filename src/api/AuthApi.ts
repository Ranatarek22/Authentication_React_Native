import axios from 'axios';
import {LoginData} from '../models/AuthModels';
import {LoginResponse} from '../models/LoginResponse';

export const AuthApi = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    'http://demo5037325.mockable.io/login',
    data,
  );
  console.log(response.data);
  return response.data;
};
export default AuthApi;
