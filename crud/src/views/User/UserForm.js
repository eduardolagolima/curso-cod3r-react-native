import React, {useContext, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

import {UsersContext} from '../../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params?.user ? route.params.user : {});
  const {dispatch} = useContext(UsersContext);

  return (
    <View style={style.form}>
      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text style={style.label}>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o E-mail"
        value={user.email}
      />
      <Text style={style.label}>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: {user},
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 15,
  },
  label: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
