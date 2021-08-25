import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, Button} from 'react-native';

import style from '../../style';

export default class Lottery extends Component {
  state = {
    quantity: this.props.quantity,
    numbers: [],
  };

  setQuantity = quantity => {
    this.setState({quantity: +quantity});
  };

  setNumbers = numbers => {
    this.setState({numbers});
  };

  generateNumber = () => {
    const min = 1;
    const max = 60;
    const number = Math.floor(Math.random() * max) + min;

    return number;
  };

  generateNumbers = () => {
    let numbers = [];

    while (numbers.length < this.state.quantity) {
      const number = this.generateNumber();

      if (numbers.includes(number)) {
        continue;
      }

      numbers = [number, ...numbers];
    }

    numbers = numbers.sort((a, b) => a - b);

    this.setNumbers(numbers);
  };

  render() {
    return (
      <>
        <Text style={style.largeFont}>Gerador Mega-Sena</Text>
        <Text style={style.mediumFont}>
          Quantidade de números: {this.state.quantity}
        </Text>
        <TextInput
          keyboardType="numeric"
          style={localStyle.textInput}
          placeholder="Quantidade de números"
          value={`${this.state.quantity}`}
          onChangeText={this.setQuantity}
        />
        <Button title="Gerar" onPress={this.generateNumbers} />
        <Text>{this.state.numbers.join(' - ')}</Text>
      </>
    );
  }
}

const localStyle = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
  },
});
