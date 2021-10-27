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
    confirmPassword: '',
    email: '',
    name: '',
    password: '',
    stageNew: false,
  };

  signInOrSignUp = () => {};

  render() {
    return (
      <ImageBackground source={loginImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
          </Text>
          {this.state.stageNew && (
            <TextInput
              placeholder="Nome"
              value={this.state.nome}
              style={styles.textInput}
              onChangeText={nome => this.setState({nome})}
            />
          )}
          <TextInput
            placeholder="E-mail"
            value={this.state.email}
            style={styles.textInput}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            value={this.state.password}
            style={styles.textInput}
            onChangeText={password => this.setState({password})}
          />
          {this.state.stageNew && (
            <TextInput
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              value={this.state.confirmPassword}
              style={styles.textInput}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          )}
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.toggle}
          onPress={() => this.setState({stageNew: !this.state.stageNew})}>
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? 'Já possui conta?'
              : 'Ainda não possui conta?'}
          </Text>
        </TouchableOpacity>
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
  subtitle: {
    color: commonStyles.colors.secondary,
    fontFamily: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
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
  toggle: {
    padding: 10,
  },
});
