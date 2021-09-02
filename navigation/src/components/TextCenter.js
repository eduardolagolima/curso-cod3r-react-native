import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({children, backgroundColor = '#000', color = '#fff'}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color,
      fontSize: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
