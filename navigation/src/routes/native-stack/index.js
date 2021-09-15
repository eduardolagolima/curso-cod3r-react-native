import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Step from '../../components/Step';

import ScreenA from '../../views/ScreenA';
import ScreenB from '../../views/ScreenB';
import ScreenC from '../../views/ScreenC';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="ScreenA">
      <Stack.Screen name="ScreenA" options={{title: 'Tela A'}}>
        {props => (
          <Step {...props} next="ScreenB">
            <ScreenA />
          </Step>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenB" options={{title: 'Tela B'}}>
        {props => (
          <Step {...props} previous next="ScreenC" params={{number: 3}}>
            <ScreenB />
          </Step>
        )}
      </Stack.Screen>
      <Stack.Screen name="ScreenC" options={{title: 'Tela C'}}>
        {props => (
          <Step {...props} previous>
            <ScreenC {...props} />
          </Step>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
