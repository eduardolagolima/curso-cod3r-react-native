import React from 'react';
import {Text, Platform} from 'react-native';

import style from '../style';

export default () => {
  if (Platform.OS === 'android') {
    return <Text style={style.largeFont}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={style.largeFont}>iOS</Text>;
  } else {
    return <Text style={style.largeFont}>???</Text>;
  }
};
