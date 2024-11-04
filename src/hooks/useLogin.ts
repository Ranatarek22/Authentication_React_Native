import {useMutation} from 'react-query';
import AuthApi from '../api/AuthApi';
import {LoginData} from '../models/AuthModels';
import {LoginResponse} from '../models/LoginResponse';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
export type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  Users: undefined;
  Main: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
export const useLogin = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return useMutation(
    async (loginData: LoginData) => {
      const data: LoginResponse = await AuthApi(loginData);
      return data;
    },
    {
      onSuccess: async (data: LoginResponse) => {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!',
          visibilityTime: 7000,
          position: 'top',
        });
        const {
          name,
          email,
          token: {loginToken},
        } = data.result;

        await AsyncStorage.setItem('token', loginToken);
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('email', email || '');

        navigation.navigate('Main');
      },
      onError: (error: any) => {
        console.error('Login error:', error);
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: `${error}`,
          position: 'top',
        });
      },
    },
  );
};
