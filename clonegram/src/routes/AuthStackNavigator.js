import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen component={Login} name="Login" />
    <Stack.Screen component={Register} name="Register" />
  </Stack.Navigator>
);

export default AuthStackNavigator;
