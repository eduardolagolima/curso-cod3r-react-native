import React from 'react';
import {View, StyleSheet} from 'react-native';

import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} />
      );
    });

    return (
      <View key={r} style={styles.row}>
        {columns}
      </View>
    );
  });

  return <View style={styles.rows}>{rows}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rows: {
    backgroundColor: '#EEE',
  },
});
