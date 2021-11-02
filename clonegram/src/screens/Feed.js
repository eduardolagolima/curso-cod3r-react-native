import React, {Component} from 'react';

import {StyleSheet, FlatList, View} from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        comments: [
          {
            comment: 'Comentário 123456',
            nickname: 'João Souza',
          },
          {
            comment: 'Comentário 789',
            nickname: 'Pedro Pereira Silva',
          },
        ],
        email: 'fulano1@teste.com',
        id: 1,
        image: require('../../assets/images/fence.jpg'),
        nickname: 'Fulano 1',
      },
      {
        comments: [],
        email: 'fulano2@teste.com',
        id: 2,
        image: require('../../assets/images/bw.jpg'),
        nickname: 'Fulano 2',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Feed;
