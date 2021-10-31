import React, {Component} from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

import loginImage from '../../assets/images/login.jpg';

import AuthInput from '../components/AuthInput';

import commonStyles from '../styles/common';

import {apiUrl} from '../utils/api';
import {showError, showSuccess} from '../utils/feedback';

const initialState = {
  confirmPassword: '',
  email: 'eduardo@teste.com',
  name: '',
  password: '123456',
  stageNew: false,
};

export default class Auth extends Component {
  state = {
    ...initialState,
  };

  register = async () => {
    try {
      await axios.post(`${apiUrl}/register`, {
        confirmPassword: this.state.confirmPassword,
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      });

      showSuccess('Usuário cadastrado com sucesso');

      this.setState({...initialState});
    } catch (error) {
      showError(error);
    }
  };

  login = async () => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email: this.state.email,
        password: this.state.password,
      });
      const {token, email, name} = response.data;

      axios.defaults.headers.common.Authorization = `bearer ${token}`;

      this.props.navigation.navigate('Home', {email, name});
    } catch (error) {
      showError(error);
    }
  };

  render() {
    const validations = [];

    validations.push(this.state.email && this.state.email.includes('@'));
    validations.push(this.state.password && this.state.password.length >= 6);

    if (this.state.stageNew) {
      validations.push(this.state.name && this.state.name.trim().length >= 3);
      validations.push(this.state.password === this.state.confirmPassword);
    }

    const validForm = validations.reduce((acc, cur) => acc && cur);

    return (
      <ImageBackground source={loginImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
          </Text>
          {this.state.stageNew && (
            <AuthInput
              icon="user"
              placeholder="Nome"
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />
          )}
          <AuthInput
            icon="at"
            placeholder="E-mail"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          <AuthInput
            icon="lock"
            placeholder="Senha"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          {this.state.stageNew && (
            <AuthInput
              icon="lock"
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          )}
          <TouchableOpacity
            onPress={() =>
              this.state.stageNew ? this.register() : this.login()
            }
            disabled={!validForm}
          >
            <View
              style={[styles.button, validForm ? {} : styles.disabledButton]}
            >
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.toggle}
          onPress={() => this.setState({stageNew: !this.state.stageNew})}
        >
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
    borderRadius: 7,
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: '#AAA',
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
