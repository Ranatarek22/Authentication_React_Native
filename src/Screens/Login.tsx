import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginResponse} from '../models/LoginResponse';
import {LoginData} from '../models/AuthModels';
import {useMutation} from 'react-query';
import AuthApi from '../api/AuthApi';
import {useLogin} from '../hooks/useLogin';

const logo = require('../images/login.png');
const facebook = require('../images/facebook.png');
const pint = require('../images/pinterest.png');
const link = require('../images/Group.png');

const validationSchema = Yup.object().shape({
  mobileNumber: Yup.string().required('Please enter your mobile number'),
  password: Yup.string().required('Please enter your password'),
});

const LoginScreen = () => {
  const {mutate: login, isLoading} = useLogin();

  const handleLogin = (values: LoginData) => {
    login(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Login</Text>
        <Image source={logo} />
      </View>
      <Formik
        initialValues={{mobileNumber: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.textInput}>Enter Mobile Number</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.mobileNumber && errors.mobileNumber
                    ? styles.errorInput
                    : null,
                ]}
                placeholder="Mobile Number"
                onChangeText={handleChange('mobileNumber')}
                onBlur={handleBlur('mobileNumber')}
                value={values.mobileNumber}
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
              />
              {touched.mobileNumber && errors.mobileNumber ? (
                <Text style={styles.errorText}>{errors.mobileNumber}</Text>
              ) : null}
            </View>
            <View>
              <Text style={styles.textInput}>Enter Password</Text>
              <TextInput
                style={[
                  styles.input,
                  touched.password && errors.password
                    ? styles.errorInput
                    : null,
                ]}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>
            <View style={styles.buttonAlign}>
              <Pressable onPress={() => handleSubmit()}>
                <LinearGradient
                  colors={['#6e79af', '#7482c1', '#7d90dd']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>LOGIN</Text>
                </LinearGradient>
              </Pressable>
            </View>
            <View style={styles.loginWith}>
              <View style={styles.line} />
              <Text>Or login with </Text>

              <View style={styles.line} />
            </View>
            <View style={styles.brands}>
              <Image source={facebook} />
              <Image source={pint} />
              <Image source={link} />
            </View>

            <View style={styles.signup}>
              <Text style={{color: '#b6bcd4'}}>New User?</Text>
              <Text style={{color: '#fc9a83'}}>Create an account</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  header: {
    fontSize: 28,
    color: '#9aa2c2',
    marginTop: '15%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {color: '#a6adce'},
  input: {
    height: 40,
    borderColor: '#a6adce',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 9,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  formContainer: {
    justifyContent: 'flex-start',
    padding: '8%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    padding: '3%',
  },
  buttonAlign: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomColor: '#b6bcd4',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '20%',
  },
  loginWith: {
    marginTop: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  brands: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: '8%',
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '8%',
  },
});
