import React from 'react';

import TextCenter from '../components/TextCenter';

export default props => {
  const number = props.route.params.number;
  return <TextCenter backgroundColor="green">Tela C - {number}</TextCenter>;
};
