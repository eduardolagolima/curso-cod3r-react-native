import React, {Component} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import commonStyles from '../styles/common';

const initialState = {description: ''};

export default class TaskAdd extends Component {
  state = {
    ...initialState,
  };

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide">
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova tarefa</Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição da tarefa"
            value={this.state.description}
            onChangeText={description => this.setState({description})}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
  },
  button: {
    color: commonStyles.colors.today,
    margin: 20,
    marginRight: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#e3e3e3',
    borderRadius: 6,
    borderWidth: 1,
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
  },
});
