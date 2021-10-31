import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from '../screens/Auth';
import Menu from '../screens/Menu';
import TaskList from '../screens/TaskList';

import commonStyles from '../styles/common';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const drawerScreenOptions = {
  drawerActiveTintColor: '#080',
  drawerLabelStyle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    fontWeight: 'normal',
  },
  headerShown: false,
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={drawerScreenOptions}
    drawerContent={props => <Menu {...props} />}
  >
    <Drawer.Screen name="Today" options={{title: 'Hoje'}}>
      {props => <TaskList {...props} title="Hoje" daysAhead={0} />}
    </Drawer.Screen>
    <Drawer.Screen name="Tomorrow" options={{title: 'Amanhã'}}>
      {props => <TaskList {...props} title="Amanhã" daysAhead={1} />}
    </Drawer.Screen>
    <Drawer.Screen name="Week" options={{title: 'Semana'}}>
      {props => <TaskList {...props} title="Semana" daysAhead={7} />}
    </Drawer.Screen>
    <Drawer.Screen name="Month" options={{title: 'Mês'}}>
      {props => <TaskList {...props} title="Mês" daysAhead={30} />}
    </Drawer.Screen>
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
