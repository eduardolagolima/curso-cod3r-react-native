import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Comments extends Component {
  render() {
    const comments = this.props.comments ?? [];

    return (
      <View style={styles.container}>
        {comments.map((item, index) => (
          <View style={styles.commentContainer} key={index}>
            <Text style={styles.nickname}>{item.nickname}: </Text>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    color: '#555',
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  nickname: {
    color: '#444',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Comments;
