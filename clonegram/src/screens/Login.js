import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  login = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoFocus={true}
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
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.buttom}>
          <Text style={styles.buttomText}>Criar nova conta...</Text>
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

export default Login;
