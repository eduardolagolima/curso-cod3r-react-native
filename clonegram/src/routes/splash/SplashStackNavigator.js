import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../../screens/Splash';

import AppTabNavigator from '../app/AppTabNavigator';

const Stack = createNativeStackNavigator();

const AuthOrProfileStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{headerShown: false}}
  >
    <Stack.Screen component={Splash} name="Splash" />
    <Stack.Screen component={AppTabNavigator} name="App" />
  </Stack.Navigator>
);

export default AuthOrProfileStackNavigator;
