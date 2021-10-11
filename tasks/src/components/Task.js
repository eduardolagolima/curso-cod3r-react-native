import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
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

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
        <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={[styles.description, doneOrNotStyle]}>
          {props.description}
        </Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#aaa',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  descriptionDecoration: {
    textDecorationLine: 'line-through',
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});
