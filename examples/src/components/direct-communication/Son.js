import React from 'react';
import {Text} from 'react-native';

import style from '../../style';

export default ({name}) => {
  return (
    <>
      <Text style={style.mediumFont}>Filho: {name}</Text>
    </>
  );
};
