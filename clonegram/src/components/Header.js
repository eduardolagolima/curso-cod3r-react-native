import React, {Component} from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

import iconImage from '../../assets/images/icon.png';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={iconImage} style={styles.image} />
          <Text style={styles.title}>Clonegram</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#bbb',
    padding: 10,
  },
  image: {
    height: 30,
    resizeMode: 'contain',
    width: 30,
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    fontSize: 28,
    height: 30,
  },
});

export default Header;
