import React from 'react';
import {Text} from 'react-native';

import style from '../style';

export default ({min, max}) => {
  const random = Math.floor(Math.random() * max) + min;

  return <Text style={style.mediumFont}>Número aleatório: {random}</Text>;
};
