import React from 'react';
import {Text} from 'react-native';

export default props => {
  const {user} = props.route.params;
  return <Text>{user.name}</Text>;
};
