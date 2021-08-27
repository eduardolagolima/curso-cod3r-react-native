import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default ({onClick, label, double, triple, operation}) => {
  const buttonStyles = [
    styles.button,
    ...(double ? [styles.doubleButton] : []),
    ...(triple ? [styles.tripleButton] : []),
    ...(operation ? [styles.operationButton] : []),
  ];

  return (
    <>
      <TouchableHighlight onPress={() => onClick(label)}>
        <Text style={buttonStyles}>{label}</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
});
