import React from 'react';
import {StyleSheet, View} from 'react-native';

import Square from './Square';

export default () => {
  return (
    <View style={style.flexbox}>
      <Square />
      <Square backgroundColor="red" />
      <Square backgroundColor="blue" />
      <Square backgroundColor="green" />
      <Square backgroundColor="orange" />
    </View>
  );
};

const style = StyleSheet.create({
  flexbox: {
    backgroundColor: 'gray',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
