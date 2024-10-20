import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserProvider} from './context/UserContext';
import ProfileScreen from './Screens/Profile';
import LoginScreen from './Screens/Login';
import UsersScreen from './Screens/Users';

const profile = require('./images/profile1.png');
const settings = require('./images/setting.png');
const people = require('./images/people.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Create a stack navigator for authentication
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
// Create a tab navigator for the main application
const MainTabNavigator = () => {
  return (
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
      <Tab.Screen
        name="Settings"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={settings} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main App component
const App: React.FC = () => {
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
