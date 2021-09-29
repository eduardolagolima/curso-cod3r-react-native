import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Icon} from 'react-native-elements';

import UserForm from './views/User/UserForm';
import UserList from './views/User/UserList';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({navigation}) => {
            return {
              title: 'Listagem de Usuários',
              headerRight: () => {
                return (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff" />}
                  />
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{title: 'Cadastro de Usuários'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
