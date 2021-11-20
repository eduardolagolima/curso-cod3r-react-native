import React, {Component} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Clonegram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    width: 200,
  },
});

export default Splash;
