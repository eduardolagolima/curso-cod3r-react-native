import React from 'react';
import {View} from 'react-native';

export default ({backgroundColor}) => {
  const size = 50;

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor || '#000',
      }}
    />
  );
};
