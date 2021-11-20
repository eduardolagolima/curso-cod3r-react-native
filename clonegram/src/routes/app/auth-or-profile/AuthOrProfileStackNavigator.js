import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../../../screens/Profile';

import AuthStackNavigator from './auth/AuthStackNavigator';

const Stack = createNativeStackNavigator();

const AuthOrProfileStackNavigator = () => (
  <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
    <Stack.Screen component={AuthStackNavigator} name="Auth" />
    <Stack.Screen component={Profile} name="Profile" />
  </Stack.Navigator>
);

export default AuthOrProfileStackNavigator;
