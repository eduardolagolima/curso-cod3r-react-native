import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import dayjs from 'dayjs';

import commonStyles from '../styles/common';

const getCheckView = doneAt => {
  if (doneAt) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#fff" />
      </View>
    );
  }

  return <View style={styles.pending} />;
};

export default props => {
  const doneOrNotStyle = props.doneAt ? styles.descriptionDecoration : {};
  const date = props.doneAt ?? props.estimateAt;
  const formattedDate = dayjs(date).format('ddd, D [de] MMMM');

  const getRightContent = () => {
    return (
      <TouchableOpacity style={styles.right}>
        <Icon name="trash" size={30} color="#fff" />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={getRightContent}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
          <View style={styles.checkContainer}>
            {getCheckView(props.doneAt)}
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.description, doneOrNotStyle]}>
            {props.description}
          </Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  date: {
    color: commonStyles.colors.subText,
    fontFamily: commonStyles.fontFamily,
    fontSize: 12,
  },
  description: {
    color: commonStyles.colors.mainText,
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
  },
  descriptionDecoration: {
    textDecorationLine: 'line-through',
  },
  done: {
    alignItems: 'center',
    backgroundColor: '#4d7031',
    borderRadius: 13,
    height: 25,
    justifyContent: 'center',
    width: 25,
  },
  pending: {
    borderColor: '#555',
    borderRadius: 13,
    borderWidth: 1,
    height: 25,
    width: 25,
  },
  right: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
});
