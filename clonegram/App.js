import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Clonegram</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'shelter',
    fontSize: 50,
    textAlign: 'center',
  },
});
