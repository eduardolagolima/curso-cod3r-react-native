import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import Post from './components/Post';

import fenceImage from '../assets/images/fence.jpg';

const App = () => (
  <View style={styles.container}>
    <Header />
    <Post image={fenceImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
