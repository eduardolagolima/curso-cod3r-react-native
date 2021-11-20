import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';

import {login} from '../store/actions/user';

class Login extends Component {
  state = {
    email: 'eduardo@teste.com',
    name: 'Temporário',
    password: '123456',
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile');
    }
  };

  login = () => {
    this.props.onLogin({...this.state});
  };

  render() {
    return (
      <View style={styles.container}>
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
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
          style={styles.buttom}>
          <Text style={styles.buttomText}>Não possui uma conta?</Text>
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
    width: '90%',
  },
});

const mapStateToProps = ({usersReducer}) => {
  return {
    isLoading: usersReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
