import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Gravatar} from 'react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import axios from 'axios';

import commonStyles from '../styles/common';

export default props => {
  const logout = async () => {
    delete axios.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem('userData');
    props.navigation.navigate('Auth');
  };

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
        <TouchableOpacity onPress={logout}>
          <View style={styles.logoutIcon}>
            <Icon name="sign-out" size={30} color="#800" />
          </View>
        </TouchableOpacity>
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
  logoutIcon: {
    marginBottom: 10,
    marginLeft: 10,
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
