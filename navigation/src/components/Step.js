import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.steps}>
        {props.previous ? (
          <Button
            color="red"
            title="Voltar"
            onPress={() => props.navigation.goBack()}
          />
        ) : (
          false
        )}
        {props.next ? (
          <Button
            title="Avançar"
            onPress={() => {
              props.navigation.navigate(props.next, props.params);
            }}
          />
        ) : (
          false
        )}
      </View>
      <View style={styles.screen}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  screen: {
    flex: 1,
  },
});
