import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const AuthOrProfileStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{headerShown: false}}>
    <Stack.Screen component={Login} name="Auth" />
    <Stack.Screen component={Profile} name="Profile" />
  </Stack.Navigator>
);

export default AuthOrProfileStackNavigator;
