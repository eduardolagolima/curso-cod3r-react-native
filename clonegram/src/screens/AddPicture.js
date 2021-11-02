import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';

class AddPicture extends Component {
  state = {
    comment: '',
    image: null,
  };

  pickImage = () => {
    launchImageLibrary(
      {
        maxHeight: 600,
        maxWidth: 800,
      },
      response => {
        if (!response.didCancel) {
          const {uri} = response.assets[0];
          this.setState({image: {uri: uri}});
        }
      },
    );
  };

  save = async () => {
    Alert.alert('Imagem adicionada!', this.state.comment);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
            <Text style={styles.buttomText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
          />
          <TouchableOpacity onPress={this.save} style={styles.buttom}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: '#4286f4',
    marginTop: 30,
    padding: 10,
  },
  buttomText: {
    color: '#FFF',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
    width: '100%',
  },
  imageContainer: {
    backgroundColor: '#eee',
    height: Dimensions.get('window').width / 2,
    marginTop: 10,
    width: '90%',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default AddPicture;
