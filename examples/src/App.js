import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import FirstExample from './components/FirstExample';
// import Component, {Component1, Component2} from './components/Multiples';
// import MinMax from './components/MinMax';
// import Random from './components/Random';
// import Fragment from './components/Fragment';
// import Button from './components/Button';
// import Counter from './components/Counter';
// import Father from './components/direct-communication/Father';
// import Father from './components/indirect-communication/Father';
// import Counter from './components/counter/Counter';
// import Platform from './components/Platform';
import ConditionalRendering from './components/ConditionalRendering';

export default () => (
  <SafeAreaView style={style.App}>
    {/* <FirstExample /> */}
    {/* <Component /> */}
    {/* <Component1 /> */}
    {/* <Component2 /> */}
    {/* <MinMax max={6} min={3} /> */}
    {/* <Random min={1} max={60} /> */}
    {/* <Fragment title="Título" subtitle="Subtítulo" /> */}
    {/* <Button /> */}
    {/* <Counter initial={100} range={5} /> */}
    {/* <Father name="Roberto" /> */}
    {/* <Father /> */}
    {/* <Counter /> */}
    {/* <Platform /> */}
    <ConditionalRendering number={5} />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
