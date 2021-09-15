import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import NativeStack from './native-stack';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <NativeStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
