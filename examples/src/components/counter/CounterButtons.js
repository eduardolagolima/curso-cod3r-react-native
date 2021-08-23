import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default ({increase, decrease}) => {
  return (
    <View style={style.buttons}>
      <Button title="Aumentar +" onPress={increase} />
      <Button title="Diminuir -" onPress={decrease} />
    </View>
  );
};

const style = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
});
