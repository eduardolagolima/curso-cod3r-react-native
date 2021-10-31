import React, {Component} from 'react';

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import axios from 'axios';
import dayjs from 'dayjs';

import monthImage from '../../assets/images/month.jpg';
import todayImage from '../../assets/images/today.jpg';
import tomorrowImage from '../../assets/images/tomorrow.jpg';
import weekImage from '../../assets/images/week.jpg';
import Task from '../components/Task';
import commonStyles from '../styles/common';
import {apiUrl} from '../utils/api';
import {showError} from '../utils/feedback';
import TaskAdd from './TaskAdd';

const initialState = {
  showDoneTasks: true,
  showTaskAddModal: false,
  tasks: [],
  visibleTasks: [],
};

export default class TaskList extends Component {
  state = {
    ...initialState,
  };

  componentDidMount = async () => {
    this.setInitialState();
    this.getTasks();
  };

  getTasks = async () => {
    try {
      const date = dayjs()
        .add(this.props.daysAhead, 'day')
        .endOf('day')
        .format('YYYY-MM-DD HH:mm:ss');

      const response = await axios.get(`${apiUrl}/tasks?date=${date}`);

      this.setState({tasks: response.data}, this.filterTasks);
    } catch (error) {
      showError(error);
    }
  };

  setInitialState = async () => {
    const savedState =
      JSON.parse(await AsyncStorage.getItem('state')) || initialState;

    this.setState({showDoneTasks: savedState.showDoneTasks}, this.filterTasks);
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  filterTasks = () => {
    const visibleTasks = this.state.showDoneTasks
      ? [...this.state.tasks]
      : this.state.tasks.filter(task => !task.doneAt);

    this.setState({visibleTasks});

    AsyncStorage.setItem(
      'state',
      JSON.stringify({showDoneTasks: this.state.showDoneTasks}),
    );
  };

  toggleTask = async id => {
    try {
      await axios.put(`${apiUrl}/tasks/${id}/toggle`);

      this.getTasks();
    } catch (error) {
      showError(error);
    }
  };

  addTask = async newTask => {
    try {
      await axios.post(`${apiUrl}/tasks`, {
        description: newTask.description,
        estimateAt: newTask.date,
      });

      this.setState({showTaskAddModal: false}, this.getTasks);
    } catch (error) {
      showError(error);
    }
  };

  deleteTask = async id => {
    try {
      await axios.delete(`${apiUrl}/tasks/${id}`);

      this.getTasks();
    } catch (error) {
      showError(error);
    }
  };

  getCustomStyle = () => {
    const {today, tomorrow, week, month} = commonStyles.colors;
    const assets = (color, image) => ({color, image});

    switch (this.props.daysAhead) {
      case 0:
        return assets(today, todayImage);
      case 1:
        return assets(tomorrow, tomorrowImage);
      case 7:
        return assets(week, weekImage);
      case 30:
        return assets(month, monthImage);
    }
  };

  render() {
    const today = dayjs().format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <TaskAdd
          isVisible={this.state.showTaskAddModal}
          onCancel={() => this.setState({showTaskAddModal: false})}
          onSave={this.addTask}
        />
        <ImageBackground
          source={this.getCustomStyle().image}
          style={styles.background}
        >
          <View style={styles.iconBar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon
                name="bars"
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task
                {...item}
                onToggle={this.toggleTask}
                onDelete={this.deleteTask}
              />
            )}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.addButton,
            {backgroundColor: this.getCustomStyle().color},
          ]}
          onPress={() => this.setState({showTaskAddModal: true})}
        >
          <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    borderRadius: 25,
    bottom: 20,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    width: 50,
  },
  background: {
    flex: 3,
  },
  container: {
    flex: 1,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  subtitle: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginBottom: 30,
    marginLeft: 20,
  },
  taskList: {
    flex: 7,
  },
  title: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
