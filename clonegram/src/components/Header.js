import React, {Component} from 'react';

import {Text, StyleSheet, View, Image} from 'react-native';

import {Gravatar} from 'react-native-gravatar';
import {connect} from 'react-redux';

import iconImage from '../../assets/images/icon.png';

class Header extends Component {
  render() {
    const name = this.props.name ?? 'Anônimo';

    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={iconImage} style={styles.image} />
          <Text style={styles.title}>Clonegram</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {this.props.email && (
            <Gravatar
              options={{email: this.props.email, secure: true}}
              style={styles.avatar}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    marginLeft: 10,
    width: 30,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: '#bbb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  image: {
    height: 30,
    resizeMode: 'contain',
    width: 30,
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    fontSize: 28,
    height: 30,
  },
  user: {
    color: '#888',
    fontSize: 10,
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const mapStateToProps = ({usersReducer}) => {
  return {
    email: usersReducer.email,
    name: usersReducer.name,
  };
};

export default connect(mapStateToProps)(Header);
