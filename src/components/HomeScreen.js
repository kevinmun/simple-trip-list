/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import TripFlatList from './TripFlatList';


export default class App extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TripFlatList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
