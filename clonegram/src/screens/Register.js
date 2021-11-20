import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';

import {createUser} from '../store/actions/user';

class Register extends Component {
  state = {
    email: 'eduardo@teste.com',
    name: 'Eduardo',
    password: '123456',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity
          onPress={() => this.props.onCreateUser(this.state)}
          style={styles.buttom}>
          <Text style={styles.buttomText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={styles.buttom}>
          <Text style={styles.buttomText}>Já possui uma conta?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#333',
    borderWidth: 1,
    height: 40,
    marginTop: 20,
    paddingLeft: 15,
    width: '90%',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
