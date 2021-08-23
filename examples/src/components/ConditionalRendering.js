import React from 'react';
import {View, Text} from 'react-native';

import style from '../style';

export default ({number = 0}) => {
  return (
    <View>
      <Text style={style.largeFont}>O número {number} é:</Text>
      <Text style={style.mediumFont}>{number % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
    </View>
  );
};
