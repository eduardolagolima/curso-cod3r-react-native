import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import Post from './components/Post';

import fenceImage from '../assets/images/fence.jpg';

const App = () => {
  const testComments = [
    {
      nickname: 'João Souza',
      comment: 'Comentário 123456',
    },
    {
      nickname: 'Pedro Pereira Silva',
      comment: 'Comentário 789',
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
