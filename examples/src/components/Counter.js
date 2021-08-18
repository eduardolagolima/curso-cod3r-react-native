import React, {useState} from 'react';
import {Button, Text} from 'react-native';

import style from '../style';

export default ({initial = 0, range = 1}) => {
  const [number, setNumber] = useState(initial);

  return (
    <>
      <Text style={style.mediumFont}>{number}</Text>
      <Button title="Aumentar +" onPress={() => setNumber(number + range)} />
      <Button title="Diminuir -" onPress={() => setNumber(number - range)} />
    </>
  );
};
