import React from 'react';
import {Button} from 'react-native';

export default () => {
  function execute1() {
    console.warn('Executado 1');
  }

  return (
    <>
      <Button title="Executar 1" onPress={execute1} />
      <Button title="Executar 2" onPress={() => console.warn('Executado 2')} />
      <Button
        title="Executar 3"
        onPress={function () {
          console.warn('Executado 3');
        }}
      />
    </>
  );
};
