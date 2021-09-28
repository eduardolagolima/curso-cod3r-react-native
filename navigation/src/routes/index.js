import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import NativeStack from './native-stack';
import Tab from './tab';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <NativeStack /> */}
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
