import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../styles/common';
import todayImage from '../../assets/imgs/today.jpg';

import Task from '../components/Task';

import TaskAdd from './TaskAdd';

export default class TaskList extends Component {
  state = {
    showDoneTasks: true,
    showTaskAddModal: true,
    tasks: [
      {
        description: 'Comprar livro',
        doneAt: new Date(),
        estimateAt: new Date(),
        id: 1,
      },
      {
        description: 'Ler livro',
        doneAt: null,
        estimateAt: new Date(),
        id: 2,
      },
    ],
    visibleTasks: [],
  };

  componentDidMount = () => {
    this.filterTasks();
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  filterTasks = () => {
    const visibleTasks = this.state.showDoneTasks
      ? [...this.state.tasks]
      : this.state.tasks.filter(task => !task.doneAt);

    this.setState({visibleTasks});
  };

  toggleTask = id => {
    const tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });

    this.setState({tasks}, this.filterTasks);
  };

  render() {
    const today = dayjs().format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <TaskAdd
          isVisible={this.state.showTaskAddModal}
          onCancel={() => this.setState({showTaskAddModal: false})}
        />
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 3,
  },
  container: {
    flex: 1,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
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
