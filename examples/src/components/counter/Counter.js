import React, {useState} from 'react';
import {Text} from 'react-native';

import style from '../../style';

import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

export default props => {
  const [number, setNumber] = useState(0);

  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);

  return (
    <>
      <Text style={style.largeFont}>Contador</Text>
      <CounterDisplay number={number} />
      <CounterButtons increase={increase} decrease={decrease} />
    </>
  );
};
