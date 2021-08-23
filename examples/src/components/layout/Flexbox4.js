import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View style={style.flexbox}>
      <View style={style.container1}>
        <Text style={style.text}>Header</Text>
      </View>
      <View style={style.container2}>
        <Text style={style.text}>Body</Text>
      </View>
      <View style={style.container3}>
        <Text style={style.text}>Footer</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  flexbox: {
    backgroundColor: 'gray',
    flexGrow: 1,
    width: 100,
  },
  container1: {
    backgroundColor: 'red',
    height: 40,
  },
  container2: {
    backgroundColor: 'blue',
    flexGrow: 1,
  },
  container3: {
    backgroundColor: 'green',
    height: 60,
  },
  text: {
    color: 'white',
  },
});
