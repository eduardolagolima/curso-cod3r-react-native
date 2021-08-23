import React from 'react';
import {Text} from 'react-native';

import style from '../../style';

export default ({name, lastName}) => {
  return (
    <>
      <Text style={style.mediumFont}>
        {name} {lastName}
      </Text>
    </>
  );
};
