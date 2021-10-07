import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';

import {UsersContext} from '../../context/UsersContext';

export default props => {
  const {state} = useContext(UsersContext);

  const confirmUserDelete = user => {
    Alert.alert('Atenção', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete user: ' + user.name);
        },
      },
      {
        text: 'Não',
      },
    ]);
  };

  const getActions = user => (
    <>
      <Button
        onPress={() => {
          props.navigation.navigate('UserForm', {user});
        }}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
      <Button
        onPress={() => confirmUserDelete(user)}
        type="clear"
        icon={<Icon name="delete" size={25} color="red" />}
      />
    </>
  );

  const getUserItem = ({item: user}) => (
    <ListItem key={user.id} bottomDivider>
      <Avatar source={{uri: user.avatarUrl}} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      </ListItem.Content>
      {getActions(user)}
    </ListItem>
  );

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
