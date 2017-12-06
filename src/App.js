import React from 'react';
import {
  TabNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from '../src/components/HomeScreen';
import ProfileScreen from '../src/components/ProfileScreen';
import store from './Store';

const Navigator = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
