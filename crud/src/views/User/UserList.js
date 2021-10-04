import React from 'react';
import {View, FlatList} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

import users from '../../data/users';

export default props => {
  const getUserItem = ({item: user}) => (
    <ListItem
      key={user.id}
      bottomDivider
      onPress={() => props.navigation.navigate('UserForm', {user})}>
      <Avatar source={{uri: user.avatarUrl}} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
