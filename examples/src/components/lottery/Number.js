import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import style from '../../style';

export default ({number}) => {
  return (
    <View style={localStyle.container}>
      <Text style={[style.mediumFont, localStyle.number]}>{number}</Text>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    height: 50,
    margin: 5,
    width: 50,
  },
  number: {
    color: '#fff',
  },
});
