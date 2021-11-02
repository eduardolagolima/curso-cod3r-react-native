import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Gravatar} from 'react-native-gravatar';

const Author = props => {
  return (
    <View style={styles.container}>
      <Gravatar
        options={{email: props.email, secure: true}}
        style={styles.avatar}
      />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 15,
    height: 30,
    marginHorizontal: 10,
    width: 30,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  nickname: {
    color: '#444',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Author;
