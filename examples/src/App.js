import React from 'react';
import {View, StyleSheet} from 'react-native';

import FirstExample from './components/FirstExample';
import Component, {Component1, Component2} from './components/Multiples';

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => (
  <View style={style.App}>
    <FirstExample />
    <Component />
    <Component1 />
    <Component2 />
  </View>
);
