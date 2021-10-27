import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={20} style={styles.icon} />
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    width: '100%',
  },
  icon: {
    color: '#333',
    height: 20,
    marginLeft: 10,
    textAlign: 'center',
    width: 20,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
});
