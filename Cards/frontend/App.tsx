/* eslint-disable react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import Navigation from './src/Navigation/Navigation';

const App = () => (
  <Provider store={configureStore()}>

    <Navigation />

  </Provider>
);

export default App;
