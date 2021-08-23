import React from 'react';
import {Text, View} from 'react-native';

import style from '../../style';

export default ({children, family}) => {
  return (
    <View>
      <Text style={style.largeFont}>Família {family}:</Text>
      {children}
    </View>
  );
};
