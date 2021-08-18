import React from 'react';
import {Button} from 'react-native';

export default ({setFatherName, setSonName}) => {
  return (
    <>
      <Button
        title="Mostrar nomes"
        onPress={() => {
          setFatherName('Pedro');
          setSonName('João');
        }}
      />
      <Button
        color="red"
        title="Limpar nomes"
        onPress={() => {
          setFatherName('');
          setSonName('');
        }}
      />
    </>
  );
};
