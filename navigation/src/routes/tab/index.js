import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScreenA from '../../views/ScreenA';
import ScreenB from '../../views/ScreenB';
import ScreenC from '../../views/ScreenC';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {display: 'none'},
        tabBarLabelPosition: 'beside-icon',
      }}
      initialRouteName="TelaB">
      <Tab.Screen
        name="TelaA"
        component={ScreenA}
        options={{title: 'Tela A'}}
      />
      <Tab.Screen
        name="TelaB"
        component={ScreenB}
        options={{title: 'Tela B'}}
      />
      <Tab.Screen
        name="TelaC"
        component={ScreenC}
        options={{title: 'Tela C'}}
      />
    </Tab.Navigator>
  );
};
