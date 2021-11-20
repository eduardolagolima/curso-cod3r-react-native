import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppTabNavigator from './app/AppTabNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
