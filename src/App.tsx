import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserProvider} from './context/UserContext';
import ProfileScreen from './Screens/Profile';
import LoginScreen from './Screens/Login';
import UsersScreen from './Screens/Users';
import SplashScreen from 'react-native-splash-screen';
import { ImageProvider } from './context/ImageContext';


const profile = require('./images/profile1.png');
const settings = require('./images/setting.png');
const people = require('./images/people.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <ImageProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1648CE',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <Image source={profile} />,
          }}
        />

        <Tab.Screen
          name="Friends"
          component={UsersScreen}
          options={{
            tabBarIcon: () => <Image source={people} />,
          }}
        />
        {/* <Tab.Screen
        name="Settings"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={settings} />,
        }}
      /> */}
      </Tab.Navigator>
    </ImageProvider>
  );
};

const App: React.FC = () => {
 useEffect(()=>{
  SplashScreen.hide()
 },[])
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
