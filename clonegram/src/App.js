import React from 'react';

import {View, StyleSheet} from 'react-native';

import fenceImage from '../assets/images/fence.jpg';

import Header from './components/Header';
import Post from './components/Post';

const App = () => {
  const testComments = [
    {
      comment: 'Comentário 123456',
      nickname: 'João Souza',
    },
    {
      comment: 'Comentário 789',
      nickname: 'Pedro Pereira Silva',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Post image={fenceImage} comments={testComments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
