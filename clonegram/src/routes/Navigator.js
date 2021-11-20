import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import SplashStackNavigator from './splash/SplashStackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <SplashStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
