import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenA from '../../views/ScreenA';
import ScreenB from '../../views/ScreenB';
import ScreenC from '../../views/ScreenC';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator initialRouteName="TelaB">
      <Drawer.Screen
        name="TelaA"
        component={ScreenA}
        options={{title: 'Tela A'}}
      />
      <Drawer.Screen
        name="TelaB"
        component={ScreenB}
        options={{title: 'Tela B'}}
      />
      <Drawer.Screen
        name="TelaC"
        component={ScreenC}
        options={{title: 'Tela C'}}
      />
    </Drawer.Navigator>
  );
};
