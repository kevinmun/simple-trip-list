import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import ConnectedNavigator from './navigator/Navigator';

const App = () => (
  <Provider store={store}>
    <ConnectedNavigator />
  </Provider>
);

export default App;
