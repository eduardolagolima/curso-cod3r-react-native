import React, {useState} from 'react';
import {Text} from 'react-native';

import style from '../../style';

import Son from './Son';

export default () => {
  const [fatherName, setFatherName] = useState('');
  const [sonName, setSonName] = useState('');

  return (
    <>
      <Text style={style.largeFont}>Pai: {fatherName}</Text>
      <Text style={style.mediumFont}>Filho: {sonName}</Text>
      <Son
        setFatherName={setFatherName}
        // setFatherName={name => setFatherName(name)}
        setSonName={setSonName}
        // setSonName={name => setSonName(name)}
      />
    </>
  );
};
