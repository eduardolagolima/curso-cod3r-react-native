import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScreenA from '../../views/ScreenA';
import ScreenB from '../../views/ScreenB';
import ScreenC from '../../views/ScreenC';

const Tab = createBottomTabNavigator();

export default () => {
  const icons = Object.freeze({
    ScreenA: 'ios-skull',
    ScreenB: 'ios-rocket',
    ScreenC: 'ios-airplane',
  });

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarIcon: ({focused, color, size}) => {
          let iconName = icons[route.name];
          iconName = focused ? iconName : `${iconName}-outline`;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="ScreenB">
      <Tab.Screen
        name="ScreenA"
        component={ScreenA}
        options={{title: 'Tela A'}}
      />
      <Tab.Screen
        name="ScreenB"
        component={ScreenB}
        options={{title: 'Tela B'}}
      />
      <Tab.Screen
        name="ScreenC"
        component={ScreenC}
        options={{title: 'Tela C'}}
      />
    </Tab.Navigator>
  );
};
