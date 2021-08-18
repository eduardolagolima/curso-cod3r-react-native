import React from 'react';
// import { Fragment } from 'react';
import {Text} from 'react-native';

import style from '../style';

export default ({title, subtitle}) => (
  // <React.Fragment property="123"></React.Fragment>
  // <Fragment property="456"></Fragment>
  <>
    <Text style={style.largeFont}>{title}</Text>
    <Text style={style.mediumFont}>{subtitle}</Text>
  </>
);
