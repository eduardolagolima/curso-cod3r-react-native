import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import style from '../../style';

export default ({number}) => {
  return (
    <>
      <View style={localStyle.display}>
        <Text style={[style.mediumFont, localStyle.displayText]}>{number}</Text>
      </View>
    </>
  );
};

const localStyle = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  displayText: {
    color: '#fff',
  },
});
