import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Gravatar} from 'react-native-gravatar';
import {connect} from 'react-redux';

import {logout} from '../store/actions/user';

class Profile extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Gravatar
          options={{
            email: this.props.email,
            secure: true,
          }}
          style={styles.avatar}
        />
        <Text style={styles.nickname}>{this.props.name}</Text>
        <Text style={styles.email}>{this.props.email}</Text>
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

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
