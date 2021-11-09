import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddPost from '../screens/AddPost';
import Feed from '../screens/Feed';

import AuthOrProfileStackNavigator from './AuthOrProfileStackNavigator';

const Tab = createBottomTabNavigator();

const icons = Object.freeze({
  AddPost: 'camera',
  AuthOrProfile: 'user',
  Feed: 'home',
});

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({color}) => (
        <Icon name={icons[route.name]} size={30} color={color} />
      ),
      tabBarShowLabel: false,
    })}>
    <Tab.Screen component={Feed} name="Feed" />
    <Tab.Screen component={AddPost} name="AddPost" />
    <Tab.Screen component={AuthOrProfileStackNavigator} name="AuthOrProfile" />
  </Tab.Navigator>
);

export default TabNavigator;
