import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

import style from '../style';

export default () => {
  const [name, setName] = useState('Pedro');

  return (
    <View>
      <Text style={style.mediumFont}>Nome: {name}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={value => setName(value)}
      />
    </View>
  );
};
