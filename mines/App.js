import React, {Component} from 'react';
import {Text, View} from 'react-native';

import params from './src/params';
export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Mines</Text>
        <Text>Colunas: {params.getColumnsAmount()}</Text>
        <Text>Linhas: {params.getRowsAmount()}</Text>
      </View>
    );
  }
}
