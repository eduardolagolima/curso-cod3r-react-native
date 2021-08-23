import React, {Component} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

import style from '../../style';

export default class Lottery extends Component {
  state = {
    quantity: this.props.quantity,
  };

  setQuantity = quantity => {
    this.setState({quantity});
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
          value={this.state.quantity}
          onChangeText={this.setQuantity}
        />
      </>
    );
  }
}

const localStyle = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
  },
});
