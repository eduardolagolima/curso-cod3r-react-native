import React from 'react';
import {View} from 'react-native';

// import FirstExample from './components/FirstExample';
import Component, {Component1, Component2} from './components/Multiples';

export default () => (
  <View>
    {/* <FirstExample /> */}
    <Component />
    <Component1 />
    <Component2 />
  </View>
);
