import React from 'react';

import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';

import {name as appName} from './app.json';
import Navigator from './src/routes/Navigator';
import storeConfig from './src/store/storeConfig';

const Redux = () => (
  <Provider store={storeConfig()}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
