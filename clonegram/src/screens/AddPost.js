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
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';

import {addPost} from '../store/actions/post';

const initialState = {
  comment: '',
  image: null,
};

class AddPost extends Component {
  state = {
    ...initialState,
  };

  clearState = () => this.setState({...initialState});

  componentDidUpdate = prevProps => {
    if (prevProps.loading && !this.props.loading) {
      this.clearState();
      this.props.navigation.navigate('Feed');
    }
  };

  pickImage = () => {
    launchImageLibrary({maxHeight: 600, maxWidth: 800}, response => {
      if (!response.didCancel) {
        const {uri} = response.assets[0];
        this.setState({image: {uri: uri}});
      }
    });
  };

  save = async () => {
    this.props.onAddPost({
      comments: [
        {
          comment: this.state.comment,
          nickname: this.props.name,
        },
      ],
      email: this.props.email,
      id: Math.random(),
      image: this.state.image,
      nickname: this.props.name,
    });
  };

  render() {
    if (!this.props.name) {
      return (
        <View style={styles.guestContainer}>
          <Text style={styles.guestText}>
            Você precisa estar logado para adicionar um novo post!
          </Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
          />
          <TouchableOpacity
            onPress={this.save}
            style={[
              styles.button,
              this.props.loading ? styles.buttonDisabled : null,
            ]}
            disabled={this.props.loading}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4286f4',
    marginTop: 30,
    padding: 10,
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  guestContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  guestText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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

const mapStateToProps = ({user, posts}) => {
  return {
    email: user.email,
    loading: posts.isUploading,
    name: user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
