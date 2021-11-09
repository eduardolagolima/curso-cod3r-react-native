import React from 'react';

import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';

import {name as appName} from './app.json';
import Navigator from './src/routes/Navigator';
import {store} from './src/store/config';

const Redux = () => (
  <Provider store={store()}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
