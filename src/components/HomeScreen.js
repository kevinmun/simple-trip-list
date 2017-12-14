/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import TripFlatList from './TripFlatList';


type Props = {
  data: any,
  fetchTrips: any,
};

export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'Home',
    headerRight: (
      <TouchableOpacity>
        <Text>Add</Text>
      </TouchableOpacity>
    ),
  };

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <View style={styles.container}>
        <TripFlatList data={this.props.data} />
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
