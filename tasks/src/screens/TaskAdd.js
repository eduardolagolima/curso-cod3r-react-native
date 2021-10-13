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
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';

import commonStyles from '../styles/common';

const initialState = {
  date: new Date(),
  description: '',
  showDatePicker: false,
};

export default class TaskAdd extends Component {
  state = {
    ...initialState,
  };

  save = () => {
    const {date, description} = this.state;
    this.props.onSave({date, description});
    this.setState({...initialState});
  };

  getDatePicker = () => {
    const datePicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date = this.state.date) =>
          this.setState({date, showDatePicker: false})
        }
        mode="date"
      />
    );
    const formattedDate = dayjs(this.state.date).format(
      'ddd, D [de] MMMM [de] YYYY',
    );

    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({showDatePicker: true})}>
          <Text style={styles.formattedDate}>{formattedDate}</Text>
        </TouchableOpacity>
        {this.state.showDatePicker && datePicker}
      </View>
    );
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
          {this.getDatePicker()}
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
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
  formattedDate: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 15,
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
