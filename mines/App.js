import React, {Component} from 'react';
import {Text, View} from 'react-native';

import params from './src/params';

import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Mines</Text>
        <Text>Colunas: {params.getColumnsAmount()}</Text>
        <Text>Linhas: {params.getRowsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
      </View>
    );
  }
}
