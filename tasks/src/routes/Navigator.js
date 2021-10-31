import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from '../screens/Auth';
import AuthOrApp from '../screens/AuthOrApp';
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

const DrawerNavigator = propsDrawerNavigator => {
  const {email, name} = propsDrawerNavigator.route.params;

  return (
    <Drawer.Navigator
      screenOptions={drawerScreenOptions}
      drawerContent={propsDrawerContent => (
        <Menu {...propsDrawerContent} email={email} name={name} />
      )}
    >
      <Drawer.Screen name="Today" options={{title: 'Hoje'}}>
        {propsDrawerScreen => (
          <TaskList {...propsDrawerScreen} title="Hoje" daysAhead={0} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Tomorrow" options={{title: 'Amanhã'}}>
        {propsDrawerScreen => (
          <TaskList {...propsDrawerScreen} title="Amanhã" daysAhead={1} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Week" options={{title: 'Semana'}}>
        {propsDrawerScreen => (
          <TaskList {...propsDrawerScreen} title="Semana" daysAhead={7} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Month" options={{title: 'Mês'}}>
        {propsDrawerScreen => (
          <TaskList {...propsDrawerScreen} title="Mês" daysAhead={30} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthOrApp"
    >
      <Stack.Screen name="AuthOrApp" component={AuthOrApp} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
