import React, {Component} from 'react';

import {StyleSheet, View, Image, Dimensions} from 'react-native';

import AddComment from './AddComment';
import Author from './Author';
import Comments from './Comments';

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image} />
        <Author email={this.props.email} nickname={this.props.nickname} />
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
  },
});

export default Post;
