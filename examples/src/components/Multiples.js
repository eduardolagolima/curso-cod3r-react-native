import React from 'react';
import {Text} from 'react-native';

import style from '../style';

export default function Component() {
  return <Text style={style.mediumFont}>Componente</Text>;
}

export function Component1() {
  return <Text style={style.smallFont}>Componente 1</Text>;
}

export function Component2() {
  return <Text style={style.smallFont}>Componente 2</Text>;
}
