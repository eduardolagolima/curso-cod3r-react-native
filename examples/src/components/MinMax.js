import React from 'react';
import {Text} from 'react-native';

import style from '../style';

export default props => (
  <Text style={style.largeFont}>
    Max: {props.max} / Min: {props.min}
  </Text>
);
