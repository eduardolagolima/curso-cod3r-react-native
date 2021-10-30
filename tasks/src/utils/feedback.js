import {Alert} from 'react-native';

const showError = error => {
  Alert.alert('Ops! Ocorreu um problema!', error.response?.data ?? error);
};

const showSuccess = message => {
  Alert.alert('Sucesso!', message);
};

export {showError, showSuccess};
