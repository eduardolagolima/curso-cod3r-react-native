import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Gravatar} from 'react-native-gravatar';

class Profile extends Component {
  logout = () => {};

  render() {
    const name = 'Fulano';
    const email = 'fulano@teste.com';
    const options = {email: email, secure: true};

    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 75,
    height: 150,
    marginTop: 100,
    width: 150,
  },
  buttom: {
    backgroundColor: '#4286f4',
    marginTop: 30,
    padding: 10,
  },
  buttomText: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  email: {
    fontSize: 25,
    marginTop: 20,
  },
  nickname: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default Profile;
