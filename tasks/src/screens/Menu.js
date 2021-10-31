import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {Gravatar} from 'react-native-gravatar';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import commonStyles from '../styles/common';

export default props => {
  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Gravatar
          style={styles.avatar}
          options={{
            email: props.email,
            secure: true,
          }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.email}>{props.email}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 30,
    borderWidth: 3,
    height: 60,
    margin: 10,
    width: 60,
  },
  email: {
    color: commonStyles.colors.subText,
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
    marginBottom: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  name: {
    color: commonStyles.colors.mainText,
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
    padding: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
});
