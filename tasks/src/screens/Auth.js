import React, {Component} from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

import loginImage from '../../assets/imgs/login.jpg';

import commonStyles from '../styles/common';

export default class Auth extends Component {
  render() {
    return (
      <ImageBackground source={loginImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 70,
    marginBottom: 10,
  },
});
