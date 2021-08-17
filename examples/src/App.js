import React from 'react';
import {Text, View} from 'react-native';

import FirstExample from './components/FirstExample';

export default () => (
  <View>
    <Text>{1 + 1}</Text>
    <FirstExample />
  </View>
);
