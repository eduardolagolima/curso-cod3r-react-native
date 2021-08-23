import React from 'react';
import {Text, FlatList} from 'react-native';

import style from '../../style';

import products from './products';

export default () => {
  return (
    <>
      {/* .map() */}
      <Text style={style.mediumFont}>Lista de produtos usando .map()</Text>
      {products.map(({id, name, value}) => (
        <Text style={style.smallFont} key={id}>
          Id: {id} | Name: {name} | Valor: {value}
        </Text>
      ))}

      {/* FlatList */}
      <Text style={style.mediumFont}>Lista de produtos usando FlatList</Text>
      <FlatList
        data={products}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <Text style={style.smallFont}>
            Id: {item.id} | Name: {item.name} | Valor: {item.value}
          </Text>
        )}
      />
    </>
  );
};
