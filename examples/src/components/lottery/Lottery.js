import React, {Component} from 'react';
import {Text} from 'react-native';

import style from '../../style';

export default class Lottery extends Component {
  render() {
    return (
      <>
        <Text style={style.largeFont}>Gerador Mega-Sena</Text>
      </>
    );
  }
}
