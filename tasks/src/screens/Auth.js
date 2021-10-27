import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import loginImage from '../../assets/imgs/login.jpg';

import commonStyles from '../styles/common';

export default class Auth extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <ImageBackground source={loginImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="E-mail"
            value={this.state.email}
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            placeholder="Senha"
            value={this.state.password}
            style={styles.textInput}
            onChangeText={password => this.setState({password})}
          />
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },
  textInput: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
  },
  title: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 70,
    marginBottom: 10,
  },
});
