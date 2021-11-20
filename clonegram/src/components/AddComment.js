import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

import {addComment} from '../store/actions/post';

class AddComment extends Component {
  state = {
    comment: '',
    editMode: false,
  };

  handleAddComment = () => {
    this.props.onAddComment({
      comment: {
        comment: this.state.comment,
        nickname: this.props.name,
      },
      postId: this.props.postId,
    });

    this.setState({comment: '', editMode: false});
  };

  render() {
    let commentArea = null;

    if (this.state.editMode) {
      commentArea = (
        <View style={styles.commentArea}>
          <TextInput
            placeholder="Pode comentar..."
            style={styles.input}
            autoFocus={true}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            onSubmitEditing={this.handleAddComment}
          />
          <TouchableWithoutFeedback
            onPress={() => this.setState({editMode: false})}>
            <Icon name="times" size={15} color="#555" />
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      commentArea = (
        <TouchableWithoutFeedback
          onPress={() => this.setState({editMode: true})}>
          <View style={styles.commentArea}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}>Adicione um comentário...</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }

    return <View style={styles.container}>{commentArea}</View>;
  }
}

const styles = StyleSheet.create({
  caption: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 10,
  },
  commentArea: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  container: {
    flex: 1,
  },
  input: {
    width: '90%',
  },
});

const mapStateToProps = ({usersReducer}) => {
  return {
    name: usersReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
