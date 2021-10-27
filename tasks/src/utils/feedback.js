import {Alert} from 'react-native';

const showError = error => {
  if (error.response && error.response.data) {
    Alert.alert(
      'Ops! Ocorreu um Problema!',
      `Mensagem: ${error.response.data}`,
    );
  } else {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${error}`);
  }
};

const showSuccess = message => {
  Alert.alert('Sucesso!', message);
};

export {showError, showSuccess};
