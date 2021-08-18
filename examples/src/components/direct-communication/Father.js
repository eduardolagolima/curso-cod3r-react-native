import React from 'react';
import {Text} from 'react-native';

import style from '../../style';

import Son from './Son';

export default ({name}) => {
  return (
    <>
      <Text style={style.largeFont}>Pai: {name}</Text>
      <Son name="João" />
      <Son name="Pedro" />
    </>
  );
};
