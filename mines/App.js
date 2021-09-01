import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import params from './src/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
} from './src/functions';

import MineField from './src/components/MineField';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    const board = createMinedBoard(rows, cols, this.minesAmount());

    return {board, won: false, lost: false};
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);

    openField(board, row, column);

    const lost = hasExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Você perdeu :(');
    }

    if (won) {
      Alert.alert('Você venceu :)');
    }

    this.setState({board, lost, won});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
