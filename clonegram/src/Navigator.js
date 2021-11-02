import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Feed from './screens/Feed';

const tabScreens = Object.freeze({
  ADD_PICTURE: {
    component: Feed,
    name: 'AddPicture',
    title: 'Add Picture',
  },
  FEED: {
    component: Feed,
    name: 'Feed',
    title: 'Feed',
  },
  PROFILE: {
    component: Feed,
    name: 'Profile',
    title: 'Profile',
  },
});

const tabBarIcons = Object.freeze({
  [tabScreens.ADD_PICTURE.name]: 'camera',
  [tabScreens.FEED.name]: 'home',
  [tabScreens.PROFILE.name]: 'user',
});

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={tabScreens.FEED.name}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name={tabBarIcons[route.name]} size={30} color={color} />
          ),
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          component={tabScreens.FEED.component}
          name={tabScreens.FEED.name}
          options={{title: tabScreens.FEED.title}}
        />
        <Tab.Screen
          component={tabScreens.ADD_PICTURE.component}
          name={tabScreens.ADD_PICTURE.name}
          options={{title: tabScreens.ADD_PICTURE.title}}
        />
        <Tab.Screen
          component={tabScreens.PROFILE.component}
          name={tabScreens.PROFILE.name}
          options={{title: tabScreens.PROFILE.title}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
