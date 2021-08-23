import React from 'react';
import {Text} from 'react-native';

import style from '../style';

import Test from './Test';

export default ({user = {}}) => {
  return (
    <>
      <Test test={user && user.name && user.email}>
        <Text style={style.largeFont}>Usuário logado:</Text>
        <Text style={style.mediumFont}>
          {user.name} - {user.email}
        </Text>
      </Test>
    </>
  );
};
