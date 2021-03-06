import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import {
  FlatList,
} from 'react-native';
import TripListItem from './TripListItem';

export default class TripFlatList extends PureComponent {
  static propTypes = {
    data: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    data: [],
  };

  _keyExtrator = item => item.id;

  _renderItem = ({ item }) => (
    <TripListItem
      data={item}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtrator}
        renderItem={this._renderItem}
      />
    );
  }
}
